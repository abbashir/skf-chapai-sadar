'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { GalleryImage } from '../types'
import Link from 'next/link'
import { colors } from '../config/theme'

interface GalleryProps {
  images: GalleryImage[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // শুধু Featured images filter করা
  const featuredImages = images.filter((img) => img.isFeatured)

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (prev) => (prev! - 1 + featuredImages.length) % featuredImages.length
      )
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % featuredImages.length)
    }
  }

  return (
    <section id="gallery" className="py-6 md:py-8 lg:py-16 bg-white">
      <div className="home-section-container">
        <div className="home-section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ছবির গ্যালারি
          </h2>
          <div className={`w-20 h-1 ${colors.primary} mx-auto mb-6`}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমাদের বিভিন্ন কার্যক্রম এবং অনুষ্ঠানের স্মৃতিময় মুহূর্তসমূহ।
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Hover Overlay with Preview Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <Eye className="text-white" size={36} />
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-10 text-center">
          <Link href="/image-gallery">
            <button
              className={`px-6 py-3 rounded-full text-white font-semibold shadow-md transition ${colors.primary} hover:opacity-90`}
            >
              আরও দেখুন
            </button>
          </Link>
        </div>
      </div>

      {/* Modal Preview */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Prev button */}
          <button
            className="absolute left-4 text-white p-3 bg-black/50 rounded-full hover:bg-black"
            onClick={handlePrev}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div className="max-w-4xl w-full text-center">
            <Image
              src={featuredImages[selectedIndex].src}
              alt={featuredImages[selectedIndex].alt}
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {featuredImages[selectedIndex].caption}
            </p>
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 text-white p-3 bg-black/50 rounded-full hover:bg-black"
            onClick={handleNext}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery