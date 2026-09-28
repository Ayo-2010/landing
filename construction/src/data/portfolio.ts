export interface PortfolioProject {
  id: number
  category: string
  title: string
  link: string
  image: string
}

const projects: PortfolioProject[] = [
  {
    id: 1,
    category: 'Residential',
    title: 'Modern pattern style for house roof',
    link: '/pages/project-page/modern-pattern-style-for-house-roof',
    image: '/images/project5_1.png'
  },
  {
    id: 2,
    category: 'Residential',
    title: 'Modern pattern style for house roof',
    link: '/pages/project-page/modern-pattern-style-for-house-roof-2',
    image: '/images/project5_2.png'
  },
  {
    id: 3,
    category: 'Residential',
    title: 'Modern pattern style for house roof',
    link: '/pages/project-page/modern-pattern-style-for-house-roof-3',
    image: '/images/project5_3.png'
  },
  {
    id: 4,
    category: 'Residential',
    title: 'Modern pattern style for house roof',
    link: '/pages/project-page/modern-pattern-style-for-house-roof-4',
    image: '/images/project5_4.png'
  },
  {
    id: 5,
    category: 'Residential',
    title: 'Modern pattern style for house roof',
    link: '/pages/project-page/modern-pattern-style-for-house-roof-5',
    image: '/images/project5_5.png'
  }
]

export default projects