import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/products/ProductCatalog';
import { Circle, Shield, Thermometer, Wrench } from 'lucide-react';

const GreasesPage = () => {
  const benefits = [
    { icon: Wrench, title: 'Versatile Application', description: 'Suitable for automotive, industrial, and marine applications.' },
    { icon: Thermometer, title: 'Temperature Resistance', description: 'Performs reliably in extreme hot and cold conditions.' },
    { icon: Shield, title: 'Long-lasting Protection', description: 'Reduces friction and prevents wear for extended service life.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Circle className="h-6 w-6 text-accent" />
              <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                Greases
              </span>
            </div>
            <h1 className="section-title text-foreground mb-6">
              Industrial-Grade Greases for{' '}
              <span className="text-gradient">Superior Lubrication</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our comprehensive range of greases provides excellent lubrication for bearings, chassis, machinery, and specialized applications requiring high-performance protection.
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
        <ProductCatalog category="greases" title="Our Grease Range" />
      </main>
      <Footer />
    </div>
  );
};

export default GreasesPage;
