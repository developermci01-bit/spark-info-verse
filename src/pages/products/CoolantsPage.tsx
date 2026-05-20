import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/products/ProductCatalog';
import { Snowflake, Shield, Thermometer, Droplets } from 'lucide-react';

const CoolantsPage = () => {
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
        <ProductCatalog category="coolants" title="Our Coolant & DEF Range" />
      </main>
      <Footer />
    </div>
  );
};

export default CoolantsPage;
