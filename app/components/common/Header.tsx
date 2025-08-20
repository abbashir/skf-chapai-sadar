'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname() || '/'

  const navigationItems = [
    { label: 'হোম', href: '/' },
    { label: 'আমাদের সম্পর্কে', href: '/about' },
    { label: 'কমিটি', href: '/committee' },
    { label: 'ট্রেড ইউনিয়ন', href: '/trade-union' },
    { label: 'কার্যক্রম', href: '/#activities' },
    { label: 'গ্যালারি', href: '/image-gallery' },
    { label: 'যোগাযোগ', href: '/contact' },
    { label: 'আমাদের সাথে যোগ দিন', href: '/join-with-us' },
  ]

  // helper fn
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`bg-white text-black shadow-md border-b border-gray-200 sticky top-0 z-40 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo@2x.png"
              alt="বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন লোগো"
              width={40}
              height={40}
              className="rounded-full mr-3"
              priority
            />
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold">
                বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন
              </h1>
              <p className="text-sm opacity-90">চাঁপাইনবাবগঞ্জ সদর উপজেলা</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 font-semibold ${isActive(item.href)
                    ? 'border-b-2 border-green-600 pb-1 text-green-600'
                    : 'text-gray-900 hover:text-green-600'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'
            }`}
        >
          <nav className="flex flex-col space-y-2 pb-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 py-2 font-medium ${isActive(item.href) ? 'text-green-600' : 'hover:text-gray-200'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header