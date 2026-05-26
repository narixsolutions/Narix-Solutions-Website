type ContactBusinessHoursSectionProps = {
  mapsHref: string;
  contactLocation: string;
};

export function ContactBusinessHoursSection({ mapsHref, contactLocation }: ContactBusinessHoursSectionProps) {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Business Hours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-xl border border-border bg-card/50 p-5 sm:p-6">
            <h3 className="font-bold text-foreground mb-2">Monday – Saturday</h3>
            <p className="text-foreground/70">10:00 AM – 7:00 PM IST</p>
          </div>
          <div className="rounded-xl border border-border bg-card/50 p-5 sm:p-6">
            <h3 className="font-bold text-foreground mb-2">Sunday</h3>
            <p className="text-foreground/70">Emergency support only</p>
          </div>
          <div className="rounded-xl border border-border bg-card/50 p-5 sm:p-6">
            <h3 className="font-bold text-foreground mb-2">Location</h3>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors duration-300 cursor-pointer"
            >
              {contactLocation}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
