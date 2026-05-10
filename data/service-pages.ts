/**
 * Content for `/services/[slug]` — swap `heroImage` / `gallery` URLs anytime.
 */

export type ServiceProcessStep = { step: string; description: string };

export type ServicePageContent = {
  slug: string;
  title: string;
  description: string;
  heroLead: string;
  heroImage: string;
  gallery: string[];
  stats: { label: string; value: string }[];
  features: string[];
  process: ServiceProcessStep[];
  technologies: string[];
  industries: string[];
};

export const SERVICE_PAGES: ServicePageContent[] = [
  {
    slug: 'web-development',
    title: 'Custom Web Development',
    description:
      'Enterprise-grade web applications engineered for resilience, measurable performance, and long-term maintainability.',
    heroLead:
      'We blueprint your domains, integrations, and release cadence first — then ship with typed APIs, audited CI pipelines, and production observability that leadership can trust.',
    heroImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
    ],
    stats: [
      { label: 'Engagement flavor', value: 'Fixed / T&M pods' },
      { label: 'Typical MVP window', value: '8–14 weeks' },
      { label: 'Post-launch', value: 'SRE + backlog' },
    ],
    features: [
      'Full-stack TypeScript ecosystems & contract-tested APIs',
      'Responsive UX with WCAG-informed reviews',
      'Cloud-native infra (IaC, secrets, rollback-ready deploys)',
      'Performance budgeting & real-user telemetry',
      'Security baselines aligned to OWASP ASVS-lite',
      'Documentation + handover playbooks',
    ],
    process: [
      {
        step: 'Discovery immersions',
        description: 'Workshops capturing KPIs, risk appetite, stakeholder map, integration inventory.',
      },
      {
        step: 'Architecture & UX',
        description: 'Technical spikes, prototyping, backlog shaping, infra topology sign-off.',
      },
      {
        step: 'Incremental delivery',
        description: 'Sprint rhythms with demoable increments, gated releases, changelog discipline.',
      },
      {
        step: 'Quality & rollout',
        description: 'Load tests, failover drills, phased traffic ramps, SLA monitors.',
      },
      {
        step: 'Scale & optimise',
        description: 'Growth experiments, refactor cadence, KPI reviews, modernization roadmap.',
      },
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
    industries: ['Finance', 'Enterprise SaaS', 'Marketplaces', 'HealthTech', 'Logistics'],
  },
  {
    slug: 'react-development',
    title: 'React.js Development',
    description:
      'Shipping rich client experiences backed by deterministic state management, SSR/ISR strategy, and design-system cohesion.',
    heroLead:
      'From marketing-grade landing velocity to authenticated product surfaces, we unify React ergonomics with platform constraints from day zero.',
    heroImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542831371-29b798f793c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    ],
    stats: [
      { label: 'Rendering strategy', value: 'CSR / SSR / islands' },
      { label: 'Design alignment', value: 'Tokens & Storybook' },
      { label: 'Regression safety', value: 'Visual + e2e smoke' },
    ],
    features: [
      'Component libraries & documentation culture',
      'Server/client boundary clarity for hybrid apps',
      'Bundle stewardship + Core Web Vital guardrails',
      'Progressive enhancement & offline-conscious flows',
      'Integration with GraphQL/BFF/query layers',
      'Accessibility regressions surfaced in CI',
    ],
    process: [
      { step: 'UX + IA lock', description: 'Information architecture synced with telemetry-ready events.' },
      { step: 'Foundations sprint', description: 'Design tokens, layout primitives, data-fetch contracts.' },
      { step: 'Feature slices', description: 'Vertical increments with guarded feature flags.' },
      { step: 'Hardening', description: 'Perf budgets, error boundaries, rollout observability.' },
      { step: 'Enablement', description: 'Contributor guides & lint rules your team inherits.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Playwright'],
    industries: ['SaaS', 'Media', 'EdTech', 'FinTech', 'Internal tools'],
  },
  {
    slug: 'node-development',
    title: 'Node.js Development',
    description:
      'Throughput-friendly services, pragmatic eventing models, and API surfaces designed for auditors and frontend teams alike.',
    heroLead:
      'Microservice, modular monolith, or BFF—we pick the gravitational center that matches traffic, tenancy, and org topology.',
    heroImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    ],
    stats: [
      { label: 'Throughput profile', value: 'Sync / async / CQRS' },
      { label: 'Auth stance', value: 'mTLS-ready patterns' },
      { label: 'Ops hooks', value: 'Tracing-first logging' },
    ],
    features: [
      'Domain-driven modularization & anti-corruption layers',
      'Event streaming + idempotent processors',
      'Rate limiting, backoff, tenancy-aware quotas',
      'Schema evolution & migration discipline',
      'Observability: tracing, profiling, alerting',
      'Security reviews for deserialization & SSRF planes',
    ],
    process: [
      { step: 'Domain mapping', description: 'Bounded contexts, integration seams, SLA targets.' },
      { step: 'API contract pass', description: 'OpenAPI/Protobuf agreements with consumer-driven tests.' },
      { step: 'Vertical slices', description: 'Ship narrowly-scoped endpoints with parity checks.' },
      { step: 'Resilience hardening', description: 'Circuit breakers, bulkheads, synthetic monitors.' },
      { step: 'Operational readiness', description: 'Runbooks, dashboarding, on-call rehearsals.' },
    ],
    technologies: ['Node.js', 'NestJS', 'Fastify', 'PostgreSQL', 'Kafka', 'Redis', 'OpenTelemetry'],
    industries: ['Logistics', 'IoT ingestion', 'Fintech rails', 'Gaming backends', 'Internal platforms'],
  },
  {
    slug: 'ecommerce',
    title: 'E‑Commerce Development',
    description:
      'Composable storefronts — catalog, promotions, fulfilment integrations, experimentation, and CFO-friendly reporting stitched together deliberately.',
    heroLead:
      'We unify merchandising agility with conversion engineering: search relevance, PDP performance, resilient checkout, post-purchase telemetry.',
    heroImage:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80',
    ],
    stats: [
      { label: 'Commerce engines', value: 'Headless / hybrid' },
      { label: 'Payments', value: 'Multi-rail readiness' },
      { label: 'Experimentation', value: 'Flagged journeys' },
    ],
    features: [
      'Product discovery tuned for SEO & structured data',
      'Cart abandonment + lifecycle messaging hooks',
      'Inventory synchronization & edge-case fulfilment flows',
      'Fraud-awareness & PSP reconciliation exports',
      'Personalization scaffolding without brittle plugins',
      'Executive dashboards marrying revenue ↔ releases',
    ],
    process: [
      { step: 'Merchandising discovery', description: 'Taxonomies, attribution, inventory truth sources.' },
      { step: 'Experience sculpting', description: 'Landing funnels + PDP ergonomics anchored to KPIs.' },
      { step: 'Checkout choreography', description: 'Address intelligence, PSP flows, SLA monitoring.' },
      { step: 'Ops wiring', description: 'OMS integrations, SLA monitors, alerting around revenue.' },
      { step: 'Scale & uplift', description: 'Locale expansion, CDN strategy, iterative experiments.' },
    ],
    technologies: ['Next.js', 'Shopify Hydrogen', 'Stripe', 'Medusa', 'PostgreSQL', 'Algolia', 'Kafka'],
    industries: ['DTC Retail', 'B2B catalog', 'Subscription', 'Marketplace entrants', 'Omnichannel'],
  },
  {
    slug: 'pos-billing',
    title: 'POS & Billing Software',
    description:
      'Registers, invoicing hubs, reconciliation — hardened for flaky networks and busy store floors.',
    heroLead:
      'Offline-aware clients, deterministic sync, cashier UX that survives peak footfall + finance-grade audit trails afterwards.',
    heroImage:
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    ],
    stats: [
      { label: 'Deployment', value: 'Web / kiosk / hybrid' },
      { label: 'Sync model', value: 'Conflict-ready queues' },
      { label: 'Finance hooks', value: 'GL-friendly exports' },
    ],
    features: [
      'Offline-first transaction capture + replay safety',
      'Role-based cashier / manager experiences',
      'Peripheral integrations (barcode, scales, drawers)',
      'Tax & tender rule engines with audit snapshots',
      'Shift reporting + discrepancy workflows',
      'Centralized catalog & pricing pushes',
    ],
    process: [
      { step: 'Field research', description: 'Shadow stores, cashier interviews, failover scenarios.' },
      { step: 'Domain modeling', description: 'Tenders, tenders voids, tax jurisdictional quirks.' },
      { step: 'Pilot lane', description: 'Canary stores, anomaly dashboards, cashier training rails.' },
      { step: 'Fleet rollout', description: 'Provisioning, kiosk lockdown profiles, phased cutovers.' },
      { step: 'Lifecycle care', description: 'Nightly reconciliation jobs & finance sign-off loops.' },
    ],
    technologies: ['React', 'Electron', 'Node.js', 'PostgreSQL', 'SQLite', 'gRPC', 'MQTT'],
    industries: ['QSR chains', 'Specialty retail', 'Franchise ops', 'Hospitality', 'Services invoicing'],
  },
  {
    slug: 'seo-marketing',
    title: 'SEO & Digital Marketing',
    description:
      'Technical hygiene + experimentation loops that ladder up from crawl clarity to attributable pipeline impact.',
    heroLead:
      'We unite search engineering, instrumentation, editorial governance, and CRO hypotheses under one prioritized experimentation backlog.',
    heroImage:
      'https://images.unsplash.com/photo-1432888498266-38ff4903b5ac?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533750516459-a7cbbf26fb21?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    ],
    stats: [
      { label: 'Instrumentation', value: 'GA4 + warehouse' },
      { label: 'Experiment cadence', value: 'Bi-weekly tests' },
      { label: 'Editorial stance', value: 'Governed hubs' },
    ],
    features: [
      'Crawl budgeting + render parity diagnostics',
      'Structured data stewardship & SERP diversification',
      'Content architecture tied to funnel modeling',
      'Performance-sensitive landing templates',
      'Lifecycle campaigns with deliverability audits',
      'Exec-ready narrative tying experiments → revenue proxies',
    ],
    process: [
      { step: 'Baseline auditing', description: 'Index coverage, duplication, lighthouse cohorts.' },
      { step: 'North-star metrics', description: 'Shared definitions between growth + product stakeholders.' },
      { step: 'Roadmap stacking', description: 'ICE/RICE prioritized backlog bridging tech + editorial.' },
      { step: 'Ship & measure', description: 'Instrumented launches with guardrail KPIs.' },
      { step: 'Institutional memory', description: 'Playbooks capturing wins, losses, transferable patterns.' },
    ],
    technologies: ['Search Console APIs', 'GA4', 'BigQuery', 'Contentful', 'Next.js', 'Semrush connectors'],
    industries: ['B2B SaaS', 'Publishing', 'E‑commerce SEO', 'Franchises', 'Regulated messaging'],
  },
  {
    slug: 'automation',
    title: 'Business Automation',
    description:
      'Workflow orchestrations that remove swivel-chair operations while keeping humans in the loop on exceptions.',
    heroLead:
      'We blueprint systems of record integrations, SLA monitors, escalation paths — then automate with observability-first runners.',
    heroImage:
      'https://images.unsplash.com/photo-1518186285589-2f7649de83ea?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    ],
    stats: [
      { label: 'Automation profile', value: 'Event / schedule' },
      { label: 'Human gates', value: 'Approvals baked-in' },
      { label: 'Auditability', value: 'Tamper-evident logs' },
    ],
    features: [
      'BPM-style orchestrations with SLA timers',
      'Low-code bridges where velocity beats bespoke',
      'RPA where UI legacy cannot yield APIs quickly',
      'Exception queues with rich context payloads',
      'Access reviews & least-privilege service accounts',
      'Cost-awareness dashboards per workflow family',
    ],
    process: [
      { step: 'Process archaeology', description: 'Shadow teams, bottleneck heatmaps, data lineage.' },
      { step: 'Integration mapping', description: 'Source vs derived fields, duplication removal.' },
      { step: 'Pilot automations', description: 'Narrow-scope wins with rollback levers.' },
      { step: 'Hardening', description: 'Retry semantics, poisoning detection, alerting.' },
      { step: 'Continuous improvement', description: 'Quarterly automation ROI & pruning exercises.' },
    ],
    technologies: ['Temporal', 'n8n', 'Zapier enterprise', 'Node.js workers', 'Salesforce APIs', 'Slack tooling'],
    industries: ['Ops-heavy SaaS', 'Finance back-office', 'Supply chain', 'HR onboarding', 'Support escalations'],
  },
  {
    slug: 'cms-development',
    title: 'CMS Development',
    description:
      'Editorial workflows that respect marketing velocity without sacrificing schema discipline or multi-channel reuse.',
    heroLead:
      'Headless stacks, guarded WordPress, or bespoke admin consoles — modeled around translation, previews, approvals, and compliance.',
    heroImage:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558655146-364adaf1fdd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    ],
    stats: [
      { label: 'Editor ergonomics', value: 'Role-based previews' },
      { label: 'Distribution', value: 'Web / app / email' },
      { label: 'Governance', value: 'Linted content schemas' },
    ],
    features: [
      'Schema-first modelling with translation hooks',
      'Preview environments tethered to feature branches',
      'Asset pipeline optimisation + CDN TTL strategy',
      'Migration accelerators away from brittle legacy CMS',
      'AI-assist integrations with human review mandates',
      'Accessibility linting baked into authoring flows',
    ],
    process: [
      { step: 'Stakeholder interviews', description: 'Publishing cadences, approval chains, KPI alignment.' },
      { step: 'Information design', description: 'Content types, taxonomy, personalization guardrails.' },
      { step: 'Implementation waves', description: 'Front-end surfaces + CMS authoring polish in tandem.' },
      { step: 'Training & rollout', description: 'Editor handbook, QA checklists, support window.' },
      { step: 'Evergreen optimisation', description: 'Quarterly backlog for schema performance + DX.' },
    ],
    technologies: ['Contentful', 'Sanity', 'WordPress', 'Next.js', 'Algolia', 'Cloudinary'],
    industries: ['Global marketing orgs', 'Publishers', 'Developer docs', 'Regulated pharma-lite', 'Franchises'],
  },
];

const bySlug = new Map(SERVICE_PAGES.map((s) => [s.slug, s]));

export function getServicePage(slug: string) {
  return bySlug.get(slug);
}

export function getAllServicePageSlugs() {
  return SERVICE_PAGES.map((s) => s.slug);
}
