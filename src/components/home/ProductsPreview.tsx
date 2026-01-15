import { ArrowRight, Fuel, Settings, Snowflake, Circle, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import productAdvantage from '@/assets/product-advantage.png';
import productActive from '@/assets/product-active.png';

const ProductsPreview = () => {
  const categories = [
    { icon: Fuel, name: 'Engine Oils', count: '12+ Products', href: '/products/engine-oils' },
    { icon: Settings, name: 'Gear & Brake Oils', count: '8+ Products', href: '/products/gear-brake-oils' },
    { icon: Circle, name: 'Greases', count: '10+ Products', href: '/products/greases' },
    { icon: Droplet, name: 'Hydraulic Oils', count: '6+ Products', href: '/products/hydraulic-oils' },
    { icon: Snowflake, name: 'Coolants', count: '6+ Products', href: '/products/coolants' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
              Our Products
            </span>
          </div>
          
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Premium Lubricants for{' '}
            <span className="text-gradient">Every Need</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Discover our comprehensive range of high-quality lubricants designed to deliver exceptional performance and protection.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.href}
              className="group bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:-translate-y-2 cursor-pointer"
            >
              <div className="p-4 rounded-xl bg-accent/10 w-fit mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <category.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">{category.count}</p>
            </Link>
          ))}
        </div>

        {/* Featured Products */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border card-shadow">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Products Display */}
            <div className="flex justify-center items-end gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-colors" />
                <img
                  src={productAdvantage}
                  alt="Advantage+ Engine Oil"
                  className="relative h-48 md:h-64 object-contain animate-float"
                />
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
                <img
                  src={productActive}
                  alt="Active+ Engine Oil"
                  className="relative h-56 md:h-72 object-contain animate-float"
                  style={{ animationDelay: '0.5s' }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                DOUBLEGRIP Technology
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our proprietary DOUBLEGRIP formula provides <span className="text-accent font-semibold">50% better protection</span> against warm-up and re-start wear, ensuring your engine performs at its peak in all conditions.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Superior engine protection', 'Extended oil life', 'Optimal performance in extreme conditions'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/products">
                <Button size="lg" className="group">
                  Explore All Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
