import { HOME_BENEFITS } from '@/data/home';

export function HomeBenefitsSection() {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Why NarixSolutions</p>
          <h2 className="text-4xl font-bold">Why Businesses Work With NarixSolutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOME_BENEFITS.map((item) => (
            <div key={item.label} className="text-center p-5 rounded-xl bg-card border border-border hover:border-accent/35 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">{item.stat}</div>
              <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
