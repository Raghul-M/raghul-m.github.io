import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import { BookOpen } from 'lucide-react';
import { useState } from 'react';

const ProjectsPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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

export default ProjectsPage; 