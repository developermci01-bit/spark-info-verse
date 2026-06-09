import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/products/ProductCatalog';
import { Circle, Shield, Thermometer, Wrench } from 'lucide-react';
import heroAsset from '@/assets/products/grease-hero.png.asset.json';
const heroImg = heroAsset.url;
import img1 from '@/assets/products/grease-1.jpg';
import img2 from '@/assets/products/grease-2.jpg';
import img3 from '@/assets/products/grease-3.jpg';

const GreasesPage = () => {
  const benefits = [
    { icon: Wrench, title: 'Versatile Application', description: 'Suitable for automotive, industrial, and marine applications.' },
    { icon: Thermometer, title: 'Temperature Resistance', description: 'Performs reliably in extreme hot and cold conditions.' },
    { icon: Shield, title: 'Long-lasting Protection', description: 'Reduces friction and prevents wear for extended service life.' },
  ];

  const gallery = [
    { src: img1, caption: 'Wheel Bearings' },
    { src: img2, caption: 'Industrial Machinery' },
    { src: img3, caption: 'Maintenance & Service' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
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
                <p className="text-lg text-muted-foreground">
                  Our comprehensive range of greases provides excellent lubrication for bearings, chassis, machinery, and specialized applications requiring high-performance protection.
                </p>
              </div>
              <div className="relative animate-fade-in">
                <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
                <div className="relative aspect-[4/3] lg:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border shadow-2xl">
                  <img src={heroImg} alt="Industrial greases" width={1280} height={960} loading="eager" fetchPriority="high" decoding="async" sizes="(min-width: 1024px) 50vw, 100vw" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-8 bg-accent rounded-full" />
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">Trusted Across Industries</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {gallery.map((g, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl border border-border aspect-[4/3]">
                  <img src={g.src} alt={g.caption} loading="lazy" decoding="async" width={1024} height={768} sizes="(min-width: 768px) 33vw, 100vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-heading font-semibold text-primary-foreground text-lg">{g.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductCatalog category="greases" title="Our Grease Range" />
      </main>
      <Footer />
    </div>
  );
};

export default GreasesPage;
