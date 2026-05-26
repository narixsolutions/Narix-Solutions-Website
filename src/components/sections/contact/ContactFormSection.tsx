type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

type ContactFormSectionProps = {
  formData: FormData;
  fieldErrors: Partial<Record<keyof FormData, string>>;
  isSubmitting: boolean;
  serviceOptions: readonly string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  whyChooseUs: Array<{ title: string; description: string }>;
};

export function ContactFormSection({
  formData,
  fieldErrors,
  isSubmitting,
  serviceOptions,
  handleChange,
  handleSubmit,
  whyChooseUs,
}: ContactFormSectionProps) {
  return (
    <section id="contact-form" className="py-16 sm:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="Your name"
                />
                {fieldErrors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                    {fieldErrors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="your@email.com"
                />
                {fieldErrors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  aria-invalid={Boolean(fieldErrors.phone)}
                  aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="+91 XX XXXX XXXX"
                />
                {fieldErrors.phone && (
                  <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                    {fieldErrors.phone}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                aria-invalid={Boolean(fieldErrors.service)}
                aria-describedby={fieldErrors.service ? 'service-error' : undefined}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:border-accent transition-colors duration-200 cursor-pointer"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldErrors.service && (
                <p id="service-error" className="text-red-500 text-sm mt-1" role="alert">
                  {fieldErrors.service}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                placeholder="Tell us about your project goals, timeline, and budget range..."
              ></textarea>
              {fieldErrors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                  {fieldErrors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="w-full bg-gradient-to-r from-accent to-emerald-800 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Why Choose Us</h2>
          <div className="space-y-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
