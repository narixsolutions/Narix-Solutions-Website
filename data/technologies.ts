/**
 * Placeholder photography — swap URLs or move to `/public` when branding is ready.
 */

export type TechCapability = {
  title: string;
  description: string;
  bullets: string[];
};

export type TechnologyDetail = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  year: string;
  heroImage: string;
  detailImage: string;
  introduction: string;
  capabilities: TechCapability[];
  security: string;
};

export const TECHNOLOGIES: TechnologyDetail[] = [
  {
    slug: 'react-js',
    name: 'React.js',
    category: 'Frontend',
    tagline: 'Component-driven experiences with enterprise-grade resilience.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'We standardize React with TypeScript, strict lint gates, predictable state boundaries, and design tokens so every surface ships accessible, testable, and fast.',
    capabilities: [
      {
        title: 'Progressive Web Apps',
        description:
          'Installable experiences with service-worker caching strategies, foreground sync, and offline fallbacks tuned for flaky networks.',
        bullets: ['App-shell routing', 'Background refresh', 'Push readiness reviews'],
      },
      {
        title: 'Performance & Core Web Vitals',
        description:
          'Hydration budgeting, suspense boundaries, and bundle analytics keep LCP, INP, and CLS inside agreed SLOs.',
        bullets: ['Route-level code splitting', 'Image/CDN hygiene', 'Real-user monitoring'],
      },
      {
        title: 'Design systems & QA',
        description:
          'Composable UI kits plus visual regression suites — designers and engineers iterate without breaking production.',
        bullets: ['Storybook contracts', 'A11y smoke tests', 'Release trains'],
      },
    ],
    security:
      'We treat client bundles as hostile environments: CSP + nonce strategies, sanitized rich text pipelines, dependency review bots, and SRI for third-party widgets. Quarterly pentest-backed threat models cover XSS, prototype pollution, and supply-chain tampering.',
  },
  {
    slug: 'next-js',
    name: 'Next.js',
    category: 'Frontend',
    tagline: 'Full-stack routing, streaming, and edge-ready delivery.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'Next.js anchors our SSR/ISR programs, bridging marketing velocity with secure data access via React Server Components and audited caching policies.',
    capabilities: [
      {
        title: 'Edge & server security',
        description:
          'Principle-of-least-privilege fetching, segmented secrets, hardened middleware auth, WAF-aligned headers.',
        bullets: ['OWASP ASVS checkpoints', 'Per-tenant JWT rotation', 'Rate limits at the edge'],
      },
      {
        title: 'Content & personalization',
        description:
          'Hybrid rendering models let us ship SEO-perfect landing zones while powering authenticated dashboards.',
        bullets: ['Partial prerender experiments', 'Feature flags tied to entitlement', 'Edge config rollouts'],
      },
      {
        title: 'Observability',
        description:
          'Structured traces from server components through API routes into downstream services.',
        bullets: ['OpenTelemetry spans', 'Log sampling rules', 'Synthetic smoke checks'],
      },
    ],
    security:
      'We review every data boundary crossing the server/client split, enforce SSTI protections on dynamic templates, and monitor for secret leakage inside serialized props. Incident runbooks document cache poisoning and deserialization abuse paths.',
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    tagline: 'Type safety as infrastructure for scalable teams.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'Typed contracts between UI, APIs, and data layers shorten reviews, automate refactors, and give security tooling something deterministic to analyze.',
    capabilities: [
      {
        title: 'Contract testing',
        description:
          'Zod/OpenAPI overlays keep runtime payloads aligned with compile-time assumptions.',
        bullets: ['CI schema diff gates', 'Fuzz generators from types', 'Downstream codegen'],
      },
      {
        title: 'Maintainability programs',
        description:
          'Path aliases, barrels-on-demand, incremental builds — large monorepos stay navigable.',
        bullets: ['Project references', 'Consistent tsconfig tiers', 'AST codemods'],
      },
    ],
    security:
      'Strict mode + `exactOptionalPropertyTypes` curtail deserialization bugs; we forbid unsafe `eval` tunnels and track `dangerouslySetInnerHTML` via lint allowlists audited per release.',
  },
  {
    slug: 'tailwind-css',
    name: 'Tailwind CSS',
    category: 'Frontend',
    tagline: 'Utility-first styling with audited design tokens.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af7?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'Tailwind pairs with Radix/Shad primitives so every component inherits motion, focus, and contrast guidelines without one-off CSS sprawl.',
    capabilities: [
      {
        title: 'Theming',
        description:
          'CSS variables synced to brand palettes and dark/light parity checked automatically.',
        bullets: ['Token linting', 'Contrast snapshot tests', 'OKLCH migration paths'],
      },
    ],
    security:
      'We sanitize any dynamic class injections, block arbitrary arbitrary-value abuse in SSR contexts, and keep critical UI states out of URL-driven classnames.',
  },
  {
    slug: 'node-js',
    name: 'Node.js',
    category: 'Backend',
    tagline: 'Throughput-friendly services without sacrificing auditability.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1627398242454-45a6765daa24?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'Node powers our BFFs, webhooks processors, integration workers — always behind structured logging, tenancy guards, and autoscaling cues.',
    capabilities: [
      {
        title: 'API hardening',
        description:
          'Input validation stacks, brute-force backoff, anomaly detection hooks on webhook endpoints.',
        bullets: ['mTLS cohorts', 'Replay protection', 'Per-key quotas'],
      },
      {
        title: 'Operational excellence',
        description:
          'Graceful degradation patterns, noisy-neighbor isolation, deterministic rollouts.',
        bullets: ['Bulkhead threading', 'Redlock patterns', 'SLO dashboards'],
      },
    ],
    security:
      'Dependency scanners block high CVEs pre-merge; runtime protections include ASLR-aware builds, sanitized child processes, and locked-down globals. Quarterly tabletop exercises simulate dependency confusion attacks.',
  },
  {
    slug: 'postgresql',
    name: 'PostgreSQL',
    category: 'Backend',
    tagline: 'Relational correctness with pragmatic scaling paths.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'PostgreSQL remains the backbone for workloads needing ACID, rich indexing, JSON bridges, and row-level policies for multi-tenant isolation.',
    capabilities: [
      {
        title: 'Data resilience',
        description:
          'Streaming replicas, automated failover drills, immutable backups tuned to regulatory retention.',
        bullets: ['Point-in-time recovery', 'Lag monitors', 'PII tagging'],
      },
    ],
    security:
      'Column-level grants, audited roles, parameterized queries exclusively, Vault-managed credentials, quarterly vulnerability scans for extensions. We simulate SQLi payloads in staging mirroring prod parser settings.',
  },
  {
    slug: 'mongodb',
    name: 'MongoDB',
    category: 'Backend',
    tagline: 'Document modeling for fast iteration with guardrails.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1629654298523-21bdde6c6c4c?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'We pair MongoDB with schema validators, TTL policies, and change streams carefully sized for compliance-friendly retention.',
    capabilities: [
      {
        title: 'Operational tooling',
        description:
          'Sharding plans, compaction windows, deterministic migrations with dual-write drills.',
        bullets: ['Oplog dashboards', 'Index advisor reviews', 'Data residency tagging'],
      },
    ],
    security:
      'Field-level encryption for sensitive payloads, audited service accounts, network peering-only access, ransomware-resilient snapshot strategies.',
  },
  {
    slug: 'redis',
    name: 'Redis',
    category: 'Backend',
    tagline: 'Low-latency coordination without becoming a persistence crutch.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'Redis handles session hints, leaderboard rollups, and smart caching — never the sole source of truth for regulated data.',
    capabilities: [
      {
        title: 'Reliability',
        description:
          'Sentinel-aware clients, failover exercises, TTL governance to prevent silent leaks.',
        bullets: ['Memory caps', 'Eviction dashboards', 'Namespaced keys'],
      },
    ],
    security:
      'AUTH + TLS in transit, VPC isolation, command ACLs stripped to least privilege, KEYS/FLUSH bans in prod. Secret rotation drills include Redis sentinel credentials.',
  },
  {
    slug: 'aws',
    name: 'AWS',
    category: 'DevOps & Cloud',
    tagline: 'Landing zones engineered for SOC-friendly operations.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1614064641938-fa4d5e74d5d4?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'We compose VPCs, IAM guardrails, and infrastructure-as-code baselines so every workload inherits monitoring, patching, and data residency controls.',
    capabilities: [
      {
        title: 'Security posture',
        description:
          'AWS Organizations SCPs, Config rules, KMS enveloping, deterministic backup policies.',
        bullets: ['Zero-trust network maps', 'Image signing pipelines', 'Break-glass runbooks'],
      },
      {
        title: 'FinOps coupling',
        description:
          'Workload placement reviews tie instance families to SLA needs — no mystery bills.',
        bullets: ['Commitment trackers', 'Tag enforcement', 'Anomaly budgeting'],
      },
    ],
    security:
      'Continuous CSPM scans, delegated admin boundaries, STS session scoping. Compromise simulations rehearse RDS snapshot exfil pathways and KMS policy drift detection.',
  },
  {
    slug: 'docker',
    name: 'Docker',
    category: 'DevOps & Cloud',
    tagline: 'Repeatable artefacts from laptop to regulated clusters.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'Multi-stage builds, distroless finals, deterministic package locks — images pass policy gates before touching registries.',
    capabilities: [
      {
        title: 'Supply-chain hygiene',
        description:
          'SBOM emission, CVE scoring gates, mirrored base images patched weekly.',
        bullets: ['Rootless builders', 'Notary attestations', 'Runtime syscall profiles'],
      },
    ],
    security:
      'No root defaults, seccomp/AppArmor profiles, read-only filesystems where viable, egress allowlists baked into compose-to-prod manifests.',
  },
  {
    slug: 'cicd',
    name: 'CI/CD',
    category: 'DevOps & Cloud',
    tagline: 'Pipelines that prove security—not just ship code.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'Git-centric workflows orchestrate deterministic builds, approvals, staged rollouts, and automated rollback heuristics.',
    capabilities: [
      {
        title: 'Compliance evidence',
        description:
          'Every deploy carries signed artefact manifests, SARIF ingestion, infra drift detection.',
        bullets: ['Policy-as-code scans', 'Change tickets auto-linked', 'Canary analytics'],
      },
    ],
    security:
      'OIDC federation to clouds (no static keys), branch protections, reproducible artifacts, anomaly detection on pipeline admin roles.',
  },
  {
    slug: 'kubernetes',
    name: 'Kubernetes',
    category: 'DevOps & Cloud',
    tagline: 'Workload orchestration with blast-radius containment.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'Pod security standards, network policies, and service mesh telemetry keep multi-tenant clusters predictable.',
    capabilities: [
      {
        title: 'Resilience engineering',
        description:
          'HPAs tied to custom metrics, PDBs, chaos drills focused on etcd latency and DNS storms.',
        bullets: ['Admission webhooks', 'GitOps reconcilers', 'Cost-aware autoscaling'],
      },
    ],
    security:
      'RBAC least privilege, sealed secrets, runtime threat detection (Falco-style), continuous kube-bench compliance. We rehearse cluster compromise isolations quarterly.',
  },
  {
    slug: 'git',
    name: 'Git',
    category: 'Tools & Platforms',
    tagline: 'Traceable history for auditors and engineers alike.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1517292982628-5c5c7b5ea5c4?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'Signed commits where required, protected environments, templated workflows, and automated housekeeping bots keep repos audit friendly.',
    capabilities: [
      {
        title: 'Engineering workflows',
        description:
          'Reusable PR templates, CODEOWNERS maps, and merge queues keep large teams unblocked without bypassing policy.',
        bullets: ['Release branches', 'Hotfix playbooks', 'Artifact promotion hooks'],
      },
    ],
    security:
      'Org-level 2FA, secret scanning before merge, dependency review integrations, anomaly alerts on privileged token usage.',
  },
  {
    slug: 'stripe',
    name: 'Stripe',
    category: 'Tools & Platforms',
    tagline: 'Payments with PCI-ready integration patterns.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1571715266628-cc0198ebbb33?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'We orchestrate intents, mandates, Radar rules, reconciliation exports, and local payment method expansion playbooks.',
    capabilities: [
      {
        title: 'Fraud & compliance',
        description:
          '3DS journeys, webhook signing verification, Stripe Sigma audits for finance teams.',
        bullets: ['Refunds SLA monitors', 'Payout alerting', 'KYC escalation flows'],
      },
    ],
    security:
      'No PAN touches our servers — Elements + Connect patterns, strict idempotency keys, replay-resistant webhooks. Pen tests include race-condition double capture scenarios.',
  },
  {
    slug: 'vercel',
    name: 'Vercel',
    category: 'Tools & Platforms',
    tagline: 'Edge-ready hosting with sane preview workflows.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'Preview deployments per PR with auth barriers, observability exporters, budget alerts, guard-railed environment variables.',
    capabilities: [
      {
        title: 'Progressive delivery',
        description:
          'Edge functions for personalization, ISR for content surfaces, and middleware for auth gating on experimental routes.',
        bullets: ['Preview data scrubbing', 'Canary headers', 'Cost caps per workspace'],
      },
    ],
    security:
      'Scoped tokens, SSO on dashboards, sanitized preview datasets, egress policies for preview lambdas mimicking prod restrictions.',
  },
  {
    slug: 'figma',
    name: 'Figma',
    category: 'Tools & Platforms',
    tagline: 'DesignOps synchronized with shipped components.',
    year: '2023',
    heroImage:
      'https://images.unsplash.com/photo-1558655146-364adaf1fdd9?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    introduction:
      'Tokens, variants, and dev-mode specs flow into codegen + Storybook, reducing ambiguity before implementation.',
    capabilities: [
      {
        title: 'Design-to-code fidelity',
        description:
          'Component specs, spacing tokens, and motion guidelines sync with ESLint/stylelint parity checks downstream.',
        bullets: ['Token diff audits', 'Snapshot against Figma MCP exports', 'A11y annotation pass'],
      },
    ],
    security:
      'Workspace RBAC reviews, sanitized plugin allowlists, data residency settings aligned with NDAs.',
  },
];

const techMap = new Map(TECHNOLOGIES.map((t) => [t.slug, t]));

export function getTechnology(slug: string) {
  return techMap.get(slug);
}

export function getTechnologySlugs() {
  return TECHNOLOGIES.map((t) => t.slug);
}

/** Group technologies for listing page */
export function getTechnologiesByCategory(): { category: string; items: TechnologyDetail[] }[] {
  const map = new Map<string, TechnologyDetail[]>();
  for (const t of TECHNOLOGIES) {
    const bucket = map.get(t.category) ?? [];
    bucket.push(t);
    map.set(t.category, bucket);
  }
  return Array.from(map.entries()).map(([category, items]) => ({ category, items }));
}
