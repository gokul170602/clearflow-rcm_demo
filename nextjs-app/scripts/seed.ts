import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN!, // needs write token
  useCdn: false,
})

async function seed() {
  console.log('Seeding Hero Content...')
  await client.createOrReplace({
    _id: 'heroContent',
    _type: 'heroContent',
    badge: 'Trusted by 200+ Health Systems',
    headline: 'Revenue Recovery.\nDone Right.',
    subheadline:
      'End-to-end Revenue Cycle Management that reduces denials, accelerates reimbursements, and gives your clinical team back to patient care.',
    ctaText: 'Request a Free RCM Audit',
    stats: [
      { _key: 'stat1', value: '98.2%', label: 'Clean Claim Rate' },
      { _key: 'stat2', value: '<30 Days', label: 'Avg. AR Days' },
      { _key: 'stat3', value: '$420M+', label: 'Revenue Recovered' },
      { _key: 'stat4', value: '200+', label: 'Health Systems' },
    ],
  })

  console.log('Seeding RCM Services...')
  const services = [
    {
      _id: 'rcmService1',
      _type: 'rcmService',
      title: 'Prior Authorization',
      iconKey: 'ShieldCheck',
      shortDescription: 'Eliminate authorization bottlenecks with AI-assisted pre-auth workflows and real-time payer status tracking.',
      order: 1,
      benefits: ['Automated eligibility verification', 'Payer-specific rule engine', 'Real-time approval tracking', 'Denial prevention alerts'],
      stat: { value: '72%', label: 'Faster Turnaround' },
    },
    {
      _id: 'rcmService2',
      _type: 'rcmService',
      title: 'Medical Coding & Auditing',
      iconKey: 'ClipboardList',
      shortDescription: 'CPC-certified coders backed by AI suggest accurate ICD-10 and CPT codes, reducing undercoding and compliance risk.',
      order: 2,
      benefits: ['AI-assisted code suggestions', 'Compliance risk scoring', 'Specialty-specific expertise', 'Retrospective audit support'],
      stat: { value: '99.1%', label: 'Coding Accuracy' },
    },
    {
      _id: 'rcmService3',
      _type: 'rcmService',
      title: 'Claims Management',
      iconKey: 'Send',
      shortDescription: 'From charge capture to submission, every claim is scrubbed, validated, and tracked for first-pass resolution.',
      order: 3,
      benefits: ['Automated claim scrubbing', 'Electronic remittance posting', 'Rejection root-cause analysis', 'Payer contract monitoring'],
      stat: { value: '94%', label: 'First-Pass Rate' },
    },
    {
      _id: 'rcmService4',
      _type: 'rcmService',
      title: 'Denial Management',
      iconKey: 'RefreshCw',
      shortDescription: 'Systematically overturn denials and prevent recurrence with a data-driven appeals engine and payer trend analysis.',
      order: 4,
      benefits: ['Automated appeal letters', 'Denial trend dashboards', 'Payer behavior analytics', '90-day appeal SLA'],
      stat: { value: '88%', label: 'Overturn Rate' },
    },
    {
      _id: 'rcmService5',
      _type: 'rcmService',
      title: 'Patient Financial Counseling',
      iconKey: 'HandshakeIcon',
      shortDescription: 'Compassionate financial guidance that improves patient satisfaction and collection rates simultaneously.',
      order: 5,
      benefits: ['Charity care screening', 'Payment plan structuring', 'Price transparency tools', 'Multilingual support'],
      stat: { value: '41%', label: 'More Patient Payments' },
    },
    {
      _id: 'rcmService6',
      _type: 'rcmService',
      title: 'Analytics & Reporting',
      iconKey: 'BarChart3',
      shortDescription: 'Executive dashboards and custom KPI reports that surface revenue opportunities before they become losses.',
      order: 6,
      benefits: ['Real-time AR aging reports', 'Payer performance benchmarks', 'Physician-level productivity', 'Predictive revenue modeling'],
      stat: { value: '360°', label: 'Revenue Visibility' },
    },
  ]

  for (const service of services) {
    await client.createOrReplace(service)
    console.log(`  ✔ ${service.title}`)
  }

  console.log('✅ Done! All content seeded.')
}

seed().catch(console.error)