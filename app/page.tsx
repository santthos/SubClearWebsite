'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Navigation from './components/Navigation'
import Image from 'next/image'

export default function Home() {
  const [showMain, setShowMain] = useState(false)
  const [transitioning, setTransitioning] = useState(false)
  const [visibleSection, setVisibleSection] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Prevent scrolling when splash is visible
  useEffect(() => {
    if (!showMain) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMain]);

  // Set up intersection observer for section animations
  useEffect(() => {
    if (showMain) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSection(entry.target.id);
              const content = entry.target.querySelector('.section-content');
              if (content) content.classList.add('visible');
            } else {
              const content = entry.target.querySelector('.section-content');
              if (content) content.classList.remove('visible');
            }
          });
        },
        { threshold: 0.3 }
      );

      document.querySelectorAll('section').forEach((section) => {
        observerRef.current?.observe(section);
      });
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [showMain]);

  // Handles the splash-to-main transition
  const handleFindOutMore = () => {
    setTransitioning(true)
    setTimeout(() => setShowMain(true), 700)
  }

  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      {/* Splash Screen */}
      {!showMain && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F6F8FA] transition-opacity duration-700 ${transitioning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ transform: 'scale(1)' }}
        >
          <div className="flex items-center justify-center mb-10 w-[180px] h-[28px] sm:w-[320px] sm:h-[48px] md:w-[480px] md:h-[72px]">
            <Image src="/SubclearLogo.svg" alt="SubClear Logo" width={480} height={72} priority className="w-full h-auto" />
          </div>
          <p className="text-lg sm:text-2xl md:text-3xl mb-12 text-primary-700 font-light font-sans text-center px-4">
            Clearing the air beneath our cities.
          </p>
          <button
            className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 shadow-md w-full max-w-xs sm:max-w-md"
            onClick={handleFindOutMore}
            style={{ minWidth: 120 }}
          >
            Find out more
            <ArrowRightIcon className="w-6 h-6 sm:w-7 sm:h-7 inline-block ml-3" />
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-opacity duration-700 ${showMain ? 'opacity-100' : 'opacity-0 pointer-events-none'} scroll-snap-container`}>
        <Navigation />
        {/* Concept Section */}
        <section id="concept" className="full-page-section">
          <div className="container-custom section-content">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 md:mb-20 font-sans">The Concept</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-xl md:text-2xl mb-8 leading-relaxed text-gray-700 font-sans px-2 sm:px-0">
                SubClear is a clean-tech startup developing a track-mounted air filtration system designed specifically for underground rail networks. The system attaches to existing engineering trains and is passively towed through the tunnels, cleaning polluted air directly at track level — where air pollution is densest and most toxic.
              </p>
            </div>
          </div>
        </section>
        {/* Problem Section */}
        <section id="problem" className="full-page-section">
          <div className="container-custom section-content">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 md:mb-20 font-sans">The Problem</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-xl md:text-2xl mb-8 leading-relaxed text-gray-700 font-sans px-2 sm:px-0">
                Air pollution in subway systems is dangerously high — in some areas, particulate matter (especially PM2.5 and metallic dust) exceeds above-ground limits by 10x or more. These pollutants come primarily from:
              </p>
              <ul className="list-disc list-inside text-base sm:text-xl md:text-2xl space-y-4 mb-12 text-gray-700 font-sans px-2 sm:px-0">
                <li>Brake and wheel wear</li>
                <li>Track friction</li>
                <li>Poor tunnel ventilation</li>
                <li>Accumulated historic dust</li>
              </ul>
              <p className="text-base sm:text-xl md:text-2xl leading-relaxed text-gray-700 font-sans px-2 sm:px-0">
                Prolonged exposure poses serious health risks to commuters, staff, and maintenance crews.
              </p>
            </div>
          </div>
        </section>
        {/* Solution Section */}
        <section id="solution" className="full-page-section">
          <div className="container-custom section-content">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 md:mb-20 font-sans">The Solution</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-xl md:text-2xl mb-8 leading-relaxed text-gray-700 font-sans px-2 sm:px-0">
                SubClear introduces a modular, retrofittable filtration system that's mounted on the chassis of engineering trains or dedicated rolling stock. As the train moves through the tunnels during non-passenger hours, the system sucks in contaminated air, filters it, and discharges cleaned air back into the tunnel environment.
              </p>
            </div>
          </div>
        </section>
        {/* Components Section */}
        <section id="components" className="full-page-section">
          <div className="container-custom section-content">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 md:mb-20 font-sans">Core System Components</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {components.map((component, index) => (
                  <div key={index} className="card group p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-primary-900 group-hover:text-secondary-700 transition-colors duration-200 font-sans">
                      {component.module}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 font-sans">{component.function}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="full-page-section">
          <div className="container-custom section-content">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 font-sans">Contact Us</h2>
            <p className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-700 font-sans text-center px-2 sm:px-0">
              Ready to enhance the air quality in your underground rail network?
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:Team@SubClear.co.uk"
                className="btn-primary inline-block text-base sm:text-xl md:text-2xl px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 shadow-xl"
              >
                Team@SubClear.co.uk
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const components = [
  {
    module: "Air Intake & Suction System",
    function: "Captures tunnel air at high flow rate"
  },
  {
    module: "Electrostatic Precipitator (ESP)",
    function: "Ionises and traps ultrafine dust"
  },
  {
    module: "Magnetic Particle Collection",
    function: "Extracts metallic particles using embedded magnets"
  },
  {
    module: "HEPA Filtration Unit",
    function: "Removes residual PM2.5 and PM10 particles"
  },
  {
    module: "Power Supply Unit",
    function: "Battery, onboard generator, or regenerative power"
  },
  {
    module: "Control System",
    function: "Embedded PLC to monitor flow rates, filter condition, and diagnostics"
  },
  {
    module: "Modular Chassis",
    function: "Designed to integrate with existing underground rail rolling stock and loading gauges"
  }
]