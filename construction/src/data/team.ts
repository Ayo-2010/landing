import type { LucideIcon } from 'lucide-vue-next'
import { Facebook, Twitter, Instagram } from 'lucide-vue-next'

export interface TeamSocial {
  name: string
  icon: LucideIcon
}

export interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  phone: string
  socials: TeamSocial[]
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Penelopa Miller',
    role: 'Head of Production',
    image: '/images/team-1-1.png',
    phone: '(+00) 347 456 1379',
    socials: [
      { name: 'Facebook', icon: Facebook },
      { name: 'X', icon: Twitter },
      { name: 'Instagram', icon: Instagram }
    ]
  },
  {
    id: 2,
    name: 'Mark Ronaldo',
    role: 'Sr. Engineer',
    image: '/images/team-1-2.png',
    phone: '(+00) 347 456 1379',
    socials: [
      { name: 'Facebook', icon: Facebook },
      { name: 'X', icon: Twitter },
      { name: 'Instagram', icon: Instagram }
    ]
  },
  {
    id: 3,
    name: 'John Maxwell',
    role: 'Project Management',
    image: '/images/team-1-3.png',
    phone: '(+00) 347 456 1379',
    socials: [
      { name: 'Facebook', icon: Facebook },
      { name: 'X', icon: Twitter },
      { name: 'Instagram', icon: Instagram }
    ]
  },
  {
    id: 4,
    name: 'Penelopa Miller',
    role: 'Head of Production',
    image: '/images/team-1-1.png',
    phone: '(+00) 347 456 1379',
    socials: [
      { name: 'Facebook', icon: Facebook },
      { name: 'X', icon: Twitter },
      { name: 'Instagram', icon: Instagram }
    ]
  },
  {
    id: 5,
    name: 'Mark Ronaldo',
    role: 'Sr. Engineer',
    image: '/images/team-1-2.png',
    phone: '(+00) 347 456 1379',
    socials: [
      { name: 'Facebook', icon: Facebook },
      { name: 'X', icon: Twitter },
      { name: 'Instagram', icon: Instagram }
    ]
  },
  {
    id: 6,
    name: 'John Maxwell',
    role: 'Project Management',
    image: '/images/team-1-3.png',
    phone: '(+00) 347 456 1379',
    socials: [
      { name: 'Facebook', icon: Facebook },
      { name: 'X', icon: Twitter },
      { name: 'Instagram', icon: Instagram }
    ]
  },
]

export default teamMembers