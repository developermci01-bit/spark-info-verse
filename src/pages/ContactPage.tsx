import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Wieser Petroleum — Get a Quote or Dealership"
        description="Get in touch with Wieser Petroleum for product enquiries, bulk orders, dealership opportunities, or technical support."
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Wieser Petroleum',
          url: 'https://spark-info-verse.lovable.app',
          contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales' }],
        }}
      />
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
