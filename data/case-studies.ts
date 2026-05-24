/**
 * Replace `heroImage` / `gallery` URLs with your own assets when ready.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  /** Card + meta description */
  description: string;
  heroSubtitle?: string;
  heroDescription?: string;
  tags?: string[];
  clientWebsite?: string;
  location?: string;
  projectType?: string;
  heroImage: string;
  /** Shown inline on detail page — swap with product screenshots later */
  gallery: string[];
  sections?: {
    title: string;
    description: string;
    features: string[];
    techStack?: string[];
    images: string[];
  }[];
  technologies: string[];
  /** Highlights for listing cards */
  highlights: Record<string, string>;
  overview: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  timeline: string;
  team: string;
  cta?: {
    heading: string;
    description: string;
    buttonText: string;
  };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'pos-system',
    title: 'Coral Coast Admin POS & Operations Dashboard',
    category: 'Operations Dashboard',
    description:
      'Custom billing, restaurant operations, and management dashboard built for a real food business in Western Australia.',
    heroSubtitle: 'Coral Coast Kebabs & Fish Chips',
    heroDescription:
      'Designed and developed a dedicated admin platform for Coral Coast Kebabs & Fish Chips to manage billing, orders, menu updates, inventory, categories, and restaurant settings from one place. The system was built for practical day-to-day use inside a busy restaurant environment.',
    tags: [
      'Admin Dashboard',
      'POS Billing',
      'Order Management',
      'Inventory System',
      'Menu Management',
      'Restaurant Settings',
    ],
    // clientWebsite: 'https://coralcoastkebabs.com/',
    location: 'Carnarvon, Western Australia',
    projectType: 'Restaurant Admin Management System + POS Billing',
    heroImage: '/images/case-studies/coral-coast/admin/coral-coast-admin.png',
    gallery: [],
    sections: [
      {
        title: 'Restaurant Operations Dashboard',
        description:
          'Created a centralized admin panel that allows restaurant staff to manage operations from a single system. The dashboard provides quick access to billing, orders, inventory, categories, and restaurant settings.',
        features: [
          'Operational dashboard',
          'Revenue overview',
          'Order tracking',
          'Billing system',
          'Performance insights',
          'Staff-friendly interface',
        ],
        techStack: ['React', 'Next.js', 'TypeScript', 'Node.js'],
        images: ['/images/case-studies/coral-coast/admin/dashboard-overview.png'],
      },
      {
        title: 'POS & Billing Workflow',
        description:
          'Implemented a billing interface optimized for fast in-store order processing. Staff can quickly select menu items, generate bills, manage payment methods, and streamline customer checkout.',
        features: [
          'Quick item selection',
          'Dynamic billing',
          'Cash & card support',
          'Order summary panel',
          'Category filtering',
          'Fast workflow optimization',
        ],
        images: ['/images/case-studies/coral-coast/admin/billing-workflow.png'],
      },
      {
        title: 'Menu & Product Management',
        description:
          'Built a flexible menu management system where restaurant staff can add, edit, organize, and manage menu items across categories.',
        features: [
          'Category-based menu structure',
          'Item availability management',
          'Real-time updates',
          'Easy editing workflow',
          'Restaurant-focused admin UX',
        ],
        images: ['/images/case-studies/coral-coast/admin/menu-management.png'],
      },
      {
        title: 'Order Tracking System',
        description:
          'Developed an organized order management interface that helps staff monitor customer orders, payment methods, totals, and transaction history efficiently.',
        features: [
          'Order history',
          'Payment tracking',
          'PDF export support',
          'Order details view',
          'Transaction management',
        ],
        images: ['/images/case-studies/coral-coast/admin/orders-management.png'],
      },
      {
        title: 'Inventory & Category Control',
        description:
          'Implemented inventory visibility and category management tools to simplify stock monitoring and menu organization for daily restaurant operations.',
        features: [
          'Inventory overview',
          'Stock visibility',
          'Category management',
          'Operational tracking',
          'Simple administrative controls',
        ],
        images: ['/images/case-studies/coral-coast/admin/inventory-categories.png'],
      },
      {
        title: 'Restaurant Configuration Panel',
        description:
          'Created a simple settings module allowing administrators to manage restaurant information, operational preferences, and system configuration.',
        features: ['Restaurant profile settings', 'Operational preferences', 'System configuration'],
        images: ['/images/case-studies/coral-coast/admin/settings-panel.png'],
      },
    ],
    highlights: {
      Location: 'Carnarvon, WA',
      Platform: 'Admin + POS',
      Workflow: 'Staff-focused',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Neon DB', 'Vercel'],
    overview:
      'This case study focuses on the internal operational system built for Coral Coast Kebabs & Fish Chips. The dashboard was designed for staff and admins to handle billing, tracking orders, maintaining menu items, and managing everyday back-office workflows.',
    challenge:
      'The restaurant needed a system that was fast enough for in-store use and simple enough for staff and admins to work with during peak hours. Billing, item management, order records, and stock visibility all needed to sit inside one reliable interface.',
    solution:
      'We built a dedicated admin dashboard with modules for billing, menu management, order tracking, inventory oversight, category control, and settings. The interface keeps core actions close at hand so staff and admins can move through routine restaurant tasks without friction.',
    metrics: [
      { label: 'Billing workflow', value: 'Faster' },
      { label: 'Menu updates', value: 'Simplified' },
      { label: 'Order visibility', value: 'Centralized' },
      { label: 'Operations', value: 'Staff-friendly' },
      { label: 'Inventory', value: 'Real-time visibility' },
      { label: 'Admin control', value: 'Single dashboard' },
    ],
    timeline: 'Phased delivery',
    team: 'NarixSolutions web and dashboard team',
    cta: {
      heading: 'Need a Custom Management System for Your Business?',
      description:
        'We build scalable web platforms, admin dashboards, and operational systems tailored for real businesses.',
      buttonText: 'Start Your Project',
    },
  },
  {
    slug: 'coral-coast-ordering-website',
    title: 'Coral Coast Customer Ordering Website',
    category: 'Ordering Website',
    description:
      'Customer-facing restaurant website designed to help Coral Coast Kebabs & Fish Chips present its menu clearly and drive takeaway orders in Carnarvon.',
    heroSubtitle: 'Coral Coast Kebabs & Fish Chips',
    heroDescription:
      'This case study focuses on the public website built for Coral Coast Kebabs & Fish Chips. The site gives customers a clear first impression of the business, highlights key menu categories, showcases popular items and reviews, and moves users toward takeaway ordering through prominent call and WhatsApp actions.',
    tags: [
      'Restaurant Website',
      'WhatsApp Ordering',
      'Menu Browsing',
      'Responsive Design',
      'Testimonials',
      'Local Business Website',
    ],
    location: 'Carnarvon, Western Australia',
    clientWebsite: 'https://coralcoastkebabs.com/',
    projectType: 'Customer Ordering Website',
    heroImage: '/images/case-studies/coral-coast/customer/hero.png',
    gallery: [
      '/images/case-studies/coral-coast/customer/hero.png',
      '/images/case-studies/coral-coast/customer/home.png',
      '/images/case-studies/coral-coast/customer/menu.png',
    ],
    sections: [
      {
        title: 'Homepage Ordering Experience',
        description:
          'The homepage was designed to immediately communicate what the restaurant offers and guide visitors toward action. It combines the business identity, Carnarvon location, menu access, and takeaway ordering buttons in a straightforward landing experience that works well across screen sizes.',
        features: [
          'Responsive design',
          'Primary menu CTA',
          'Takeaway order CTA',
          'Business location visibility',
          'Quick-highlight stats',
          'Floating call action',
          'Mobile-friendly hero layout',
        ],
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        images: ['/images/case-studies/coral-coast/customer/home.png'],
      },
      {
        title: 'Menu Browsing & Featured Items',
        description:
          'The website presents menu categories clearly and uses featured sections like popular items to help customers understand the offering quickly. From kebab rolls and fish and chips to burgers, gozleme, desserts, and shakes, the structure keeps menu discovery simple and visually approachable.',
        features: [
          'Category-driven browsing',
          'Popular menu item highlights',
          'Featured item visibility',
          'Pricing cues from the menu',
          'Fast decision-making flow',
          'Visual menu hierarchy',
        ],
        images: ['/images/case-studies/coral-coast/customer/menu.png'],
      },
      {
        title: 'About, Reviews & Business Trust Signals',
        description:
          'Beyond ordering, the website includes practical trust-building sections that make the business feel established and local. The About page, customer review section, address details, and repeat ordering prompts all help reinforce confidence before customers place an order or visit the shop.',
        features: [
          'Customer testimonials',
          'About page content',
          'Location and contact visibility',
          'Repeat ordering prompts',
          'Business credibility content',
        ],
        images: ['/images/case-studies/coral-coast/customer/about-review.png'],
      },
      {
        title: 'WhatsApp-Led Ordering Flow',
        description:
          'The menu page is built around a lightweight ordering flow that encourages customers to browse items and then place their order through WhatsApp or direct call actions. This keeps the process simple for the business while still giving customers a fast digital path to order.',
        features: [
          'WhatsApp order button',
          'Call-now fallback action',
          'Menu page CTA structure',
          'Gallery-supported menu browsing',
          'Low-friction takeaway flow',
        ],
        images: ['/images/case-studies/coral-coast/customer/whatsapp.png'],
      },
    ],
    highlights: {
      Location: 'Carnarvon, WA',
      Ordering: 'WhatsApp + Call',
      Experience: 'Mobile-first',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    overview:
      'This project was built as the public-facing website for Coral Coast Kebabs & Fish Chips in Carnarvon. The focus was on creating a clear and approachable customer experience where visitors can quickly understand the menu, see what makes the restaurant popular locally, and move toward a takeaway order without friction.',
    challenge:
      'The website needed to feel modern and trustworthy while still staying easy to use for a broad local audience. It had to present menu categories clearly, support fast mobile browsing, show enough business context to build confidence, and push customers toward simple order actions instead of a complicated checkout process.',
    solution:
      'We designed and developed a menu-first restaurant website with a strong homepage, clear category navigation, highlighted popular dishes, review sections, About content, and repeated CTA placement for WhatsApp and phone orders. The result is a customer journey that feels lightweight, direct, and practical for a real takeaway business.',
    metrics: [
      { label: 'Menu sections', value: '7+' },
      { label: 'Ordering options', value: 'WhatsApp + Call' },
      { label: 'Website UX', value: 'Responsive' },
      { label: 'Customer journey', value: 'CTA-led' },
    ],
    timeline: 'Phased delivery',
    team: 'NarixSolutions web and dashboard team',
    cta: {
      heading: 'Need a Customer-Facing Ordering Website for Your Business?',
      description:
        'We design and build modern websites that help real businesses present their menu, services, and brand clearly while guiding customers toward enquiries or orders.',
      buttonText: 'Start Your Project',
    },
  },
];

const bySlug = new Map(CASE_STUDIES.map((c) => [c.slug, c]));

export function getCaseStudy(slug: string) {
  return bySlug.get(slug);
}

export function getAllCaseStudySlugs() {
  return CASE_STUDIES.map((c) => c.slug);
}
