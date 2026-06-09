import Header from '@/components/Header';
import WhyUs from '@/components/WhyUs';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const WhyUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Why Choose Wieser Petroleum — Quality, Service, Trust"
        description="Discover why customers choose Wieser Petroleum: premium formulations, reliable supply, technical expertise, and a commitment to long-term partnerships."
        path="/why-us"
      />
      <Header />
      <main className="pt-20">
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
};

export default WhyUsPage;
