import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Snowflake, Shield, Thermometer, Droplets } from 'lucide-react';
import productAdvantage from '@/assets/product-advantage.png';
import productActive from '@/assets/product-active.png';

const CoolantsPage = () => {
  const products = [
    {
      name: 'CoolGuard Green',
      description: 'Traditional green coolant for older vehicle cooling systems.',
      grade: 'IAT',
      type: 'Conventional Coolant',
      image: productAdvantage,
      features: ['Silicate based protection', 'Compatible with older systems', 'Economical choice'],
    },
    {
      name: 'CoolGuard Red',
      description: 'Extended life coolant for modern engines requiring OAT technology.',
      grade: 'OAT',
      type: 'Long Life Coolant',
      image: productActive,
      features: ['5-year protection', 'Organic acid technology', 'Aluminum compatible'],
    },
    {
      name: 'CoolGuard Universal',
      description: 'Universal coolant compatible with all vehicle types.',
      grade: 'HOAT',
      type: 'Hybrid Coolant',
      image: productAdvantage,
      features: ['All-vehicle compatible', 'Hybrid technology', 'Easy top-up'],
    },
    {
      name: 'Heavy Duty Coolant',
      description: 'Specialized coolant for trucks and commercial vehicles.',
      grade: 'HD OAT',
      type: 'Commercial Coolant',
      image: productActive,
      features: ['Wet sleeve liner protection', 'Nitrite free', 'Extended service intervals'],
    },
    {
      name: 'Radiator Flush',
      description: 'Cooling system cleaner for removing deposits and rust.',
      grade: 'Flush',
      type: 'Maintenance',
      image: productAdvantage,
      features: ['Removes scale deposits', 'Safe for all metals', 'Quick action formula'],
    },
    {
      name: 'Concentrate Coolant',
      description: 'Concentrated antifreeze for custom mixing ratios.',
      grade: 'Concentrate',
      type: 'Concentrated',
      image: productActive,
      features: ['Custom dilution', 'Maximum protection', 'Economical bulk option'],
    },
  ];

  const benefits = [
    { icon: Thermometer, title: 'Temperature Control', description: 'Prevents overheating and freezing in extreme conditions.' },
    { icon: Shield, title: 'Corrosion Protection', description: 'Protects radiator, water pump, and engine components.' },
    { icon: Droplets, title: 'System Longevity', description: 'Extends cooling system life with advanced inhibitors.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Snowflake className="h-6 w-6 text-accent" />
              <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                Coolants
              </span>
            </div>
            <h1 className="section-title text-foreground mb-6">
              Coolants for{' '}
              <span className="text-gradient">Optimal Engine Temperature</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Advanced coolant formulations that prevent overheating and freezing while providing superior corrosion protection for all types of cooling systems.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Our Coolant Range</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                      {product.grade}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <ul className="space-y-2 text-left">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoolantsPage;
