import { Shield, Cog, Users, Globe, Award, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const WhyUsPreview = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'MICRO MOLECULE Technology',
      description: '50% better protection against engine wear.',
    },
    {
      icon: Cog,
      title: 'State-of-Art Manufacturing',
      description: 'Fully automatic high-tech production plant.',
    },
    {
      icon: Users,
      title: 'Expert Support Team',
      description: '50+ dedicated service professionals.',
    },
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Serving 18+ states & 6+ countries.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing & quality control.',
    },
    {
      icon: Truck,
      title: 'Wide Distribution',
      description: '25+ distributors across regions.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Why Wieser{' '}
            <span className="text-gradient">Petroleum</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Trusted by thousands for delivering superior quality and unmatched performance
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-500 border border-border hover:border-accent/40 hover:-translate-y-2 overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative blob */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 ring-1 ring-border group-hover:ring-accent/50 group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                  <reason.icon className="h-6 w-6 text-accent" />
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/why-us">
            <Button variant="outline" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUsPreview;
