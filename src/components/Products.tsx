import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Fuel, Settings, Snowflake, Circle, Droplet } from 'lucide-react';
import productAdvantage from '@/assets/product-advantage.png';
import productActive from '@/assets/product-active.png';
import productGear from '@/assets/product-gear.png';
import advantageGreyAsset from '@/assets/advantage-grey.png.asset.json';
import adblueDefAsset from '@/assets/adblue-def.png.asset.json';

const Products = () => {
  const products = [
    {
      name: 'Engine Oils',
      description: 'Premium engine oils with MICRO MOLECULE technology for superior engine protection and performance in all driving conditions.',
      icon: Fuel,
      image: productAdvantage,
      href: '/products/engine-oils',
      features: ['50% better warm-up protection', 'Extended engine life', 'All-season performance'],
    },
    {
      name: 'Gear & Brake Oils',
      description: 'High-performance gear oils and brake fluids designed for smooth operation and maximum protection of transmission and braking systems.',
      icon: Settings,
      image: productGear,
      href: '/products/gear-brake-oils',
      features: ['Smooth gear shifting', 'Extreme pressure protection', 'Reliable braking'],
    },
    {
      name: 'Greases',
      description: 'Industrial-grade grease products for heavy machinery and automotive applications requiring superior lubrication.',
      icon: Circle,
      image: productAdvantage,
      href: '/products/greases',
      features: ['High temperature stability', 'Water resistant', 'Heavy-duty formula'],
    },
    {
      name: 'Hydraulic Oils',
      description: 'High-quality hydraulic fluids for industrial and mobile equipment ensuring reliable performance and component protection.',
      icon: Droplet,
      image: productActive,
      href: '/products/hydraulic-oils',
      features: ['Excellent anti-wear', 'Thermal stability', 'Efficient power transfer'],
    },
    {
      name: 'Coolants & DEF/AdBlue',
      description: 'Advanced coolant and DEF/AdBlue solutions for engine temperature control and emissions compliance in modern diesel vehicles.',
      icon: Snowflake,
      image: productActive,
      href: '/products/coolants',
      features: ['Anti-freeze protection', 'Emissions compliance', 'Year-round protection'],
    },
  ];

  const featuredProducts = [
    {
      name: 'Advantage+',
      tagline: 'Feel Its Power',
      grade: '20W40 4T',
      type: '4-Stroke Engine Oil',
      specs: 'API-SN • JASO MA-2 • 100% Syn Technology',
      image: advantageGreyAsset.url,
      href: '/products/engine-oils',
    },
    {
      name: 'AdBlue®',
      tagline: 'BS6 Engine Protection',
      grade: 'DEF / AdBlue®',
      type: 'Diesel Exhaust Fluid',
      specs: 'ISO 22241 • Pure & Reliable',
      image: adblueDefAsset.url,
      href: '/products/coolants',
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
              Our Products
            </span>
          </div>
          
          <h2 className="section-title text-foreground mb-6">
            Premium Lubricants for{' '}
            <span className="text-gradient">Every Need</span>
          </h2>
          
          <p className="section-subtitle mx-auto">
            State-of-the-art manufacturing plant capable of producing 1 lakh liters of oil per day, equipped with high-tech machinery for superior quality control.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:-translate-y-2"
            >
              <div className="p-4 rounded-xl bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                <product.icon className="h-8 w-8 text-accent" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {product.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {product.description}
              </p>
              
              <ul className="space-y-2 mb-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="link" className="p-0 text-accent hover:text-accent/80" asChild>
                <Link to={product.href}>
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="bg-primary rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Featured Products
            </h3>
            <p className="text-primary-foreground/70">
              Our bestselling lubricants trusted by thousands of customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6"
              >
                <div className="relative w-48 h-48 shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-contain animate-float"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-accent font-heading font-bold text-lg mb-1">
                    {product.name}
                  </div>
                  <p className="text-primary-foreground/70 text-sm mb-2">
                    {product.tagline}
                  </p>
                  <div className="text-primary-foreground font-heading font-bold text-2xl mb-1">
                    {product.grade}
                  </div>
                  <p className="text-primary-foreground/60 text-sm">
                    {product.type}
                  </p>
                  <p className="text-primary-foreground/50 text-xs mt-2">
                    {product.specs}
                  </p>
                  <Button variant="accent" size="sm" className="mt-4" asChild>
                    <Link to={product.href}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
