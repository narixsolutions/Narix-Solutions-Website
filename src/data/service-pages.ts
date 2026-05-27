/**
 * Content for `/services/[slug]` — swap `heroImage` / `gallery` URLs anytime.
 */

export type ServiceProcessStep = { step: string; description: string };

export type ServicePricingTier = {
  name: string;
  price: string;
  description: string;
};

export type ServicePageCta = {
  heading: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export const DEFAULT_SERVICE_CTA: ServicePageCta = {
  heading: "Let's Build Something Reliable Together",
  description:
    "Tell us about your business goals and we'll help you choose the right digital solution for your project.",
  primaryLabel: 'Start Your Project',
  secondaryLabel: 'Schedule Consultation',
};

export type ServicePageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  heroLead: string;
  heroSecondary?: string;
  heroImage: string;
  gallery: string[];
  featureTags: string[];
  primaryCta?: string;
  secondaryCta?: string;
  features: string[];
  process: ServiceProcessStep[];
  technologies: string[];
  industries: string[];
  pricing?: {
    title: string;
    subtitle?: string;
    tiers: ServicePricingTier[];
    note?: string;
  };
  cta?: ServicePageCta;
};

export const SERVICE_PAGES: ServicePageContent[] = [
  {
    slug: 'web-development',
    eyebrow: 'BUSINESS WEBSITES',
    title: 'Business Website Development',
    description:
      'We build fast, professional business websites that establish credibility, generate leads, and support your growth online.',
    heroLead:
      'From corporate sites to service business platforms, we focus on clear messaging, mobile-friendly design, and performance that helps you win more customers.',
    heroSecondary:
      'Our websites are built for real business outcomes — stronger branding, better user experience, and a solid foundation for SEO and future expansion.',
    heroImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    ],
    featureTags: ['Responsive Design', 'SEO-Ready Structure', 'Fast Performance'],
    primaryCta: 'Discuss Your Project',
    secondaryCta: 'View Related Work',
    features: [
      'Custom business website design',
      'Mobile-responsive layouts',
      'Lead capture forms & contact flows',
      'SEO-friendly page structure',
      'Speed and performance optimization',
      'Launch support and handover documentation',
    ],
    process: [
      {
        step: 'Discovery',
        description: 'We learn about your business, audience, goals, and what success looks like for your website.',
      },
      {
        step: 'Design & Planning',
        description: 'We plan page structure, branding alignment, and user journeys that support conversions.',
      },
      {
        step: 'Development',
        description: 'Our team builds your site with clean code, reliable hosting setup, and easy-to-manage content areas.',
      },
      {
        step: 'Testing & Launch',
        description: 'We test across devices, fix issues, and launch with a smooth go-live process.',
      },
      {
        step: 'Support',
        description: 'Post-launch adjustments, training, and optional ongoing maintenance when you need it.',
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WordPress', 'Vercel'],
    industries: ['Startups', 'Professional Services', 'Healthcare', 'Fitness', 'Real Estate', 'Local Business'],
    pricing: {
      title: 'Project Pricing',
      tiers: [
        { name: 'Starter Website', price: 'Starting from $199', description: 'Essential business site with core pages and contact setup' },
        { name: 'Business Website', price: 'Starting from $499', description: 'Multi-page site with custom design, forms, and SEO basics' },
        { name: 'Advanced Website', price: 'Starting from $1,499', description: 'Custom features, integrations, and scalable architecture' },
      ],
      note: 'Final pricing depends on page count, design complexity, and integrations.',
    },
  },
  {
    slug: 'custom-web-applications',
    eyebrow: 'CUSTOM SOLUTIONS',
    title: 'Custom Web Applications',
    description:
      'We build scalable web applications tailored to your business workflows, operations, and customer experiences. From internal dashboards to client-facing platforms, our solutions are designed for performance, usability, and long-term growth.',
    heroLead:
      'Our team develops custom systems that help businesses automate processes, manage operations efficiently, and deliver seamless digital experiences.',
    heroImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    ],
    featureTags: ['Dashboard Systems', 'Workflow Automation', 'Scalable Architecture'],
    primaryCta: 'Discuss Your Project',
    secondaryCta: 'View Related Work',
    features: [
      'Custom admin dashboards',
      'CRM & management systems',
      'Role-based access systems',
      'API integrations',
      'Reporting & analytics',
      'Business workflow automation',
    ],
    process: [
      {
        step: 'Business Discovery',
        description: 'We understand your workflows, goals, and operational challenges.',
      },
      {
        step: 'Planning & Architecture',
        description: 'We design scalable system architecture and user flows.',
      },
      {
        step: 'Application Development',
        description: 'Our team develops secure and maintainable web applications.',
      },
      {
        step: 'Testing & Deployment',
        description: 'We ensure smooth deployment, optimization, and QA validation.',
      },
      {
        step: 'Support & Scaling',
        description: 'Ongoing maintenance and future feature enhancements.',
      },
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    industries: ['Healthcare', 'Logistics', 'Education', 'Finance', 'Retail', 'Startups'],
    pricing: {
      title: 'Project Pricing',
      tiers: [
        { name: 'Starter', price: 'Starting from $499', description: 'Focused app with core features and admin essentials' },
        { name: 'Growth', price: 'Starting from $1,499', description: 'Multi-module application with integrations and user roles' },
        { name: 'Enterprise', price: 'Starting from $2,999', description: 'Complex platforms with advanced workflows and reporting' },
      ],
      note: 'Final pricing depends on features, integrations, and project complexity.',
    },
  },
  {
    slug: 'website-maintenance',
    eyebrow: 'MAINTENANCE & SUPPORT',
    title: 'Reliable Website Maintenance & Technical Support',
    description:
      'We help businesses keep their websites secure, updated, optimized, and running smoothly with ongoing maintenance and technical support services.',
    heroLead:
      'Our maintenance plans ensure your website stays fast, protected, and fully functional while allowing your business to focus on growth.',
    heroImage:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    ],
    featureTags: ['Security Monitoring', 'Performance Optimization', 'Technical Support'],
    primaryCta: 'Discuss Your Project',
    secondaryCta: 'View Related Work',
    features: [
      'Regular website updates',
      'Security monitoring',
      'Backup management',
      'Bug fixing',
      'Speed optimization',
      'Technical troubleshooting',
    ],
    process: [
      {
        step: 'Website Audit',
        description: 'We review your site health, security, speed, and areas that need immediate attention.',
      },
      {
        step: 'Monitoring Setup',
        description: 'We configure uptime checks, backups, and alerts so issues are caught early.',
      },
      {
        step: 'Monthly Maintenance',
        description: 'We handle updates, patches, content support, and routine performance checks.',
      },
      {
        step: 'Performance Improvements',
        description: 'We optimize loading speed, fix bottlenecks, and improve user experience over time.',
      },
      {
        step: 'Ongoing Support',
        description: 'Your team gets reliable technical help when something breaks or needs adjustment.',
      },
    ],
    technologies: ['WordPress', 'Next.js', 'React', 'Cloudflare', 'cPanel', 'Google Analytics'],
    industries: ['E-Commerce', 'Healthcare', 'Professional Services', 'Education', 'Startups', 'Local Business'],
    pricing: {
      title: 'Service Plans',
      tiers: [
        { name: 'Basic Support', price: 'Starting from $99/month', description: 'Essential updates, backups, and monthly health checks' },
        { name: 'Business Support', price: 'Starting from $299/month', description: 'Priority support, security monitoring, and performance tuning' },
        { name: 'Advanced Support', price: 'Starting from $599/month', description: 'Dedicated support for larger sites with complex integrations' },
      ],
      note: 'Pricing depends on website size, traffic, integrations, and support requirements.',
    },
  },
  {
    slug: 'ecommerce',
    eyebrow: 'E-COMMERCE',
    title: 'E-Commerce Development',
    description:
      'Custom e-commerce platforms designed to improve customer experience, increase conversions, and simplify online store management.',
    heroLead:
      'We help businesses sell online with secure checkout, easy product management, and storefronts built to grow with your brand.',
    heroSecondary:
      'Whether you are launching your first store or upgrading an existing one, we focus on practical features that drive sales and reduce daily operational friction.',
    heroImage:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80',
    ],
    featureTags: ['Secure Payments', 'Product Management', 'Conversion Focus'],
    primaryCta: 'Discuss Your Project',
    secondaryCta: 'View Related Work',
    features: [
      'Custom online store design',
      'Product catalog and category management',
      'Secure payment gateway integration',
      'Order and inventory management',
      'Mobile-friendly shopping experience',
      'SEO setup for product and category pages',
    ],
    process: [
      {
        step: 'Store Planning',
        description: 'We define your product structure, customer journey, and business goals for the store.',
      },
      {
        step: 'Design & UX',
        description: 'We create a storefront that builds trust and makes buying simple on any device.',
      },
      {
        step: 'Development',
        description: 'We build your store with reliable checkout, admin tools, and integrations you need.',
      },
      {
        step: 'Testing & Launch',
        description: 'We test orders, payments, and key flows before a smooth go-live.',
      },
      {
        step: 'Growth Support',
        description: 'Post-launch improvements, feature additions, and optimization as your store grows.',
      },
    ],
    technologies: ['Next.js', 'Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'WordPress'],
    industries: ['Retail', 'Fashion', 'Health & Wellness', 'Food & Beverage', 'B2B Catalog', 'Startups'],
    pricing: {
      title: 'Project Pricing',
      tiers: [
        { name: 'Starter Store', price: 'Starting from $199', description: 'Essential store setup with products, payments, and core pages' },
        { name: 'Growth Store', price: 'Starting from $499', description: 'Custom design, advanced product options, and marketing integrations' },
        { name: 'Advanced E-Commerce', price: 'Starting from $1,999', description: 'Complex catalogs, custom workflows, and multi-channel selling' },
      ],
      note: 'Final pricing depends on product count, integrations, and custom features.',
    },
  },
  {
    slug: 'cms-development',
    eyebrow: 'CMS SOLUTIONS',
    title: 'CMS Development',
    description:
      'Flexible content management systems that let your team update pages, blogs, and products without relying on developers for every change.',
    heroLead:
      'We build WordPress and custom CMS solutions that are easy to use, SEO-friendly, and designed around how your business actually publishes content.',
    heroImage:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558655146-364adaf1fdd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    ],
    featureTags: ['Easy Content Editing', 'Scalable Setup', 'SEO Friendly'],
    primaryCta: 'Discuss Your Project',
    secondaryCta: 'View Related Work',
    features: [
      'WordPress website development',
      'Custom admin dashboards',
      'Blog and page management',
      'Product and portfolio content modules',
      'SEO-ready content structure',
      'Migration from old platforms',
    ],
    process: [
      {
        step: 'Content Discovery',
        description: 'We map your content types, publishing workflow, and who will manage the site day to day.',
      },
      {
        step: 'Structure & Design',
        description: 'We plan layouts and admin areas so your team can update content confidently.',
      },
      {
        step: 'CMS Development',
        description: 'We build your CMS with clean structure, security basics, and reliable performance.',
      },
      {
        step: 'Training & Launch',
        description: 'We launch your site and show your team how to manage content without friction.',
      },
      {
        step: 'Ongoing Support',
        description: 'Updates, improvements, and help when you need new sections or features.',
      },
    ],
    technologies: ['WordPress', 'Next.js', 'React', 'Node.js', 'Sanity', 'Contentful'],
    industries: ['Professional Services', 'Publishing', 'E-Commerce', 'Education', 'Healthcare', 'Startups'],
    pricing: {
      title: 'CMS Pricing',
      tiers: [
        { name: 'WordPress Website', price: 'Starting from $149', description: 'Business WordPress site with theme customization and core plugins' },
        { name: 'Business CMS', price: 'Starting from $399', description: 'Custom layouts, advanced content types, and integration setup' },
        { name: 'Custom CMS Platform', price: 'Starting from $999', description: 'Tailored CMS built around your workflows and growth plans' },
      ],
      note: 'Final pricing depends on content complexity, integrations, and design scope.',
    },
  },
  {
    slug: 'seo-marketing',
    eyebrow: 'SEO & MARKETING',
    title: 'SEO & Digital Marketing',
    description:
      'Practical SEO and digital marketing that helps your business get found online, attract qualified traffic, and turn visitors into leads.',
    heroLead:
      'We combine technical SEO fixes, content improvements, and conversion-focused updates so your marketing efforts connect to real business results.',
    heroImage:
      'https://images.unsplash.com/photo-1432888498266-38ff4903b5ac?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533750516459-a7cbbf26fb21?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    ],
    featureTags: ['Technical SEO', 'Content Strategy', 'Lead Generation'],
    primaryCta: 'Discuss Your Project',
    secondaryCta: 'View Related Work',
    features: [
      'Website SEO audit and fixes',
      'On-page optimization for key pages',
      'Google Search visibility improvements',
      'Content planning for blogs and landing pages',
      'Local SEO for service businesses',
      'Monthly performance reporting',
    ],
    process: [
      {
        step: 'SEO Audit',
        description: 'We review your site, rankings, competitors, and quick wins you can act on immediately.',
      },
      {
        step: 'Strategy',
        description: 'We prioritize keywords, pages, and content that match your business goals.',
      },
      {
        step: 'Implementation',
        description: 'We fix technical issues, optimize pages, and improve site structure for search.',
      },
      {
        step: 'Content & Growth',
        description: 'We support content updates and ongoing improvements based on results.',
      },
      {
        step: 'Reporting',
        description: 'Clear monthly updates on traffic, rankings, and recommended next steps.',
      },
    ],
    technologies: ['Google Analytics', 'Search Console', 'WordPress', 'Next.js', 'Semrush', 'Ahrefs'],
    industries: ['Local Services', 'E-Commerce', 'SaaS', 'Healthcare', 'Professional Services', 'Startups'],
    pricing: {
      title: 'Monthly Packages',
      tiers: [
        { name: 'Starter SEO', price: 'Starting from $99/month', description: 'Core SEO fixes and on-page optimization for smaller sites' },
        { name: 'Growth SEO', price: 'Starting from $299/month', description: 'Ongoing SEO, content support, and competitor tracking' },
        { name: 'Advanced Marketing', price: 'Starting from $499/month', description: 'Broader SEO and marketing support for competitive markets' },
      ],
      note: 'Pricing depends on site size, competition, and scope of work.',
    },
  },
  {
    slug: 'automation',
    eyebrow: 'BUSINESS AUTOMATION',
    title: 'Business Automation',
    description:
      'Workflow automation that saves your team time by connecting the tools you already use and reducing repetitive manual work.',
    heroLead:
      'We help businesses streamline operations with practical automations — from lead routing and notifications to data sync between platforms.',
    heroImage:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    ],
    featureTags: ['Process Automation', 'Tool Integrations', 'Time Savings'],
    primaryCta: 'Discuss Your Project',
    secondaryCta: 'View Related Work',
    features: [
      'Workflow automation between apps',
      'CRM and form integrations',
      'Automated email and notification flows',
      'Data sync between platforms',
      'Internal approval workflows',
      'Custom automation dashboards',
    ],
    process: [
      {
        step: 'Process Review',
        description: 'We identify repetitive tasks and bottlenecks in your current workflow.',
      },
      {
        step: 'Automation Plan',
        description: 'We design simple automations with clear triggers, actions, and fallbacks.',
      },
      {
        step: 'Build & Integrate',
        description: 'We connect your tools and build reliable automation logic.',
      },
      {
        step: 'Testing',
        description: 'We validate edge cases so automations run correctly under real conditions.',
      },
      {
        step: 'Support',
        description: 'Adjustments and new automations as your business processes evolve.',
      },
    ],
    technologies: ['Zapier', 'Make', 'Node.js', 'REST APIs', 'Google Sheets', 'Slack'],
    industries: ['Operations', 'Sales Teams', 'Support', 'Finance', 'HR', 'Startups'],
    pricing: {
      title: 'Project Pricing',
      tiers: [
        { name: 'Starter Automation', price: '$1,500 - $3,500', description: 'Single workflow or integration setup' },
        { name: 'Business Automation', price: '$3,500 - $8,000', description: 'Multiple connected workflows across tools' },
        { name: 'Advanced Systems', price: '$8,000+', description: 'Custom automation platform with dashboards and APIs' },
      ],
      note: 'Final pricing depends on number of integrations and workflow complexity.',
    },
  },
  {
    slug: 'react-development',
    eyebrow: 'REACT DEVELOPMENT',
    title: 'React.js Development',
    description:
      'Modern React applications and interfaces built for speed, maintainability, and a smooth experience across devices.',
    heroLead:
      'We build product-ready React frontends — from marketing sites to authenticated dashboards — with clean structure your team can extend.',
    heroImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    ],
    featureTags: ['Component Architecture', 'Fast UI', 'Maintainable Code'],
    features: [
      'Custom React component libraries',
      'Next.js application development',
      'API-connected frontends',
      'Responsive and accessible interfaces',
      'Performance optimization',
      'Code handover and documentation',
    ],
    process: [
      { step: 'Requirements', description: 'We align on features, users, and technical constraints before development starts.' },
      { step: 'UI Implementation', description: 'We translate designs into polished, reusable React components.' },
      { step: 'Integration', description: 'We connect your frontend to APIs, auth, and business data sources.' },
      { step: 'Quality Checks', description: 'We test key flows, responsiveness, and performance before delivery.' },
      { step: 'Delivery', description: 'Deployment support and guidance for your team to maintain the codebase.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'REST APIs'],
    industries: ['SaaS', 'Startups', 'E-Commerce', 'EdTech', 'Internal Tools', 'Agencies'],
  },
  {
    slug: 'node-development',
    eyebrow: 'NODE.JS DEVELOPMENT',
    title: 'Node.js Development',
    description:
      'Reliable backend APIs and server-side systems that power your web and mobile applications with secure, scalable logic.',
    heroLead:
      'We build Node.js backends for startups and growing businesses — authentication, databases, integrations, and admin tools done right.',
    heroImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    ],
    featureTags: ['REST APIs', 'Database Design', 'Secure Auth'],
    features: [
      'Custom REST API development',
      'Authentication and user management',
      'Database design and integration',
      'Third-party service integrations',
      'Admin and reporting endpoints',
      'Deployment and server setup support',
    ],
    process: [
      { step: 'Architecture', description: 'We plan data models, API structure, and integration points.' },
      { step: 'Development', description: 'We implement secure endpoints and business logic with clear documentation.' },
      { step: 'Integration', description: 'We connect payment, email, CRM, and other services your product needs.' },
      { step: 'Testing', description: 'We validate APIs, error handling, and performance under realistic load.' },
      { step: 'Launch', description: 'Production deployment support and ongoing backend improvements.' },
    ],
    technologies: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis'],
    industries: ['SaaS', 'E-Commerce', 'Healthcare', 'Logistics', 'FinTech', 'Startups'],
  },
  {
    slug: 'pos-billing',
    eyebrow: 'POS & BILLING',
    title: 'POS & Billing Software',
    description:
      'Point-of-sale and billing systems built for retail, restaurants, and service businesses that need reliable checkout and clear records.',
    heroLead:
      'We develop POS tools that work on busy shop floors — fast checkout, inventory sync, and reports your team and accountant can trust.',
    heroImage:
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    ],
    featureTags: ['Fast Checkout', 'Inventory Sync', 'Sales Reports'],
    features: [
      'Web and tablet-friendly POS interfaces',
      'Invoice and receipt generation',
      'Inventory and product management',
      'Multi-user roles for staff and managers',
      'Sales and tax reporting',
      'Payment integration support',
    ],
    process: [
      { step: 'Business Review', description: 'We understand your store workflow, products, and reporting needs.' },
      { step: 'System Design', description: 'We plan checkout flows, inventory rules, and user permissions.' },
      { step: 'Development', description: 'We build your POS with reliable data handling and clear admin tools.' },
      { step: 'Pilot Testing', description: 'We test with real scenarios before full rollout to your team.' },
      { step: 'Support', description: 'Training, fixes, and feature updates as your business grows.' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Electron', 'Stripe', 'REST APIs'],
    industries: ['Retail', 'Restaurants', 'Salons', 'Pharmacy', 'Wholesale', 'Services'],
  },
];

const bySlug = new Map(SERVICE_PAGES.map((s) => [s.slug, s]));

export function getServicePage(slug: string) {
  return bySlug.get(slug);
}

export function getAllServicePageSlugs() {
  return SERVICE_PAGES.map((s) => s.slug);
}
