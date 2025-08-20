'use client'

import React from 'react'
import Image from 'next/image'
import HeroSection from '../../components/common/HeroSection'
import { colors } from '../../config/theme'

interface tradeUnionItem {
  id: string
  image: string
  regNo: string
  unionName: string
  president: string
  secretary: string
  address: string
}

interface TradeUnionProps {
  activities: tradeUnionItem[]
}

const sampleUnions = [
  {
    id: "1",
    image: "/images/union/rixa.png",
    regNo: "৩৩৯১",
    unionName: "চাঁপাইনবাবগঞ্জ সদর উপজেলা রিক্সা ও ভ্যান শ্রমিক ইউনিয়ন।",
    president: "তৌহিদুল",
    secretary: "ইব্রাহিম",
    address: "গোয়ালবাড়ী, বারঘরিয়া, চাঁপাইনবাবগঞ্জ সদর, চাঁপাইনবাবগঞ্জ।",
  },
  {
    id: "2",
    image: "/images/union/rixa.png",
    regNo: "৩২৩৪",
    unionName: "চাঁপাইনবাবগঞ্জ সদর উপজেলা রিক্সা ও ভ্যান শ্রমিক ইউনিয়ন।",
    president: "মো: সিরাজুল ইসলাম",
    secretary: "মো: আব্দুল মজিদ",
    address: "চরঅনুপনগর, বাসুদেবপুর, চাঁপাইনবাবগঞ্জ সদর, চাঁপাইনবাবগঞ্জ।",
  },
  {
    id: "3",
    image: "/images/union/building.avif",
    regNo: "৩৩৯০",
    unionName: "চাঁপাইনবাবগঞ্জ সদর উপজেলা ইমারত নির্মান শ্রমিক ইউনিয়ন।",
    president: "মো: বাকী বিল্লাহ",
    secretary: "মো: জহুরুল ইসলাম বুধু",
    address: "রামজীবনপুর, বালিয়াডাঙ্গা, চাঁপাইনবাবগঞ্জ সদর, চাঁপাইনবাবগঞ্জ।",
  },
  {
    id: "4",
    image: "/images/union/building.avif",
    regNo: "৩২৩০",
    unionName: "চাঁপাইনবাবগঞ্জ সদর উপজেলা নির্মান শ্রমিক ইউনিয়ন।",
    president: "মো: আব্দুল মমিন",
    secretary: "সামিউল ইসলাম",
    address: "ঝিলিম বাজার, আমনুরা, চাঁপাইনবাবগঞ্জ সদর, চাঁপাইনবাবগঞ্জ।",
  },
  {
    id: "5",
    image: "/images/union/furniture.avif",
    regNo: "৩৩২১",
    unionName: "চাঁপাইনবাবগঞ্জ সদর উপজেলা ফার্নিচার শ্রমিক ইউনিয়ন।",
    president: "মো: আব্দুস সামাদ",
    secretary: "মো: আব্দুর রহমান",
    address: "রামচন্দ্রপুরহাট, রামচন্দ্রপুর, চাঁপাইনবাবগঞ্জ সদর, চাঁপাইনবাবগঞ্জ।",
  },
  {
    id: "6",
    image: "/images/union/furniture1.jpg",
    regNo: "৩২৪৪",
    unionName: "চাঁপাইনবাবগঞ্জ সদর উপজেলা ফার্নিচার শ্রমিক ইউনিয়ন।",
    president: "মো: ইউসুফ আলী",
    secretary: "মো: মতিউর রহমান",
    address: "মহিপুর মোড়, মহিপুর, চাঁপাইনবাবগঞ্জ সদর, চাঁপাইনবাবগঞ্জ।",
  },
  {
    id: "7",
    image: "/images/union/still.jpg",
    regNo: "৩২৬১",
    unionName: "চাঁপাইনবাবগঞ্জ সদর উপজেলা ষ্টীল এন্ড ইঞ্জিনিয়ারিং ওয়ার্কশপ শ্রমিক ইউনিয়ন।",
    president: "মো: আব্দুস সামাদ",
    secretary: "মো: আব্দুল হাকিম",
    address: "নয়াগোলা, নয়াগোলা, চাঁপাইনবাবগঞ্জ সদর, চাঁপাইনবাবগঞ্জ।",
  },
  {
    id: "8",
    image: "/images/union/agriculture.jpeg",
    regNo: "৩৩৩১",
    unionName: "চাঁপাইনবাবগঞ্জ সদর উপজেলা কৃষি খামার শ্রমিক ইউনিয়ন।",
    president: "মোহা: মনিমুল হক",
    secretary: "সানাউল্লাহ",
    address: "প্রফেসার পাড়া, চাঁপাইনবাবগঞ্জ সদর, চাঁপাইনবাবগঞ্জ।",
  },
  {
    id: "9",
    image: "/images/union/tailor.avif",
    regNo: "৩৪২৪",
    unionName: "চাঁপাইনবাবগঞ্জ সদর উপজেলা দর্জি শ্রমিক ইউনিয়ন।",
    president: "মো: রেজাউল করিম",
    secretary: "মো: মনিরুল ইসলাম",
    address: "বালিয়াডাঙ্গা, চাঁপাইনবাবগঞ্জ সদর, চাঁপাইনবাবগঞ্জ।",
  },
];

const TradeUnion = () => {

  return (
    <>
      {/* Hero Section */}
      <HeroSection title='ট্রেড ইউনিয়নের তালিকা' />

      <div className="section-container">
        <div className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          ট্রেড ইউনিয়নের তালিকা নিবন্ধন, সভাপতি, সেক্রেটারি এবং অফিসের ঠিকানা।
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleUnions.map((union) => (
            <div
              key={union.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border"
            >
              {/* Image */}
              <div className="relative h-[15rem]">
                <Image
                  src={union.image}
                  alt={union.unionName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-5 space-y-3">
                <div className={`inline-block ${colors.primaryLight} ${colors.primary.replace('bg-', 'text-')} px-3 py-1 rounded-full text-sm font-medium mb-3`}>
                  রেজিঃ নং {union.regNo}
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  {union.unionName}
                </h3>

                <div className="text-gray-700">
                  <p><span className="font-medium">সভাপতি:</span> {union.president}</p>
                  <p><span className="font-medium">সেক্রেটারি:</span> {union.secretary}</p>
                </div>

                <p className="text-gray-600 text-sm">
                  <span className="font-medium">অফিস ঠিকানা:</span> {union.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TradeUnion
