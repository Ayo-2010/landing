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
    link: '/project/building-construction',
    image: '/images/project5_1.png'
  },
  {
    id: 2,
    category: 'Residential',
    title: 'Residential extension and remodel',
    link: '/project/renovation-remodeling',
    image: '/images/project5_2.png'
  },
  {
    id: 3,
    category: 'Commercial',
    title: 'High-rise facade and structural work',
    link: '/project/building-construction-7',
    image: '/images/project5_3.png'
  },
  {
    id: 4,
    category: 'Commercial',
    title: 'Warehouse and logistics facility',
    link: '/project/general-construction-3',
    image: '/images/project5_4.png'
  },
  {
    id: 5,
    category: 'Remodeling',
    title: 'Office fit-out and interior finishes',
    link: '/project/renovation-remodeling-3',
    image: '/images/project5_5.png'
  }
]

export default projects
