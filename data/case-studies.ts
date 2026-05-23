/**
 * Replace `heroImage` / `gallery` URLs with your own assets when ready.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  /** Card + meta description */
  description: string;
  heroImage: string;
  /** Shown inline on detail page — swap with product screenshots later */
  gallery: string[];
  technologies: string[];
  /** Highlights for listing cards */
  highlights: Record<string, string>;
  overview: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  timeline: string;
  team: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'ecommerce-platform',
    title: 'Fashion Store with Custom Shopping Experience',
    category: 'E-Commerce',
    description:
      'Custom fashion e-commerce storefront with streamlined checkout, product discovery, and conversion-focused UX.',
    heroImage:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: {
      'Conversion Growth': '+180%',
      Traffic: '+120%',
      Revenue: '+95%',
    },
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    overview:
      'We built a custom fashion e-commerce experience with modern product pages, optimized checkout, and admin tools the client team could manage without developer support.',
    challenge:
      'Legacy storefronts struggled with Core Web Vitals, mobile parity, multi‑currency taxation, and limited experimentation. Conversion data lived in spreadsheets instead of actionable dashboards.',
    solution:
      'A Next.js storefront with edge‑cached catalog pages, Stripe Connect–ready payments, inventory sync, and personalization hooks. Postgres models orders and promotions; Redis powers sessions and rate limits; observability ties revenue to releases.',
    metrics: [
      { label: 'Revenue growth', value: '+250%' },
      { label: 'Traffic increase', value: '+180%' },
      { label: 'Conversion rate', value: '+45%' },
      { label: 'LCP improvement', value: '−60%' },
    ],
    timeline: '6 months',
    team: '8 engineers (full‑stack, design, QA)',
  },
  {
    slug: 'saas-platform',
    title: 'Project Management Dashboard for Remote Teams',
    category: 'SaaS Platform',
    description:
      'Collaboration workspace with real-time updates, role-based access, and reporting for distributed teams.',
    heroImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: {
      'Active Users': '50K+',
      Uptime: '99.9%',
      Performance: '+45%',
    },
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'WebSockets', 'AWS', 'Docker'],
    overview:
      'A project management dashboard built for remote teams with live boards, task workflows, permissions, and reporting tools leadership could rely on.',
    challenge:
      'Incumbents felt heavy on mobile, weak on realtime, and brittle for enterprises that require strict RBAC plus exportable histories.',
    solution:
      'Event‑sourced activity feeds on Redis streams, websocket fan‑out clusters, SOC2‑friendly tenancy boundaries, optimistic UI slices, and a public Graph for integrations.',
    metrics: [
      { label: 'Active users', value: '50K+' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Perf lift', value: '+60%' },
      { label: 'Satisfaction', value: '4.7★' },
    ],
    timeline: '9 months',
    team: '12 engineers + design systems pod',
  },
  {
    slug: 'mobile-app',
    title: 'Clinic Management & Appointment Platform',
    category: 'Healthcare',
    description:
      'Appointment booking, patient scheduling, clinic workflows, and provider tools in one secure platform.',
    heroImage:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516549655169-ce43d010a5c9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: {
      'Monthly Bookings': '15K+',
      Rating: '4.8★',
      Retention: '82%',
    },
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS KMS', 'WebRTC'],
    overview:
      'A clinic management and appointment platform helping healthcare teams manage schedules, bookings, and patient communication in one place.',
    challenge:
      'Strict compliance timelines, flaky rural connectivity, and complex device management across BYOD fleets.',
    solution:
      'Offline‑first caches, certificate pinning, end‑to‑end encrypted channels, break‑glass escalation paths, and automated policy checks baked into CI.',
    metrics: [
      { label: 'Active adoption', value: '15K+' },
      { label: 'App rating', value: '4.8★' },
      { label: '90‑day retention', value: '85%' },
      { label: 'Audit findings', value: '0 critical' },
    ],
    timeline: '8 months',
    team: '10 mobile + backend engineers',
  },
  {
    slug: 'dashboard-analytics',
    title: 'Real‑Time Operational Analytics Cockpit',
    category: 'Analytics',
    description:
      'Sub‑second slicing across billions of streamed events with guard‑railed self‑serve dashboards.',
    heroImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556155092-490a955ba734?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: {
      Events: '100M+/day',
      Latency: '<100ms',
      Accuracy: '99.9%',
    },
    technologies: ['React', 'D3.js', 'Node.js', 'ClickHouse', 'Kafka', 'Redis', 'AWS'],
    overview:
      'Leadership‑grade KPIs stitched from storefront, logistics, CRM, and support signals with granular access layers.',
    challenge:
      'Burst traffic, heterogeneous schemas, noisy third‑party payloads, and the need for near‑linear cost scaling.',
    solution:
      'Stream ingestion with schema contracts, columnar storage + materialized rollups, query planner hints, and progressive disclosure UI that keeps novices safe.',
    metrics: [
      { label: 'Events / day', value: '100M+' },
      { label: 'p95 query', value: '<100ms' },
      { label: 'Model accuracy', value: '99.9%' },
      { label: 'Platform uptime', value: '99.98%' },
    ],
    timeline: '7 months',
    team: '9 data + product engineers',
  },
  {
    slug: 'marketplace',
    title: 'Multi‑Vendor Marketplace Operating System',
    category: 'Marketplace',
    description:
      'Seller onboarding, payouts, moderation, discovery, and risk scoring for regulated categories.',
    heroImage:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559136555-9303baea7485?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: {
      GMV: '$10M+',
      Sellers: '5K+',
      Checkout: '<2s median',
    },
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Stripe Connect', 'AWS'],
    overview:
      'Unified buyer + seller console with escrow flows, SLA monitors, taxonomy governance, and mobile‑first checkout.',
    challenge:
      'Disputes, fraud rings, multilingual catalog quality, and the need for rapid vertical experiments.',
    solution:
      'Modular bounded contexts behind GraphQL gateways, deterministic risk scoring tiers, multilingual search synonyms, and feature flags powering vertical pilots.',
    metrics: [
      { label: 'GMV', value: '$10M+' },
      { label: 'Active sellers', value: '5K+' },
      { label: 'Monthly txns', value: '1M+' },
      { label: 'Chargeback ratio', value: '−42%' },
    ],
    timeline: '10 months',
    team: '15 engineers across platform squads',
  },
  {
    slug: 'pos-system',
    title: 'Resilient POS Network for Omnichannel Retail',
    category: 'Retail',
    description:
      'Offline‑first terminals, realtime stock sync across 200+ doors, and supply telemetry.',
    heroImage:
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: {
      Stores: '200+',
      Txns: '5M+/mo',
      Efficiency: '+75%',
    },
    technologies: ['React', 'Electron', 'Node.js', 'PostgreSQL', 'SQLite', 'gRPC'],
    overview:
      'Registers stay usable during WAN brownouts, sync intelligently, and feed a central merchandising brain.',
    challenge:
      'Legacy registers, inconsistent barcodes, peak holiday loads, and staff training variance.',
    solution:
      'Offline queues with conflict resolution, edge ML for shrink hints, hardware abstraction layer, and fleet observability with playbooks.',
    metrics: [
      { label: 'Stores live', value: '200+' },
      { label: 'Monthly txns', value: '5M+' },
      { label: 'Labor efficiency', value: '+75%' },
      { label: 'Register uptime', value: '99.9%' },
    ],
    timeline: '6 months',
    team: '8 engineers + field ops',
  },
];

const bySlug = new Map(CASE_STUDIES.map((c) => [c.slug, c]));

export function getCaseStudy(slug: string) {
  return bySlug.get(slug);
}

export function getAllCaseStudySlugs() {
  return CASE_STUDIES.map((c) => c.slug);
}
