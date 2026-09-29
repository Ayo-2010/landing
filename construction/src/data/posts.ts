import { ref } from 'vue'

export interface BlogPost {
  id: number
  slug: string
  image: string
  day: string
  month: string
  year: string
  author: string
  authorRole: string
  category: string
  title: string
  excerpt: string
  readTime: string
  tags: string[]
  content: string[]
  link: string
}

const posts = ref<BlogPost[]>([
  {
    id: 1,
    slug: 'protecting-your-roof-from-storm-damage',
    image: '/images/blog_5_1.png',
    day: '24',
    month: 'JUN',
    year: '2026',
    author: 'Chris',
    authorRole: 'Lead Roofing Engineer',
    category: 'Engineering',
    title: 'Protecting your roof from storm damage',
    excerpt:
      'A roof is the first line of defense against wind, hail and driving rain. Here is the inspection and maintenance routine that keeps commercial roofs standing after a bad season.',
    readTime: '6 min read',
    tags: ['Roofing', 'Maintenance', 'Safety'],
    content: [
      'Storm season does more than scatter debris. Wind uplift on poorly fastened edge metal is the single most common cause of expensive roof loss, and it starts long before water reaches the interior. By the time a leak is visible from the ground, the substrate damage is already weeks old.',
      'The first step is an edge inspection. Every commercial roof perimeter should be checked for loose coping, exposed fasteners and separated membrane terminations. Edge metal carries the highest wind pressure on the entire assembly, so it is where uplift damage concentrates first.',
      'Next comes drainage. A single blocked drain can hold standing water long enough to degrade insulation, and water weight in a wind event adds load the structure was never designed to carry. Quarterly drain clearing is the cheapest insurance on a roof.',
      'Finally, document everything. Photos of penetrations, sealant beads and flashing details taken before a storm turn a disputed insurance claim into a straightforward one. We tag and archive every roof we service so the baseline is always available.'
    ],
    link: '/news/protecting-your-roof-from-storm-damage'
  },
  {
    id: 2,
    slug: 'roofing-are-fact-makes-easier-10-reason',
    image: '/images/blog_5_2.png',
    day: '24',
    month: 'JUN',
    year: '2026',
    author: 'Chris',
    authorRole: 'Lead Roofing Engineer',
    category: 'Engineering',
    title: 'Roofing are fact makes easier 10 reason',
    excerpt:
      'Ten field-tested reasons why documenting roof condition is not paperwork for later, it is the fastest way to reduce unplanned downtime on any building.',
    readTime: '8 min read',
    tags: ['Roofing', 'Inspections', 'Operations'],
    content: [
      'Roofing has a reputation for being one of the least glamorous trades on a jobsite. That is largely a documentation problem. When a roof is inspected on a schedule and photographed, the failures that normally surprise an owner become scheduled line items.',
      'Condition tracking shortens diagnosis. When a leak is reported, a roof with a photo history can usually be narrowed to a specific penetration in minutes rather than a full teardown. That difference is often the difference between an afternoon and a week of downtime.',
      'It also changes how maintenance is budgeted. Reactive repairs are always more expensive than planned ones, and a roof with a documented condition history lets an owner move work into a favorable season instead of responding to a leak.',
      'The remaining reasons follow the same pattern: clearer warranty claims, better contractor pricing, easier tenant communication, and far fewer surprises during an inspection. Documentation compounds.'
    ],
    link: '/news/roofing-are-fact-makes-easier-10-reason'
  },
  {
    id: 3,
    slug: 'why-roofing-material-warranties-important',
    image: '/images/blog_5_3.png',
    day: '24',
    month: 'JUN',
    year: '2026',
    author: 'Chris',
    authorRole: 'Lead Roofing Engineer',
    category: 'Engineering',
    title: 'Why roofing material warranties important?',
    excerpt:
      'A warranty is only as strong as the workmanship behind it. Understanding what a manufacturer covers, and what your installer actually controls, avoids expensive surprises.',
    readTime: '5 min read',
    tags: ['Roofing', 'Warranty', 'Materials'],
    content: [
      'Manufacturers warrant their material. Installers warrant their work. Those are two different promises, and most roof disputes live in the gap between them. A twenty-year membrane warranty says nothing about whether the seams were welded correctly.',
      'Before accepting any warranty, confirm three things in writing: the substrate the system is warranted over, the maximum supported wind exposure, and which accessories are included. Excluded penetrations are the most common surprise in a warranty claim.',
      'Maintenance requirements are equally important. Most commercial warranties require documented inspections at set intervals. Miss them and coverage can lapse, which is why we schedule the inspection with the same commitment as the installation.',
      'Finally, keep the paperwork. Warranty registration, invoices, the original scope and the installer contact all belong in one place. When a claim is filed five years later, the difference between a processed claim and a denied one is usually documentation.'
    ],
    link: '/news/why-roofing-material-warranties-important'
  }
])

export default posts
