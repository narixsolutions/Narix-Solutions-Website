import type { LucideIcon } from 'lucide-react';
import {
  Database,
  Globe,
  Megaphone,
  Palette,
  ShoppingCart,
  Zap,
} from 'lucide-react';

export const HOME_TECH_TILES = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'MongoDB',
  'PostgreSQL',
  'Redis',
] as const;

export type HomeServiceCard = {
  readonly Icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly href: string;
};

export const HOME_SERVICE_CARDS: readonly HomeServiceCard[] = [
  {
    Icon: Globe,
    title: 'Custom Website Development',
    description: 'Responsive business websites designed for performance, branding, and lead generation.',
    href: '/services/web-development',
  },
  {
    Icon: ShoppingCart,
    title: 'E-Commerce Development',
    description: 'Modern online stores with secure payments, product management, and optimized shopping experiences.',
    href: '/services/ecommerce',
  },
  {
    Icon: Database,
    title: 'CMS Development',
    description: 'Flexible CMS platforms for businesses that need easy content management and scalability.',
    href: '/services/cms-development',
  },
  {
    Icon: Zap,
    title: 'SEO & Performance Optimization',
    description: 'Technical SEO, speed optimization, and structure improvements to increase visibility and conversions.',
    href: '/services/seo-marketing',
  },
  {
    Icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Growth-focused digital campaigns, social media marketing, and customer acquisition strategies.',
    href: '/services/seo-marketing',
  },
  {
    Icon: Palette,
    title: 'UI/UX Design',
    description: 'Modern user experiences and interface systems focused on usability and engagement.',
    href: '/services',
  },
] as const;

export type HomeBenefitCard = {
  readonly stat: string;
  readonly label: string;
  readonly desc: string;
};

export const HOME_BENEFITS: readonly HomeBenefitCard[] = [
  {
    stat: 'Clear',
    label: 'Transparent Communication',
    desc: 'Regular updates and honest timelines throughout your project',
  },
  {
    stat: 'Modern',
    label: 'Modern Scalable Development',
    desc: 'Current frameworks and architecture built to grow with your business',
  },
  {
    stat: 'SEO+',
    label: 'SEO & Performance Focused',
    desc: 'Technical SEO and speed optimization built into every delivery',
  },
  {
    stat: '24/7',
    label: 'Long-Term Technical Support',
    desc: 'Maintenance and technical assistance after launch when you need it',
  },
  {
    stat: 'ROI',
    label: 'Business-Centered Solutions',
    desc: 'Development aligned with your goals, audience, and growth priorities',
  },
  {
    stat: 'On-Time',
    label: 'Reliable Project Delivery',
    desc: 'Structured milestones and dependable handoffs from kickoff to launch',
  },
];
