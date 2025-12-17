import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const ProjectsPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage; 