import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Fuel, Shield, Thermometer, Zap } from 'lucide-react';
import ProductCatalog from '@/components/products/ProductCatalog';

const EngineOilsPage = () => {
  const benefits = [
    { icon: Shield, title: 'Superior Protection', description: 'Advanced additives protect against wear, corrosion, and deposits.' },
    { icon: Thermometer, title: 'Temperature Stability', description: 'Maintains optimal viscosity in extreme hot and cold conditions.' },
    { icon: Zap, title: 'Enhanced Performance', description: 'Improves engine response and power output for better driving experience.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Fuel className="h-6 w-6 text-accent" />
              <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                Engine Oils
              </span>
            </div>
            <h1 className="section-title text-foreground mb-6">
              Premium Engine Oils for{' '}
              <span className="text-gradient">Maximum Performance</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our range of engine oils features the revolutionary DOUBLEGRIP technology, providing 50% better protection during warm-up and restart. Suitable for motorcycles, cars, trucks, and commercial vehicles.
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
        <ProductCatalog category="engine-oils" title="Our Engine Oil Range" />
      </main>
      <Footer />
    </div>
  );
};

export default EngineOilsPage;
