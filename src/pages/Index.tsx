import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PodcastsAndTalksSection from '@/components/PodcastsAndTalksSection';
import CareerPodSection from '@/components/CareerPodSection';
import OpenSourceProjectsSection from '@/components/OpenSourceProjectsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <PodcastsAndTalksSection />
        <CareerPodSection />
        <OpenSourceProjectsSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
