
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const HeroSection = () => {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 pt-24 sm:-mt-16 sm:pt-0 pb-12 sm:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-0 pb-8 sm:pb-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-center order-1 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black shadow-2xl relative z-10">
                <img 
                  src="/heroimage.png" 
                  alt="Raghul M - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-[#18d26e]/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-16 sm:h-16 bg-[#18d26e]/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              <span className="text-black relative">
                Raghul M
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
              </span>
            </h1>
            
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-6 flex items-center justify-center lg:justify-start font-normal">
              <span className="min-w-0 break-words">
                Engineer @ <span className="text-[#18d26e] font-semibold">Red Hat AI</span> <span className="text-black">|</span> Founder @ <span className="text-[#18d26e] font-semibold">CareerPod</span> <span className="text-black">|</span> Open Source Evangelist <span className="text-black">|</span> GenAI & DevOps <span className="text-black">|</span> Building Scalable AI Systems
              </span>
            </div>
            
            <div className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed space-y-4">
              <p>
                Software Engineer specializing in MLOps, GenAI, and cloud infrastructure. Open-source contributor focused on AI systems in production and cloud-native by default. Building scalable AI systems with engineering discipline. I design, build, and ship AI systems that don't break in production.
              </p>
              
              <p>
                <span className="text-[#18d26e]">|</span> <strong className="font-semibold text-black">I turn ideas into reliable products.</strong>
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <a
                href="https://github.com/Raghul-M"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-black hover:bg-gray-800 text-white shadow-md hover:shadow-lg hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/m-raghul/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/RaghulM01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-blue-400 hover:bg-blue-500 text-white shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/raghul_official._/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-0 mt-4">
              <Button 
                variant="outline" 
                className="border-[#18d26e] text-black hover:bg-[#18d26e] hover:text-white px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-medium transition-all duration-300 w-auto max-w-[200px] sm:max-w-none mx-auto sm:mx-0"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
