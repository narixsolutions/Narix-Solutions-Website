import { Metadata } from 'next';
import { Award, Users, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - NarixSolutions',
  description: 'Learn about NarixSolutions and our mission to transform businesses through digital innovation.',
};

export default function AboutPage() {
  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Team Members', value: '150+', icon: Users },
    { label: 'Years Experience', value: '12+', icon: Award },
    { label: 'Countries Served', value: '50+', icon: Zap },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We continuously push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    },
    {
      title: 'Quality',
      description: 'Every project receives our full attention and highest standards of craftsmanship.',
    },
    {
      title: 'Partnership',
      description: 'We treat our clients as partners, invested in their long-term success.',
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest feedback throughout every project phase.',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Building the <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Future</span>
          </h1>
          <p className="text-xl text-foreground/70">
            NarixSolutions is a premium digital transformation agency dedicated to helping businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-foreground/70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-4">
              To empower businesses worldwide by delivering premium digital solutions that drive growth, inspire innovation, and create lasting impact.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We believe that great technology is not just about code—it&apos;s about understanding your business, your challenges, and your dreams.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Vision</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-4">
              To be the most trusted digital transformation partner for enterprises seeking to leverage technology for competitive advantage.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We envision a world where businesses of all sizes have access to world-class digital solutions and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border hover:border-accent transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', role: 'Founder & CEO', bio: 'Visionary leader with 15+ years in digital transformation' },
              { name: 'Priya Sharma', role: 'CTO', bio: 'Expert architect with deep technical expertise' },
              { name: 'Amit Patel', role: 'VP Design', bio: 'Award-winning designer focused on user excellence' },
            ].map((member, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border hover:border-accent transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-3">{member.role}</p>
                <p className="text-foreground/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Best Digital Agency 2023',
              'Top 10 Dev Agencies',
              'Customer Choice Award',
            ].map((award, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <p className="font-bold text-foreground text-lg">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let&apos;s discuss how we can help you achieve your business goals through digital transformation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </section> */}
    </main>
  );
}
