import Header from '@/components/Header';
import About from '@/components/About';
import CertificationsSection from '@/components/home/CertificationsSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
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
