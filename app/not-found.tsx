import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      {/* 404 Content */}
      <div className="section-container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            দুঃখিত! পৃষ্ঠা পাওয়া যায়নি
          </p>
          <Link
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            হোমে ফিরুন
          </Link>
        </div>
      </div>
    </>
  )
}
