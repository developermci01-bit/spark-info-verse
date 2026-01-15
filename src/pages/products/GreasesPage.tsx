import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Circle, Shield, Thermometer, Wrench } from 'lucide-react';
import productAdvantage from '@/assets/product-advantage.png';
import productActive from '@/assets/product-active.png';

const GreasesPage = () => {
  const products = [
    {
      name: 'Lithium Grease EP2',
      description: 'Multi-purpose lithium-based grease for general lubrication.',
      grade: 'NLGI 2',
      type: 'Lithium Grease',
      image: productAdvantage,
      features: ['Excellent water resistance', 'Wide temperature range', 'Long-lasting protection'],
    },
    {
      name: 'Chassis Grease CG-3',
      description: 'Heavy-duty chassis grease for automotive and industrial applications.',
      grade: 'NLGI 3',
      type: 'Chassis Grease',
      image: productActive,
      features: ['High load capacity', 'Shock resistant', 'Anti-corrosion'],
    },
    {
      name: 'Wheel Bearing Grease',
      description: 'Premium grease for wheel bearings and hub assemblies.',
      grade: 'NLGI 2',
      type: 'Bearing Grease',
      image: productAdvantage,
      features: ['High temperature stability', 'Extreme pressure protection', 'Long service intervals'],
    },
    {
      name: 'Industrial Grease IG-1',
      description: 'Heavy-duty industrial grease for machinery and equipment.',
      grade: 'NLGI 1',
      type: 'Industrial Grease',
      image: productActive,
      features: ['Excellent pumpability', 'Central lubrication compatible', 'Rust prevention'],
    },
    {
      name: 'High Temp Grease HT-2',
      description: 'Specialized grease for high-temperature applications.',
      grade: 'NLGI 2',
      type: 'High Temp Grease',
      image: productAdvantage,
      features: ['Up to 200°C operating temp', 'Non-melting formula', 'Synthetic base'],
    },
    {
      name: 'Marine Grease MG-2',
      description: 'Water-resistant grease for marine and wet environments.',
      grade: 'NLGI 2',
      type: 'Marine Grease',
      image: productActive,
      features: ['Saltwater resistant', 'Excellent adhesion', 'Prevents rust'],
    },
  ];

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
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Our Grease Range</h2>
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

export default GreasesPage;
