export interface Leader {
  id: string
  name: string
  title: string
  bio: string
  image: string
}

export interface Activity {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export interface CommitteeMember {
  id: string
  name: string
  position: string
  image: string
  facebookUrl?: string
}

export interface GalleryImage {
  id: string
  src: string
  year: string
  alt: string
  caption: string,
  isFeatured?: boolean
}

export interface CarouselSlide {
  id: string
  image: string
  title: string
  subtitle: string
  description: string
}

export interface MemberListItem {
  id: string
  position: string
  name: string
}
export interface UnionMemberListItem {
  id: string
  position: string
  name: string
}