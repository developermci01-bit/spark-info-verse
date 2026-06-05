import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/products/ProductCatalog';
import { Snowflake, Shield, Thermometer, Droplets } from 'lucide-react';
import heroImg from '@/assets/products/coolant-hero.jpg';
import img1 from '@/assets/products/coolant-1.jpg';
import img2 from '@/assets/products/coolant-2.jpg';
import img3 from '@/assets/products/coolant-3.jpg';

const CoolantsPage = () => {
  const benefits = [
    { icon: Thermometer, title: 'Temperature Control', description: 'Prevents overheating and freezing in extreme conditions.' },
    { icon: Shield, title: 'Corrosion Protection', description: 'Protects radiator, water pump, and engine components.' },
    { icon: Droplets, title: 'System Longevity', description: 'Extends cooling system life with advanced inhibitors.' },
  ];

  const gallery = [
    { src: img1, caption: 'Cooling Systems' },
    { src: img2, caption: 'Coolant Range' },
    { src: img3, caption: 'Radiator Protection' },
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
                  <Snowflake className="h-6 w-6 text-accent" />
                  <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                    Coolants
                  </span>
                </div>
                <h1 className="section-title text-foreground mb-6">
                  Coolants for{' '}
                  <span className="text-gradient">Optimal Engine Temperature</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Advanced coolant formulations that prevent overheating and freezing while providing superior corrosion protection for all types of cooling systems.
                </p>
              </div>
              <div className="relative animate-fade-in">
                <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
                <img src={heroImg} alt="Engine coolants" width={1280} height={960} className="relative rounded-2xl border border-border shadow-2xl w-full h-auto object-cover" />
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
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">Cooling You Can Count On</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {gallery.map((g, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl border border-border aspect-[4/3]">
                  <img src={g.src} alt={g.caption} loading="lazy" width={1024} height={768} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-heading font-semibold text-primary-foreground text-lg">{g.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductCatalog category="coolants" title="Our Coolant & DEF Range" />
      </main>
      <Footer />
    </div>
  );
};

export default CoolantsPage;
