export interface Testimonial {
  id: number
  name: string
  designation: string
  avatar: string
  rating: number
  message: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Bm Ashik',
    designation: 'Designer at Rainbow Themes',
    avatar: '/images/testimonial/testi_5_1.png',
    rating: 5,
    message: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book, It has survived not only five centuries.'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    designation: 'Product Manager',
    avatar: '/images/testimonial/testi_5_1.png',
    rating: 5,
    message: 'Remarkable experience working with this team. They delivered on every promise and exceeded our expectations in every single phase.'
  },
  {
    id: 3,
    name: 'David Miller',
    designation: 'Operations Lead',
    avatar: '/images/testimonial/testi_5_1.png',
    rating: 5,
    message: 'Their level of professionalism and attention to detail is unmatched. A seamless process from start to finish.'
  }
]

export default testimonials