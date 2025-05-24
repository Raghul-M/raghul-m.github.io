
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ['Software Developer', 'AI/ML Engineer','Founder CareerPod', 'Tech Enthusiast'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
              Hi, I'm{' '}
              <span className="text-[#18d26e] relative">
                Raghul M
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
              </span>
            </h1>
            
            <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 mb-6 h-16 flex items-center justify-center lg:justify-start">
              <span className="min-w-0">
                {displayText}
                <span className="border-r-2 border-[#18d26e] ml-1 animate-pulse"></span>
              </span>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Passionate about building innovative solutions that merge DevOps, MLOps, and AI to solve real-world challenges. Specializing in cloud-native development, containerized architectures, and intelligent automation.
             I thrive at the intersection of modern infrastructure and next-gen applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="bg-[#18d26e] hover:bg-[#15b85a] text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-[#18d26e] text-[#18d26e] hover:bg-[#18d26e] hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#18d26e] shadow-2xl relative z-10">
                <img 
                  src="/lovable-uploads/0cb747a1-109b-42aa-b236-69e4271156f5.png" 
                  alt="Raghul M - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#18d26e]/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#18d26e]/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
