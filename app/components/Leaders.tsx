'use client'

import React from 'react'
import Image from 'next/image'
import { Leader } from '../types'
import { colors } from '../config/theme'

interface LeadersProps {
  leaders: Leader[]
}

const Leaders: React.FC<LeadersProps> = ({ leaders }) => {

  return (
    <section id="about" className="py-4 sm:py-6 md:py-8 lg:py-16 bg-gray-50">
      <div className="home-section-container">
        <div className="home-section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আমাদের নেতৃত্ব
          </h2>
          <div className={`w-20 h-1 ${colors.primary} mx-auto mb-6`}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমাদের অভিজ্ঞ এবং দক্ষ নেতৃত্বের দল সমাজের কল্যাণে নিরলসভাবে কাজ করে যাচ্ছেন।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={300}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className={`text-lg font-semibold mb-4 ${colors.primary.replace('bg-', 'text-')}`}>
                    {leader.title}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leaders