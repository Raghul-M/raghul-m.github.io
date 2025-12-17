import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect, useRef } from 'react';
import { Github, Youtube, GraduationCap, Heart, ExternalLink, Linkedin, MapPin, Calendar, Instagram } from 'lucide-react';

const ShowcasePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const githubActions = [
    {
      id: 1,
      name: 'Gmail Sender Action',
      description: 'Custom GitHub Action for sending automated emails via Gmail with HTML templates and attachment support.',
      marketplaceUrl: 'https://github.com/marketplace',
      image: '/gmailghaction.png',
    },
    {
      id: 2,
      name: 'Quay Push Action',
      description: 'GitHub Action for automated container image building and pushing to Red Hat Quay registry.',
      marketplaceUrl: 'https://github.com/marketplace',
      image: '/quayghaction.png',
    },
  ];

  const youtubeSeries = [
    {
      id: 1,
      title: 'GitHub Actions Series',
      platform: 'Evidhai',
      description: 'Comprehensive series on GitHub Actions automation and workflows',
      playlistUrl: 'https://youtube.com/playlist?list=PLWPzVEMaawH3qmdzDi5NN5Z90z50vFozv&si=Dcgl5EztCdN7tJv7',
      playlistId: 'PLWPzVEMaawH3qmdzDi5NN5Z90z50vFozv',
      episodes: 3,
    },
    {
      id: 2,
      title: 'AIOps Series',
      platform: 'TechPechu',
      description: 'Exploring AIOps and automation in DevOps practices',
      playlistUrl: 'https://www.youtube.com/live/-ymaUcrVReI?si=gaD27JhX49WdGz_j',
      videoId: '-ymaUcrVReI',
      linkedinUrl: 'https://www.linkedin.com/events/kickstartaiops-learnbybuildinga7403464945490628609/theater/',
      episodes: 14,
    },
  ];

  const techTalks = [
    {
      id: 1,
      college: 'SRM Institute of Science and Technology',
      location: 'Chennai, India',
      year: '2024',
      image: '/tech-talks/srm1.png',
    },
    {
      id: 2,
      college: 'SRM Institute of Science and Technology',
      location: 'Chennai, India',
      year: '2025',
      image: '/tech-talks/srm2.png',
    },
    {
      id: 3,
      college: 'MOP Vaishnav Women\'s College',
      location: 'Chennai, India',
      year: '2025',
      image: '/tech-talks/mop-vaishanv.png',
    },
    {
      id: 4,
      college: 'Janson Institute of Technology',
      location: 'Coimbatore, India',
      year: '2024',
      image: '/tech-talks/janson.png',
    },
    {
      id: 5,
      college: 'Next Gen CloudPro Community',
      location: 'Online',
      year: '2024',
      image: '/tech-talks/nextgencloudpro.png',
    },
  ];

  const SLIDE_INTERVAL = 4000;
  const [startIndex, setStartIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 768) {
        return 2;
      }
      return 1;
    }
    return 1;
  };

  const startSlider = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      if (typeof window !== 'undefined' && window.innerWidth >= 768) {
        setStartIndex((prev) => {
          const next = prev + 2;
          return next >= techTalks.length ? 0 : next;
        });
      } else {
        setStartIndex((prev) => (prev + 1) % techTalks.length);
      }
    }, SLIDE_INTERVAL);
  };

  const stopSlider = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  // Scroll effect based on startIndex
  useEffect(() => {
    if (containerRef.current) {
      const isDesktop = window.innerWidth >= 768;
      const cardIndex = startIndex % techTalks.length;
      const cardElement = containerRef.current.children[cardIndex] as HTMLElement;
      
      if (cardElement) {
        containerRef.current.scrollTo({
          left: cardElement.offsetLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [startIndex]);

  const socialShoutouts = [
    {
      id: 1,
      platform: 'LinkedIn',
      author: 'Professional Name',
      content: 'Great insights on AIOps. Your YouTube series is excellent!',
      date: '2024',
      url: 'https://linkedin.com',
      embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7151199855636271104?collapsed=1',
    },
    {
      id: 2,
      platform: 'Instagram',
      author: 'Students of Chennai, Think Digital',
      content: 'Amazing work on GitHub Actions! Really helpful for the community.',
      date: '2024',
      url: 'https://www.instagram.com/p/C19hGmCPQbI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      embedUrl: 'https://www.instagram.com/p/C19hGmCPQbI/embed/',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-8 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-3">
                <span className="relative inline-block">
                  Showcase
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Developer tools, educational content, tech talks, and community recognition
              </p>
            </div>
          </div>
        </section>

        {/* Developer Tools - GitHub Actions */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                <span className="relative inline-block">
                  Developer Tools
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
                </span>
              </h2>
              <p className="text-gray-600">Custom GitHub Actions published in GitHub Marketplace</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {githubActions.map((action) => (
                <div
                  key={action.id}
                  className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#18d26e] transition-all duration-300 flex flex-col max-w-sm mx-auto md:max-w-none md:mx-0"
                >
                  {/* Image */}
                  <div className="w-full h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={action.image}
                      alt={action.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.className = 'w-full h-full bg-gradient-to-br from-[#18d26e] to-[#15b85a] flex items-center justify-center';
                        placeholder.innerHTML = '<svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';
                        e.currentTarget.parentNode?.appendChild(placeholder);
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-black mb-3">{action.name}</h3>
                    <p className="text-gray-600 mb-4 flex-1">{action.description}</p>
                    <a
                      href={action.marketplaceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors w-full"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Marketplace
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube and LinkedIn Tech Collaboration */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                <span className="relative inline-block">
                  YouTube and LinkedIn Tech Collaboration
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
                </span>
              </h2>
              <p className="text-gray-600">Guest lectures in Tech series</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {youtubeSeries.map((series) => (
                <div
                  key={series.id}
                  className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#18d26e] transition-all duration-300 max-w-sm mx-auto md:max-w-none md:mx-0"
                >
                  {series.playlistId ? (
                    <>
                      {/* Embedded YouTube Playlist */}
                      <div className="w-full bg-gray-100" style={{ height: '250px' }}>
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/videoseries?list=${series.playlistId}`}
                          title={series.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      {/* Content */}
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <Youtube className="w-6 h-6 text-red-600 mr-2" />
                          <span className="text-sm font-semibold text-gray-600">{series.platform}</span>
                        </div>
                        <h3 className="text-lg font-bold text-black mb-1">{series.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{series.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">📺 {series.episodes} episodes</span>
                          <a
                            href={series.playlistUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors"
                          >
                            Watch on YouTube
                          </a>
                        </div>
                      </div>
                    </>
                  ) : series.videoId ? (
                    <>
                      {/* Embedded YouTube Video */}
                      <div className="w-full bg-gray-100" style={{ height: '250px' }}>
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${series.videoId}`}
                          title={series.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      {/* Content */}
                      <div className="p-4">
                        <div className="flex items-center mb-1">
                          <Youtube className="w-5 h-5 text-red-600 mr-2" />
                          <span className="text-xs font-semibold text-gray-600">{series.platform}</span>
                        </div>
                        <h3 className="text-lg font-bold text-black mb-1">{series.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{series.description}</p>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-xs text-gray-500">📺 {series.episodes} episodes</span>
                          <div className="flex items-center gap-2">
                            <a
                              href={series.playlistUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-black text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors"
                            >
                              Watch on YouTube
                            </a>
                            {series.linkedinUrl && (
                              <a
                                href={series.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-blue-700 transition-colors flex items-center gap-1"
                              >
                                <Linkedin className="w-3 h-3" />
                                LinkedIn
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center mb-2">
                            <Youtube className="w-6 h-6 text-red-600 mr-2" />
                            <span className="text-sm font-semibold text-gray-600">{series.platform}</span>
                          </div>
                          <h3 className="text-xl font-bold text-black">{series.title}</h3>
                        </div>
                        <a
                          href={series.playlistUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#18d26e] hover:text-[#15b85a] transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                      <p className="text-gray-600 mb-3">{series.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>📺 {series.episodes} episodes</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Talks */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#18d26e] mr-2" />
                <span className="relative inline-block">
                  Tech Talks
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
                </span>
              </h2>
              <p className="text-gray-600">Speaking engagements at various colleges</p>
            </div>

            {/* Slider Container */}
            <div className="relative">
              <div 
                ref={containerRef} 
                className="flex overflow-x-auto scroll-smooth gap-4 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseEnter={stopSlider}
                onMouseLeave={startSlider}
              >
                {techTalks.map((talk) => (
                  <div
                    key={talk.id}
                    className="flex-shrink-0 w-[85%] max-w-sm mx-auto md:w-[calc(50%-8px)] md:min-w-[calc(50%-8px)] md:max-w-[calc(50%-8px)] md:mx-0 snap-start"
                  >
                    <img
                      src={talk.image}
                      alt={talk.college}
                      className="w-full h-auto max-h-96 object-contain bg-white rounded-lg"
                      onError={(e) => {
                        const img = e.currentTarget;
                        img.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.className = 'w-full h-64 bg-gradient-to-br from-[#18d26e] to-[#15b85a] flex items-center justify-center rounded-lg';
                        placeholder.innerHTML = '<svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14v2a6 6 0 0 0-6 6H4a2 2 0 0 1-2-2v-7.59a2 2 0 0 1 .293-1.07l5.707-8.59A2 2 0 0 1 9.707 2H20a2 2 0 0 1 2 2v7.59a2 2 0 0 1-.293 1.07L16 21.18a2 2 0 0 1-1.707.82H12z"/></svg>';
                        img.parentNode?.appendChild(placeholder);
                      }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {techTalks.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      stopSlider();
                      setStartIndex(idx);
                      startSlider();
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === startIndex % techTalks.length
                        ? 'bg-[#18d26e] w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to tech talk ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Shoutouts */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#18d26e] mr-2" />
                <span className="relative inline-block">
                  Social Media Shoutouts
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
                </span>
              </h2>
              <p className="text-gray-600">Recognition and appreciation from the community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center md:justify-items-stretch">
              {socialShoutouts.map((shoutout) => {
                const isLinkedIn = shoutout.platform.toLowerCase().includes('linkedin');
                const isInstagram = shoutout.platform.toLowerCase().includes('instagram');
                
                return (
                  <div
                    key={shoutout.id}
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#18d26e] transition-all duration-300 w-full max-w-sm md:max-w-none"
                  >
                    {isLinkedIn && shoutout.embedUrl ? (
                      <>
                        {/* LinkedIn Embedded Post */}
                        <div className="w-full bg-gray-50">
                          <iframe
                            src={shoutout.embedUrl}
                            height="400"
                            width="100%"
                            frameBorder="0"
                            allowFullScreen
                            title="Embedded LinkedIn post"
                            className="w-full"
                            style={{ minHeight: '300px' }}
                          ></iframe>
                        </div>
                        {/* View Button */}
                        <div className="p-4 border-t border-gray-200">
                          <a
                            href={shoutout.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors w-full bg-[#0A66C2] text-white hover:bg-[#004182]"
                          >
                            <span>View on LinkedIn</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </>
                    ) : isInstagram && shoutout.embedUrl ? (
                      <div className="flex flex-col h-full">
                        {/* Instagram Embedded Post */}
                        <div className="w-full bg-gray-50 flex-grow">
                          <iframe
                            src={shoutout.embedUrl}
                            width="100%"
                            height="400"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency
                            title="Embedded Instagram post"
                            className="w-full"
                            style={{ minHeight: '300px' }}
                          ></iframe>
                        </div>
                        {/* View Button - Fixed at Bottom */}
                        <div className="p-4 border-t border-gray-200 mt-auto">
                          <a
                            href={shoutout.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                          >
                            <span>View on Instagram</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          {isInstagram ? (
                            <Instagram className="w-5 h-5 text-[#E4405F] mr-2" />
                          ) : null}
                          <span className="text-sm font-semibold text-[#18d26e]">{shoutout.platform}</span>
                        </div>
                        <p className="text-gray-700 mb-4 italic">"{shoutout.content}"</p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-xs text-gray-500">
                            <span>— {shoutout.author}</span>
                            <span className="ml-2">{shoutout.date}</span>
                          </div>
                        </div>
                        <a
                          href={shoutout.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors w-full ${
                            isInstagram
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                              : 'bg-black text-white hover:bg-gray-800'
                          }`}
                        >
                          <span>View on {shoutout.platform}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShowcasePage;
