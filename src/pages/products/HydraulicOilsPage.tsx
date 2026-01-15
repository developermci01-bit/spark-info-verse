import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet, Shield, Gauge, Zap } from 'lucide-react';
import productAdvantage from '@/assets/product-advantage.png';
import productActive from '@/assets/product-active.png';

const HydraulicOilsPage = () => {
  const products = [
    {
      name: 'Hydra Power 32',
      description: 'Premium hydraulic oil for industrial hydraulic systems.',
      grade: 'ISO VG 32',
      type: 'Hydraulic Oil',
      image: productAdvantage,
      features: ['Excellent anti-wear', 'Thermal stability', 'Rust prevention'],
    },
    {
      name: 'Hydra Power 46',
      description: 'Medium viscosity hydraulic oil for general applications.',
      grade: 'ISO VG 46',
      type: 'Hydraulic Oil',
      image: productActive,
      features: ['Good filterability', 'Oxidation resistance', 'Foam control'],
    },
    {
      name: 'Hydra Power 68',
      description: 'High viscosity hydraulic oil for heavy-duty systems.',
      grade: 'ISO VG 68',
      type: 'Hydraulic Oil',
      image: productAdvantage,
      features: ['High load capacity', 'Extended service life', 'Multi-metal compatible'],
    },
    {
      name: 'Tractor Hydraulic Fluid',
      description: 'Multi-functional fluid for tractor hydraulics and transmissions.',
      grade: 'UTTO',
      type: 'Tractor Fluid',
      image: productActive,
      features: ['Wet brake compatible', 'Power take-off ready', 'All-season use'],
    },
    {
      name: 'Hydra Synthetic 46',
      description: 'Full synthetic hydraulic oil for demanding applications.',
      grade: 'ISO VG 46',
      type: 'Synthetic Hydraulic',
      image: productAdvantage,
      features: ['Extended drain intervals', 'Energy efficient', 'Superior protection'],
    },
    {
      name: 'Fire Resistant Fluid',
      description: 'Specialized hydraulic fluid for high-temperature environments.',
      grade: 'HFDU',
      type: 'Fire Resistant',
      image: productActive,
      features: ['Fire resistant', 'Biodegradable option', 'High flash point'],
    },
  ];

  const benefits = [
    { icon: Gauge, title: 'System Efficiency', description: 'Optimizes hydraulic system performance and responsiveness.' },
    { icon: Shield, title: 'Wear Protection', description: 'Advanced additives protect pumps, valves, and cylinders.' },
    { icon: Zap, title: 'Power Transmission', description: 'Efficient power transfer for maximum productivity.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="h-6 w-6 text-accent" />
              <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                Hydraulic Oils
              </span>
            </div>
            <h1 className="section-title text-foreground mb-6">
              Hydraulic Oils for{' '}
              <span className="text-gradient">Maximum Efficiency</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              High-quality hydraulic fluids designed to deliver reliable performance, excellent wear protection, and long service life for industrial and mobile hydraulic systems.
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
            <h2 className="section-title text-center mb-12">Our Hydraulic Oil Range</h2>
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
                    <ul className="space-y-2 mb-4 text-left">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="accent" className="w-full group">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
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

export default HydraulicOilsPage;
