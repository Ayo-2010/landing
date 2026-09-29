import type { Component } from 'vue'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-vue-next'

export interface TeamSocial {
  name: string
  url: string
  icon: Component
}

export interface Skill {
  title: string
  percentage: number
}

export interface EducationExperience {
  number: string
  title: string
  years: string
  company: string
}

export interface TeamMember {
  id: number
  slug: string
  name: string
  role: string
  department: string
  experience: string
  email: string
  phone: string
  image: string
  greeting: string
  bio: string
  skills: Skill[]
  education: EducationExperience[]
  socials: TeamSocial[]
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    slug: 'penelopa-miller',
    name: 'Penelopa Miller',
    role: 'Head of Production',
    department: 'Engineer',
    experience: '10 Years',
    email: 'penelopa.miller@gmail.com',
    phone: '(+00) 347 456 1379',
    image: '/images/team-1-1.png',
    greeting: "Hello There! my name is Penelopa Miller.",
    bio: "I am a Head of Production at Construction LTD. Collaborative administrate empowered markets via plug-and-play networks. Proactively envisioned multimedia based expertise and cross-media growth strategies seamlessly visualize quality intellectual capital without superior.",
    skills: [
      { title: 'Construction Works', percentage: 89 },
      { title: 'Building Services', percentage: 92 },
      { title: 'Industrial Solution', percentage: 78 }
    ],
    education: [
      { number: '1st', title: 'Business Expert', years: '2024 - Present', company: 'Google Co.' },
      { number: '2nd', title: 'Experience Employee', years: '2015 - 2021', company: 'Themeforest' },
      { number: '3rd', title: 'Finance Manager', years: '2010 - 2014', company: 'Rainbow IT' },
      { number: '4th', title: 'Junior Consultant', years: '2005 - 2009', company: 'Uplabs LTD' }
    ],
    socials: [
      { name: 'X', url: 'https://x.com', icon: Twitter },
      { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
      { name: 'Facebook', url: 'https://facebook.com', icon: Facebook },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin }
    ]
  },
  {
    id: 2,
    slug: 'mark-ronaldo',
    name: 'Mark Ronaldo',
    role: 'Sr. Engineer',
    department: 'Structural Engineering',
    experience: '8 Years',
    email: 'mark.ronaldo@gmail.com',
    phone: '(+00) 347 456 1380',
    image: '/images/team-1-2.png',
    greeting: "Hello There! my name is Mark Ronaldo.",
    bio: "I am a Senior Engineer specializing in large-scale structural infrastructure projects. Experienced in cross-functional team coordination, material compliance, and modern architectural techniques.",
    skills: [
      { title: 'Structural Analysis', percentage: 95 },
      { title: 'Site Management', percentage: 88 },
      { title: 'Safety Auditing', percentage: 90 }
    ],
    education: [
      { number: '1st', title: 'Senior Structural Lead', years: '2022 - Present', company: 'BuildCorp' },
      { number: '2nd', title: 'Structural Engineer', years: '2018 - 2022', company: 'Urban Design' },
      { number: '3rd', title: 'Junior Civil Engineer', years: '2016 - 2018', company: 'SiteWorks' }
    ],
    socials: [
      { name: 'X', url: 'https://x.com', icon: Twitter },
      { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
      { name: 'Facebook', url: 'https://facebook.com', icon: Facebook },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin }
    ]
  },
  {
    id: 3,
    slug: 'john-maxwell',
    name: 'John Maxwell',
    role: 'Project Management',
    department: 'Operations',
    experience: '12 Years',
    email: 'john.maxwell@gmail.com',
    phone: '(+00) 347 456 1381',
    image: '/images/team-1-3.png',
    greeting: "Hello There! my name is John Maxwell.",
    bio: "Experienced Project Director overseeing industrial construction budgets, timelines, and vendor relations with over a decade of hands-on expertise.",
    skills: [
      { title: 'Project Planning', percentage: 96 },
      { title: 'Budget Allocation', percentage: 91 },
      { title: 'Resource Management', percentage: 85 }
    ],
    education: [
      { number: '1st', title: 'Director of Operations', years: '2021 - Present', company: 'Apex Construct' },
      { number: '2nd', title: 'Senior Project Manager', years: '2015 - 2021', company: 'Metro Builders' },
      { number: '3rd', title: 'Site Supervisor', years: '2012 - 2015', company: 'Prime Infra' }
    ],
    socials: [
      { name: 'X', url: 'https://x.com', icon: Twitter },
      { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
      { name: 'Facebook', url: 'https://facebook.com', icon: Facebook },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin }
    ]
  },
  {
    id: 4,
    slug: 'sarah-connor',
    name: 'Sarah Connor',
    role: 'Head of Safety',
    department: 'Quality & Safety',
    experience: '9 Years',
    email: 'sarah.connor@gmail.com',
    phone: '(+00) 347 456 1382',
    image: '/images/team-1-1.png',
    greeting: "Hello There! my name is Sarah Connor.",
    bio: "Focused on enforcing workplace safety codes, emergency response protocols, and quality standards across all active construction sites.",
    skills: [
      { title: 'Safety Inspections', percentage: 98 },
      { title: 'Risk Assessment', percentage: 94 },
      { title: 'Compliance Management', percentage: 90 }
    ],
    education: [
      { number: '1st', title: 'Safety Director', years: '2023 - Present', company: 'SafeSite Inc' },
      { number: '2nd', title: 'Compliance Officer', years: '2017 - 2023', company: 'BuildSafe' }
    ],
    socials: [
      { name: 'X', url: 'https://x.com', icon: Twitter },
      { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
      { name: 'Facebook', url: 'https://facebook.com', icon: Facebook },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin }
    ]
  },
  {
    id: 5,
    slug: 'david-miller',
    name: 'David Miller',
    role: 'Lead Architect',
    department: 'Architecture',
    experience: '11 Years',
    email: 'david.miller@gmail.com',
    phone: '(+00) 347 456 1383',
    image: '/images/team-1-2.png',
    greeting: "Hello There! my name is David Miller.",
    bio: "Passionate architect driving eco-friendly and modern structural designs for commercial and residential landmarks.",
    skills: [
      { title: '3D Modeling & BIM', percentage: 94 },
      { title: 'Sustainable Design', percentage: 90 },
      { title: 'Urban Planning', percentage: 87 }
    ],
    education: [
      { number: '1st', title: 'Principal Architect', years: '2020 - Present', company: 'ArchStudio' },
      { number: '2nd', title: 'Design Associate', years: '2014 - 2020', company: 'UrbanForms' }
    ],
    socials: [
      { name: 'X', url: 'https://x.com', icon: Twitter },
      { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
      { name: 'Facebook', url: 'https://facebook.com', icon: Facebook },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin }
    ]
  },
  {
    id: 6,
    slug: 'emily-watson',
    name: 'Emily Watson',
    role: 'Interior Specialist',
    department: 'Design',
    experience: '7 Years',
    email: 'emily.watson@gmail.com',
    phone: '(+00) 347 456 1384',
    image: '/images/team-1-3.png',
    greeting: "Hello There! my name is Emily Watson.",
    bio: "Specializing in interior space utilization, lighting design, and material selection for commercial remodels.",
    skills: [
      { title: 'Space Planning', percentage: 93 },
      { title: 'Interior Finishing', percentage: 96 },
      { title: 'Acoustic Design', percentage: 82 }
    ],
    education: [
      { number: '1st', title: 'Senior Interior Lead', years: '2021 - Present', company: 'DecoSpaces' },
      { number: '2nd', title: 'Interior Designer', years: '2017 - 2021', company: 'Creative Interiors' }
    ],
    socials: [
      { name: 'X', url: 'https://x.com', icon: Twitter },
      { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
      { name: 'Facebook', url: 'https://facebook.com', icon: Facebook },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin }
    ]
  }
]

export default teamMembers