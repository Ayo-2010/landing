// products.js
const products = [
  {
    id: 1,
    slug: 'hardware-toolbox',
    sku: 'product1',
    name: 'Hardware Toolbox',
    category: 'Construction',
    tags: ['Construction', 'Building', 'Home', 'Factory'],
    image: '/images/product_1_1.jpg',
    price: 27.00,
    originalPrice: 30.00,
    rating: 5,
    shortDescription: "Syndicate customized growth strategies prospective human capital leverage other's optimal e-markets without transparent catalysts for change. Credibly coordinate highly efficient methods of empowerment cross unit solutions.",
    features: [
      'Lifetime structural, one year finish warranty',
      'Mapped from “Center Caps” under ” tment” tab',
      'Fully compatible with OEM equipment'
    ],
    longDescription: "Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital. Compellingly whiteboard client-centric sources before cross-platform schemas. Distinctively develop future-proof outsourcing without multimedia based portals. Progressively coordinate next-generation architectures for collaborative solutions.\n\nSeamlessly target fully tested infrastructures whereas just in time process improvements. Dynamically exploit team driven functionalities vis a vis global total linkage.",
    specifications: {
      weight: '20 kg',
      width: '10 m',
      length: '20 m',
      height: '20 m'
    }
  },
  {
    id: 2,
    slug: 'drill-machine',
    sku: 'product2',
    name: 'Drill Machine',
    category: 'Construction',
    tags: ['Construction', 'Building', 'Industry', 'Factory'],
    image: '/images/product_1_2.jpg',
    price: 270.00,
    originalPrice: 300.00,
    rating: 5,
    shortDescription: "High-performance precision drill machine designed for heavy-duty construction and industrial site work.",
    features: [
      'Ergonomic grip handle',
      'Variable speed control trigger',
      'Heavy-duty copper motor'
    ],
    longDescription: "Engineered for reliable hole drilling through concrete, steel, and masonry. Built with high-grade components ensuring longevity under harsh workplace conditions.",
    specifications: {
      weight: '4.5 kg',
      width: '0.3 m',
      length: '0.4 m',
      height: '0.2 m'
    }
  },
  {
    id: 3,
    slug: 'claw-hammer',
    sku: 'product3',
    name: 'Claw Hammer',
    category: 'Building',
    tags: ['Building', 'Home', 'Construction'],
    image: '/images/product_1_3.jpg',
    price: 117.00,
    originalPrice: 130.00,
    rating: 4,
    shortDescription: "Forged steel head claw hammer with shock-reduction cushion grip for professional carpentry.",
    features: [
      'Precision balanced head',
      'Anti-slip rubberized handle',
      'Curved claw for easy nail pulling'
    ],
    longDescription: "Indispensable tool for framing, carpentry, and home improvement. Exceptional durability and balance minimize user wrist fatigue.",
    specifications: {
      weight: '0.8 kg',
      width: '0.15 m',
      length: '0.35 m',
      height: '0.04 m'
    }
  },
  {
    id: 4,
    slug: 'chainsaw-machine',
    sku: 'product4',
    name: 'Chainsaw Machine',
    category: 'Engineering',
    tags: ['Industry', 'Factory', 'Design'],
    image: '/images/product_1_4.jpg',
    price: 117.00,
    originalPrice: 130.00,
    rating: 3,
    shortDescription: "Industrial grade motor-powered chainsaw built for timber processing and heavy forestry operations.",
    features: [
      'Automatic chain oiler',
      'Low recoil chain brake',
      'Easy kickstart engine system'
    ],
    longDescription: "Provides rapid cutting throughput with safety guard features. Perfect for forestry work and tough landscaping clearing projects.",
    specifications: {
      weight: '6.2 kg',
      width: '0.25 m',
      length: '0.85 m',
      height: '0.30 m'
    }
  },
  {
    id: 5,
    slug: 'construction-hat',
    sku: 'product5',
    name: 'Construction Hat',
    category: 'Construction',
    tags: ['Construction', 'Architecture', 'Business'],
    image: '/images/product_1_5.jpg',
    price: 135.00,
    originalPrice: 150.00,
    rating: 5,
    shortDescription: "ANSI-certified high-density polyethylene safety hard hat with adjustable ratchet suspension.",
    features: [
      'Impact resistant outer shell',
      'Padded sweatband headband',
      'Breathable top vents'
    ],
    longDescription: "Superior head protection against falling objects and impact hazards. Meets all strict jobsite compliance standards.",
    specifications: {
      weight: '0.4 kg',
      width: '0.22 m',
      length: '0.28 m',
      height: '0.16 m'
    }
  },
  {
    id: 6,
    slug: 'sparta-demolition-hammer',
    sku: 'product6',
    name: 'Sparta Demolition Hammer',
    category: 'Business',
    tags: ['Business', 'Construction', 'Building'],
    image: '/images/product_1_6.jpg',
    price: 135.00,
    originalPrice: 150.00,
    rating: 3,
    shortDescription: "Heavyweight jackhammer breaker designed for breaking concrete, asphalt, and foundation structures.",
    features: [
      'High impact energy rating',
      'Vibration damping side handles',
      'Quick-change chisel chuck'
    ],
    longDescription: "Unmatched power for major renovation and structural demolition. Built with an oil-cooled heat dissipation casing.",
    specifications: {
      weight: '16 kg',
      width: '0.2 m',
      length: '0.7 m',
      height: '0.3 m'
    }
  },
  {
    id: 7,
    slug: '20-hitachi-zaxis-110m',
    sku: 'product7',
    name: 'Hitachi Zaxis 110m',
    category: 'Construction',
    tags: ['Construction', 'Building', 'Industry'],
    image: '/images/product_1_7.jpg',
    price: 315.00,
    originalPrice: 350.00,
    rating: 5,
    shortDescription: "Heavy excavator machinery engineered for high productivity, fuel efficiency, and precise digging operations.",
    features: [
      'Advanced hydraulic system',
      'Reinforced boom and arm structure',
      'Climate-controlled driver cab'
    ],
    longDescription: "Designed to tackle severe earthmoving and trenching jobs. Reduced operational noise and optimized fuel consumption.",
    specifications: {
      weight: '11000 kg',
      width: '2.5 m',
      length: '7.2 m',
      height: '2.8 m'
    }
  },
  {
    id: 8,
    slug: '22-compaction-machine',
    sku: 'product9',
    name: 'Compaction Machine',
    category: 'Construction',
    tags: ['Construction', 'Building', 'Factory'],
    image: '/images/product_1_9.jpg',
    price: 495.00,
    originalPrice: 550.00,
    rating: 5,
    shortDescription: "Heavy plate vibratory soil compactor suitable for road repair, paving foundations, and ground leveling.",
    features: [
      'High centrifugal force compaction',
      'Self-cleaning open base plate',
      'Foldable transport wheels'
    ],
    longDescription: "Delivers maximum ground pressure density in granular soils and asphalt. Durable cast iron base ensures reliable performance.",
    specifications: {
      weight: '95 kg',
      width: '0.5 m',
      length: '1.1 m',
      height: '0.9 m'
    }
  }
]

export default products