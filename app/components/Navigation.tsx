'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-xl border-b border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-36 py-6 md:py-8 gap-4 md:gap-0">
          <div className="flex items-center justify-center w-full md:w-auto">
            <Link href="/" className="flex items-center">
              <Image 
                src="/SubclearLogo.svg" 
                alt="SubClear Logo" 
                width={90} 
                height={28} 
                className="md:w-[216px] md:h-[67px] w-[108px] h-[34px]"
                priority 
              />
            </Link>
          </div>
          <div className="flex items-center justify-center w-full md:w-auto">
            <Link href="mailto:Team@SubClear.co.uk" className="btn-primary text-base md:text-lg px-8 md:px-12 py-5 md:py-6 shadow-md hover:shadow-xl transition-all duration-200 w-full md:w-auto text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 