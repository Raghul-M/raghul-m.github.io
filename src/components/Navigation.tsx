import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Showcase', href: '/showcase' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  const cornerItems = [
    { name: 'Projects', href: 'https://projects.raghul.in', external: true },
    { name: 'Blogs', href: 'https://blog.raghul.in', external: true },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-black hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo - Left side on desktop */}
            <Link to="/" className="text-2xl font-bold text-black hidden md:block">
              <span className="text-[#18d26e]">R</span>M
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#18d26e] transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (item.href.startsWith('#') && location.pathname === '/') {
                        scrollToSection(item.href);
                      }
                    }}
                    className="text-black hover:text-[#18d26e] transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Right side: Corner Items - Projects and Blogs as boxes */}
            <div className="hidden md:flex items-center gap-2">
              {cornerItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Logo */}
            <Link to="/" className="text-2xl font-bold text-black md:hidden">
              <span className="text-[#18d26e]">R</span>M
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide Menu */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 relative">
          {/* Close (X) Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#18d26e]"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {/* Mobile Logo */}
          <div className="text-2xl font-bold text-black mb-8">
            <span className="text-[#18d26e]">R</span>M
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-4">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left text-black hover:text-[#18d26e] transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block w-full text-left text-black hover:text-[#18d26e] transition-colors duration-300 font-medium py-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (item.href.startsWith('#') && location.pathname === '/') {
                      scrollToSection(item.href);
                    }
                  }}
                >
                  {item.name}
                </Link>
              )
            ))}
            {/* Projects and Blogs in boxes for mobile */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              {cornerItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg mb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
