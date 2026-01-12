import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import ProductsPreview from '@/components/home/ProductsPreview';
import WhyUsPreview from '@/components/home/WhyUsPreview';
import ClientsSection from '@/components/home/ClientsSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <StatsSection />
        <ProductsPreview />
        <WhyUsPreview />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
