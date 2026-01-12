import Header from '@/components/Header';
import WhyUs from '@/components/WhyUs';
import Footer from '@/components/Footer';

const WhyUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
};

export default WhyUsPage;
