"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import HeroSection from "../../components/common/HeroSection";
import { galleryImages } from "../../data/sampleData";

const tabs = [
  { id: "All", label: "All", icon: <ImageIcon size={20} /> },
  { id: "2025", label: "2025", icon: <ImageIcon size={20} /> },
  { id: "2024", label: "2024", icon: <ImageIcon size={20} /> },
  { id: "2023", label: "2023", icon: <ImageIcon size={20} /> },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages =
    activeTab === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.year === activeTab);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (prev) => (prev! - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % filteredImages.length);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection title="ইমেজ গ্যালারি" />

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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-56 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center rounded-xl">
                <Eye size={40} className="text-white mb-2" />
                <p className="text-white text-sm text-center px-2">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>


        {/* Modal Preview */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            <button
              className="absolute left-4 text-white p-3 bg-black/50 rounded-full hover:bg-black"
              onClick={handlePrev}
            >
              <ChevronLeft size={28} />
            </button>

            <div className="max-w-4xl w-full text-center">
              <Image
                src={filteredImages[selectedIndex].src}
                alt={filteredImages[selectedIndex].alt}
                width={800}
                height={600}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="text-white mt-4">
                {filteredImages[selectedIndex].caption}
              </p>
            </div>

            <button
              className="absolute right-4 text-white p-3 bg-black/50 rounded-full hover:bg-black"
              onClick={handleNext}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}