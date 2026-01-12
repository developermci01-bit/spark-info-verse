import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
