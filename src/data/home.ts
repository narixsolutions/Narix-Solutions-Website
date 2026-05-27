import type { LucideIcon } from 'lucide-react';
import {
  Cog,
  Globe,
  Layout,
  ShoppingCart,
  TrendingUp,
  Wrench,
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
    title: 'Business Website Development',
    description: 'Professional websites designed to establish your online presence, generate leads, and build customer trust.',
    href: '/services/web-development',
  },
  {
    Icon: ShoppingCart,
    title: 'E-Commerce Development',
    description: 'Custom online stores with secure payments, product management, inventory systems, and optimised shopping experiences.',
    href: '/services/ecommerce',
  },
  {
    Icon: Layout,
    title: 'CMS Development',
    description: 'Flexible CMS solutions that allow businesses to manage content, blogs, products, and pages with ease.',
    href: '/services/cms-development',
  },
  {
    Icon: TrendingUp,
    title: 'SEO & Digital Marketing',
    description: 'Data-driven SEO and marketing strategies that help businesses increase visibility, traffic, and customer acquisition.',
    href: '/services/seo-marketing',
  },
  {
    Icon: Cog,
    title: 'Custom Web Applications',
    description: 'Tailored web applications built to automate workflows, improve efficiency, and support business operations.',
    href: '/services/custom-web-applications',
  },
  {
    Icon: Wrench,
    title: 'Website Maintenance & Support',
    description: 'Reliable maintenance services to keep your website secure, updated, optimised, and running smoothly.',
    href: '/services/website-maintenance',
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
