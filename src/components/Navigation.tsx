import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
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
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: 'https://blog.raghul.in', external: true },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Raghul-M', 
      label: 'GitHub',
      bgColor: 'bg-black hover:bg-gray-800'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/m-raghul/', 
      label: 'LinkedIn',
      bgColor: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      icon: Twitter, 
      href: 'https://x.com/RaghulM01', 
      label: 'Twitter',
      bgColor: 'bg-blue-400 hover:bg-blue-500'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/raghul_official._/', 
      label: 'Instagram',
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-black hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-black">
              <span className="text-[#18d26e]">R</span>M
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
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

            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center space-x-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${social.bgColor} text-white shadow-md hover:shadow-lg hover:scale-110`}
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
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
          <div className="space-y-4 mb-8">
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
          </div>

          {/* Mobile Social Icons */}
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${social.bgColor} text-white shadow-md hover:shadow-lg hover:scale-110`}
                  aria-label={social.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
