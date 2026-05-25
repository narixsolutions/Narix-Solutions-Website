import type { LucideIcon } from 'lucide-react';

type ContactMethod = {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string;
  ariaLabel: string;
  external?: boolean;
};

type ContactMethodsSectionProps = {
  contactMethods: ContactMethod[];
};

export function ContactMethodsSection({ contactMethods }: ContactMethodsSectionProps) {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-emerald-500/3 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {contactMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <a
              key={method.title}
              href={method.link}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noopener noreferrer' : undefined}
              aria-label={method.ariaLabel}
              className="group cursor-pointer p-8 bg-white dark:bg-slate-900/50 rounded-2xl border border-gray-200/50 dark:border-slate-700/50 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-emerald-800 p-4 text-white mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <IconComponent size={28} aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{method.title}</h3>
              <p className="text-foreground/70 group-hover:text-accent transition-colors duration-300 font-light">
                {method.value}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
