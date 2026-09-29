export interface ProjectHighlight {
  title: string
  subtitle: string
  date: string
  image: string
  link: string
}

const projects: ProjectHighlight[] = [
  {
    title: 'General Construction',
    subtitle: 'Building',
    date: 'Building since 09,01,2024',
    image: '/images/project1_1.png',
    link: '/project/general-construction'
  },
  {
    title: 'Commercial Renovation',
    subtitle: 'Building',
    date: 'Building since 09,01,2024',
    image: '/images/project1_2.png',
    link: '/project/renovation-remodeling'
  },
  {
    title: 'Architecture Design',
    subtitle: 'Building',
    date: 'Building since 09,01,2024',
    image: '/images/project1_3.png',
    link: '/project/building-construction-7'
  }
]

export default projects