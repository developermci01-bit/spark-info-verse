import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import logoAsset from '@/assets/wieser-logo.png.asset.json';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Contact', href: '/contact' },
  ];

  const products = [
    { label: 'Engine Oils', href: '/products/engine-oils' },
    { label: 'Gear & Brake Oils', href: '/products/gear-brake-oils' },
    { label: 'Greases', href: '/products/greases' },
    { label: 'Hydraulic Oils', href: '/products/hydraulic-oils' },
    { label: 'Coolants & DEF/AdBlue', href: '/products/coolants' },
  ];

  const otherBrands = [
    { label: 'YZOL Lubricants', href: '/brands/yzol-lubricants' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center mb-6 bg-primary-foreground rounded-lg p-3">
              <img src={logoAsset.url} alt="Wieser Petroleum" className="h-16 w-auto" />
            </Link>
            <p className="text-primary-foreground/70 mb-6">
              Delivering excellence in petroleum products since 2014. Trusted by customers across 18+ Indian states and 6+ countries worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-bold text-lg mb-6 mt-8">Other Brands</h4>
            <ul className="space-y-3">
              {otherBrands.map((brand, index) => (
                <li key={index}>
                  <Link
                    to={brand.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {brand.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-primary-foreground/70 mb-4">
              Subscribe to receive updates about new products and special offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Wieser Petroleum LLP. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
            >
              Back to top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
