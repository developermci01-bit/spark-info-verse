import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Droplet, Award, ShieldCheck, Gauge } from 'lucide-react';

const YzolLubricantsPage = () => {
  const highlights = [
    { icon: Award, title: 'Premium Quality', description: 'High-performance lubricants engineered to international standards.' },
    { icon: ShieldCheck, title: 'Reliable Protection', description: 'Superior wear and corrosion protection for long engine life.' },
    { icon: Gauge, title: 'Optimized Performance', description: 'Formulated for smooth operation and maximum efficiency.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="h-6 w-6 text-accent" />
              <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                Other Brands
              </span>
            </div>
            <h1 className="section-title text-foreground mb-6">
              YZOL <span className="text-gradient">Lubricants</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              YZOL Lubricants is part of our extended portfolio of trusted brands, offering a
              comprehensive range of high-performance lubricants for automotive and industrial
              applications. Built on quality and reliability, YZOL delivers dependable protection
              and performance across demanding conditions.
            </p>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="section-title text-foreground mb-6">About YZOL Lubricants</h2>
            <p className="text-muted-foreground mb-4">
              YZOL Lubricants offers a versatile selection of engine oils, gear oils, greases, and
              specialty lubricants designed to meet the needs of modern vehicles and machinery.
              Each product is manufactured under strict quality controls to ensure consistent
              performance and protection.
            </p>
            <p className="text-muted-foreground">
              For product details, availability, and distributorship opportunities for the YZOL
              brand, please reach out to our team through the contact page.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default YzolLubricantsPage;