import { ref } from 'vue'

export interface WorkProject {
  id: number
  number: number
  category: string
  title: string
  date: string
  image: string
  link: string
}

const projects = ref<WorkProject[]>([
  {
    id: 1,
    number: 1,
    category: 'Building',
    title: 'Building Construction',
    date: '2028-06-30',
    image: '/images/project2_1.png',
    link: '/pages/project/building-construction'
  },
  {
    id: 2,
    number: 2,
    category: 'Construction',
    title: 'General Construction',
    date: '2028-06-30',
    image: '/images/project2_2.png',
    link: '/pages/project/general-construction'
  },
  {
    id: 3,
    number: 3,
    category: 'Remodeling',
    title: 'Renovation & Remodeling',
    date: '2028-06-30',
    image: '/images/project2_3.png',
    link: '/pages/project/renovation-remodeling'
  },
  {
    id: 4,
    number: 4,
    category: 'Building',
    title: 'Building Construction',
    date: '2028-06-30',
    image: '/images/project2_4.png',
    link: '/pages/project/building-construction-4'
  },
  {
    id: 5,
    number: 5,
    category: 'Construction',
    title: 'General Construction',
    date: '2028-06-30',
    image: '/images/project2_5.png',
    link: '/pages/project/general-construction-2'
  },
  {
    id: 6,
    number: 6,
    category: 'Remodeling',
    title: 'Renovation & Remodeling',
    date: '2028-06-30',
    image: '/images/project2_6.png',
    link: '/pages/project/renovation-remodeling-2'
  },
  {
    id: 7,
    number: 7,
    category: 'Architecture',
    title: 'Building Construction',
    date: '2028-06-30',
    image: '/images/project2_7.png',
    link: '/pages/project/building-construction-7'
  },
  {
    id: 8,
    number: 8,
    category: 'Construction',
    title: 'General Construction',
    date: '2028-06-30',
    image: '/images/project2_8.png',
    link: '/pages/project/general-construction-3'
  },
  {
    id: 9,
    number: 9,
    category: 'Remodeling',
    title: 'Renovation & Remodeling',
    date: '2028-06-30',
    image: '/images/project2_9.png',
    link: '/pages/project/renovation-remodeling-2'
  }
])

export default projects