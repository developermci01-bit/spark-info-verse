import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-heading text-sm font-medium text-primary-foreground">
              Trusted Since 2014
            </span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Premium Lubricants for{' '}
            <span className="text-gradient">Superior Performance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Wieser Petroleum LLP delivers exceptional quality lubricants that protect and enhance your machinery's performance. Serving 18+ states in India and exporting to 6 countries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl">
              Explore Products
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-extrabold text-accent">25+</div>
              <div className="text-sm text-primary-foreground/70">Distributors Worldwide</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-extrabold text-accent">50+</div>
              <div className="text-sm text-primary-foreground/70">Service Members</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-extrabold text-accent">6+</div>
              <div className="text-sm text-primary-foreground/70">Export Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
