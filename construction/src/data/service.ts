import { ref } from 'vue'

export interface ServiceItem {
  id: string
  title: string
  image: string
  description: string
  feature: string
  link: string
}

const services = ref<ServiceItem[]>([
  {
    id: '01',
    title: 'General construction',
    image: '/images/why-tab-thumb3-1.png',
    description: 'We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites we have been the trusted name in heating, air conditioning and plumbing businesses.',
    feature: 'Regularly Maintaining and Organizing your Tools',
    link: '/services/service'
  },
  {
    id: '02',
    title: 'Property maintenance',
    image: '/images/why-tab-thumb3-1.png',
    description: 'We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites we have been the trusted name in heating, air conditioning and plumbing businesses.',
    feature: 'Regularly Maintaining and Organizing your Tools',
    link: '/services/service'
  },
  {
    id: '03',
    title: 'Project management',
    image: '/images/why-tab-thumb3-1.png',
    description: 'We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites we have been the trusted name in heating, air conditioning and plumbing businesses.',
    feature: 'Regularly Maintaining and Organizing your Tools',
    link: '/services/service'
  },
  {
    id: '04',
    title: 'Renovation & Remodeling',
    image: '/images/why-tab-thumb3-1.png',
    description: 'We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites we have been the trusted name in heating, air conditioning and plumbing businesses.',
    feature: 'Regularly Maintaining and Organizing your Tools',
    link: '/services/service'
  },
  {
    id: '05',
    title: 'Preconstruction',
    image: '/images/why-tab-thumb3-1.png',
    description: 'We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites we have been the trusted name in heating, air conditioning and plumbing businesses.',
    feature: 'Regularly Maintaining and Organizing your Tools',
    link: '/services/service'
  }
])

export default services