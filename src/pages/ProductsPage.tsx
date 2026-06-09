import Header from '@/components/Header';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Products — Engine Oils, Greases, Hydraulic Oils & More"
        description="Browse the full Wieser Petroleum range: engine oils, gear & brake oils, greases, hydraulic oils, coolants and DEF/AdBlue."
        path="/products"
      />
      <Header />
      <main className="pt-20">
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
