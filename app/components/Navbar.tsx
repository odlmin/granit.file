// app/components/Navbar.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"  // Путь к логотипу
                alt="Logo"
                width={150}               // Ширина логотипа
                height={50}              // Высота логотипа
              />
            </Link>
          </div>

          {/* Десктопная навигация */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <Link href="/contact" className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Мобильное меню кнопка */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
              About Us
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
