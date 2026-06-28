import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// ── Types (mirror Sanity schema) ──────────────────────────────────────────────

export interface Stat {
  value: string
  label: string
}

export interface RCMService {
  _id: string
  title: string
  iconKey: string        // Lucide icon name key (replaces emoji field)
  shortDescription: string
  benefits: string[]
  stat: Stat
}

export interface HeroContent {
  badge: string
  headline: string
  subheadline: string
  ctaText: string
  stats: Stat[]
}

// ── GROQ Queries (ready to use once real Sanity project is connected) ─────────

export async function getRCMServices(): Promise<RCMService[]> {
  // Uncomment when Sanity is configured:
  return client.fetch(`*[_type == "rcmService"] | order(order asc)`)
  //return mockData.rcmServices
}

export async function getHeroContent(): Promise<HeroContent> {
  // Uncomment when Sanity is configured:
  return client.fetch(`*[_type == "heroContent"][0]`)
  //return mockData.hero
}

// ── Mock data (mirrors Sanity schema exactly) ─────────────────────────────────

const mockData = {
  hero: {
    headline: 'Revenue Recovery.\nDone Right.',
    subheadline:
      'End-to-end Revenue Cycle Management that reduces denials, accelerates reimbursements, and gives your clinical team back to patient care.',
    ctaText: 'Request a Free RCM Audit',
    badge: 'Trusted by 200+ Health Systems',
    stats: [
      { value: '98.2%', label: 'Clean Claim Rate' },
      { value: '<30 Days', label: 'Avg. AR Days' },
      { value: '$420M+', label: 'Revenue Recovered' },
      { value: '200+', label: 'Health Systems' },
    ],
  },
  rcmServices: [
    {
      _id: '1',
      title: 'Prior Authorization',
      iconKey: 'ShieldCheck',
      shortDescription:
        'Eliminate authorization bottlenecks with AI-assisted pre-auth workflows and real-time payer status tracking.',
      benefits: [
        'Automated eligibility verification',
        'Payer-specific rule engine',
        'Real-time approval tracking',
        'Denial prevention alerts',
      ],
      stat: { value: '72%', label: 'Faster Turnaround' },
    },
    {
      _id: '2',
      title: 'Medical Coding & Auditing',
      iconKey: 'ClipboardList',
      shortDescription:
        'CPC-certified coders backed by AI suggest accurate ICD-10 and CPT codes, reducing undercoding and compliance risk.',
      benefits: [
        'AI-assisted code suggestions',
        'Compliance risk scoring',
        'Specialty-specific expertise',
        'Retrospective audit support',
      ],
      stat: { value: '99.1%', label: 'Coding Accuracy' },
    },
    {
      _id: '3',
      title: 'Claims Management',
      iconKey: 'Send',
      shortDescription:
        'From charge capture to submission, every claim is scrubbed, validated, and tracked for first-pass resolution.',
      benefits: [
        'Automated claim scrubbing',
        'Electronic remittance posting',
        'Rejection root-cause analysis',
        'Payer contract monitoring',
      ],
      stat: { value: '94%', label: 'First-Pass Rate' },
    },
    {
      _id: '4',
      title: 'Denial Management',
      iconKey: 'RefreshCw',
      shortDescription:
        'Systematically overturn denials and prevent recurrence with a data-driven appeals engine and payer trend analysis.',
      benefits: [
        'Automated appeal letters',
        'Denial trend dashboards',
        'Payer behavior analytics',
        '90-day appeal SLA',
      ],
      stat: { value: '88%', label: 'Overturn Rate' },
    },
    {
      _id: '5',
      title: 'Patient Financial Counseling',
      iconKey: 'HandshakeIcon',
      shortDescription:
        'Compassionate financial guidance that improves patient satisfaction and collection rates simultaneously.',
      benefits: [
        'Charity care screening',
        'Payment plan structuring',
        'Price transparency tools',
        'Multilingual support',
      ],
      stat: { value: '41%', label: 'More Patient Payments' },
    },
    {
      _id: '6',
      title: 'Analytics & Reporting',
      iconKey: 'BarChart3',
      shortDescription:
        'Executive dashboards and custom KPI reports that surface revenue opportunities before they become losses.',
      benefits: [
        'Real-time AR aging reports',
        'Payer performance benchmarks',
        'Physician-level productivity',
        'Predictive revenue modeling',
      ],
      stat: { value: '360°', label: 'Revenue Visibility' },
    },
  ],
}
