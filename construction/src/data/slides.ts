import { ref } from 'vue'
import type { LucideIcon } from 'lucide-vue-next'
import { Dribbble, StarIcon, Sparkles, Layers, Compass, Atom } from 'lucide-vue-next'

export interface SlideRating {
  stars: number
  text: string
  logo: LucideIcon
}

export interface Slide {
  bgImage: string
  title: string
  description: string
  ratings: SlideRating[]
}

const slides = ref<Slide[]>([
  {
    bgImage: 'images/hero_bg_5_1.png',
    title: 'We Are Unsurpassed\nRoofing Services Agency',
    description: 'Protecting your home with premium materials and precision engineering. With over 7 years of trusted expertise, we deliver roofs built to last a lifetime.',
    ratings: [
      { stars: 5, text: '4.9 Rating', logo: Dribbble },
      { stars: 5, text: '5.0 Rating', logo: Atom },
      { stars: 5, text: 'A+ Rating', logo: Sparkles }
    ]
  },
  {
    bgImage: 'images/hero_bg_5_2.png',
    title: 'Innovative Architecture\n& Modern Commercial Roofing',
    description: 'We merge advanced structural engineering with clean, modern design aesthetics to create commercial spaces that stand out and withstand the elements.',
    ratings: [
      { stars: 5, text: '4.9 Rating', logo: Compass },
      { stars: 5, text: '5.0 Rating', logo: Layers },
      { stars: 5, text: 'A+ Rating', logo: Sparkles }
    ]
  },
  {
    bgImage: 'images/hero_bg_5_3.png',
    title: 'Crafting Sustainable\n& Reliable Structural Designs',
    description: 'From routine residential inspections to massive industrial installations, our certified specialists execute every project with absolute transparency and care.',
    ratings: [
      { stars: 5, text: '4.9 Rating', logo: Dribbble },
      { stars: 5, text: '5.0 Rating', logo: Atom },
      { stars: 5, text: 'A+ Rating', logo: Sparkles }
    ]
  }
])

export default slides
