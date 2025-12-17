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
        <div className="border-2 border-gray-200 rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#18d26e] max-w-4xl mx-auto">
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
                <p className="font-semibold">📌 Chennai, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPodSection;

