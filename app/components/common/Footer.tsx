'use client'

import React from 'react'
import Link from 'next/link'
import { FileText, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="bg-white text-gray-800 border-t border-gray-200">
        <div className="home-section-container py-6 md:py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div>
              <div className="mb-4">
                {/* <div className='flex items-center text-center justify-center mb-4'>
                  <img
                  src="/logo@2x.png"
                  alt="লোগো"
                  className="h-10 w-10 rounded-full mr-3"
                />
                </div> */}
                <h3 className="text-lg font-bold text-gray-900">
                  বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন,
                </h3>
                <div>চাঁপাইনবাবগঞ্জ সদর উপজেলা।</div>
              </div>
              <p className="flex items-center text-sm text-gray-600 my-2">
                <FileText className="w-4 h-4 mr-2 text-gray-500" />
                নিবন্ধন নং: বাজাফে-০৮
              </p>
              <p className="text-gray-600 mb-4">
                শ্রমজীবী মানুষের অধিকার প্রতিষ্ঠায় ইসলামী শ্রমনীতির বাস্তবায়ন অনিবার্য।
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">দ্রুত লিঙ্ক</h4>
              <ul className="space-y-2">
                {[
                  { label: 'আমাদের সম্পর্কে', href: '/about' },
                  { label: 'কমিটি', href: '/committee' },
                  { label: 'ট্রেড ইউনিয়ন', href: '/trade-union' },
                  { label: 'গ্যালারি', href: '/image-gallery' },
                  { label: 'যোগাযোগ', href: '/contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">যোগাযোগ</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-green-600" />
                  <p className="text-gray-600">
                    বড় ইন্দারা মোড়, চাঁপাইনবাবগঞ্জ, ৬৩০০<br />
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-green-600" />
                  <p className="text-gray-600">+৮৮ ০১৭ ১২৩৪ ৫৬১৮</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-green-600" />
                  <p className="text-gray-600">info@bdwelfare.org</p>
                </div>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">আমাদের কর্মসূচি</h4>
              <ul className="space-y-2">
                {[
                  'শিক্ষা সহায়তা',
                  'স্বাস্থ্যসেবা',
                  'দুর্যোগ ব্যবস্থাপনা',
                  'মহিলা উন্নয়ন',
                  'পরিবেশ সংরক্ষণ',
                ].map((program) => (
                  <li key={program}>
                    <span className="text-gray-600">{program}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f1f2f4] py-4 text-center">
        <p className="text-gray-700 text-sm">
          স্বত্ব © {new Date().getFullYear()} বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা - সর্ব স্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  )
}

export default Footer