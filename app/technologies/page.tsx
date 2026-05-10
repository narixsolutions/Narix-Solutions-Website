import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technologies - NarixSolutions',
  description: 'The latest technologies and tools we use to build exceptional solutions.',
};

export default function TechnologiesPage() {
  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React.js', description: 'Modern UI library for building interactive applications', year: '2023' },
        { name: 'Next.js', description: 'Full-stack React framework with server-side rendering', year: '2023' },
        { name: 'TypeScript', description: 'Type-safe JavaScript for robust applications', year: '2023' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid development', year: '2023' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', description: 'JavaScript runtime for server-side development', year: '2023' },
        { name: 'PostgreSQL', description: 'Reliable relational database for complex applications', year: '2023' },
        { name: 'MongoDB', description: 'NoSQL database for flexible data modeling', year: '2023' },
        { name: 'Redis', description: 'In-memory data store for caching and real-time features', year: '2023' },
      ],
    },
    {
      category: 'DevOps & Cloud',
      items: [
        { name: 'AWS', description: 'Comprehensive cloud infrastructure and services', year: '2023' },
        { name: 'Docker', description: 'Containerization for consistent deployment', year: '2023' },
        { name: 'CI/CD', description: 'Automated testing and deployment pipelines', year: '2023' },
        { name: 'Kubernetes', description: 'Container orchestration for scalable applications', year: '2023' },
      ],
    },
    {
      category: 'Tools & Platforms',
      items: [
        { name: 'Git', description: 'Version control for collaborative development', year: '2023' },
        { name: 'Stripe', description: 'Payment processing and billing platform', year: '2023' },
        { name: 'Vercel', description: 'Deployment platform for Next.js applications', year: '2023' },
        { name: 'Figma', description: 'Design and prototyping tool for UI/UX', year: '2023' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Technology Stack</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We use the latest and most reliable technologies to build exceptional solutions
          </p>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {technologies.map((tech, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
              <h2 className="text-4xl font-bold text-foreground mb-12">{tech.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tech.items.map((item) => (
                  <div key={item.name} className="p-8 bg-card rounded-xl border border-border hover:border-blue-500/50 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{item.name}</h3>
                    <p className="text-foreground/70 mb-4">{item.description}</p>
                    <span className="text-sm text-foreground/60">Actively used since {item.year}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Discuss Technology Options?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our experts can help you choose the right technology stack for your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
