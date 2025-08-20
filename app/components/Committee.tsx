'use client'

import React from 'react'
import Image from 'next/image'
import { Facebook } from 'lucide-react'
import { CommitteeMember } from '../types'
import { colors } from '../config/theme'

interface CommitteeProps {
  members: CommitteeMember[]
}

const Committee: React.FC<CommitteeProps> = ({ members }) => {

  return (
    <section id="committee" className="py-6 md:py-8 lg:py-16 bg-gray-50">
      <div className="home-section-container">
        <div className="home-section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            কমিটি সদস্যবৃন্দ
          </h2>
          <div className={`w-20 h-1 ${colors.primary} mx-auto mb-6`}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমাদের নিবেদিতপ্রাণ কমিটি সদস্যরা যারা সংস্থার লক্ষ্য অর্জনে প্রতিদিন কাজ করে যাচ্ছেন।
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {members
          .filter((_, index) => index !== 0 && index !== 3)
          .map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <a
                    href={member.facebookUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                  {member.name}
                </h3>
                <p className={`text-xs sm:text-sm ${colors.primary.replace('bg-', 'text-')} font-medium`}>
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Committee