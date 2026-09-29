export interface LegalSection {
  title: string
  paragraphs: string[]
}

export interface FaqItem {
  question: string
  answer: string
}

export interface LegalDocument {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
  faqs?: FaqItem[]
}

const privacyPolicy: LegalDocument = {
  title: 'Privacy Policy',
  updated: 'Last updated: 1 June 2026',
  intro:
    'We collect only the information we need to deliver our services, and we never sell it. This policy explains what we collect, why we collect it and the choices you have.',
  sections: [
    {
      title: 'Information we collect',
      paragraphs: [
        'We collect details you give us directly, such as your name, email address, phone number, company and the contents of an enquiry or quote request. When you place an order through the shop we also collect your shipping address and order contents.',
        'We collect technical information automatically, including pages visited, device type and approximate region, in order to keep the site working and understand which parts of our catalogue are useful.'
      ]
    },
    {
      title: 'How we use it',
      paragraphs: [
        'We use your information to respond to enquiries, prepare and deliver quotes, process orders, arrange site visits and send project updates. Marketing email is only sent where you have asked for it, and every message includes an unsubscribe link.'
      ]
    },
    {
      title: 'Payments',
      paragraphs: [
        'Card details are handled by our payment processor and never stored on our servers. We keep only a transaction reference and the last four digits so we can reconcile an order later.'
      ]
    },
    {
      title: 'Storage and retention',
      paragraphs: [
        'Cart contents are stored in your own browser. Server-side records are kept for as long as needed to meet contractual, tax and legal obligations, after which they are deleted.'
      ]
    },
    {
      title: 'Your rights',
      paragraphs: [
        'You can request a copy of the data we hold about you, ask us to correct it, or ask us to delete it. Write to support@gmail.com and we will respond within thirty days.'
      ]
    }
  ]
}

const termsOfUse: LegalDocument = {
  title: 'Terms of Use',
  updated: 'Last updated: 1 June 2026',
  intro:
    'These terms govern your use of this website and any purchase made through the shop. By using the site you agree to them.',
  sections: [
    {
      title: 'Use of this site',
      paragraphs: [
        'Content on this site is provided for general information. You may browse, read and print pages for your own reference, but you may not republish or resell the content without written permission.'
      ]
    },
    {
      title: 'Quotes and estimates',
      paragraphs: [
        'Figures shown on site are indicative and are not a binding quotation. A binding price is issued only after a site review or a written scope confirmation. Construction pricing depends on ground conditions, access and final design, all of which can change the cost.'
      ]
    },
    {
      title: 'Orders and payment',
      paragraphs: [
        'An order is accepted when we confirm dispatch. Prices are shown exclusive of tax unless stated otherwise. Standard delivery is free on orders over the published threshold; express delivery is charged separately and confirmed at checkout.'
      ]
    },
    {
      title: 'Returns',
      paragraphs: [
        'Unopened standard equipment can be returned within fourteen days of delivery. Custom or safety-critical items, and items that have been installed or used, cannot be returned. Faulty equipment is replaced or credited in full.'
      ]
    },
    {
      title: 'Liability',
      paragraphs: [
        'We are responsible for carrying out work with reasonable skill and care in line with the agreed scope. We are not liable for indirect or consequential losses arising from delays outside our control, including weather, supply chain and third-party utility delays.'
      ]
    }
  ]
}

const faq: LegalDocument = {
  title: 'Frequently Asked Questions',
  updated: 'Answers to the questions we are asked most often',
  intro: 'If your question is not answered here, our team is happy to talk it through.',
  sections: [],
  faqs: [
    {
      question: 'How quickly can you start a project?',
      answer:
        'Most residential and fit-out work starts within three to four weeks of a signed contract. Large commercial and civil projects run on a longer programme agreed during preconstruction, and we share that programme in writing before you commit.'
    },
    {
      question: 'Do you handle permits and approvals?',
      answer:
        'Yes. Preconstruction includes permit strategy, submission and liaison with the approving authority. Where an authority requires a third-party certification, we coordinate that on your behalf.'
    },
    {
      question: 'What areas do you work in?',
      answer:
        'We operate nationally. Distance affects site logistics and supervision, so for projects outside our core region we scale the crew and logistics plan to match the programme rather than adding travel overhead to your quote.'
    },
    {
      question: 'Can you work on an occupied building?',
      answer:
        'Regularly. Renovation and fit-out work is phased around operating hours, with dust control, noise limits and shutdowns scheduled so the rest of the facility keeps running.'
    },
    {
      question: 'What does a maintenance programme include?',
      answer:
        'An asset audit, a service calendar matched to manufacturer guidance, scheduled inspections, reactive repairs, and a condition report showing what changed and what is recommended next.'
    },
    {
      question: 'How is site safety managed?',
      answer:
        'Every project has a named site supervisor, a written method statement, daily toolbox talks and a documented incident log. Safety inspections run at every phase rather than as a single sign-off at the end.'
    },
    {
      question: 'Do you supply equipment through the shop?',
      answer:
        'Yes. The shop carries tools, safety gear, plant and machinery. Orders over the published threshold ship free, and every item is backed by the same warranty support as work we have installed ourselves.'
    }
  ]
}

export const legalDocuments: Record<string, LegalDocument> = {
  privacy: privacyPolicy,
  terms: termsOfUse,
  faq
}
