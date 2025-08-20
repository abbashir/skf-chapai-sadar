import { CarouselSlide, Leader, Activity, CommitteeMember, GalleryImage, MemberListItem, UnionMemberListItem } from '../types'

export const carouselSlides: CarouselSlide[] = [
  {
    id: '1',
    image: '/images/banner/banner-1.jpg',
    title: 'সেবায় আমাদের অঙ্গীকার',
    subtitle: 'একসাথে গড়ি সুন্দর বাংলাদেশ',
    description: 'আমরা বিশ্বাস করি যে, একতাবদ্ধ প্রচেষ্টার মাধ্যমে আমরা একটি উন্নত ও সমৃদ্ধ বাংলাদেশ গড়ে তুলতে পারি।'
  },
  {
    id: '2',
    image: '/images/banner/banner-2.jpg',
    title: 'শিক্ষার আলো ছড়িয়ে দিন',
    subtitle: 'মানুষের মাঝে জ্ঞানের আলো',
    description: 'শিক্ষা হচ্ছে উন্নতির চাবিকাঠি। আমরা সকল স্তরের মানুষের জন্য শিক্ষার সুযোগ তৈরি করতে প্রতিশ্রুতিবদ্ধ।'
  },
  {
    id: '3',
    image: '/images/banner/banner-3.jpg',
    title: 'স্বাস্থ্যসেবায় আমাদের ভূমিকা',
    subtitle: 'সুস্বাস্থ্য সবার অধিকার',
    description: 'প্রতিটি মানুষের উন্নত স্বাস্থ্যসেবা পাওয়ার অধিকার রয়েছে। আমরা সেই লক্ষ্যে কাজ করে যাচ্ছি।'
  },
  {
    id: '4',
    image: '/images/banner/banner-4.jpg',
    title: 'স্বাস্থ্যসেবায় আমাদের ভূমিকা',
    subtitle: 'সুস্বাস্থ্য সবার অধিকার',
    description: 'প্রতিটি মানুষের উন্নত স্বাস্থ্যসেবা পাওয়ার অধিকার রয়েছে। আমরা সেই লক্ষ্যে কাজ করে যাচ্ছি।'
  },
  {
    id: '5',
    image: '/images/banner/banner-5.jpg',
    title: 'স্বাস্থ্যসেবায় আমাদের ভূমিকা',
    subtitle: 'সুস্বাস্থ্য সবার অধিকার',
    description: 'প্রতিটি মানুষের উন্নত স্বাস্থ্যসেবা পাওয়ার অধিকার রয়েছে। আমরা সেই লক্ষ্যে কাজ করে যাচ্ছি।'
  },
  {
    id: '6',
    image: '/images/banner/banner-6.jpg',
    title: 'স্বাস্থ্যসেবায় আমাদের ভূমিকা',
    subtitle: 'সুস্বাস্থ্য সবার অধিকার',
    description: 'প্রতিটি মানুষের উন্নত স্বাস্থ্যসেবা পাওয়ার অধিকার রয়েছে। আমরা সেই লক্ষ্যে কাজ করে যাচ্ছি।'
  }
]

export const leaders: Leader[] = [
  {
    id: '1',
    name: 'ফরহাদ আহমেদ সায়িম',
    title: 'সভাপতি',
    bio: 'তিনি একজন শিক্ষক ও সমাজসেবক। তিনি ১৫ বছরের বেশি সময় ধরে সমাজসেবায় নিয়োজিত রয়েছেন। শিক্ষা, দারিদ্র্য বিমোচন ও মানবিক সেবার মতো বিভিন্ন ক্ষেত্রে তাঁর অবদান সত্যিই অনন্য। তাঁর দক্ষ নেতৃত্বে আমাদের সংস্থা অনেক সফলতার সাথে বিভিন্ন কল্যাণমূলক কার্যক্রম পরিচালনা করে আসছে।',
    image: '/images/commitee/president.jpg',
  },
  {
    id: '2',
    name: 'মো: সামিউল ইসলাম',
    title: 'সাধারণ সম্পাদক',
    bio: 'মো: সামিউল ইসলাম একজন সফল ব্যবসায়ী ও সমাজসেবক। সততা, চেষ্টা ও পরিশ্রমের মাধ্যমে তিনি ব্যবসায়িক অঙ্গনে আস্থা অর্জন করেছেন।  ব্যবসার পাশাপাশি তিনি সবসময়ই সমাজের প্রতি দায়বদ্ধ থেকে মানুষের কল্যাণে কাজ করে যাচ্ছেন। তাঁর নেতৃত্বে ও প্রচেষ্টায় আমাদের সংস্থা এগিয়ে যাচ্ছে।',
    image: '/images/commitee/general-secretary.jpg',
  }
]

export const activities: Activity[] = [
  {
    id: '1',
    title: 'শিক্ষা সহায়তা কর্মসূচি',
    description: 'দরিদ্র ও মেধাবী ছাত্র-ছাত্রীদের শিক্ষা বৃত্তি প্রদান, বই-খাতা বিতরণ এবং শিক্ষা প্রতিষ্ঠান স্থাপনের মাধ্যমে শিক্ষার মান উন্নয়নে কাজ করছি।',
    image: '/images/activities/education-assistance.avif',
    category: 'শিক্ষা'
  },
  {
    id: '2',
    title: 'স্বাস্থ্যসেবা কার্যক্রম',
    description: 'বিনামূল্যে চিকিৎসা সেবা, টিকাদান কর্মসূচি, স্বাস্থ্য সচেতনতা প্রচার এবং চিকিৎসা সামগ্রী সরবরাহের মাধ্যমে জনস্বাস্থ্য উন্নয়নে অবদান রাখছি।',
    image: '/images/activities/health.jpg',
    category: 'স্বাস্থ্য'
  },
  {
    id: '3',
    title: 'দুর্যোগ ব্যবস্থাপনা',
    description: 'প্রাকৃতিক দুর্যোগের সময় জরুরি সহায়তা প্রদান, ত্রাণ বিতরণ, পুনর্বাসন কার্যক্রম এবং দুর্যোগ প্রস্তুতি প্রশিক্ষণের মাধ্যমে মানুষের পাশে দাঁড়াই।',
    image: '/images/activities/disaster-management.avif',
    category: 'দুর্যোগ'
  },
  {
    id: '4',
    title: 'মহিলা ক্ষমতায়ন',
    description: 'মহিলাদের দক্ষতা উন্নয়ন প্রশিক্ষণ, কর্মসংস্থান সৃষ্টি, ক্ষুদ্র ঋণ প্রদান এবং সচেতনতা বৃদ্ধির মাধ্যমে মহিলা সমাজের উন্নয়নে কাজ করছি।',
    image: '/images/activities/woman-empowerment.jpg',
    category: 'ক্ষমতায়ন'
  },
  {
    id: '5',
    title: 'পরিবেশ সংরক্ষণ',
    description: 'বৃক্ষরোপণ কর্মসূচি, পরিবেশ সচেতনতা প্রচার, বর্জ্য ব্যবস্থাপনা এবং নবায়নযোগ্য শক্তির ব্যবহার বৃদ্ধির মাধ্যমে পরিবেশ রক্ষায় অবদান রাখছি।',
    image: '/images/activities/environment.svg',
    category: 'পরিবেশ'
  },
  {
    id: '6',
    title: 'খাদ্য নিরাপত্তা',
    description: 'অসহায় ও দরিদ্র পরিবারের মধ্যে খাদ্য সামগ্রী বিতরণ, পুষ্টি সচেতনতা প্রচার এবং কৃষি উন্নয়ন কর্মসূচির মাধ্যমে খাদ্য নিরাপত্তা নিশ্চিত করতে কাজ করছি।',
    image: '/images/activities/food.jpg',
    category: 'খাদ্য'
  }
]

export const fullCommitteeMembers: CommitteeMember[] = [
  { 
    id: '1', 
    position: "সভাপতি", 
    name: "ফরহাদ আহমেদ সায়িম", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#" 
  },
  { 
    id: '2', 
    position: "সহ-সভাপতি", 
    name: "নাজি বুলবুল", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#" 
  },
  { 
    id: '3', 
    position: "সহ-সভাপতি", 
    name: "প্রফেসর তহরুল ইসলাম", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '4', 
    position: "সাধারণ সম্পাদক", 
    name: "মো: সামিউল ইসলাম", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '5', 
    position: "সহ-সাধারণ সম্পাদক", 
    name: "আব্দুস সামাদ", 
    image: "/images/commitee/samad.jpeg", 
    facebookUrl: "#"  
  },
  { 
    id: '6', 
    position: "সহ-সাধারণ সম্পাদক", 
    name: "মোসারফ হোসেন", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '7', 
    position: "সহ-সাধারণ সম্পাদক (মহিলা)", 
    name: "মাহফুজা আক্তার রুনা", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '8', 
    position: "সাংগঠনিক সম্পাদক", 
    name: "আব্দুর রহমান মিঠু", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '9', 
    position: "সহ-সাংগঠনিক সম্পাদক", 
    name: "আলিউল", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '10', 
    position: "কোষাধ্যক্ষ", 
    name: "মোঃ সাহেব রানা", 
    image: "/images/commitee/saheb-rana1.png", 
    facebookUrl: "#"  
  },
  { 
    id: '11', 
    position: "দপ্তর সম্পাদক", 
    name: "ইসমাইল", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '12', 
    position: "ট্রেড ইউনিয়ন সম্পাদক", 
    name: "জনাব, আয়ুব", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '13', 
    position: "প্রযুক্তি সম্পাদক, ট্রেড সহকারী", 
    name: "মোঃ নিয়াজ মুরসিদ", 
    image: "/images/commitee/niaj.jpeg", 
    facebookUrl: "#"  
  },
  { 
    id: '14', 
    position: "শিক্ষা প্রশিক্ষণ সম্পাদক", 
    name: "খাইরুল ইসলাম", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '15', 
    position: "পাঠাগার ও প্রকাশনা সম্পাদক, প্রচার", 
    name: "মোঃ বাকি বিল্লাহ", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '16', 
    position: "ক্রীড়া ও সাংস্কৃতিক সম্পাদক", 
    name: "আব্দুল্লাহ্ আল মুহাইমেন", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#" 
  },
  { 
    id: '17', 
    position: "আইন-আদালত সম্পাদক", 
    name: "মোঃ রেজাউল ইসলাম", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '18', 
    position: "সাহায্য ও পূর্ণবাসন সম্পাদক", 
    name: "আব্দুল ওহাব", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '19', 
    position: "কর্মসংস্থান সম্পাদক", 
    name: "আব্দুল আহাদ", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '20', 
    position: "চিকিৎসা ও স্বাস্থ্য বিষয়ক সম্পাদক", 
    name: "ডা. সাহিদা ইসলাম তুলি", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
  { 
    id: '21', 
    position: "নির্বাচনী সম্পাদক", 
    name: "জাকিউল আজম", 
    image: "/images/commitee/profile-photo.jpg", 
    facebookUrl: "#"  
  },
];


export const galleryImages: GalleryImage[] = [
  // 2023 Images
  { id: '1', src: '/images/galleryImages/1.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: true },
  { id: '2', src: '/images/galleryImages/2.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '3', src: '/images/galleryImages/3.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '4', src: '/images/galleryImages/4.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: true },
  { id: '5', src: '/images/galleryImages/5.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '6', src: '/images/galleryImages/6.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '7', src: '/images/galleryImages/7.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: true },
  { id: '8', src: '/images/galleryImages/8.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: true },
  { id: '9', src: '/images/galleryImages/9.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '10', src: '/images/galleryImages/10.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '11', src: '/images/galleryImages/11.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: true },
  { id: '12', src: '/images/galleryImages/12.jpg', year: '2023', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: true },

  // 2024 Images
  { id: '13', src: '/images/galleryImages/13.jpg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '14', src: '/images/galleryImages/14.jpg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '15', src: '/images/galleryImages/15.jpg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '16', src: '/images/galleryImages/16.jpg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '17', src: '/images/galleryImages/17.jpeg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '18', src: '/images/galleryImages/18.jpeg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '19', src: '/images/galleryImages/19.jpeg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '20', src: '/images/galleryImages/20.jpeg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '21', src: '/images/galleryImages/21.jpeg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '22', src: '/images/galleryImages/22.jpeg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '23', src: '/images/galleryImages/23.jpeg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '24', src: '/images/galleryImages/24.jpeg', year: '2024', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },

  // 2025 Images
  { id: '25', src: '/images/galleryImages/25.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '26', src: '/images/galleryImages/26.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: true },
  { id: '27', src: '/images/galleryImages/27.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '28', src: '/images/galleryImages/28.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '29', src: '/images/galleryImages/29.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '30', src: '/images/galleryImages/30.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '31', src: '/images/galleryImages/31.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '32', src: '/images/galleryImages/32.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '33', src: '/images/galleryImages/33.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '34', src: '/images/galleryImages/34.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '35', src: '/images/galleryImages/35.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: false },
  { id: '36', src: '/images/galleryImages/36.jpeg', year: '2025', alt: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা', caption: '', isFeatured: true },
];



export const activeMembers: MemberListItem[] = [
  { id: '21', position: "কার্যকরী সদস্য", name: "আনারুল মেম্বার" },
  { id: '22', position: "কার্যকরী সদস্য", name: "আব্দুল আলিম" },
  { id: '23', position: "কার্যকরী সদস্য", name: "শহিদুল ইসলাম" },
  { id: '24', position: "কার্যকরী সদস্য", name: "তহিদুল ইসলাম (সুন্দরপুর)" },
  { id: '25', position: "কার্যকরী সদস্য", name: "শহিদুল (ইসলামপুর)" },
  { id: '26', position: "কার্যকরী সদস্য", name: "রমজান (ইসলামপুর)" },
  { id: '27', position: "কার্যকরী সদস্য", name: "আবু সায়েম" },
  { id: '28', position: "কার্যকরী সদস্য", name: "মেসবাউল" },
  { id: '29', position: "কার্যকরী সদস্য", name: "মিজান" },
  { id: '30', position: "কার্যকরী সদস্য", name: "আলাউদ্দীন" },
  { id: '31', position: "কার্যকরী সদস্য", name: "সেরাজুল ইসলাম" },
  { id: '32', position: "কার্যকরী সদস্য", name: "সাদ্দাম" },
  { id: '33', position: "কার্যকরী সদস্য", name: "সেলিম" },
  { id: '34', position: "কার্যকরী সদস্য", name: "শরিফুল ইসলাম" },
  { id: '35', position: "কার্যকরী সদস্য", name: "জাহাঙ্গির" },
  { id: '36', position: "কার্যকরী সদস্য", name: "আবুজার গিফারী" },
  { id: '37', position: "কার্যকরী সদস্য", name: "সানাউল্লাহ" },
  { id: '38', position: "কার্যকরী সদস্য", name: "মাহমদুল্লাহ" },
  { id: '39', position: "কার্যকরী সদস্য", name: "জিনিয়া" },
];

export const unionCommitteeMembers: UnionMemberListItem[] = [
  { id: '1', position: "গোবরাতলা", name: "মো: আবু সায়েম" },
  { id: '2', position: "বালিয়াডাঙ্গা পূর্ব", name: "মো: আব্দুস সামাদ" },
  { id: '3', position: "বালিয়াডাঙ্গা পশ্চিম", name: "মো: আনারুল হক" },
  { id: '4', position: "ঝিলিম", name: "মো: আলিউল" },
  { id: '5', position: "চরঅনুপনগর", name: "মো: মিজান" },
  { id: '6',position: "চরআলাতুলি", name: "মো: রাকিবুর রহমান" },
  { id: '7', position: "বারোঘরিয়া", name: "মো: ইসমাইল" },
  { id: '8', position: "মহারাজপুর", name: "মো: শরিফুল ইসলাম" },
  { id: '9', position: "রানীহাটি", name: "মো: আব্দুস সামাদ" },
  { id: '10', position: "সুন্দরপুর উত্তর", name: "মো: জাহাঙ্গির আলম" },
  { id: '11', position: "সুন্দরপুর দক্ষিণ", name: "মো: আবুজার গিফারী" },
  { id: '12', position: "ইসলামপুর", name: "মো: শহিদুল ইসলাম" },
  { id: '13', position: "চরবাগডাঙ্গা", name: "মো: সানাউল্লাহ" },
  { id: '14', position: "শাহজাহানপুর", name: "মো: খাইরুল ইসলাম" },
  { id: '15', position: "নারায়ণপুর", name: "মো: টিপু সুলতান" },
  { id: '16', position: "দেবীনগর", name: "মো: মহাম্মদুল্লাহ্" },
];