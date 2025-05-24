'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-xl border-b border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-28 py-4 gap-4 md:gap-0">
          <div className="flex items-center justify-center w-full md:w-auto">
            <Link href="/" className="flex items-center">
              <Image 
                src="/SubclearLogo.svg" 
                alt="SubClear Logo" 
                width={240} 
                height={36} 
                className="md:w-[480px] md:h-[72px] w-[180px] h-[28px]"
                priority 
              />
            </Link>
          </div>
          <div className="flex items-center justify-center w-full md:w-auto">
            <Link href="mailto:Team@SubClear.co.uk" className="btn-primary text-base md:text-lg px-6 md:px-10 py-4 md:py-5 shadow-md hover:shadow-xl transition-all duration-200 w-full md:w-auto text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 