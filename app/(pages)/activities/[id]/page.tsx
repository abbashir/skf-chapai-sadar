import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react'
import HeroSection from '../../../components/common/HeroSection'
import { activities } from '../../../data/sampleData'

interface ActivityDetailPageProps {
  params: {
    id: string
  }
}

export default async function ActivityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const activity = activities.find(a => a.id === id)

  if (!activity) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection title='About Us' />

      {/* Page Section */}
      <div className="section-container">
        <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {activity.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{activity.title}</h1>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/#activities"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            কার্যক্রমে ফিরে যান
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {activity.description}
            </p>

            {/* Activity Details */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">কার্যক্রমের বিস্তারিত</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium">সময়কাল</p>
                    <p className="text-sm text-gray-600">সারা বছর</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium">এলাকা</p>
                    <p className="text-sm text-gray-600">সারাদেশ</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium">উপকারভোগী</p>
                    <p className="text-sm text-gray-600">১০,০০০+ মানুষ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Extended Description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">আমাদের পদ্ধতি</h3>
              <p className="text-gray-700 leading-relaxed">
                আমাদের {activity.title} একটি সুসংগঠিত এবং পরিকল্পিত কার্যক্রম যা সমাজের বিভিন্ন স্তরের মানুষের কাছে পৌঁছানোর জন্য ডিজাইন করা হয়েছে। আমরা স্থানীয় সম্প্রদায়ের সাথে ঘনিষ্ঠভাবে কাজ করি এবং তাদের প্রয়োজন অনুযায়ী আমাদের সেবা প্রদান করি।
              </p>

              <h3 className="text-2xl font-bold text-gray-900">প্রভাব ও ফলাফল</h3>
              <p className="text-gray-700 leading-relaxed">
                এই কার্যক্রমের মাধ্যমে আমরা হাজার হাজার মানুষের জীবনে ইতিবাচক পরিবর্তন আনতে সক্ষম হয়েছি। আমাদের নিয়মিত মূল্যায়ন এবং ফলো-আপ নিশ্চিত করে যে আমাদের সেবা কার্যকর এবং টেকসই।
              </p>

              <h3 className="text-2xl font-bold text-gray-900">কীভাবে অংশগ্রহণ করবেন</h3>
              <p className="text-gray-700 leading-relaxed">
                আপনিও এই মহৎ কাজে অংশগ্রহণ করতে পারেন। স্বেচ্ছাসেবক হিসেবে কাজ করুন, দান করুন অথবা আমাদের কার্যক্রম সম্পর্কে অন্যদের জানান। প্রতিটি ছোট অবদানই একটি বড় পরিবর্তনের সূচনা করতে পারে।
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-green-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">আমাদের সাথে যোগ দিন</h3>
              <p className="text-gray-700 mb-4">
                এই কার্যক্রমে অংশগ্রহণ করতে বা আরও তথ্য জানতে আমাদের সাথে যোগাযোগ করুন।
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                >
                  যোগাযোগ করুন
                </Link>
                <Link
                  href="/#donate"
                  className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                >
                  দান করুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  )
}