import Header from '@/components/Header';
import About from '@/components/About';
import CertificationsSection from '@/components/home/CertificationsSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Wieser Petroleum — Our Story & Mission"
        description="Learn about Wieser Petroleum: our heritage, quality commitment, and certifications behind every drum of lubricant we supply."
        path="/about"
      />
      <Header />
      <main className="pt-20">
        <About />
        <CertificationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
