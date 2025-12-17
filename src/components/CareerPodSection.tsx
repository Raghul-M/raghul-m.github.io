import { Linkedin } from 'lucide-react';

const CareerPodSection = () => {
  return (
    <section id="careerpod" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
            <span className="relative inline-block">
              Building Communities
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
            </span>
          </h2>
        </div>
        <div className="relative border-2 border-gray-200 rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#18d26e] max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto md:mx-0">
                <img
                  src="/careerpod.jpg"
                  alt="CareerPod Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const img = e.currentTarget;
                    // Try different extensions
                    const baseName = img.src.replace(/\.(jpg|jpeg|png|webp|svg)$/i, '');
                    const extensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg'];
                    const currentSrc = img.src.split('/').pop() || '';
                    const currentExt = currentSrc.match(/\.(jpg|jpeg|png|webp|svg)$/i)?.[0] || '';
                    const currentIndex = extensions.indexOf(currentExt);
                    
                    if (currentIndex < extensions.length - 1) {
                      img.src = baseName + extensions[currentIndex + 1];
                    } else {
                      // Show placeholder if all attempts fail
                      img.style.display = 'none';
                      const placeholder = document.createElement('div');
                      placeholder.className = 'w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400';
                      placeholder.textContent = 'CareerPod Logo';
                      img.parentNode?.appendChild(placeholder);
                    }
                  }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <div className="space-y-3 text-sm sm:text-base text-gray-700 mb-6 text-justify md:text-left">
                <p>
                  <strong>CareerPod</strong> is a global community built to support students and early-career professionals pursuing careers in IT.
                  We provide free, high-quality technical education, mentorship, and career guidance without paywalls.
                  The community supports <strong>600+ learners worldwide</strong>, with a strong focus on Tier-2 and Tier-3 college students.
                </p>
                <p>
                  CareerPod aims to bridge the opportunity gap by improving open-source awareness and real-world tech literacy.
                  Our goal is simple: make industry-relevant learning accessible to anyone willing to learn.
                </p>
              </div>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-black">
                <p className="font-semibold break-words">📧 careerpodcommunity@gmail.com</p>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <p className="font-semibold">📌 Chennai, India</p>
                  <div className="flex gap-3 ml-auto">
                    <a
                      href="https://chat.whatsapp.com/BuyZd52KkchCSl19nzqsYr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
                      aria-label="WhatsApp"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/career-pod/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center hover:bg-[#084d91] transition-colors shadow-md hover:shadow-lg"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPodSection;

