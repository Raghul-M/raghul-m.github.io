import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-[#18d26e]">R</span>M
            </div>
            <p className="text-gray-300 mb-4">
              Keep in Touch
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${social.bgColor} text-white shadow-md hover:shadow-lg hover:scale-110`}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[#18d26e] transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 raghulmadhavan1@gmail.com</p>
              <p>📍 Chennai, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Raghul M  All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-[#18d26e] mx-1" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
