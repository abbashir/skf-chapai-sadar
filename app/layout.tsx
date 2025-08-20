import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশন, চাঁপাইনবাবগঞ্জ সদর উপজেলা।',
  description: 'শ্রমজীবী মানুষের অধিকার প্রতিষ্ঠায় ইসলামী শ্রমনীতির বাস্তবায়ন অনিবার্য।',
  icons: {
    icon: [
    { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    { url: 'web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
  ],
    shortcut: '/web-app-manifest-512x512.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Header />
          <main className="">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}