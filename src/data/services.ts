export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
  color: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.',
    price: 'Starting at $5,000',
    features: [
      'Full-stack development',
      'Responsive design',
      'SEO optimization',
      'Performance tuning',
      'API integration',
      'Maintenance & support',
    ],
    icon: 'code2',
    color: 'bg-blue-500',
  },
  {
    id: 'ui-design',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that convert visitors into customers with data-driven design decisions.',
    price: 'Starting at $3,000',
    features: [
      'User research',
      'Wireframing',
      'Visual design',
      'Prototyping',
      'Usability testing',
      'Design systems',
    ],
    icon: 'palette',
    color: 'bg-purple-500',
  },
  {
    id: 'seo-marketing',
    title: 'SEO & Digital Marketing',
    description: 'Strategic marketing campaigns that drive organic traffic and build lasting brand awareness.',
    price: 'Starting at $2,500',
    features: [
      'On-page SEO',
      'Technical SEO',
      'Content strategy',
      'Link building',
      'Analytics setup',
      'Monthly reports',
    ],
    icon: 'trending-up',
    color: 'bg-emerald-500',
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Comprehensive brand solutions that tell your story and connect with your target audience.',
    price: 'Starting at $4,000',
    features: [
      'Logo design',
      'Brand guidelines',
      'Color palette',
      'Typography',
      'Visual assets',
      'Brand strategy',
    ],
    icon: 'sparkles',
    color: 'bg-pink-500',
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Solutions',
    description: 'Complete online stores with payment processing, inventory management, and conversion optimization.',
    price: 'Starting at $6,000',
    features: [
      'Platform setup',
      'Product management',
      'Payment gateway',
      'Shipping integration',
      'Analytics & reporting',
      'Conversion optimization',
    ],
    icon: 'shopping-cart',
    color: 'bg-red-500',
  },
  {
    id: 'cms-development',
    title: 'CMS Development',
    description: 'WordPress, headless CMS, and custom content management solutions for seamless content publishing.',
    price: 'Starting at $4,500',
    features: [
      'WordPress development',
      'Custom CMS solutions',
      'Headless CMS setup',
      'Admin panel systems',
      'Content workflows',
      'Scalable architecture',
    ],
    icon: 'layout-template',
    color: 'bg-cyan-500',
  },
];
