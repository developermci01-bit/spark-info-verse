import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Shield, Gauge, Droplets } from 'lucide-react';
import productGear from '@/assets/product-gear.png';
import productAdvantage from '@/assets/product-advantage.png';

const GearBrakeOilsPage = () => {
  const products = [
    {
      name: 'Gear Max 80W-90',
      description: 'Premium gear oil for manual transmissions and differentials.',
      grade: '80W-90',
      type: 'Gear Oil',
      image: productGear,
      features: ['Extreme pressure protection', 'Smooth shifting', 'Long service life'],
    },
    {
      name: 'Gear Pro 85W-140',
      description: 'Heavy-duty gear oil for commercial vehicles and trucks.',
      grade: '85W-140',
      type: 'Heavy Duty Gear Oil',
      image: productAdvantage,
      features: ['High load capacity', 'Thermal stability', 'Anti-wear protection'],
    },
    {
      name: 'Shocker Fluid SF-10',
      description: 'Specialized suspension oil for motorcycle front forks.',
      grade: 'SAE 10',
      type: 'Fork Oil',
      image: productGear,
      features: ['Smooth damping', 'Anti-foam formula', 'Seal compatible'],
    },
    {
      name: 'Brake Fluid DOT 3',
      description: 'High-performance brake fluid for disc and drum brakes.',
      grade: 'DOT 3',
      type: 'Brake Fluid',
      image: productAdvantage,
      features: ['High boiling point', 'Corrosion protection', 'All-weather performance'],
    },
    {
      name: 'Brake Fluid DOT 4',
      description: 'Premium brake fluid for high-performance braking systems.',
      grade: 'DOT 4',
      type: 'Brake Fluid',
      image: productGear,
      features: ['Superior heat resistance', 'Consistent pedal feel', 'ABS compatible'],
    },
    {
      name: 'ATF Dexron III',
      description: 'Automatic transmission fluid for smooth gear changes.',
      grade: 'Dexron III',
      type: 'ATF',
      image: productAdvantage,
      features: ['Friction optimized', 'Oxidation stability', 'Extended drain'],
    },
  ];

  const benefits = [
    { icon: Settings, title: 'Smooth Operation', description: 'Ensures seamless gear transitions and brake response.' },
    { icon: Shield, title: 'Component Protection', description: 'Guards against wear, corrosion, and premature failure.' },
    { icon: Gauge, title: 'Pressure Resistance', description: 'Maintains performance under extreme pressure conditions.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="h-6 w-6 text-accent" />
              <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                Gear & Brake Oils
              </span>
            </div>
            <h1 className="section-title text-foreground mb-6">
              Gear & Brake Oils for{' '}
              <span className="text-gradient">Safe Driving</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              High-quality gear oils, brake fluids, and transmission fluids designed to ensure smooth operation, reliable stopping power, and long-lasting component protection.
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
            <h2 className="section-title text-center mb-12">Our Gear & Brake Oil Range</h2>
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

export default GearBrakeOilsPage;
