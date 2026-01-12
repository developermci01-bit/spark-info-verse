import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const highlights = [
    'Established in 2014 with commitment to quality',
    'Team of seasoned industry professionals',
    'Serving 18+ states across India',
    'Exporting to 6+ countries worldwide',
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative group">
            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="Wieser Petroleum Manufacturing Facility"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-card rounded-2xl p-6 card-shadow border border-border">
              <div className="text-center">
                <span className="block text-4xl lg:text-5xl font-heading font-bold text-primary">10+</span>
                <span className="text-sm text-muted-foreground font-medium">Years of Excellence</span>
              </div>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                About Us
              </span>
            </div>
            
            <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 leading-tight">
              Driving Excellence in{' '}
              <span className="text-gradient">Petroleum Products</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Wieser Petroleum LLP was established with the aim of delivering superior performance and value to our customers. Our brand, <span className="text-foreground font-medium">Wieser Lubricants</span>, sets new benchmarks in the industry.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team comprises highly qualified individuals with strong business acumen and deep understanding of their domains. Their unwavering dedication enables us to develop top-tier products.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 group/item">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover/item:bg-accent/20 transition-colors">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link to="/about">
              <Button size="lg" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
