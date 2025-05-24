import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { BookOpen } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();

  // Scroll to section on hash change or component mount
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Add a small delay to allow the page to render before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      // If no hash and on the root path, scroll to the top (or #home if you prefer)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]); // Re-run effect if hash or pathname changes

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main>
        <HeroSection />
        <SkillsSection />
        <TestimonialSection />
      </main>
      <Footer />

      {/* Floating Blog Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.open('https://blog.raghul.in', '_blank')}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-[#18d26e] hover:bg-[#15b85a] text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#18d26e]"
          aria-label="Read my blogs!"
        >
          <BookOpen size={32} />
        </button>
        {showTooltip && (
          <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-black text-white text-sm rounded px-3 py-2 shadow-lg whitespace-nowrap">
            Read my blogs!
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
