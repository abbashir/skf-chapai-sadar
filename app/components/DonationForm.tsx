'use client'

import React, { useState } from 'react'
import { Heart, CreditCard, Smartphone, Building } from 'lucide-react'
import { colors } from '../config/theme'

const DonationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    paymentMethod: 'card',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Donation form submitted:', formData)
    alert('ধন্যবাদ! আপনার দানের জন্য আমরা কৃতজ্ঞ।')
  }

  const predefinedAmounts = [500, 1000, 2000, 5000]

  return (
    <section id="donate" className="py-6 md:py-8 lg:py-16 bg-gray-50">
      <div className="home-section-container">
        <div className="home-section-title">
          <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.primary} rounded-full mb-4`}>
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আপনার অনুদান প্রদান করুন
          </h2>
          <div className={`w-20 h-1 ${colors.primary} mx-auto mb-6`}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আপনার দান আমাদের সাহায্য করবে আরও বেশি মানুষের পাশে দাঁড়াতে। প্রতিটি টাকা মানুষের কল্যাণে ব্যয় হবে।
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  পূর্ণ নাম *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="আপনার নাম লিখুন"
                />
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                দানের পরিমাণ (টাকা) *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setFormData({ ...formData, amount: amount.toString() })}
                    className={`py-3 px-4 rounded-lg border-2 transition-colors ${
                      formData.amount === amount.toString()
                        ? `${colors.primary} text-white border-transparent`
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    ৳{amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                name="amount"
                required
                value={formData.amount}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="অন্য পরিমাণ লিখুন"
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                পেমেন্ট পদ্ধতি *
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { value: 'card', label: 'ক্রেডিট/ডেবিট কার্ড', icon: CreditCard },
                  { value: 'mobile', label: 'মোবাইল ব্যাংকিং', icon: Smartphone },
                  { value: 'bank', label: 'ব্যাংক ট্রান্সফার', icon: Building },
                ].map(({ value, label, icon: Icon }) => (
                  <label key={value} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={value}
                      checked={formData.paymentMethod === value}
                      onChange={handleChange}
                      className="mr-3 text-green-600"
                    />
                    <Icon className="h-5 w-5 mr-2 text-gray-500" />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                বার্তা (ঐচ্ছিক)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="আপনার কোন বার্তা থাকলে লিখুন"
              />
            </div>

            <button
              type="submit"
              className={`w-full ${colors.primary} ${colors.primaryHover} text-white py-4 px-6 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center`}
            >
              <Heart className="h-5 w-5 mr-2" />
              ৳{formData.amount || '0'} অনুদান প্রদান
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default DonationForm