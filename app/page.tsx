import Header from './components/common/Header'
import Carousel from './components/Carousel'
import Leaders from './components/Leaders'
import Activities from './components/Activities'
import Committee from './components/Committee'
import Gallery from './components/Gallery'
import DonationForm from './components/DonationForm'
import { carouselSlides, leaders, activities, galleryImages, fullCommitteeMembers } from './data/sampleData'

export default function Home() {
  return (
    <>
      <Carousel slides={carouselSlides} />
      <Leaders leaders={leaders} />
      <Activities activities={activities} />
      <Committee members={fullCommitteeMembers} />
      <Gallery images={galleryImages} />
      <DonationForm />
    </>
  )
}