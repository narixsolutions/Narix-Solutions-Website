/**
 * Technology catalog — hero + detail imagery per capability (see each entry below).
 */

export type TechCapability = {
  title: string;
  description: string;
  bullets: string[];
};

export type TechnologyCta = {
  heading: string;
  description: string;
  buttonLabel: string;
};

export type TechnologyDetail = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  year: string;
  heroImage: string;
  detailImage: string;
  /** object-fit strategy — contain preserves logos/banners; cover for photo heroes */
  heroImageFit?: 'cover' | 'contain';
  detailImageFit?: 'cover' | 'contain';
  introduction: string;
  capabilities: TechCapability[];
  security: string;
  cta: TechnologyCta;
};

export const TECHNOLOGIES: TechnologyDetail[] = [
  {
    slug: 'react-js',
    name: 'React.js',
    category: 'Frontend',
    tagline:
      'Production-ready component architecture for scalable SaaS interfaces, enterprise dashboards, and high-interaction web applications.',
    year: '2024',
    heroImage: 'https://xpertlab.com/wp-content/uploads/2024/10/reactjs_img-copy.jpg',
    detailImage: 'https://www.synapseindia.com/assets_newwebsite/images/tc_reactjs_banner.jpg',
    heroImageFit: 'contain',
    detailImageFit: 'contain',
    introduction:
      'React powers the user interface layer for modern digital products — from single-page applications and admin consoles to real-time collaboration tools and progressive web apps. Its component model, mature ecosystem, and strong hiring market make it a default choice for startups building MVPs and enterprises modernizing legacy frontends. We implement React with TypeScript, predictable state boundaries, and performance budgets so teams ship faster without accumulating UI debt. For SEO-critical marketing surfaces and content-heavy platforms, we pair React with Next.js to combine interactivity with server rendering — React remains the UI engine; Next.js handles routing, rendering strategy, and crawlability.',
    capabilities: [
      {
        title: 'SPA & progressive web applications',
        description:
          'Single-page architectures with route-level code splitting, installable PWAs, and offline-aware flows for field teams and mobile-first users.',
        bullets: [
          'App-shell and client-side routing patterns',
          'Service worker caching strategies',
          'Install prompts and push-notification readiness',
          'Foreground sync for unreliable networks',
        ],
      },
      {
        title: 'Component systems & design systems',
        description:
          'Reusable UI primitives aligned to brand tokens — reducing inconsistency across product squads and accelerating feature delivery.',
        bullets: [
          'Composable component libraries',
          'Storybook-driven documentation',
          'Accessibility-first interaction patterns',
          'Design-to-code parity with Figma tokens',
        ],
      },
      {
        title: 'State management & real-time interfaces',
        description:
          'Structured data flow for complex dashboards, multi-step workflows, and live updates without unpredictable re-renders.',
        bullets: [
          'Context, hooks, and selective global state',
          'Server-state libraries for API synchronization',
          'WebSocket and SSE-driven live views',
          'Optimistic UI for responsive experiences',
        ],
      },
      {
        title: 'Performance & enterprise dashboards',
        description:
          'Large data surfaces, charts, and role-based views optimized for Core Web Vitals and sustained daily usage.',
        bullets: [
          'Memoization and virtualization for heavy tables',
          'Suspense boundaries and lazy-loaded routes',
          'Bundle analysis and dependency discipline',
          'Role-based layouts for admin and ops teams',
        ],
      },
    ],
    security:
      'We treat the browser as a hostile runtime: strict Content Security Policy, sanitized rich-text pipelines, dependency review in CI, and secrets kept off the client. Component boundaries isolate privileged actions behind authenticated APIs. Performance monitoring and error tracking are wired from day one so regressions surface before users report them. Deployment workflows include preview environments, visual regression checks, and staged rollouts aligned to your release cadence.',
    cta: {
      heading: 'Need a scalable React architecture?',
      description:
        'We design component systems, state models, and delivery pipelines sized for your product stage — from MVP to multi-team scale.',
      buttonLabel: 'Book a React consultation',
    },
  },
  {
    slug: 'next-js',
    name: 'Next.js',
    category: 'Frontend',
    tagline:
      'Full-stack React framework for SEO-driven websites, high-performance storefronts, and server-aware product experiences.',
    year: '2024',
    heroImage: 'https://www.synapseindia.com/assets_newwebsite/images/nextjs-header-banner.png',
    detailImage: 'https://infynno.com/wp-content/uploads/2021/12/Next-js.png',
    heroImageFit: 'contain',
    detailImageFit: 'contain',
    introduction:
      'Next.js extends React with server-side rendering (SSR), static site generation (SSG), and edge-ready delivery — the stack we recommend when discoverability, performance, and content velocity matter as much as interactivity. Enterprises adopt Next.js for marketing sites, documentation hubs, e-commerce storefronts, and authenticated portals that share one codebase. The App Router unifies layouts, loading states, and data fetching with clearer boundaries between server and client components. Edge rendering reduces latency for global audiences; ISR keeps content fresh without rebuilding entire sites. NarixSolutions uses Next.js where SEO, time-to-first-byte, and full-stack React productivity must coexist.',
    capabilities: [
      {
        title: 'SSR, SSG & SEO execution',
        description:
          'Rendering strategies matched to content freshness, crawl requirements, and conversion-critical landing pages.',
        bullets: [
          'Server-rendered pages for dynamic SEO metadata',
          'Static generation for stable marketing content',
          'Structured data and sitemap integration',
          'Core Web Vitals optimization on LCP routes',
        ],
      },
      {
        title: 'App Router & full-stack React',
        description:
          'Co-located routes, layouts, and server actions that shorten the path from API to UI without fragmented repos.',
        bullets: [
          'Nested layouts and parallel routes',
          'Server Components for data-heavy views',
          'Streaming and partial hydration patterns',
          'API routes and backend-for-frontend layers',
        ],
      },
      {
        title: 'Edge rendering & global delivery',
        description:
          'Low-latency personalization and auth gating at the edge for distributed user bases.',
        bullets: [
          'Edge middleware for geo and auth rules',
          'CDN-aligned asset and image pipelines',
          'Incremental Static Regeneration (ISR)',
          'Preview deployments per pull request',
        ],
      },
      {
        title: 'Enterprise storefronts & portals',
        description:
          'High-traffic commerce and customer portals with cart flows, entitlements, and integrated CMS content.',
        bullets: [
          'Headless commerce integrations',
          'Authenticated customer dashboards',
          'Localization and multi-region routing',
          'Observability across server and client traces',
        ],
      },
    ],
    security:
      'We audit every server/client data boundary, enforce authenticated fetches for protected segments, and apply security headers consistently via middleware. Environment secrets never ship to the browser bundle. Caching policies are documented to prevent stale personalized content leaking across sessions. CI/CD runs type checks, lint gates, and smoke tests before promotion; production rollbacks are rehearsed with tagged releases.',
    cta: {
      heading: 'Planning a Next.js product launch?',
      description:
        'We map rendering strategy, content architecture, and deployment workflow to your SEO and performance targets.',
      buttonLabel: 'Discuss Next.js delivery',
    },
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    tagline:
      'Typed application layers that improve maintainability, reduce production defects, and scale engineering teams with confidence.',
    year: '2024',
    heroImage:
      'https://cdn.dribbble.com/userupload/21056067/file/original-250f5994e55b6528835f5ce2dd91acb5.png?resize=400x0',
    detailImage: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Typescript_fullstack_logo.png',
    heroImageFit: 'contain',
    detailImageFit: 'contain',
    introduction:
      'TypeScript brings static typing to JavaScript codebases — catching integration errors at compile time instead of in production. Startups use it to move faster with fewer regressions; enterprises use it to onboard engineers into large monorepos without losing context. Typed contracts between UI, APIs, and databases make refactors predictable and reviews more substantive. We standardize strict compiler settings, shared type packages, and schema-aligned models so frontend and backend teams speak the same language. Long-term, TypeScript reduces operational overhead from hotfixes and undocumented object shapes.',
    capabilities: [
      {
        title: 'Type safety across the stack',
        description:
          'End-to-end types from database models to UI props — fewer runtime surprises and clearer API contracts.',
        bullets: [
          'Strict mode and disciplined any-usage policies',
          'Shared types for API request/response shapes',
          'Runtime validation paired with static types',
          'Codegen from OpenAPI and GraphQL schemas',
        ],
      },
      {
        title: 'Enterprise maintainability',
        description:
          'Codebases that remain navigable as features, teams, and integrations grow.',
        bullets: [
          'Modular project references in monorepos',
          'Documented domain types and enums',
          'Automated refactors with AST tooling',
          'Consistent lint and format gates in CI',
        ],
      },
      {
        title: 'Developer productivity',
        description:
          'IDE intelligence, autocomplete, and inline documentation that accelerate delivery without sacrificing rigor.',
        bullets: [
          'Faster onboarding for new engineers',
          'Self-documenting interfaces between modules',
          'Safer dependency upgrades with type diffs',
          'Reduced debugging time on integration bugs',
        ],
      },
      {
        title: 'Scalable codebase governance',
        description:
          'Standards that keep multi-squad products aligned on patterns, naming, and error handling.',
        bullets: [
          'Typed error hierarchies for APIs',
          'Branded types for IDs and currencies',
          'Feature flags and config typing',
          'Review checklists tied to type coverage',
        ],
      },
    ],
    security:
      'Typed inputs reduce deserialization and shape-mismatch vulnerabilities; we pair compile-time checks with runtime validators at system boundaries. Dangerous patterns (`eval`, unchecked JSON parsing) are blocked via lint policy. CI enforces type-check on every merge; release branches require green builds before deploy. Secrets and credentials are never typed into shared client packages.',
    cta: {
      heading: 'Standardizing TypeScript across your product?',
      description:
        'We help teams adopt strict typing, shared contracts, and CI governance without slowing delivery.',
      buttonLabel: 'Schedule a TypeScript review',
    },
  },
  {
    slug: 'tailwind-css',
    name: 'Tailwind CSS',
    category: 'Frontend',
    tagline:
      'Utility-first styling for rapid UI delivery, design consistency, and responsive interfaces at scale.',
    year: '2024',
    heroImage:
      'https://substackcdn.com/image/fetch/$s_!PULF!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fwonderingaboutai.substack.com%2Fapi%2Fv1%2Fpost_preview%2F187780760%2Ftwitter.jpg%3Fversion%3D4',
    detailImage: 'https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png',
    heroImageFit: 'cover',
    detailImageFit: 'contain',
    introduction:
      'Tailwind CSS accelerates interface development by composing designs from a constrained utility vocabulary tied to design tokens. Product teams ship landing pages, dashboards, and marketing sites faster while preserving visual consistency across squads. Unlike ad-hoc CSS files, Tailwind keeps spacing, typography, and color aligned to a single source of truth — critical when multiple developers touch the same product. We combine Tailwind with accessible component primitives so focus states, contrast, and responsive breakpoints are enforced by default. For agencies and SaaS companies, Tailwind shortens design-to-production cycles without sacrificing maintainability.',
    capabilities: [
      {
        title: 'Utility-first UI velocity',
        description:
          'Iterate on layouts and components in markup without context-switching into separate stylesheet files.',
        bullets: [
          'Rapid prototyping of marketing and app screens',
          'Consistent spacing and typography scales',
          'Dark mode and theme variants via CSS variables',
          'Purge-optimized production bundles',
        ],
      },
      {
        title: 'Design consistency at scale',
        description:
          'Token-driven theming that mirrors brand guidelines and reduces one-off styling debt.',
        bullets: [
          'Extended theme config for brand palettes',
          'Reusable component classes with @apply discipline',
          'Alignment with Figma token exports',
          'Cross-page visual parity audits',
        ],
      },
      {
        title: 'Responsive & accessible interfaces',
        description:
          'Mobile-first breakpoints and interaction states built into everyday development habits.',
        bullets: [
          'Breakpoint-driven layout composition',
          'Focus-visible and contrast-conscious defaults',
          'Container queries for complex dashboards',
          'Motion preferences respected via utilities',
        ],
      },
      {
        title: 'Integration with modern React stacks',
        description:
          'Tailwind pairs naturally with Next.js, component libraries, and design systems for end-to-end delivery.',
        bullets: [
          'shadcn/Radix-compatible styling patterns',
          'Storybook visual regression hooks',
          'Design-system documentation sync',
          'Performance-conscious class strategies',
        ],
      },
    ],
    security:
      'Dynamic class composition is sanitized to prevent injection via user-controlled strings in SSR contexts. Third-party plugins are reviewed before adoption. Production builds strip unused styles to minimize attack surface and payload size. We avoid exposing sensitive state through CSS-only visibility tricks on security-critical UI.',
    cta: {
      heading: 'Building a consistent UI system with Tailwind?',
      description:
        'We define token architecture, component conventions, and delivery workflows that keep design and engineering aligned.',
      buttonLabel: 'Talk to our frontend team',
    },
  },
  {
    slug: 'node-js',
    name: 'Node.js',
    category: 'Backend',
    tagline:
      'Event-driven backend runtime for scalable APIs, real-time systems, and integration-heavy product platforms.',
    year: '2024',
    heroImage: 'https://i.pinimg.com/736x/61/15/fd/6115fdd66b649d2f99ee6eb0fb801d88.jpg',
    detailImage: 'https://www.fastcomet.com/blog/wp-content/uploads/2021/03/10-nodejs-frameworks-in-2021.png',
    heroImageFit: 'cover',
    detailImageFit: 'contain',
    introduction:
      'Node.js enables JavaScript on the server — ideal for I/O-heavy workloads, JSON-centric APIs, and teams that want one language across the stack. Its non-blocking architecture handles concurrent connections efficiently, making it a strong fit for SaaS backends, webhooks, streaming dashboards, and microservice meshes. Startups choose Node for speed of iteration; enterprises use it for BFF layers, integration hubs, and services that must talk to many third-party APIs. We architect Node services with clear module boundaries, structured logging, horizontal scaling paths, and observability hooks so production behavior is measurable, not guessed.',
    capabilities: [
      {
        title: 'Event-driven APIs & high concurrency',
        description:
          'REST and GraphQL services designed for throughput, idempotency, and predictable latency under load.',
        bullets: [
          'Non-blocking request handling patterns',
          'Rate limiting and tenant-aware quotas',
          'Pagination and cursor-based list APIs',
          'Graceful shutdown and health probes',
        ],
      },
      {
        title: 'Microservices & API orchestration',
        description:
          'Decomposed services with defined contracts — or pragmatic modular monoliths when team size favors simplicity.',
        bullets: [
          'Service boundaries aligned to business domains',
          'Inter-service auth and correlation IDs',
          'Saga and compensation patterns where needed',
          'Versioned API rollout strategies',
        ],
      },
      {
        title: 'WebSockets & real-time systems',
        description:
          'Live notifications, chat, presence, and collaborative editing backed by durable connection management.',
        bullets: [
          'Socket clustering and sticky-session planning',
          'Backpressure and reconnect strategies',
          'Event broadcasting across instances',
          'Integration with Redis pub/sub',
        ],
      },
      {
        title: 'Queues & background processing',
        description:
          'Async jobs for email, billing, imports, and long-running workflows without blocking user requests.',
        bullets: [
          'Worker pools with retry and dead-letter queues',
          'Scheduled jobs and cron orchestration',
          'Webhook ingestion and signature verification',
          'Idempotent job handlers for finance flows',
        ],
      },
    ],
    security:
      'Input validation on every route, parameterized data access, secrets via environment managers, and dependency scanning in CI. Services run with least-privilege IAM roles in cloud environments. Structured audit logs capture admin actions and auth events. We load-test auth and payment paths before launch and monitor error budgets post-release.',
    cta: {
      heading: 'Planning a cloud-native Node.js backend?',
      description:
        'We design API layers, real-time features, and deployment topology matched to your scale and compliance needs.',
      buttonLabel: 'Book a backend architecture session',
    },
  },
  {
    slug: 'postgresql',
    name: 'PostgreSQL',
    category: 'Backend',
    tagline:
      'ACID-compliant relational database for enterprise data integrity, complex reporting, and multi-tenant SaaS platforms.',
    year: '2024',
    heroImage: 'https://www.opensourceforu.com/wp-content/uploads/2025/09/PostgreSQL-database.jpg',
    detailImage:
      'https://res.cloudinary.com/dx2orqjv8/images/f_webp,q_auto:best/v1696344691/kb/Featured-1_34261013a2/Featured-1_34261013a2.png?_i=AA',
    heroImageFit: 'cover',
    detailImageFit: 'contain',
    introduction:
      'PostgreSQL is the default relational store when data correctness, joins, and transactional guarantees matter. It powers billing systems, operational dashboards, multi-tenant SaaS cores, and analytics pipelines that require consistent snapshots. Its extension ecosystem (PostGIS, pgvector, logical replication) keeps it relevant as products evolve. We model schemas for long-term clarity — normalized where integrity matters, denormalized selectively for read performance — with migrations, indexing strategy, and row-level security for tenant isolation. For teams outgrowing spreadsheets or NoSQL prototypes, PostgreSQL provides a stable foundation that finance and operations teams can trust.',
    capabilities: [
      {
        title: 'ACID transactions & data integrity',
        description:
          'Financial, inventory, and entitlement flows that must not partially commit under failure or concurrency.',
        bullets: [
          'Transaction boundaries around critical operations',
          'Constraints, foreign keys, and check rules',
          'Isolation level selection per workload',
          'Deadlock detection and retry policies',
        ],
      },
      {
        title: 'Complex relational modeling',
        description:
          'Normalized schemas for multi-entity domains — subscriptions, orders, permissions, and audit trails.',
        bullets: [
          'Multi-tenant schemas with row-level security',
          'Historical tables and soft-delete patterns',
          'JSONB columns where flexibility is required',
          'Partitioning for large time-series tables',
        ],
      },
      {
        title: 'Reporting & analytics queries',
        description:
          'Operational reports and executive dashboards without exporting fragile CSV pipelines.',
        bullets: [
          'Materialized views for heavy aggregates',
          'Window functions for cohort analysis',
          'Read replicas for reporting workloads',
          'Scheduled refresh and staleness SLAs',
        ],
      },
      {
        title: 'Query optimization & scale planning',
        description:
          'Indexes, explain plans, and connection pooling tuned to real production traffic — not benchmarks alone.',
        bullets: [
          'Index advisor reviews on hot paths',
          'Connection pooler configuration (PgBouncer)',
          'Vacuum and bloat monitoring',
          'Backup, PITR, and failover runbooks',
        ],
      },
    ],
    security:
      'Role-based access with least privilege, encrypted connections, managed credential rotation, and audited admin actions. Application code uses parameterized queries exclusively. Sensitive columns can use application-level encryption where required. We test restore procedures and document RPO/RTO targets aligned to business continuity requirements.',
    cta: {
      heading: 'Designing an enterprise PostgreSQL data layer?',
      description:
        'We model schemas, tenancy boundaries, and performance plans that hold up under real business growth.',
      buttonLabel: 'Schedule a data architecture call',
    },
  },
  {
    slug: 'mongodb',
    name: 'MongoDB',
    category: 'Backend',
    tagline:
      'Document database for flexible schemas, rapid product iteration, and horizontally scalable application data.',
    year: '2024',
    heroImage:
      'https://jimmydqv.com/assets/img/optimized/202603-m2m-outbound-federation-mongodb-cover-image-640w.jpeg',
    detailImage:
      'https://webimages.mongodb.com/_com_assets/cms/mk6tjbvl23fripl0g-mongodb_spot.png?auto=format%252Ccompress',
    heroImageFit: 'cover',
    detailImageFit: 'contain',
    introduction:
      'MongoDB stores data as flexible JSON-like documents — well suited to evolving product schemas, content platforms, IoT telemetry, and catalogs with heterogeneous attributes. Teams iterate quickly when fields change frequently without heavyweight migrations. At scale, sharding and replica sets support growth paths for high-write workloads. We pair MongoDB with schema validation, indexing discipline, and application-level contracts so flexibility does not become chaos. It complements PostgreSQL in polyglot architectures: relational cores for money and identity, documents for feeds, configs, and user-generated content.',
    capabilities: [
      {
        title: 'Flexible schema & rapid iteration',
        description:
          'Ship features without blocking on rigid migration windows — with guardrails that preserve data quality.',
        bullets: [
          'Schema validation rules in production',
          'Versioned document shapes in application code',
          'Migration scripts for structural changes',
          'TTL indexes for ephemeral data',
        ],
      },
      {
        title: 'Document modeling for product domains',
        description:
          'Embed vs reference decisions that balance read performance with update complexity.',
        bullets: [
          'Aggregations for analytics and dashboards',
          'Compound indexes for list and search APIs',
          'Change streams for event-driven sync',
          'Text search indexes where needed',
        ],
      },
      {
        title: 'Scalable application backends',
        description:
          'Replica sets for availability and sharding strategies when single-node limits approach.',
        bullets: [
          'Read preference tuning for reporting',
          'Shard key selection workshops',
          'Oplog-backed integrations',
          'Capacity planning from growth forecasts',
        ],
      },
      {
        title: 'Operational reliability',
        description:
          'Backups, monitoring, and restore drills treated as production requirements — not afterthoughts.',
        bullets: [
          'Point-in-time backup configuration',
          'Slow query profiling and index reviews',
          'Staging data anonymization practices',
          'Multi-region deployment considerations',
        ],
      },
    ],
    security:
      'Authentication enforced at the cluster edge, TLS in transit, field-level redaction for PII, and network isolation via VPC peering. Service accounts are scoped per application. We prohibit eval-style operators on user input and audit aggregation pipelines that touch sensitive collections.',
    cta: {
      heading: 'Evaluating MongoDB for your product data?',
      description:
        'We help you model documents, plan scale, and integrate MongoDB alongside the rest of your stack responsibly.',
      buttonLabel: 'Discuss document database design',
    },
  },
  {
    slug: 'redis',
    name: 'Redis',
    category: 'Backend',
    tagline:
      'In-memory data platform for caching, session management, queues, and sub-millisecond coordination layers.',
    year: '2024',
    heroImage: 'https://miro.medium.com/0*yzQ9C2DyG5BNVzcB.png',
    detailImage:
      'https://storage.ghost.io/c/ee/88/ee889f88-37ef-43e5-9180-f9b88ee6261d/content/images/size/w1200/2026/03/redis-billions.webp',
    heroImageFit: 'cover',
    detailImageFit: 'cover',
    introduction:
      'Redis accelerates applications by keeping hot data in memory — cutting database load and improving response times for authenticated sessions, API rate counters, leaderboards, and feature flags. It also powers job queues and pub/sub channels for real-time fan-out. We use Redis as a performance and coordination layer, not a system of record for regulated data. Proper TTL policies, memory limits, and namespacing prevent silent leaks and key collisions in multi-tenant products. For high-traffic SaaS and e-commerce peaks, Redis is often the difference between stable latency and database meltdown.',
    capabilities: [
      {
        title: 'Caching & performance optimization',
        description:
          'Cache-aside and write-through patterns that protect origin databases during traffic spikes.',
        bullets: [
          'Query result and fragment caching',
          'HTTP response caching at the edge where applicable',
          'Stampede protection and request coalescing',
          'Hit-rate monitoring and eviction tuning',
        ],
      },
      {
        title: 'Session & auth state management',
        description:
          'Fast session lookups for logged-in users, OTP flows, and device trust without round-trips to SQL on every request.',
        bullets: [
          'Session TTL and rotation policies',
          'Token blocklists for logout and compromise',
          'Geo-distributed session considerations',
          'Encryption for sensitive session payloads',
        ],
      },
      {
        title: 'Queues & pub/sub messaging',
        description:
          'Lightweight job brokers and event channels when full message-bus complexity is not yet justified.',
        bullets: [
          'List and stream-based consumer groups',
          'Delayed job scheduling',
          'Cross-service notification buses',
          'Backpressure handling in workers',
        ],
      },
      {
        title: 'Reliability & operations',
        description:
          'Sentinel or clustered deployments with failover testing and memory governance.',
        bullets: [
          'High-availability topology selection',
          'Persistence options matched to use case',
          'Key naming conventions per tenant',
          'Alerting on memory pressure and latency',
        ],
      },
    ],
    security:
      'AUTH/TLS enabled, VPC-only access, command ACLs restricted to required operations, and KEYS/FLUSH disabled in production. Secrets rotated on schedule. We never store primary financial records solely in Redis. Monitoring covers unauthorized connection attempts and abnormal command rates.',
    cta: {
      heading: 'Need a performance layer with Redis?',
      description:
        'We design caching, session, and queue patterns that improve latency without compromising data safety.',
      buttonLabel: 'Book a performance architecture review',
    },
  },
  {
    slug: 'supabase',
    name: 'Supabase',
    category: 'Backend',
    tagline:
      'Backend-as-a-service platform combining PostgreSQL, authentication, storage, and realtime APIs for accelerated product delivery.',
    year: '2024',
    heroImage: 'https://econsulting.bf/wp-content/uploads/2024/08/supabase.jpg',
    detailImage: 'https://blog.webcrowd.co.in/wp-content/uploads/2025/01/Supabase.jpg',
    heroImageFit: 'cover',
    detailImageFit: 'contain',
    introduction:
      'Supabase packages managed PostgreSQL with auth, row-level security, file storage, edge functions, and realtime subscriptions — enabling teams to launch MVPs and internal tools quickly without building every backend primitive from scratch. Startups use it to validate markets faster; growing products migrate selectively to custom services as complexity demands. We implement Supabase with explicit RLS policies, typed client access, and environment separation so speed does not trade away security. It fits products that need auth, CRUD, and live updates early, with a credible path to scale on standard Postgres underneath.',
    capabilities: [
      {
        title: 'Backend-as-a-service acceleration',
        description:
          'Auth, database, and storage wired together — reducing months of boilerplate into focused product work.',
        bullets: [
          'Project scaffolding with environment parity',
          'Migration workflows via SQL and CLI',
          'Storage buckets for user-generated assets',
          'Edge functions for lightweight compute',
        ],
      },
      {
        title: 'Authentication & authorization',
        description:
          'Email, OAuth, and magic-link flows with policies that enforce tenant and role boundaries at the database.',
        bullets: [
          'Row-level security policy design',
          'JWT claims mapped to application roles',
          'Service-role vs anon key separation',
          'Audit of privileged server paths',
        ],
      },
      {
        title: 'Realtime database subscriptions',
        description:
          'Live UI updates for dashboards, notifications, and collaborative features without custom socket infrastructure.',
        bullets: [
          'Channel design and payload sizing',
          'Filter rules to prevent data leakage',
          'Fallback polling where realtime is optional',
          'Load testing on subscription fan-out',
        ],
      },
      {
        title: 'MVP-to-scale transition planning',
        description:
          'Architectural checkpoints before traffic, compliance, or customization outgrows BaaS defaults.',
        bullets: [
          'Export and portability strategies',
          'Performance indexing on hot tables',
          'Connection pooling for serverless frontends',
          'Hybrid custom API extraction paths',
        ],
      },
    ],
    security:
      'RLS enabled by default on user-facing tables, service keys restricted to server environments, and storage policies aligned to tenant ownership. We review every bypass of RLS in edge functions. Staging projects use anonymized data; production keys never appear in client repos. Backup and PITR options are validated against recovery targets.',
    cta: {
      heading: 'Launching fast with Supabase?',
      description:
        'We set up auth, data policies, and delivery workflows so your MVP is secure and ready to grow.',
      buttonLabel: 'Discuss Supabase implementation',
    },
  },
  {
    slug: 'neon-db',
    name: 'Neon DB',
    category: 'Backend',
    tagline:
      'Serverless PostgreSQL with branching workflows for modern CI/CD, preview environments, and cloud-native data layers.',
    year: '2024',
    heroImage:
      'https://cdn.prod.website-files.com/673b71f0790aabf30bd30bf8/68078ce1c920a59f7efde88f_image%20(27).png',
    detailImage: 'https://neon.com/docs/guides/multitenancy/database_per_user.png',
    heroImageFit: 'contain',
    detailImageFit: 'contain',
    introduction:
      'Neon delivers PostgreSQL as a serverless, branchable service — separating storage and compute so databases scale with usage and spin up in seconds. Engineering teams use database branches the way they use Git branches: isolated preview databases per pull request, safe migration testing, and faster QA cycles. For SaaS products on Vercel or container platforms, Neon reduces idle cost while preserving full SQL compatibility. We adopt Neon when teams want Postgres fidelity without managing clusters day one, with clear migration paths to dedicated infrastructure if compliance or throughput demands it later.',
    capabilities: [
      {
        title: 'Serverless PostgreSQL operations',
        description:
          'Autoscaling compute and pay-for-use storage that match variable SaaS traffic patterns.',
        bullets: [
          'Connection pooling for serverless runtimes',
          'Cold-start and warm-pool planning',
          'Read replicas for reporting isolation',
          'Cost monitoring per environment',
        ],
      },
      {
        title: 'Branching workflows for engineering teams',
        description:
          'Database branches tied to preview deployments — test migrations before they touch production.',
        bullets: [
          'Per-PR isolated data environments',
          'Seed scripts for realistic QA datasets',
          'Branch reset and promotion practices',
          'CI integration for schema validation',
        ],
      },
      {
        title: 'Cloud-native application fit',
        description:
          'Pairs with Next.js, edge functions, and modern CI/CD for cohesive full-stack delivery.',
        bullets: [
          'Environment variables per deployment target',
          'Zero-downtime migration strategies',
          'Logical replication when exiting serverless',
          'Hybrid architectures with Redis caching',
        ],
      },
      {
        title: 'Enterprise data reliability',
        description:
          'Backups, point-in-time recovery, and monitoring aligned to production SLAs.',
        bullets: [
          'Recovery drills documented in runbooks',
          'Encryption in transit and at rest',
          'Access control via IAM and database roles',
          'Query performance reviews on growth',
        ],
      },
    ],
    security:
      'Branch access scoped to CI and developer roles; production credentials isolated in secret managers. Migrations reviewed in pull requests with automated checks. We prohibit shared superuser credentials across environments and audit connection strings in application configs.',
    cta: {
      heading: 'Adopting serverless Postgres with Neon?',
      description:
        'We design branching strategy, pooling, and migration pipelines that fit your release process.',
      buttonLabel: 'Plan a Neon database rollout',
    },
  },
  {
    slug: 'aws',
    name: 'AWS',
    category: 'DevOps & Cloud',
    tagline:
      'Enterprise cloud infrastructure for secure hosting, auto-scaling workloads, and globally distributed deployments.',
    year: '2024',
    heroImage: 'https://www.solodev.com/_/images/main/aws-panda.png',
    detailImage: 'https://i.ytimg.com/vi/HmeW71poztc/maxresdefault.jpg',
    heroImageFit: 'contain',
    detailImageFit: 'cover',
    introduction:
      'Amazon Web Services provides the building blocks for production-grade cloud systems — compute, networking, storage, identity, and managed databases used by startups and enterprises worldwide. We design AWS architectures around your availability targets, data residency needs, and cost constraints: VPC isolation, IAM least privilege, auto-scaling groups, RDS or containerized workloads, S3 for assets, CloudFront for delivery, and Route 53 for DNS resilience. AWS fits products that must scale past single-server limits, pass security reviews, and recover cleanly from zone or regional failures with documented runbooks.',
    capabilities: [
      {
        title: 'Cloud infrastructure & high availability',
        description:
          'Multi-AZ deployments, load balancing, and health checks that keep services reachable during component failure.',
        bullets: [
          'Auto-scaling tied to CPU, memory, or custom metrics',
          'Disaster recovery and backup policies',
          'Global deployments with CDN and regional stacks',
          'Capacity planning from traffic forecasts',
        ],
      },
      {
        title: 'Security & compliance posture',
        description:
          'Identity boundaries, encryption, and logging that satisfy internal security and customer due diligence.',
        bullets: [
          'IAM roles instead of long-lived keys',
          'KMS encryption for data at rest',
          'AWS Config and GuardDuty alignment',
          'Network segmentation and WAF rules',
        ],
      },
      {
        title: 'Scalable application hosting',
        description:
          'ECS/EKS, Lambda, or EC2 patterns chosen for team skills, traffic shape, and operational overhead.',
        bullets: [
          'Container registries and image scanning',
          'Secrets Manager and Parameter Store usage',
          'S3 lifecycle policies for logs and assets',
          'Cost allocation tags per product line',
        ],
      },
      {
        title: 'Enterprise operations & monitoring',
        description:
          'CloudWatch, alarms, and incident response integrated into your on-call and release process.',
        bullets: [
          'Centralized logging and trace correlation',
          'SLO dashboards for critical services',
          'Runbooks for failover and restore',
          'FinOps reviews on spend anomalies',
        ],
      },
    ],
    security:
      'Organization-level guardrails (SCPs), no public databases by default, bastion-less access via SSM where possible, and quarterly access reviews. Infrastructure defined in Terraform or CloudFormation with peer review. Penetration test findings tracked to remediation with severity SLAs.',
    cta: {
      heading: 'Planning AWS infrastructure for production?',
      description:
        'We design landing zones, scaling models, and security controls sized to your compliance and growth targets.',
      buttonLabel: 'Book a cloud architecture session',
    },
  },
  {
    slug: 'docker',
    name: 'Docker',
    category: 'DevOps & Cloud',
    tagline:
      'Containerization for consistent deployments, portable environments, and reproducible builds from development to production.',
    year: '2024',
    heroImage:
      'https://res.cloudinary.com/dx2orqjv8/images/f_webp,q_auto:best/v1683833177/kb/Featured_33903c5180/Featured_33903c5180.png?_i=AA',
    detailImage:
      'https://res.cloudinary.com/dthpnue1d/image/upload/v1716529936/docker_container_architechure_188ac552ea.jpg',
    heroImageFit: 'contain',
    detailImageFit: 'cover',
    introduction:
      'Docker packages applications with their dependencies into immutable images — eliminating “works on my machine” drift between developers, CI, and production. Teams ship faster because environments are reproducible; operations teams roll back by redeploying a known image tag. We use multi-stage builds, minimal base images, and registry scanning so containers stay small, secure, and fast to pull. Docker is the foundation under Kubernetes, ECS, and many CI pipelines — standardizing how NarixSolutions delivers backend APIs, workers, and full-stack products.',
    capabilities: [
      {
        title: 'Containerization & build consistency',
        description:
          'Deterministic builds that encode runtime, system libraries, and application code in versioned artifacts.',
        bullets: [
          'Multi-stage Dockerfile optimization',
          'Pinned dependency locks in images',
          'Local compose stacks mirroring prod services',
          'Image tagging aligned to Git releases',
        ],
      },
      {
        title: 'Deployment portability',
        description:
          'Same image promoted across staging and production — reducing configuration surprises at go-live.',
        bullets: [
          'Registry promotion workflows',
          'Environment-specific config via secrets, not image rebuilds',
          'Healthcheck and graceful shutdown hooks',
          'Resource limits and ulimits set per service',
        ],
      },
      {
        title: 'Supply chain hygiene',
        description:
          'Vulnerability scanning and base-image update cadence treated as operational requirements.',
        bullets: [
          'SBOM generation where required',
          'Non-root container users by default',
          'Distroless or slim bases when appropriate',
          'Blocked critical CVEs in CI gates',
        ],
      },
      {
        title: 'Integration with orchestration',
        description:
          'Images ready for Kubernetes, ECS, or Nomad with observability agents and sidecars planned upfront.',
        bullets: [
          'Structured logging to stdout',
          'Metrics endpoints for scraping',
          'Init containers for migrations',
          'Secrets mounted via platform primitives',
        ],
      },
    ],
    security:
      'Read-only root filesystems where viable, no secrets baked into images, regular base-image patches, and network policies at the orchestration layer. Developers do not run production images locally with production credentials. CI signs or attest images when client compliance requires it.',
    cta: {
      heading: 'Standardizing deployments with Docker?',
      description:
        'We establish image conventions, compose workflows, and registry pipelines your team can own long-term.',
      buttonLabel: 'Discuss container strategy',
    },
  },
  {
    slug: 'kubernetes',
    name: 'Kubernetes',
    category: 'DevOps & Cloud',
    tagline:
      'Container orchestration for auto-scaling services, high availability, and predictable operations at enterprise scale.',
    year: '2024',
    heroImage: 'https://static.learnkube.com/ce26d407ce85d5c042eb6ed6079b27d7.png',
    detailImage: 'https://wallpapercave.com/wp/wp10034197.jpg',
    heroImageFit: 'cover',
    detailImageFit: 'cover',
    introduction:
      'Kubernetes automates deployment, scaling, and management of containerized applications across clusters of machines. It is the operational layer for products that outgrow single-server or simple PaaS hosting — multi-service SaaS, high-availability APIs, and data pipelines that need rolling updates without downtime. We implement Kubernetes with clear namespace boundaries, resource requests/limits, ingress controllers, and GitOps delivery so changes are auditable. For teams facing 24/7 uptime requirements or multi-region expansion, Kubernetes provides orchestration primitives that match enterprise reliability expectations.',
    capabilities: [
      {
        title: 'Orchestration & auto-scaling',
        description:
          'Horizontal Pod Autoscaler, cluster autoscaler, and custom metrics that match real traffic patterns.',
        bullets: [
          'Deployment strategies: rolling, blue/green, canary',
          'Pod disruption budgets for safe node drains',
          'Workload separation by team or tenant',
          'Cost-aware node pool selection',
        ],
      },
      {
        title: 'High availability & resilience',
        description:
          'Spread workloads across zones; rehearse failure modes before customers experience them.',
        bullets: [
          'Multi-AZ cluster topologies',
          'Liveness and readiness probe design',
          'Chaos exercises on critical paths',
          'Backup agents for stateful sets',
        ],
      },
      {
        title: 'Container management at scale',
        description:
          'Ingress, service mesh, and secrets management integrated into a coherent platform experience.',
        bullets: [
          'TLS termination and cert rotation',
          'Network policies for east-west traffic',
          'Centralized logging and tracing',
          'Admission controls for image policy',
        ],
      },
      {
        title: 'GitOps & delivery integration',
        description:
          'Declarative manifests reconciled from Git — aligning Kubernetes changes with code review culture.',
        bullets: [
          'Argo CD or Flux promotion pipelines',
          'Environment overlays (Kustomize/Helm)',
          'Rollback via known-good revisions',
          'Drift detection and reconciliation alerts',
        ],
      },
    ],
    security:
      'RBAC with least privilege, secrets via sealed secrets or cloud KMS, pod security standards enforced, and runtime threat detection where required. Cluster admin access is MFA-protected and audited. We document break-glass procedures and test cluster recovery from control-plane and worker failures.',
    cta: {
      heading: 'Moving workloads to Kubernetes?',
      description:
        'We design cluster topology, delivery pipelines, and operational runbooks matched to your reliability targets.',
      buttonLabel: 'Schedule a Kubernetes assessment',
    },
  },
  {
    slug: 'cicd',
    name: 'CI/CD',
    category: 'DevOps & Cloud',
    tagline:
      'Automated delivery pipelines for quality gates, faster releases, and DevOps workflows that scale with your team.',
    year: '2024',
    heroImage: 'https://stackify.com/wp-content/uploads/2019/04/big-Feature-Image-on-What-Is-CI_CD.jpg',
    detailImage:
      'https://thumbs.dreamstime.com/b/ai-devops-automation-strategy-ci-cd-software-pipeline-motif-methodology-development-operations-enhances-407090550.jpg',
    heroImageFit: 'cover',
    detailImageFit: 'cover',
    introduction:
      'Continuous integration and continuous delivery automate the path from commit to production — running tests, security scans, builds, and staged deployments with human approval only where it adds value. Mature CI/CD reduces release risk, shortens feedback loops, and gives leadership predictable delivery cadence. We implement pipelines in GitHub Actions, GitLab CI, or cloud-native services with artifacts promoted — never rebuilt — across environments. For regulated or high-stakes products, pipelines also generate evidence: who deployed what, when, and with which test results.',
    capabilities: [
      {
        title: 'Automated deployments',
        description:
          'Repeatable promotion from staging to production with rollback hooks and deployment windows.',
        bullets: [
          'Environment-specific configuration injection',
          'Database migration steps in pipeline order',
          'Smoke tests after each deploy stage',
          'Automated rollback on health-check failure',
        ],
      },
      {
        title: 'Quality pipelines',
        description:
          'Unit, integration, and end-to-end tests gated before merge and before production promotion.',
        bullets: [
          'Parallelized test jobs for fast feedback',
          'Coverage thresholds on critical modules',
          'Lint, type-check, and format enforcement',
          'Contract tests for API consumers',
        ],
      },
      {
        title: 'Security & compliance gates',
        description:
          'Dependency scanning, SAST, container CVE checks, and policy-as-code before artifacts ship.',
        bullets: [
          'SBOM and license compliance reports',
          'Secrets scanning on every push',
          'Signed commits or tags where required',
          'Change logs linked to tickets',
        ],
      },
      {
        title: 'DevOps automation & observability',
        description:
          'Notifications, metrics, and deployment markers connected to incident response tools.',
        bullets: [
          'Slack/Teams alerts on pipeline failure',
          'DORA metrics tracking over time',
          'Feature flags decoupled from deploy',
          'Infrastructure plans in CI for IaC repos',
        ],
      },
    ],
    security:
      'OIDC federation to cloud providers — no long-lived CI secrets in repos. Branch protection, required reviews, and restricted pipeline admin roles. Reproducible builds with locked dependencies. Anomaly alerts on pipeline configuration changes.',
    cta: {
      heading: 'Need enterprise DevOps automation?',
      description:
        'We design CI/CD pipelines that improve release confidence without burying your team in toolchain complexity.',
      buttonLabel: 'Book a DevOps consultation',
    },
  },
  {
    slug: 'git',
    name: 'Git',
    category: 'Tools & Platforms',
    tagline:
      'Version control foundation for team collaboration, auditable change history, and reliable deployment workflows.',
    year: '2024',
    heroImage:
      'https://img.freepik.com/premium-photo/boy-is-working-laptop-with-word-i-m-working-it_978914-24388.jpg?semt=ais_hybrid&w=740&q=80',
    detailImage: 'https://miro.medium.com/1*MALoQ7Hj38mmBBYoxt_kJw.jpeg',
    heroImageFit: 'cover',
    detailImageFit: 'contain',
    introduction:
      'Git is the system of record for how software evolves — every feature, fix, and rollback traceable to authors, reviewers, and timestamps. Distributed workflows let distributed teams collaborate without blocking on a central server. We establish branching models (trunk-based or git-flow variants) matched to release frequency, CODEOWNERS for critical paths, and protected branches that tie merges to CI success. For clients facing audits or SOC-style reviews, Git history plus linked tickets provides defensible evidence of controlled change management.',
    capabilities: [
      {
        title: 'Version control & change traceability',
        description:
          'Atomic commits, meaningful messages, and tags that map releases to exact codebase states.',
        bullets: [
          'Semantic versioning and release tags',
          'Cherry-pick and revert playbooks',
          'Bisect workflows for incident root cause',
          'Signed tags for production releases',
        ],
      },
      {
        title: 'Team collaboration workflows',
        description:
          'Pull request culture with reviews sized for knowledge sharing — not rubber stamps.',
        bullets: [
          'PR templates and checklist automation',
          'CODEOWNERS for domain experts',
          'Merge queues for high-velocity mainlines',
          'Fork and submodule policies documented',
        ],
      },
      {
        title: 'Deployment workflow integration',
        description:
          'Branches and tags that trigger CI/CD, preview environments, and promotion to production.',
        bullets: [
          'Environment branches vs trunk-based deploys',
          'Hotfix branches with backport rules',
          'Release notes generated from commits',
          'Integration with project management tools',
        ],
      },
      {
        title: 'Governance & hygiene',
        description:
          'Housekeeping bots and policies that keep repositories maintainable at scale.',
        bullets: [
          'Stale branch cleanup automation',
          'Large file and secrets prevention',
          'Contributor license alignment',
          'Monorepo vs polyrepo guidance',
        ],
      },
    ],
    security:
      'Organization MFA enforced, secret scanning and push protection enabled, least-privilege access to repos, and periodic token audits. Force-push disabled on protected branches. Incident response includes credential rotation if history exposure is suspected.',
    cta: {
      heading: 'Improving engineering workflow with Git?',
      description:
        'We help teams adopt branching, review, and release practices that match delivery speed and compliance needs.',
      buttonLabel: 'Discuss delivery workflow',
    },
  },
  {
    slug: 'stripe',
    name: 'Stripe',
    category: 'Tools & Platforms',
    tagline:
      'Payment infrastructure for subscriptions, marketplaces, and PCI-conscious checkout experiences at global scale.',
    year: '2024',
    heroImage:
      'https://rates.fm/static/content/thumbs/1200x630/7/90/flor5g---c1200x630x50px50p--ae279b22d7ac14ac27a084432fd19907.png',
    detailImage:
      'https://rates.fm/static/content/thumbs/1600x900/9/93/hfwp6e---c16x9x50px50p--f813086351844f8814e6588609aea939.png',
    heroImageFit: 'contain',
    detailImageFit: 'contain',
    introduction:
      'Stripe provides APIs for payments, billing, invoicing, and financial operations — letting product teams monetize without becoming payment experts overnight. SaaS companies use Billing for subscriptions; marketplaces use Connect for split payouts; e-commerce uses Checkout and Payment Intents for optimized conversion. We integrate Stripe with idempotent server flows, webhook verification, and reconciliation exports finance teams can audit. Card data stays on Stripe-hosted surfaces so your servers maintain reduced PCI scope while still owning customer experience and entitlement logic.',
    capabilities: [
      {
        title: 'Payment infrastructure',
        description:
          'One-time charges, saved payment methods, and multi-currency support aligned to your markets.',
        bullets: [
          'Payment Intents and Checkout Sessions',
          'Apple Pay and Google Pay enablement',
          'Local payment methods by region',
          'Strong Customer Authentication (3DS) flows',
        ],
      },
      {
        title: 'Subscription billing',
        description:
          'Plans, trials, proration, and dunning handled with clear mapping to product entitlements.',
        bullets: [
          'Tiered and usage-based pricing models',
          'Customer portal for self-service billing',
          'Webhook-driven subscription state sync',
          'Revenue recognition export alignment',
        ],
      },
      {
        title: 'PCI-conscious integrations',
        description:
          'Elements and hosted flows that keep sensitive card data off your application servers.',
        bullets: [
          'Stripe.js and mobile SDK patterns',
          'Connect onboarding for marketplace sellers',
          'Radar rules for fraud reduction',
          'Dispute and refund operational playbooks',
        ],
      },
      {
        title: 'Finance & operations readiness',
        description:
          'Reporting, Sigma queries, and alerting so finance and support teams are not blind after launch.',
        bullets: [
          'Payout and balance reconciliation',
          'Test mode parity with production flows',
          'Idempotency keys on all money mutations',
          'Incident runbooks for webhook delays',
        ],
      },
    ],
    security:
      'Webhook signatures verified on every event; API keys scoped by environment; no card data logged or stored locally. Admin dashboards MFA-protected. We test race conditions on checkout and subscription upgrades in staging with Stripe test clocks.',
    cta: {
      heading: 'Integrating Stripe for your product?',
      description:
        'We design payment flows, webhook architecture, and billing models that scale with your revenue model.',
      buttonLabel: 'Schedule a payments review',
    },
  },
  {
    slug: 'vercel',
    name: 'Vercel',
    category: 'Tools & Platforms',
    tagline:
      'Frontend cloud platform for edge deployment, preview environments, and Next.js-optimized production hosting.',
    year: '2024',
    heroImage:
      'https://naturaily.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F172506%2F640x476%2F26cfe0d89b%2Fvercel-hero.png&w=1080&q=75',
    detailImage:
      'https://static0.xdaimages.com/wordpress/wp-content/uploads/2026/04/vercel-logo-featured.jpg?w=1600&h=900&fit=crop',
    heroImageFit: 'cover',
    detailImageFit: 'cover',
    introduction:
      'Vercel hosts modern frontend frameworks — especially Next.js — with global edge delivery, instant preview URLs per branch, and analytics integrated into the deployment workflow. Product teams ship faster because every pull request gets a shareable preview; stakeholders review UI before merge. Edge functions run logic close to users for personalization and auth checks with low latency. We use Vercel when marketing and product share a Next.js codebase and deployment simplicity matters, pairing it with external databases and APIs sized for production load.',
    capabilities: [
      {
        title: 'Frontend hosting & edge deployment',
        description:
          'Static and server-rendered assets distributed globally with automatic HTTPS and HTTP/2.',
        bullets: [
          'Custom domains and wildcard previews',
          'Edge middleware for auth and redirects',
          'Image optimization pipeline',
          'Bandwidth and request monitoring',
        ],
      },
      {
        title: 'Preview deployments',
        description:
          'Stakeholder review on real infrastructure before code reaches production — reducing late surprises.',
        bullets: [
          'PR-linked preview URLs',
          'Environment variables per preview',
          'Password protection on internal previews',
          'Comment integrations for design QA',
        ],
      },
      {
        title: 'Next.js optimization',
        description:
          'Platform features aligned to App Router, ISR, and serverless function limits — configured intentionally.',
        bullets: [
          'Build cache and monorepo support',
          'Serverless function region selection',
          'ISR and revalidation tuning',
          'Analytics and Web Vitals tracking',
        ],
      },
      {
        title: 'Production operations',
        description:
          'Promotion workflows, rollback, and integration with monitoring for customer-facing launches.',
        bullets: [
          'Production alias and staged rollouts',
          'Log drains to observability stacks',
          'Budget alerts on usage spikes',
          'Hybrid architectures with AWS backends',
        ],
      },
    ],
    security:
      'Scoped deploy tokens, SSO on team dashboards, sanitized preview datasets, and secrets limited per environment. Edge functions follow least-privilege access to upstream APIs. We review OWASP risks on serverless endpoints exposed at the edge.',
    cta: {
      heading: 'Deploying on Vercel for production?',
      description:
        'We configure Next.js, environment strategy, and backend integration for reliable customer-facing launches.',
      buttonLabel: 'Discuss Vercel hosting',
    },
  },
  {
    slug: 'figma',
    name: 'Figma',
    category: 'Tools & Platforms',
    tagline:
      'Collaborative design platform for UI systems, product prototyping, and engineering-aligned handoff workflows.',
    year: '2024',
    heroImage:
      'https://s3-alpha.figma.com/hub/file/4875226059/729643d7-19c2-4bd4-bb36-df328cd15a25-cover.png',
    detailImage:
      'https://s3-alpha.figma.com/hub/file/2191568469027227333/a2da454e-7819-4402-92b6-2aee21671855-cover.png',
    heroImageFit: 'contain',
    detailImageFit: 'contain',
    introduction:
      'Figma is where product, design, and engineering align on interface structure before code is written — reducing rework and ambiguous specs. Design systems with variants and tokens propagate consistency across screens; dev mode bridges spacing, typography, and component props to implementation. We use Figma in discovery and delivery: clickable prototypes validate flows with stakeholders; component libraries map to React building blocks in production. For agencies and SaaS teams, Figma shortens the loop between feedback and shipped UI without sacrificing accessibility or brand discipline.',
    capabilities: [
      {
        title: 'UI collaboration & product prototyping',
        description:
          'Shared files, comments, and version history that keep distributed teams synchronized.',
        bullets: [
          'User flow prototypes for stakeholder sign-off',
          'Responsive layout specs across breakpoints',
          'Design critique structured in-file',
          'Accessibility annotations for engineering',
        ],
      },
      {
        title: 'Design systems',
        description:
          'Reusable components and variables that mirror production — not one-off mockups per screen.',
        bullets: [
          'Token libraries for color, type, and spacing',
          'Component variants for states and sizes',
          'Documentation pages for usage rules',
          'Sync reviews before sprint commitment',
        ],
      },
      {
        title: 'Design-to-development handoff',
        description:
          'Specs and exports that map cleanly to Tailwind, React, and Storybook implementations.',
        bullets: [
          'Dev mode measurements and asset export',
          'Naming conventions aligned to code',
          'Redlines for edge cases and empty states',
          'Changelog on system component updates',
        ],
      },
      {
        title: 'Delivery integration',
        description:
          'Figma embedded in agile rituals — refinement, QA visual comparison, and post-launch iteration.',
        bullets: [
          'Snapshot comparison against production',
          'Plugin governance for security',
          'Brand kit alignment for marketing pages',
          'Workshop facilitation for new modules',
        ],
      },
    ],
    security:
      'Workspace RBAC, guest access policies, approved plugin lists, and confidential project boundaries for client work. Exports reviewed before sharing externally. We align file retention with contractual NDA requirements.',
    cta: {
      heading: 'Aligning design and engineering with Figma?',
      description:
        'We help teams connect design systems to shipped components and reduce friction in handoff.',
      buttonLabel: 'Talk to our product design flow',
    },
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
