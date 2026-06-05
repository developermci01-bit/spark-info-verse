import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileBrandsOpen, setIsMobileBrandsOpen] = useState(false);
  const location = useLocation();

  const productCategories = [
    { label: 'Engine Oils', href: '/products/engine-oils' },
    { label: 'Gear & Brake Oils', href: '/products/gear-brake-oils' },
    { label: 'Greases', href: '/products/greases' },
    { label: 'Hydraulic Oils', href: '/products/hydraulic-oils' },
    { label: 'Coolants & DEF/AdBlue', href: '/products/coolants' },
  ];

  const otherBrands = [
    { label: 'YZOL Lubricants', href: '/brands/yzol-lubricants' },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isProductsActive = () => location.pathname.startsWith('/products');
  const isBrandsActive = () => location.pathname.startsWith('/brands');

  const linkBase =
    "relative font-heading font-medium text-sm tracking-wide transition-colors duration-300 py-2 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-accent after:transition-all after:duration-300";
  const linkIdle = 'text-foreground hover:text-accent after:w-0 hover:after:w-full';
  const linkActive = 'text-accent after:w-full';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Wieser Petroleum" className="h-28 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-2">
            <Link to="/" className={`${linkBase} px-3 ${isActive('/') ? linkActive : linkIdle}`}>
              Home
            </Link>
            <Link to="/about" className={`${linkBase} px-3 ${isActive('/about') ? linkActive : linkIdle}`}>
              About
            </Link>

            {/* Products hover dropdown */}
            <div className="relative group">
              <Link
                to="/products"
                className={`${linkBase} px-3 inline-flex items-center gap-1 ${isProductsActive() ? linkActive : linkIdle}`}
              >
                Products
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              {/* Hover bridge */}
              <div className="absolute left-0 right-0 top-full h-3" aria-hidden />
              <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full mt-3 min-w-[240px] bg-background border border-border rounded-lg shadow-xl overflow-hidden z-50">
                <div className="h-1 bg-accent" />
                <div className="py-2">
                  <Link to="/products" className="block px-4 py-2.5 text-sm font-heading font-medium text-foreground hover:bg-muted hover:text-accent transition-colors">
                    All Products
                  </Link>
                  <div className="my-1 h-px bg-border" />
                  {productCategories.map((c) => (
                    <Link
                      key={c.href}
                      to={c.href}
                      className="block px-4 py-2.5 text-sm font-heading text-foreground/80 hover:bg-muted hover:text-accent hover:pl-5 transition-all"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Brands hover dropdown */}
            <div className="relative group">
              <button
                className={`${linkBase} px-3 inline-flex items-center gap-1 ${isBrandsActive() ? linkActive : linkIdle}`}
              >
                Other Brands
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 right-0 top-full h-3" aria-hidden />
              <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full mt-3 min-w-[220px] bg-background border border-border rounded-lg shadow-xl overflow-hidden z-50">
                <div className="h-1 bg-accent" />
                <div className="py-2">
                  {otherBrands.map((b) => (
                    <Link
                      key={b.href}
                      to={b.href}
                      className="block px-4 py-2.5 text-sm font-heading text-foreground/80 hover:bg-muted hover:text-accent hover:pl-5 transition-all"
                    >
                      {b.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/why-us" className={`${linkBase} px-3 ${isActive('/why-us') ? linkActive : linkIdle}`}>
              Why Us
            </Link>
            <Link to="/contact" className={`${linkBase} px-3 ${isActive('/contact') ? linkActive : linkIdle}`}>
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden xl:block">
            <Button variant="accent" size="lg" asChild className="shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <Link to="/contact">Get Distributorship</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col gap-2">
              <Link to="/" className={`font-heading font-medium py-2 ${isActive('/') ? 'text-accent' : 'text-foreground hover:text-accent'}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className={`font-heading font-medium py-2 ${isActive('/about') ? 'text-accent' : 'text-foreground hover:text-accent'}`} onClick={() => setIsMenuOpen(false)}>About</Link>

              <div>
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className={`font-heading font-medium py-2 flex items-center justify-between w-full ${isProductsActive() ? 'text-accent' : 'text-foreground hover:text-accent'}`}
                >
                  Products
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProductsOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-accent/40">
                    <Link to="/products" className="font-heading text-sm text-muted-foreground hover:text-accent py-1" onClick={() => setIsMenuOpen(false)}>All Products</Link>
                    {productCategories.map((c) => (
                      <Link key={c.href} to={c.href} className="font-heading text-sm text-muted-foreground hover:text-accent py-1" onClick={() => setIsMenuOpen(false)}>{c.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsMobileBrandsOpen(!isMobileBrandsOpen)}
                  className={`font-heading font-medium py-2 flex items-center justify-between w-full ${isBrandsActive() ? 'text-accent' : 'text-foreground hover:text-accent'}`}
                >
                  Other Brands
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileBrandsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileBrandsOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-accent/40">
                    {otherBrands.map((b) => (
                      <Link key={b.href} to={b.href} className="font-heading text-sm text-muted-foreground hover:text-accent py-1" onClick={() => setIsMenuOpen(false)}>{b.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/why-us" className={`font-heading font-medium py-2 ${isActive('/why-us') ? 'text-accent' : 'text-foreground hover:text-accent'}`} onClick={() => setIsMenuOpen(false)}>Why Us</Link>
              <Link to="/contact" className={`font-heading font-medium py-2 ${isActive('/contact') ? 'text-accent' : 'text-foreground hover:text-accent'}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Button variant="accent" className="mt-4" asChild>
                <Link to="/contact">Get Distributorship</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
