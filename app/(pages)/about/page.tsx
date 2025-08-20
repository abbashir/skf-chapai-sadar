import HeroSection from '../../components/common/HeroSection'
import AboutTabs from '../../components/AboutTab'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title='আমাদের সম্পর্কে' />

      {/* Page Section */}
      <div className="section-container">
        <AboutTabs />
      </div>
    </>

  )
}