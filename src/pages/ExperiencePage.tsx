import Navigation from '@/components/Navigation';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const ExperiencePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main>
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage; 