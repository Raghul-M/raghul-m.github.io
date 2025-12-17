import { Github, ExternalLink } from 'lucide-react';

const OpenSourceProjectsSection = () => {
  const contributedOrgs = [
    {
      name: 'Hugging Face',
      logo: '/orgs/hf.png',
    },
    {
      name: 'Podman',
      logo: '/orgs/podmanc.png',
    },
    {
      name: 'ONNX',
      logo: '/orgs/onnx.png',
    },
    {
      name: 'Red Hat',
      logo: '/orgs/redhat.png',
    },
    {
      name: 'ODH',
      logo: '/orgs/odh.png',
    },
  ];

  const projects = [
    {
      name: 'HireMeats',
      problem: 'AI powered ATS tool with 4000+ users',
      liveLink: 'https://hiremeats.vercel.app/',
      githubLink: 'https://github.com/Raghul-M/HireMe-ATS',
      image: '/hiremeats.png',
    },
    {
      name: 'Learn For Free',
      problem: 'A one stop place for free high quality education',
      liveLink: 'https://learforfree.site',
      image: '/learnforfree.png',
    },
    {
      name: 'DevOps Hub',
      problem: 'Your one-stop destination for DevOps learning and resources',
      liveLink: 'https://devopshub.vercel.app/',
      image: '/devopshub.png',
    },
  ];

  return (
    <section id="opensource-projects" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 sm:mb-12 text-center">
          <span className="relative inline-block">
            Open Source Projects
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12 text-center px-4">
          <p className="text-base sm:text-lg text-gray-700 italic">
            — Building open source solutions that make a difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#18d26e] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="w-full h-32 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top"
                  style={{ imageRendering: 'crisp-edges' }}
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    const baseName = project.image.replace(/\.(jpg|jpeg|png|webp)$/i, '');
                    // Try different extensions
                    const extensions = ['.png', '.jpg', '.jpeg', '.webp'];
                    const currentSrc = img.src.split('/').pop() || '';
                    const currentExt = currentSrc.match(/\.(jpg|jpeg|png|webp)$/i)?.[0] || '';
                    const currentIndex = extensions.indexOf(currentExt);
                    
                    if (currentIndex < extensions.length - 1) {
                      // Try next extension
                      img.src = baseName + extensions[currentIndex + 1];
                    } else {
                      // Fallback to placeholder
                      img.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(project.name);
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-black mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                  {project.problem}
                </p>
                <div className="flex flex-row gap-2 justify-center sm:justify-start">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-black text-white px-2.5 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-800 transition-all duration-300 w-auto max-w-[140px] sm:max-w-none"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-[14px] sm:h-[14px]" />
                    Live Link
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-black text-white px-2.5 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-800 transition-all duration-300 w-auto max-w-[140px] sm:max-w-none"
                    >
                      <Github className="w-3 h-3 sm:w-[14px] sm:h-[14px]" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contributed Orgs Subsection */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            <span className="relative inline-block">
              Contributed Orgs
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {contributedOrgs.map((org, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#18d26e] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className={`${org.name === 'Podman' ? 'w-32 h-32' : 'max-w-full max-h-full'} object-contain`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-sm font-medium text-black text-center">
                  {org.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceProjectsSection;

