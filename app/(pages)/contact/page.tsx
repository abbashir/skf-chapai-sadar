import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import HeroSection from '../../components/common/HeroSection'
import GoogleMap from '../../components/common/GoogleMap'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title='যোগাযোগ করুন' />

      {/* Page Section */}
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">আমাদের সাথে যোগাযোগ</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">ঠিকানা</h3>
                  <p className="text-gray-600">
                    বড় ইন্দারা মোড়, চাঁপাইনবাবগঞ্জ, ৬৩০০
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">ফোন</h3>
                  <p className="text-gray-600">+৮৮ ০১৭ ১২৩৪ ৫৬১৮</p>
                  <p className="text-gray-600">+৮৮ ০২ ৯৮৭৬ ৫৪৩২</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">ইমেইল</h3>
                  <p className="text-gray-600">info@bdwelfare.org</p>
                  <p className="text-gray-600">contact@bdwelfare.org</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">কার্যসময়</h3>
                  <p className="text-gray-600">রবিবার - বৃহস্পতিবার: ৯:০০ - ১৭:০০</p>
                  <p className="text-gray-600">শুক্রবার: ৯:০০ - ১২:০০</p>
                  <p className="text-gray-600">শনিবার: বন্ধ</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <GoogleMap />
            {/* <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">আমাদের অবস্থান</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">ম্যাপ এখানে থাকবে</p>
                </div>
              </div> */}
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">আমাদের বার্তা পাঠান</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      নাম *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="আপনার নাম"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      পদবি
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="আপনার পদবি"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    ইমেইল ঠিকানা *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    ফোন নম্বর
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="+৮৮ ০১৭ ১২৩৪ ৫৬৭৮"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    বিষয় *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="general">সাধারণ জিজ্ঞাসা</option>
                    <option value="volunteer">স্বেচ্ছাসেবক হতে চাই</option>
                    <option value="donation">দান সংক্রান্ত</option>
                    <option value="partnership">অংশীদারিত্ব</option>
                    <option value="complaint">অভিযোগ</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    বার্তা *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="আপনার বার্তা লিখুন..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  বার্তা পাঠান
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}