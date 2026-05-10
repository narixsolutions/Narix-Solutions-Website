export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard Platform',
    category: 'Web Development',
    description: 'A comprehensive financial dashboard for managing investments, tracking portfolios, and executing trades in real-time.',
    shortDescription: 'Real-time investment management platform',
    image: '/projects/fintech.jpg',
    stats: [
      { label: 'Performance Improvement', value: '+340%' },
      { label: 'User Engagement', value: '+280%' },
      { label: 'Conversion Rate', value: '+156%' },
      { label: 'Users Onboarded', value: '50K+' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket'],
  },
  {
    id: 'luxury-ecommerce',
    title: 'Luxury Fashion E-Commerce',
    category: 'E-Commerce',
    description: 'High-end fashion retail platform with advanced filtering, personalization, and seamless checkout experience.',
    shortDescription: 'Premium fashion retail experience',
    image: '/projects/fashion.jpg',
    stats: [
      { label: 'Average Order Value', value: '+$2,340' },
      { label: 'Return Rate', value: '-45%' },
      { label: 'Customer Satisfaction', value: '4.9/5' },
      { label: 'Monthly Sales', value: '$2.3M' },
    ],
    technologies: ['Next.js', 'Shopify', 'Tailwind CSS', 'Stripe', 'AI Recommendations'],
  },
  {
    id: 'saas-platform',
    title: 'Project Management SaaS',
    category: 'Web Development',
    description: 'Enterprise-grade project management tool with real-time collaboration, Gantt charts, and advanced reporting.',
    shortDescription: 'Collaborative team management platform',
    image: '/projects/saas.jpg',
    stats: [
      { label: 'Team Productivity', value: '+420%' },
      { label: 'Setup Time', value: '-80%' },
      { label: 'Active Teams', value: '8K+' },
      { label: 'Daily Active Users', value: '45K' },
    ],
    technologies: ['React', 'TypeScript', 'Firebase', 'D3.js', 'WebRTC'],
  },
  {
    id: 'mobile-fitness',
    title: 'Fitness Mobile App',
    category: 'Mobile Development',
    description: 'Personal fitness app with AI-powered workout recommendations, nutrition tracking, and social features.',
    shortDescription: 'AI-powered fitness companion',
    image: '/projects/fitness.jpg',
    stats: [
      { label: 'App Rating', value: '4.8/5' },
      { label: 'Downloads', value: '500K+' },
      { label: 'Daily Active Users', value: '125K' },
      { label: 'Workout Completion', value: '87%' },
    ],
    technologies: ['React Native', 'Firebase', 'TensorFlow', 'Stripe', 'Google Maps'],
  },
  {
    id: 'corporate-site',
    title: 'Fortune 500 Corporate Website',
    category: 'UI/UX Design',
    description: 'Global corporate website with multi-language support, SEO optimization, and enterprise CMS integration.',
    shortDescription: 'Enterprise website platform',
    image: '/projects/corporate.jpg',
    stats: [
      { label: 'Page Load Time', value: '-67%' },
      { label: 'SEO Rankings', value: '+1,234 keywords' },
      { label: 'Monthly Visitors', value: '2.1M' },
      { label: 'Lead Generation', value: '+450%' },
    ],
    technologies: ['Next.js', 'Sanity CMS', 'Cloudflare', 'BigCommerce', 'Analytics'],
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Patient Portal',
    category: 'Web Development',
    description: 'HIPAA-compliant patient management system with appointment scheduling, telemedicine, and secure messaging.',
    shortDescription: 'Secure healthcare management system',
    image: '/projects/healthcare.jpg',
    stats: [
      { label: 'Patient Adoption', value: '94%' },
      { label: 'Support Tickets', value: '-78%' },
      { label: 'Appointment No-shows', value: '-65%' },
      { label: 'Patient Satisfaction', value: '4.7/5' },
    ],
    technologies: ['React', 'Django', 'PostgreSQL', 'AWS', 'Video.js'],
  },
];
