'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Activity } from '../types'
import { colors } from '../config/theme'

interface ActivitiesProps {
  activities: Activity[]
}

const Activities: React.FC<ActivitiesProps> = ({ activities }) => {

  return (
    <section id="activities" className="py-6 md:py-8 lg:py-16 bg-white">
      <div className="home-section-container">
        <div className="home-section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আমাদের কার্যক্রম
          </h2>
          <div className={`w-20 h-1 ${colors.primary} mx-auto mb-6`}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            সমাজের বিভিন্ন ক্ষেত্রে আমাদের বহুমুখী কার্যক্রম যা মানুষের জীবনযাত্রার মান উন্নয়নে সহায়ক।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border"
            >
              <div className="relative h-48">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className={`inline-block ${colors.primaryLight} ${colors.primary.replace('bg-', 'text-')} px-3 py-1 rounded-full text-sm font-medium mb-3`}>
                  {activity.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {activity.description}
                </p>
                <Link
                  href={`/activities/${activity.id}`}
                  className={`inline-block ${colors.primary} ${colors.primaryHover} text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200`}
                >
                  বিস্তারিত
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities