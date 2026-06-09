import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import ProductsPreview from '@/components/home/ProductsPreview';
import WhyUsPreview from '@/components/home/WhyUsPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CertificationsSection from '@/components/home/CertificationsSection';
import FAQSection from '@/components/home/FAQSection';

import CTASection from '@/components/home/CTASection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Wieser Petroleum — Premium Lubricants, Oils & Greases"
        description="Trusted supplier of engine oils, gear & brake oils, hydraulic oils, greases, coolants and DEF/AdBlue for automotive and industrial applications."
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <StatsSection />
        <ProductsPreview />
        <WhyUsPreview />
        <TestimonialsSection />
        <CertificationsSection />
        <FAQSection />
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
