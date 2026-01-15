import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Fuel, Shield, Thermometer, Zap } from 'lucide-react';
import productAdvantage from '@/assets/product-advantage.png';
import productActive from '@/assets/product-active.png';

const EngineOilsPage = () => {
  const products = [
    {
      name: 'Advantage+ 20W-40',
      description: 'Premium motorcycle engine oil with DOUBLEGRIP technology for superior protection.',
      grade: '20W-40',
      type: 'Motorcycle Engine Oil',
      image: productAdvantage,
      features: ['50% better warm-up protection', 'Extended engine life', 'All-season performance'],
    },
    {
      name: 'Active+ 20W-40 4T',
      description: 'High-performance 4-stroke engine oil for demanding riding conditions.',
      grade: '20W-40 4T',
      type: 'Motorcycle Engine Oil',
      image: productActive,
      features: ['Enhanced power output', 'Smooth clutch operation', 'Superior wear protection'],
    },
    {
      name: 'Turbo Gold 15W-40',
      description: 'Heavy-duty diesel engine oil for commercial vehicles and trucks.',
      grade: '15W-40',
      type: 'Diesel Engine Oil',
      image: productAdvantage,
      features: ['Excellent soot control', 'Long drain intervals', 'Fuel economy improvement'],
    },
    {
      name: 'Supreme 10W-30',
      description: 'Synthetic blend engine oil for passenger cars with modern engines.',
      grade: '10W-30',
      type: 'Car Engine Oil',
      image: productActive,
      features: ['Low friction formula', 'Quick cold starts', 'Engine cleanliness'],
    },
    {
      name: 'Power Max 5W-30',
      description: 'Full synthetic engine oil for high-performance vehicles.',
      grade: '5W-30',
      type: 'Synthetic Engine Oil',
      image: productAdvantage,
      features: ['Maximum protection', 'Extreme temperature stability', 'Premium performance'],
    },
    {
      name: 'Eco Drive 0W-20',
      description: 'Ultra-low viscosity oil for fuel-efficient hybrid and modern engines.',
      grade: '0W-20',
      type: 'Fuel Efficient Oil',
      image: productActive,
      features: ['Maximum fuel economy', 'Reduced emissions', 'Hybrid compatible'],
    },
  ];

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
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Our Engine Oil Range</h2>
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

export default EngineOilsPage;
