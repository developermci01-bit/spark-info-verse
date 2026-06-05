import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/products/ProductCatalog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Droplet, Award, ShieldCheck, Gauge, Shield, Globe, Factory, Sparkles } from 'lucide-react';
import yzolBanner from '@/assets/yzol-banner.jpg';

const categories = [
  { value: 'engine-oils', label: 'Engine Oils', title: 'Engine Oils' },
  { value: 'gear-brake-oils', label: 'Gear & Brake', title: 'Gear & Brake Oils' },
  { value: 'greases', label: 'Greases', title: 'Greases' },
  { value: 'hydraulic-oils', label: 'Hydraulic', title: 'Hydraulic Oils' },
  { value: 'coolants', label: 'Coolants', title: 'Coolants' },
] as const;

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
        {/* Hero Banner */}
        <section className="relative overflow-hidden">
          <img
            src={yzolBanner}
            alt="YZOL Lubricants premium product range"
            width={1920}
            height={768}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
          <div className="relative container mx-auto px-4 py-20 lg:py-28">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Droplet className="h-6 w-6 text-accent" />
                <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                  Other Brands
                </span>
              </div>
              <h1 className="section-title text-primary-foreground mb-6">
                YZOL <span className="text-gradient">Lubricants</span>
              </h1>
              <p className="text-lg text-primary-foreground/85 max-w-2xl">
                YZOL Lubricants is part of our extended portfolio of trusted brands, offering a
                comprehensive range of high-performance lubricants for automotive and industrial
                applications. Built on quality and reliability, YZOL delivers dependable protection
                and performance across demanding conditions.
              </p>
            </div>
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

        {/* Product Lineup */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center text-foreground mb-3">Product Lineup</h2>
            <p className="text-center text-muted-foreground mb-8">
              Browse the YZOL range by category.
            </p>

            <Tabs defaultValue="engine-oils" className="w-full">
              <TabsList className="flex flex-wrap h-auto justify-center gap-2 bg-secondary p-2 rounded-xl mb-6">
                {categories.map((c) => (
                  <TabsTrigger
                    key={c.value}
                    value={c.value}
                    className="font-heading text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-4 py-2"
                  >
                    {c.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((c) => (
                <TabsContent key={c.value} value={c.value} className="mt-0">
                  <div className="[&_section]:py-0 [&_h2.section-title]:hidden">
                    <ProductCatalog category={c.value} title={c.title} />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default YzolLubricantsPage;