import { ref } from 'vue'

export interface BlogPost {
  id: number
  image: string
  day: string
  month: string
  author: string
  category: string
  title: string
  link: string
}

const posts = ref<BlogPost[]>([
  {
    id: 1,
    image: '/images/blog_5_1.png',
    day: '24',
    month: 'JUN',
    author: 'Chris',
    category: 'Engineering',
    title: 'Protecting your roof from storm damage',
    link: '/news-main/engineering/protecting-your-roof-from-storm-damage'
  },
  {
    id: 2,
    image: '/images/blog_5_2.png',
    day: '24',
    month: 'JUN',
    author: 'Chris',
    category: 'Engineering',
    title: 'Roofing are fact makes easier 10 reason',
    link: '/news-main/engineering/roofing-are-fact-makes-easier-10-reason'
  },
  {
    id: 3,
    image: '/images/blog_5_3.png',
    day: '24',
    month: 'JUN',
    author: 'Chris',
    category: 'Engineering',
    title: 'Why roofing material warranties important?',
    link: '/news-main/engineering/why-roofing-material-warranties-important'
  }
])

export default posts