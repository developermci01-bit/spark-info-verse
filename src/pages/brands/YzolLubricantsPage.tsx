import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/products/ProductCatalog';
import SEO from '@/components/SEO';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Droplet, Award, ShieldCheck, Gauge, Shield, Globe, Factory, Sparkles } from 'lucide-react';
import yzolBanner from '@/assets/yzol-banner.png';
import yzolLogo from '@/assets/yzol-logo.png';

const categories = [
  { value: 'engine-oils', label: 'Engine Oils', title: 'Engine Oils' },
  { value: 'gear-brake-oils', label: 'Gear & Brake', title: 'Gear & Brake Oils' },
  { value: 'greases', label: 'Greases', title: 'Greases' },
  { value: 'hydraulic-oils', label: 'Hydraulic', title: 'Hydraulic Oils' },
  { value: 'coolants', label: 'Coolants & DEF', title: 'Coolants & DEF/AdBlue' },
] as const;

const YzolLubricantsPage = () => {
  const highlights = [
    { icon: Award, title: 'Premium Quality', description: 'High-performance lubricants engineered to international standards.' },
    { icon: ShieldCheck, title: 'Reliable Protection', description: 'Superior wear and corrosion protection for long engine life.' },
    { icon: Gauge, title: 'Optimized Performance', description: 'Formulated for smooth operation and maximum efficiency.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="YZOL Lubricants — Premium Range by Wieser Petroleum"
        description="Explore the YZOL Lubricants range: engine oils, gear & brake oils, greases, hydraulic oils, coolants and DEF/AdBlue engineered for performance."
        path="/brands/yzol-lubricants"
      />
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative overflow-hidden">
          <img
            src={yzolBanner}
            alt="YZOL Lubricants premium product range"
            width={1920}
            height={768}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
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
              <div className="inline-block bg-white rounded-xl p-4 mb-6 shadow-lg">
                <img src={yzolLogo} alt="YZOL Lubricants logo" width={240} height={96} loading="lazy" decoding="async" className="h-20 md:h-24 w-auto" />
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

        {/* About Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 dark-gradient" />
          {/* Decorative accent glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="animate-slide-up">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-8 bg-accent rounded-full" />
                  <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                    About The Brand
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-6 leading-tight">
                  Engineered for <span className="text-gradient">Performance</span>
                </h2>
                <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
                  YZOL Lubricants offers a versatile selection of engine oils, gear oils, greases, and
                  specialty lubricants designed to meet the needs of modern vehicles and machinery.
                  Each product is manufactured under strict quality controls to ensure consistent
                  performance and protection.
                </p>
                <p className="text-primary-foreground/60 leading-relaxed">
                  For product details, availability, and distributorship opportunities for the YZOL
                  brand, please reach out to our team through the contact page.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-heading font-medium">
                    <Shield className="h-4 w-4" />
                    Quality Assured
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-sm font-heading font-medium">
                    <Globe className="h-4 w-4" />
                    Global Standards
                  </span>
                </div>
              </div>

              {/* Right: Feature Grid */}
              <div className="grid grid-cols-2 gap-4 animate-fade-in">
                <div className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                    <Factory className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-foreground mb-2">Industrial Grade</h3>
                  <p className="text-sm text-primary-foreground/60">Built for demanding commercial and industrial environments.</p>
                </div>
                <div className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300 mt-6">
                  <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-foreground mb-2">Advanced Formulation</h3>
                  <p className="text-sm text-primary-foreground/60">Cutting-edge chemistry for maximum engine efficiency.</p>
                </div>
                <div className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-foreground mb-2">Tested & Proven</h3>
                  <p className="text-sm text-primary-foreground/60">Rigorously validated under extreme operating conditions.</p>
                </div>
                <div className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300 mt-6">
                  <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                    <Gauge className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-foreground mb-2">Optimized Range</h3>
                  <p className="text-sm text-primary-foreground/60">Complete coverage from engines to hydraulics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Lineup */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 dark-gradient" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

          <div className="relative container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-1 w-8 bg-accent rounded-full" />
                <span className="font-heading text-sm font-semibold text-accent uppercase tracking-wider">
                  Product Range
                </span>
                <div className="h-1 w-8 bg-accent rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-3">
                Product <span className="text-gradient">Lineup</span>
              </h2>
              <p className="text-primary-foreground/60 max-w-xl mx-auto">
                Browse the YZOL range by category. Every product is manufactured to deliver dependable protection and performance.
              </p>
            </div>

            <Tabs defaultValue="engine-oils" className="w-full">
              <TabsList className="flex flex-wrap h-auto justify-center gap-3 bg-transparent p-0 mb-8">
                {categories.map((c) => (
                  <TabsTrigger
                    key={c.value}
                    value={c.value}
                    className="font-heading text-sm rounded-xl px-5 py-2.5 border border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground/80 backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent data-[state=active]:shadow-lg"
                  >
                    {c.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((c) => (
                <TabsContent key={c.value} value={c.value} className="mt-0">
                  <div className="dark [&_section]:py-0 [&_h2.section-title]:hidden">
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