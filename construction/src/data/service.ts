import { ref } from 'vue'

export interface ServiceItem {
  id: string
  slug: string
  title: string
  image: string
  shortDescription: string
  description: string
  feature: string
  deliverables: string[]
  process: { title: string; description: string }[]
  link: string
}

const services = ref<ServiceItem[]>([
  {
    id: '01',
    slug: 'general-construction',
    title: 'General construction',
    image: '/images/why-tab-thumb3-1.png',
    shortDescription:
      'Full-scope delivery for commercial, industrial and residential builds, from site preparation through final handover.',
    description:
      'We deliver complete buildings under a single contract, so the structure, envelope, mechanicals and finishes stay coordinated from day one. Our general construction teams manage labour, sequencing and site safety in-house, which keeps the schedule honest and the quality consistent regardless of project size.',
    feature: 'Regularly Maintaining and Organizing your Tools',
    deliverables: [
      'Site preparation and excavation',
      'Structural framing and concrete work',
      'MEP coordination and installation',
      'Interior finishes and handover documentation'
    ],
    process: [
      { title: 'Site mobilisation', description: 'Permits, surveys, site fencing and a documented baseline condition report.' },
      { title: 'Structure', description: 'Foundations, framing and envelope built to the engineered tolerances.' },
      { title: 'Systems', description: 'Mechanical, electrical and plumbing rough-in coordinated before close-in.' },
      { title: 'Handover', description: 'Finishes, testing, commissioning and a full as-built package.' }
    ],
    link: '/service/general-construction'
  },
  {
    id: '02',
    slug: 'property-maintenance',
    title: 'Property maintenance',
    image: '/images/why-tab-thumb3-1.png',
    shortDescription:
      'Scheduled preventive maintenance and reactive repairs that keep occupied buildings running without disruption.',
    description:
      'Unplanned downtime costs more than the repair that caused it. Our maintenance programmes put routine inspections and service intervals on a schedule, so small faults are caught before they become emergency callouts that disrupt tenants and operations.',
    feature: 'Regularly Maintaining and Organizing your Tools',
    deliverables: [
      'Preventive maintenance scheduling',
      'Building systems inspection and testing',
      'Reactive repair and emergency response',
      'Asset condition reporting'
    ],
    process: [
      { title: 'Asset audit', description: 'We walk every system and record condition, age and remaining life.' },
      { title: 'Programme design', description: 'Service intervals are matched to manufacturer guidance and usage.' },
      { title: 'Scheduled works', description: 'Maintenance runs on a calendar with tracked completion.' },
      { title: 'Reporting', description: 'A condition report shows what changed and what is next.' }
    ],
    link: '/service/property-maintenance'
  },
  {
    id: '03',
    slug: 'project-management',
    title: 'Project management',
    image: '/images/why-tab-thumb3-1.png',
    shortDescription:
      'Single-point accountability for scope, budget and schedule from feasibility through closeout.',
    description:
      'A project fails on the details long before it fails structurally. Our management teams hold the schedule, the budget and the trade coordination in one place, with weekly reporting that surfaces risk while there is still time to act on it.',
    feature: 'Regularly Maintaining and Organizing your Tools',
    deliverables: [
      'Feasibility and budgeting',
      'Trade coordination and scheduling',
      'Cost and change control',
      'Quality assurance and closeout'
    ],
    process: [
      { title: 'Define', description: 'Scope, budget and programme agreed with the client up front.' },
      { title: 'Plan', description: 'A detailed programme with trade dependencies mapped.' },
      { title: 'Deliver', description: 'Weekly progress and cost reporting against the baseline.' },
      { title: 'Close', description: 'Snagging, documentation and post-handover review.' }
    ],
    link: '/service/project-management'
  },
  {
    id: '04',
    slug: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    image: '/images/why-tab-thumb3-1.png',
    shortDescription:
      'Structural and interior renovation for occupied buildings, phased to keep the business running.',
    description:
      'Renovation work around a live building is a different discipline from new build. We phase demolition, dust control and shutdowns around operating hours, so the facility keeps working while the space behind it is rebuilt.',
    feature: 'Regularly Maintaining and Organizing your Tools',
    deliverables: [
      'Structural assessment and reinforcement',
      'Interior demolition and rebuild',
      'Systems upgrade and rerouting',
      'Finishes and fit-out'
    ],
    process: [
      { title: 'Survey', description: 'Existing conditions and services mapped before anything is opened up.' },
      { title: 'Design', description: 'A phased plan that respects occupancy and operating hours.' },
      { title: 'Execute', description: 'Controlled demolition and rebuild zone by zone.' },
      { title: 'Commission', description: 'Systems tested, finishes signed off, space returned to use.' }
    ],
    link: '/service/renovation-remodeling'
  },
  {
    id: '05',
    slug: 'preconstruction',
    title: 'Preconstruction',
    image: '/images/why-tab-thumb3-1.png',
    shortDescription:
      'Estimating, value engineering and constructability review before a single trade mobilises.',
    description:
      'The cheapest change is the one made on paper. Preconstruction is where we test the design against the budget, identify constructability problems and lock down the programme, so the site starts with answers instead of open questions.',
    feature: 'Regularly Maintaining and Organizing your Tools',
    deliverables: [
      'Conceptual and detailed cost estimating',
      'Value engineering alternatives',
      'Constructability and clash reviews',
      'Bid management and trade pricing'
    ],
    process: [
      { title: 'Estimate', description: 'A bottom-up pricing model built from real quantities.' },
      { title: 'Engineer', description: 'Alternatives that preserve intent while reducing cost.' },
      { title: 'Review', description: 'Constructability walked through with the design team.' },
      { title: 'Price', description: 'Competitive trade pricing and a final programme.' }
    ],
    link: '/service/preconstruction'
  }
])

export default services
