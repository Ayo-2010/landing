export interface JobOpening {
  id: number
  title: string
  department: string
  location: string
  type: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

const openings: JobOpening[] = [
  {
    id: 1,
    title: 'Site Supervisor',
    department: 'Operations',
    location: 'Austin, TX',
    type: 'Full Time',
    summary:
      'Own day-to-day site coordination on a commercial project, from morning toolbox talks through to daily handover and progress reporting.',
    responsibilities: [
      'Run daily toolbox talks and keep safety records current',
      'Coordinate trades, deliveries and sequencing against the programme',
      'Report progress, delays and cost movements to the project manager',
      'Sign off work packages before inspection'
    ],
    requirements: [
      '3+ years supervising commercial construction',
      'Working knowledge of OSHA 30 standards',
      'Comfortable reading drawings and take-offs',
      'Valid driver licence'
    ]
  },
  {
    id: 2,
    title: 'Project Engineer',
    department: 'Engineering',
    location: 'Chicago, IL',
    type: 'Full Time',
    summary:
      'Support the project management team with submittals, RFIs, document control and quality assurance across multiple active builds.',
    responsibilities: [
      'Prepare and track submittals and RFIs',
      'Maintain document control and drawing revision logs',
      'Support QA inspections and punch list closeout',
      'Assist with take-offs and quantity checks'
    ],
    requirements: [
      'Degree in civil engineering or construction management, or equivalent field experience',
      '1+ years in a construction office or on site',
      'Proficiency with Bluebeam or similar takeoff software',
      'Strong written communication'
    ]
  },
  {
    id: 3,
    title: 'Skilled Carpenter',
    department: 'Field Crews',
    location: 'Denver, CO',
    type: 'Full Time',
    summary:
      'Formwork, framing and finish carpentry on a mixed residential and light commercial build in our western region.',
    responsibilities: [
      'Form, frame and install per drawings and specs',
      'Read and raise discrepancies before work proceeds',
      'Keep materials staged and site clean',
      'Mentor apprentice carpenters on the crew'
    ],
    requirements: [
      '5+ years commercial carpentry',
      'Own hand tools and ability to maintain them',
      'Comfortable working at height',
      'Reliable attendance'
    ]
  },
  {
    id: 4,
    title: 'Preconstruction Estimator',
    department: 'Preconstruction',
    location: 'Remote / Denver, CO',
    type: 'Full Time',
    summary:
      'Price incoming opportunities with bottom-up quantity take-offs and maintain our cost database as material pricing moves.',
    responsibilities: [
      'Perform quantity take-offs on bid documents',
      'Develop labour and material pricing for proposals',
      'Identify constructability and scope gaps',
      'Support value engineering alternatives'
    ],
    requirements: [
      '3+ years commercial estimating or equivalent',
      'Strong take-off and pricing judgement',
      'Familiar with cost coding and bid package review',
      'Comfortable presenting to clients'
    ]
  },
  {
    id: 5,
    title: 'HVAC Technician',
    department: 'Field Crews',
    location: 'Dallas, TX',
    type: 'Contract',
    summary:
      'Rough-in and commissioning on commercial mechanical systems, working alongside our in-house MEP coordination team.',
    responsibilities: [
      'Install and commission commercial HVAC systems',
      'Perform airflow and controls testing',
      'Coordinate with electrical and plumbing trades',
      'Support warranty response after handover'
    ],
    requirements: [
      'Journeyman HVAC technician',
      'Commercial rooftop experience',
      'EPA certification current',
      'Comfortable with controls troubleshooting'
    ]
  }
]

export default openings
