"use client";
import { useState } from "react";
import { Building2, Users } from "lucide-react"; // icons
import ListTable from "../../components/common/ListTable";
import { activeMembers, fullCommitteeMembers, unionCommitteeMembers } from "../../data/sampleData";
import HeroSection from "../../components/common/HeroSection";
const committeeColumns = [
  { key: 'id', label: 'ক্রমিক নং' },
  { key: 'position', label: 'পদবি' },
  { key: 'name', label: 'দায়িত্বশীলের নাম' },
];
const unionCommitteeColumns = [
  { key: 'id', label: 'ক্রমিক নং' },
  { key: 'position', label: 'ইউনিয়নের নাম' },
  { key: 'name', label: 'সভাপতি' },
];
const tabs = [
  {
    id: "Upazila-Committee", label: "উপজেলা কমিটি", icon: <Users size={20} />,
    content: (
      <>
        <ListTable columns={committeeColumns} datas={fullCommitteeMembers} title="কার্যকরী পরিষদ: ২০২৫/২০২৬" />
        <div className='mt-8'>
          <ListTable columns={committeeColumns} datas={activeMembers} title="কার্যকরী সদস্যবৃন্দ" />
        </div>
      </>
    )
  },
  {
    id: "Union-Committee", label: "ইউনিয়ন কমিটি", icon: <Building2 size={20} />, content: (
      <>
        <ListTable columns={unionCommitteeColumns} datas={unionCommitteeMembers} title="ইউনিয়ন কমিটি: ২০২৫/২০২৬" />
      </>
    )
  },
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      {/* Hero Section */}
      <HeroSection title='উপজেলা ও ইউনিয়ন কমিটি' />

      <div className="section-container">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-white border rounded-xl shadow-sm overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 text-base transition-all ${activeTab === tab.id
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white shadow rounded-2xl p-2 md:p-4 lg:p-6 prose max-w-none">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </>

  );
}
