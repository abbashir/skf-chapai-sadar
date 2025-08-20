'use client'

import Link from 'next/link'
import { useEffect } from 'react'
interface ErrorProps {
  error: Error
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  // Optional: log error to console or reporting service
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      {/* Error Content */}
      <div className="section-container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">Oops!</h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।
          </p>

          {/* Retry button */}
          <button
            onClick={() => reset()}
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-200 mb-4"
          >
            পুনরায় চেষ্টা করুন
          </button>

          {/* Go Home */}
          <Link
            href="/"
            className="inline-block text-green-600 hover:underline ml-4"
          >
            হোমে ফিরুন
          </Link>
        </div>
      </div>
    </>
  )
}
