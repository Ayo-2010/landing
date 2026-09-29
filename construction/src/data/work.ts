import { 
  User, 
  FolderKanban, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  DollarSign,
  ClipboardList,
  Box,
  HardHat,
  ShieldCheck,
  Wrench,
  Sparkles,
  Zap,
  Building2,
  Hammer,
  Ruler,
  Layers,
  Compass,
  Briefcase
} from 'lucide-vue-next'

export interface ProjectService {
  title: string
  description: string
  link: string
  icon: any
}

export interface ProjectInfoItem {
  label: string
  value: string
  icon: any
}

export interface ProjectQuote {
  text: string
  author: string
  role: string
}

export interface ProjectDetail {
  heroImage: string
  videoCoverImage: string
  videoUrl: string
  overview: string
  secondaryParagraph: string
  quote: ProjectQuote
  infoList: ProjectInfoItem[]
  services: ProjectService[]
}

export interface WorkProject {
  id: number
  slug: string
  number: number
  category: string
  title: string
  date: string
  image: string
  link: string
  details: ProjectDetail
}

export const projects: WorkProject[] = [
  {
    id: 1,
    slug: 'building-construction',
    number: 1,
    category: 'Building',
    title: 'Building Construction',
    date: '2028-06-30',
    image: '/images/project2_1.png',
    link: '/project/building-construction',
    details: {
      heroImage: '/images/project_details1_1.png',
      videoCoverImage: '/images/project_details1_2.png',
      videoUrl: 'https://www.youtube.com/embed/mG0Zkt1tpBU?autoplay=1',
      overview: "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      secondaryParagraph: "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      quote: {
        text: "Tortor posuere ac ut consequat tellusi elem isis etum sag ittis vitae atleo duis ut diam odio ut sem nulla phar. Purus sit ame nus mas highly efficient solution whereas open-source application.",
        author: "Aleesha brown",
        role: "Company, CEO"
      },
      infoList: [
        { label: 'Client', value: 'Rebecca Tylor', icon: User },
        { label: 'Category', value: 'Building', icon: FolderKanban },
        { label: 'Location', value: 'New York to London', icon: MapPin },
        { label: 'Date', value: 'June 30, 2028', icon: Calendar },
        { label: 'Status', value: 'Completed', icon: CheckCircle2 },
        { label: 'Budget', value: '$200,560', icon: DollarSign }
      ],
      services: [
        {
          title: 'Project management',
          description: 'There are many passages of lorem ipsum available',
          link: '/service/project-management',
          icon: ClipboardList
        },
        {
          title: 'Virtual design & build',
          description: 'There are many passages of lorem ipsum available',
          link: '/service/preconstruction',
          icon: Box
        },
        {
          title: 'Proconstruction',
          description: 'There are many passages of lorem ipsum available',
          link: '/service/preconstruction',
          icon: HardHat
        }
      ]
    }
  },
  {
    id: 2,
    slug: 'general-construction',
    number: 2,
    category: 'Construction',
    title: 'General Construction',
    date: '2028-06-30',
    image: '/images/project2_2.png',
    link: '/project/general-construction',
    details: {
      heroImage: '/images/project_details1_1.png',
      videoCoverImage: '/images/project_details1_2.png',
      videoUrl: 'https://www.youtube.com/embed/mG0Zkt1tpBU?autoplay=1',
      overview: 'Our general construction project encompasses comprehensive site management and structural installation, following standard architectural specifications.',
      secondaryParagraph: 'With strict quality inspection protocols, all phase deliveries meet standard safety requirements and client requirements.',
      quote: {
        text: 'Efficiency and standard execution made this general construction milestone a major accomplishment.',
        author: 'David Stern',
        role: 'Operations Director'
      },
      infoList: [
        { label: 'Client', value: 'Marcus Vance', icon: User },
        { label: 'Category', value: 'Construction', icon: FolderKanban },
        { label: 'Location', value: 'Chicago, USA', icon: MapPin },
        { label: 'Date', value: 'June 30, 2028', icon: Calendar },
        { label: 'Status', value: 'In Progress', icon: CheckCircle2 },
        { label: 'Budget', value: '$350,000', icon: DollarSign }
      ],
      services: [
        {
          title: 'Site Preparation',
          description: 'Quality groundwork and structural laying for durability.',
          link: '/service/general-construction',
          icon: Wrench
        },
        {
          title: 'Structural Steelwork',
          description: 'Heavy duty steel frame installation and testing.',
          link: '/service/general-construction',
          icon: Building2
        },
        {
          title: 'Safety Inspections',
          description: 'Thorough compliance checks across every construction phase.',
          link: '/service/property-maintenance',
          icon: ShieldCheck
        }
      ]
    }
  },
  {
    id: 3,
    slug: 'renovation-remodeling',
    number: 3,
    category: 'Remodeling',
    title: 'Renovation & Remodeling',
    date: '2028-06-30',
    image: '/images/project2_3.png',
    link: '/project/renovation-remodeling',
    details: {
      heroImage: '/images/project_details1_1.png',
      videoCoverImage: '/images/project_details1_2.png',
      videoUrl: 'https://www.youtube.com/embed/mG0Zkt1tpBU?autoplay=1',
      overview: 'Transforming commercial spaces with modern architectural layouts while updating core interior infrastructure.',
      secondaryParagraph: 'Every detail from lighting layout to interior walls was updated to provide high functionality and contemporary appeal.',
      quote: {
        text: 'The remodeling process was smooth and finished within our exact deadline expectations.',
        author: 'Sophia Loren',
        role: 'Property Developer'
      },
      infoList: [
        { label: 'Client', value: 'Sophia Loren', icon: User },
        { label: 'Category', value: 'Remodeling', icon: FolderKanban },
        { label: 'Location', value: 'Los Angeles, USA', icon: MapPin },
        { label: 'Date', value: 'June 30, 2028', icon: Calendar },
        { label: 'Status', value: 'Completed', icon: CheckCircle2 },
        { label: 'Budget', value: '$180,000', icon: DollarSign }
      ],
      services: [
        {
          title: 'Interior Renovation',
          description: 'Modernizing spaces for optimal performance and aesthetics.',
          link: '/service/renovation-remodeling',
          icon: Sparkles
        },
        {
          title: 'Architectural Design',
          description: 'Tailored architectural planning and execution.',
          link: '/service/preconstruction',
          icon: Box
        },
        {
          title: 'Finishings & Lighting',
          description: 'High standard finishing touches and energy efficient lighting.',
          link: '/service/renovation-remodeling',
          icon: Zap
        }
      ]
    }
  },
  {
    id: 4,
    slug: 'building-construction-4',
    number: 4,
    category: 'Building',
    title: 'Building Construction',
    date: '2028-06-30',
    image: '/images/project2_4.png',
    link: '/project/building-construction-4',
    details: {
      heroImage: '/images/project_details1_1.png',
      videoCoverImage: '/images/project_details1_2.png',
      videoUrl: 'https://www.youtube.com/embed/mG0Zkt1tpBU?autoplay=1',
      overview: 'High-rise residential building project designed for sustainable urban living with state-of-the-art facilities.',
      secondaryParagraph: 'Built using sustainable materials and smart energy grids to lower carbon footprint and operation costs.',
      quote: {
        text: 'A landmark structure that defines high quality engineering and urban development standards.',
        author: 'Rebecca Tylor',
        role: 'Lead Architect'
      },
      infoList: [
        { label: 'Client', value: 'Rebecca Tylor', icon: User },
        { label: 'Category', value: 'Building', icon: FolderKanban },
        { label: 'Location', value: 'Boston, USA', icon: MapPin },
        { label: 'Date', value: 'June 30, 2028', icon: Calendar },
        { label: 'Status', value: 'Completed', icon: CheckCircle2 },
        { label: 'Budget', value: '$240,000', icon: DollarSign }
      ],
      services: [
        {
          title: 'Project Management',
          description: 'Complete oversight from initial planning through structural completion.',
          link: '/service/project-management',
          icon: ClipboardList
        },
        {
          title: 'Virtual Design & Build',
          description: 'BIM modeling and digital layout previews prior to building.',
          link: '/service/preconstruction',
          icon: Box
        },
        {
          title: 'Preconstruction Services',
          description: 'In-depth budget analysis, site evaluations, and permits.',
          link: '/service/preconstruction',
          icon: HardHat
        }
      ]
    }
  },
  {
    id: 5,
    slug: 'general-construction-2',
    number: 5,
    category: 'Construction',
    title: 'General Construction',
    date: '2028-06-30',
    image: '/images/project2_5.png',
    link: '/project/general-construction-2',
    details: {
      heroImage: '/images/project_details1_1.png',
      videoCoverImage: '/images/project_details1_2.png',
      videoUrl: 'https://www.youtube.com/embed/mG0Zkt1tpBU?autoplay=1',
      overview: 'Infrastructure expansion including heavy civil engineering and site utility upgrades for commercial parks.',
      secondaryParagraph: 'Designed to scale long-term infrastructure capability for expanding urban and industrial sectors.',
      quote: {
        text: 'Top quality engineering delivered on budget and ahead of key schedule milestones.',
        author: 'Oliver Queen',
        role: 'Managing Director'
      },
      infoList: [
        { label: 'Client', value: 'Oliver Queen', icon: User },
        { label: 'Category', value: 'Construction', icon: FolderKanban },
        { label: 'Location', value: 'Seattle, USA', icon: MapPin },
        { label: 'Date', value: 'June 30, 2028', icon: Calendar },
        { label: 'Status', value: 'In Progress', icon: CheckCircle2 },
        { label: 'Budget', value: '$410,000', icon: DollarSign }
      ],
      services: [
        {
          title: 'Civil Engineering',
          description: 'Standard heavy civil works and foundation design.',
          link: '/service/general-construction',
          icon: Hammer
        },
        {
          title: 'Site Utility Installation',
          description: 'Complete piping, electrical, and drainage setup.',
          link: '/service/property-maintenance',
          icon: Wrench
        },
        {
          title: 'Project Supervision',
          description: 'End-to-end supervision and safety compliance.',
          link: '/service/project-management',
          icon: ShieldCheck
        }
      ]
    }
  },
  {
    id: 6,
    slug: 'renovation-remodeling-2',
    number: 6,
    category: 'Remodeling',
    title: 'Renovation & Remodeling',
    date: '2028-06-30',
    image: '/images/project2_6.png',
    link: '/project/renovation-remodeling-2',
    details: {
      heroImage: '/images/project_details1_1.png',
      videoCoverImage: '/images/project_details1_2.png',
      videoUrl: 'https://www.youtube.com/embed/mG0Zkt1tpBU?autoplay=1',
      overview: 'Complete structural overhaul and modernized interior upgrades for historic urban commercial property.',
      secondaryParagraph: 'Preserved core historic features while embedding contemporary structural reinforcement and modern HVAC.',
      quote: {
        text: 'They brought our historical facility back to life while fully preserving its architectural heritage.',
        author: 'Sarah Jenkins',
        role: 'Facility Lead'
      },
      infoList: [
        { label: 'Client', value: 'Sarah Jenkins', icon: User },
        { label: 'Category', value: 'Remodeling', icon: FolderKanban },
        { label: 'Location', value: 'San Francisco, USA', icon: MapPin },
        { label: 'Date', value: 'June 30, 2028', icon: Calendar },
        { label: 'Status', value: 'Completed', icon: CheckCircle2 },
        { label: 'Budget', value: '$155,000', icon: DollarSign }
      ],
      services: [
        {
          title: 'Historic Restoration',
          description: 'Careful restoration preserving original aesthetics.',
          link: '/service/renovation-remodeling',
          icon: Sparkles
        },
        {
          title: 'Structural Reinforcement',
          description: 'Modern support systems embedded seamlessly.',
          link: '/service/general-construction',
          icon: Layers
        },
        {
          title: 'Custom Carpentry',
          description: 'Bespoke woodwork tailored for premium space requirements.',
          link: '/service/renovation-remodeling',
          icon: Ruler
        }
      ]
    }
  },
  {
    id: 7,
    slug: 'building-construction-7',
    number: 7,
    category: 'Architecture',
    title: 'Building Construction',
    date: '2028-06-30',
    image: '/images/project2_7.png',
    link: '/project/building-construction-7',
    details: {
      heroImage: '/images/project_details1_1.png',
      videoCoverImage: '/images/project_details1_2.png',
      videoUrl: 'https://www.youtube.com/embed/mG0Zkt1tpBU?autoplay=1',
      overview: 'Architectural masterpiece combining glass facade engineering with sustainable thermal insulation systems.',
      secondaryParagraph: 'High-end structural design tailored specifically for coastal wind resistance and environmental efficiency.',
      quote: {
        text: 'An exceptional structural design that exceeded all our visual and engineering expectations.',
        author: 'Robert Paulson',
        role: 'Lead Architect'
      },
      infoList: [
        { label: 'Client', value: 'Robert Paulson', icon: User },
        { label: 'Category', value: 'Architecture', icon: FolderKanban },
        { label: 'Location', value: 'Miami, USA', icon: MapPin },
        { label: 'Date', value: 'June 30, 2028', icon: Calendar },
        { label: 'Status', value: 'Completed', icon: CheckCircle2 },
        { label: 'Budget', value: '$520,000', icon: DollarSign }
      ],
      services: [
        {
          title: 'Facade Engineering',
          description: 'High-durability glass and composite panel exterior design.',
          link: '/service/general-construction',
          icon: Compass
        },
        {
          title: 'Energy Efficiency Systems',
          description: 'Integrated solar and smart temperature controls.',
          link: '/service/preconstruction',
          icon: Zap
        },
        {
          title: 'Structural Design',
          description: 'Advanced load-bearing calculations and implementation.',
          link: '/service/preconstruction',
          icon: Building2
        }
      ]
    }
  },
  {
    id: 8,
    slug: 'general-construction-3',
    number: 8,
    category: 'Construction',
    title: 'General Construction',
    date: '2028-06-30',
    image: '/images/project2_8.png',
    link: '/project/general-construction-3',
    details: {
      heroImage: '/images/project_details1_1.png',
      videoCoverImage: '/images/project_details1_2.png',
      videoUrl: 'https://www.youtube.com/embed/mG0Zkt1tpBU?autoplay=1',
      overview: 'Commercial warehouse setup built for high throughput logistics operations and automated storage systems.',
      secondaryParagraph: 'Included reinforced flooring, wide structural spans, and optimized loading bays for logistics fleets.',
      quote: {
        text: 'Durable construction that allows maximum operational efficiency for our distribution center.',
        author: 'Evelyn Reed',
        role: 'Supply Chain VP'
      },
      infoList: [
        { label: 'Client', value: 'Evelyn Reed', icon: User },
        { label: 'Category', value: 'Construction', icon: FolderKanban },
        { label: 'Location', value: 'Dallas, USA', icon: MapPin },
        { label: 'Date', value: 'June 30, 2028', icon: Calendar },
        { label: 'Status', value: 'Completed', icon: CheckCircle2 },
        { label: 'Budget', value: '$290,000', icon: DollarSign }
      ],
      services: [
        {
          title: 'Warehouse Construction',
          description: 'Large span steel structures for logistics optimization.',
          link: '/service/general-construction',
          icon: Building2
        },
        {
          title: 'Concrete Slab Pouring',
          description: 'Industrial heavy load bearing floor slabs.',
          link: '/service/general-construction',
          icon: Layers
        },
        {
          title: 'Dock Leveler Installation',
          description: 'High capacity loading dock system integration.',
          link: '/service/property-maintenance',
          icon: Wrench
        }
      ]
    }
  },
  {
    id: 9,
    slug: 'renovation-remodeling-3',
    number: 9,
    category: 'Remodeling',
    title: 'Renovation & Remodeling',
    date: '2028-06-30',
    image: '/images/project2_9.png',
    link: '/project/renovation-remodeling-3',
    details: {
      heroImage: '/images/project_details1_1.png',
      videoCoverImage: '/images/project_details1_2.png',
      videoUrl: 'https://www.youtube.com/embed/mG0Zkt1tpBU?autoplay=1',
      overview: 'Full commercial workspace redesign to support hybrid work environments and collaborative meeting spaces.',
      secondaryParagraph: 'Includes modular glass partitions, acoustic soundproof pods, and ergonomic lighting installations.',
      quote: {
        text: 'Transformed our legacy office environment into an inviting, modern collaborative workspace.',
        author: 'Nathan Drake',
        role: 'COO'
      },
      infoList: [
        { label: 'Client', value: 'Nathan Drake', icon: User },
        { label: 'Category', value: 'Remodeling', icon: FolderKanban },
        { label: 'Location', value: 'Austin, USA', icon: MapPin },
        { label: 'Date', value: 'June 30, 2028', icon: Calendar },
        { label: 'Status', value: 'Completed', icon: CheckCircle2 },
        { label: 'Budget', value: '$210,000', icon: DollarSign }
      ],
      services: [
        {
          title: 'Office Fit-Outs',
          description: 'Custom acoustic and layout design for modern office spaces.',
          link: '/service/renovation-remodeling',
          icon: Briefcase
        },
        {
          title: 'Acoustic Insulation',
          description: 'Sound reduction systems for quiet work zones.',
          link: '/service/renovation-remodeling',
          icon: Sparkles
        },
        {
          title: 'HVAC Integration',
          description: 'Efficient air circulation and climate control setup.',
          link: '/service/property-maintenance',
          icon: Zap
        }
      ]
    }
  }
]

export default projects