import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
    { label: 'Coolants', href: '/products/coolants' },
  ];

  const otherBrands = [
    { label: 'YZOL Lubricants', href: '/brands/yzol-lubricants' },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isProductsActive = () => location.pathname.startsWith('/products');
  const isBrandsActive = () => location.pathname.startsWith('/brands');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Wieser Petroleum" className="h-28 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-heading font-medium text-sm transition-colors duration-300 ${
                isActive('/')
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-heading font-medium text-sm transition-colors duration-300 ${
                isActive('/about')
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              About
            </Link>
            
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`font-heading font-medium text-sm transition-colors duration-300 flex items-center gap-1 outline-none ${
                isProductsActive()
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}>
                Products
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50 min-w-[200px]">
                <DropdownMenuItem asChild>
                  <Link to="/products" className="w-full cursor-pointer font-heading text-sm">
                    All Products
                  </Link>
                </DropdownMenuItem>
                {productCategories.map((category) => (
                  <DropdownMenuItem key={category.href} asChild>
                    <Link to={category.href} className="w-full cursor-pointer font-heading text-sm">
                      {category.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Brands Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`font-heading font-medium text-sm transition-colors duration-300 flex items-center gap-1 outline-none ${
                isBrandsActive()
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}>
                Other Brands
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50 min-w-[200px]">
                {otherBrands.map((brand) => (
                  <DropdownMenuItem key={brand.href} asChild>
                    <Link to={brand.href} className="w-full cursor-pointer font-heading text-sm">
                      {brand.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/why-us"
              className={`font-heading font-medium text-sm transition-colors duration-300 ${
                isActive('/why-us')
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              Why Us
            </Link>
            <Link
              to="/contact"
              className={`font-heading font-medium text-sm transition-colors duration-300 ${
                isActive('/contact')
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Get Distributorship</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className={`font-heading font-medium transition-colors py-2 ${
                  isActive('/')
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-heading font-medium transition-colors py-2 ${
                  isActive('/about')
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className={`font-heading font-medium transition-colors py-2 flex items-center justify-between w-full ${
                    isProductsActive()
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  Products
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProductsOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    <Link
                      to="/products"
                      className="font-heading text-sm text-muted-foreground hover:text-accent py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Products
                    </Link>
                    {productCategories.map((category) => (
                      <Link
                        key={category.href}
                        to={category.href}
                        className="font-heading text-sm text-muted-foreground hover:text-accent py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/why-us"
                className={`font-heading font-medium transition-colors py-2 ${
                  isActive('/why-us')
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </Link>
              <Link
                to="/contact"
                className={`font-heading font-medium transition-colors py-2 ${
                  isActive('/contact')
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
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
