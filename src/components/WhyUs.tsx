import { Shield, Cog, Users, Globe, Award, Truck } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'DOUBLEGRIP Technology',
      description: '50% better protection against warm-up and re-start wear compared to standard engine oils.',
    },
    {
      icon: Cog,
      title: 'State-of-Art Manufacturing',
      description: 'Fully automatic plant capable of manufacturing 1 lakh liters per day with strict quality control.',
    },
    {
      icon: Users,
      title: '50+ Service Members',
      description: 'Dedicated after-sales support team of highly qualified professionals ready to resolve every query.',
    },
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Serving 18+ states in India and exporting premium lubricants to 6+ countries worldwide.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality maintenance and control by a team of highly qualified professionals.',
    },
    {
      icon: Truck,
      title: '25+ Distributors',
      description: 'Extensive distribution network ensuring our products reach customers efficiently worldwide.',
    },
  ];

  const processSteps = [
    { number: '01', title: 'Chemical Research', description: 'Advanced R&D for optimal formulations' },
    { number: '02', title: 'Oil & Gas Engineering', description: 'Precision engineering for quality' },
    { number: '03', title: 'Oil Manufacturing', description: 'State-of-the-art production process' },
    { number: '04', title: 'Ready to Use', description: 'Quality tested and packaged' },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="section-title text-foreground mb-6">
            Why Wieser{' '}
            <span className="text-gradient">Petroleum Lubricants</span>
          </h2>
          
          <p className="section-subtitle mx-auto">
            Discover the power of Wieser Petroleum Lubricants - the trusted choice for superior performance and protection across diverse industries.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
              
              <div className="relative">
                <div className="p-4 rounded-xl bg-accent/10 w-fit mb-6 group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="h-8 w-8 text-accent" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Process */}
        <div className="bg-primary rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Our Manufacturing Process
            </h3>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              From research to delivery, every step is meticulously executed to ensure the highest quality lubricants
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-primary-foreground/10 rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-colors">
                  <div className="font-heading text-5xl font-extrabold text-accent mb-4">
                    {step.number}
                  </div>
                  <h4 className="font-heading font-bold text-primary-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-primary-foreground/70 text-sm">
                    {step.description}
                  </p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
