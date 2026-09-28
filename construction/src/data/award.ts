export interface AwardItem {
  id: number
  year: string
  title: string
  status: string
  category: string
  thumb: string
  bgShape: string
}

const awards: AwardItem[] = [
  {
    id: 1,
    year: '2024',
    title: 'Site of the day',
    status: 'Winner',
    category: 'Design Award',
    thumb: '/images/award1-1.png',
    bgShape: '/images/award-card-bg1-1.png'
  },
  {
    id: 2,
    year: '2024',
    title: 'Outstanding advisor',
    status: 'Winner',
    category: 'Design Award',
    thumb: '/images/award1-2.png',
    bgShape: '/images/award-card-bg1-1.png'
  },
  {
    id: 3,
    year: '2024',
    title: 'Best choose company',
    status: 'Winner',
    category: 'Design Award',
    thumb: '/images/award1-3.png',
    bgShape: '/images/award-card-bg1-1.png'
  },
  {
    id: 4,
    year: '2024',
    title: 'Best Consulting',
    status: 'Winner',
    category: 'Design Award',
    thumb: '/images/award1-4.png',
    bgShape: '/images/award-card-bg1-1.png'
  }
]

export default awards