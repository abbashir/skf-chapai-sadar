'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function LocationMap() {
  const [showMap, setShowMap] = useState(false)

  // Replace with your coordinates
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.762632819101!2d88.2696426!3d24.5973868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbb6c61c38fc69%3A0xa3230cacd90bdcef!2sChapai%20Nawabganj%20Municipality!5e0!3m2!1sen!2sbd!4v1755512776627!5m2!1sen!2sbd'

  return (
    <div className="mt-8">

      <h3 className="font-semibold text-gray-900 mb-4">আমাদের অবস্থান</h3>
      <div className="rounded-lg overflow-hidden relative h-64 md:h-80">
        {showMap ? (
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <button
            onClick={() => setShowMap(true)}
            className="w-full h-full bg-gray-200 flex items-center justify-center"
          >
            {/* Static Image Fallback */}
            <Image
              src={'/map-img.png'} // Replace with your static map image path
              alt="Map preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-medium">
              📍 মানচিত্র দেখতে ক্লিক করুন
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
