import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'G Surendar Thina ',
    role: 'Founder @ThinkDigital',
    content: "I've known Raghul since his college days, and the level of commitment he puts into the work he does is quite commendable. He's not only technically skilled but also has a passion for helping others who are in need. He's a go-to person for technical mentorship for any college student. I'm sure he's here to make a huge impact in the open-source industry among young people. He's such a go-to guy for any technical discussions.",
    linkedinUrl: 'https://www.linkedin.com/in/gsthina/'
  },
  {
    id: 2,
    name: 'Jaya Suriya',
    role: 'Senior ML Engineer @EY ',
    content: "Raghul is one of the best technical people I have ever worked with at EY. He joined the team as a Fresher, but his exceptional skillset, dedication, and passion for learning quickly set him apart. Raghul rapidly ramped up and became deeply involved in developing AI/ML products, contributing significantly to our projects. What truly sets Raghul apart is his commitment to continuous learning and upskilling in cutting-edge technologies, ensuring he remains at the forefront of the field. His ability to adapt and leverage the latest advancements has been invaluable to our team's success. Raghul is a true asset to any team, I strongly recommend him for any role that requires a dynamic and highly skilled product development professional(AI/ML).",
    linkedinUrl: 'https://www.linkedin.com/in/jaya-suriya-jeya-sankar-ab80a2192/'
  },
  {
    id: 3,
    name: 'Thillaikumar Sundaram',
    role: 'Founder @CLOFY Technologies',
    content: "I would like to extend my heartfelt thanks to Raghul M for his outstanding session on DevOps in the Cloud. His ability to cover key DevOps concepts such as CI/CD, containerization, and Infrastructure as Code was truly remarkable. Raghul's practical knowledge, combined with hands-on demonstrations, provided our participants with actionable insights into the world of DevOps. His experience and clarity in presenting DevOps tools and methodologies made it easy for learners to grasp complex topics. Raghul is highly recommended for any DevOps-related roles or speaking opportunities, as his practical approach and depth of expertise make him a standout in the field.",
    linkedinUrl: 'https://www.linkedin.com/in/thillaisundaram/'
  },
  {
    id: 4,
    name: 'Keerthivasan Kannan',
    role: 'Senior Cloud Engineer @ANZ',
    content: "Myself and Raghul worked together on an initiative to uplift young talents on Git and building custom models. Raghul's knowledge is commendable when it comes to Devops, Git and automations. Would highly recommend Raghul to give him ownership and rest assured the task is done .Observed, he not just took ownership, but positive on receivning feedbacks and got them implemented. would love to work together in coming days",
    linkedinUrl: 'https://www.linkedin.com/in/priyasingh'
  },
  {
    id: 5,
    name: 'Rajesh Ramachander ',
    role: 'Vice President @Copperpod Digital',
    content: "Mr. Raghul M, a B.Sc. Computer Science student from SRM Institute of Science and Technology, interned at Ernst & Young India (Assurance, Chennai) from January to April 2023. During his time with us, he demonstrated a strong grasp of Social Media Intelligence project work, showcasing skills in designing test cases, conducting thorough testing, and applying concepts effectively. Raghul exhibited a quick learning ability, intellectual curiosity, and consistently asked insightful questions. He maintained high standards of integrity, honesty, and empathy, making him a valuable team member. I highly recommend him for any future endeavors, as he would be an asset to any organization.",
    linkedinUrl: 'https://www.linkedin.com/in/rramachander/'
  },
];

// Adjusted VISIBLE_CARDS logic for responsive display
const getVisibleCards = () => {
  if (typeof window !== 'undefined') {
    // Use Tailwind breakpoints (approximate)
    if (window.innerWidth >= 1280) { // xl breakpoint and up
      return 2;
    } else {
      return 1; // Mobile, tablet, and smaller desktops
    }
  }
  return 1; // Default for server-side rendering or initial load
};

const SLIDE_INTERVAL = 4000;

const TestimonialSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCardCount, setVisibleCardCount] = useState(getVisibleCards());

  // Update visible card count on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCardCount(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust startIndex if it exceeds bounds after resize (optional but good practice)
  useEffect(() => {
    setStartIndex(prev => prev % testimonials.length);
  }, [testimonials.length]);


  const startSlider = () => {
    stopSlider(); // Clear any existing interval
    intervalRef.current = window.setInterval(() => {
      if (typeof window !== 'undefined' && window.innerWidth >= 768) {
        // Desktop: move by 2 cards
        setStartIndex((prev) => {
          const next = prev + 2;
          return next >= testimonials.length ? 0 : next;
        });
      } else {
        // Mobile: move by 1 card
        setStartIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, SLIDE_INTERVAL);
  };

  const stopSlider = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, [testimonials.length]); // Restart slider if testimonials change

  // Scroll effect based on startIndex
  useEffect(() => {
    if (containerRef.current) {
      const isDesktop = window.innerWidth >= 768;
      const cardIndex = startIndex % testimonials.length;
      const cardElement = containerRef.current.children[cardIndex] as HTMLElement;
      
      if (cardElement) {
        if (isDesktop) {
          // For desktop: scroll to show exactly 2 cards starting from startIndex
          // Use the card's actual offsetLeft position
          containerRef.current.scrollTo({
            left: cardElement.offsetLeft,
            behavior: 'smooth',
          });
        } else {
          // For mobile: scroll to individual card
        containerRef.current.scrollTo({
          left: cardElement.offsetLeft,
          behavior: 'smooth',
        });
        }
      }
    }
  }, [startIndex, testimonials.length]);


  const goToPrevious = () => {
    stopSlider();
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      // Desktop: move by 2 cards
      setStartIndex((prev) => Math.max(0, prev - 2));
    } else {
      // Mobile: move by 1 card
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
    startSlider();
  };

  const goToNext = () => {
    stopSlider();
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      // Desktop: move by 2 cards
      setStartIndex((prev) => Math.min(testimonials.length - 2, prev + 2));
    } else {
      // Mobile: move by 1 card
    setStartIndex((prev) => (prev + 1) % testimonials.length);
    }
    startSlider();
  };

  // Removed visibleTestimonials slicing logic here. 
  // We will render all testimonials in the container and let overflow/scrolling handle visibility.

  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
            <span className="relative inline-block">
              Recommendations & Testimonials
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Hear what mentors, managers, and industry professionals have to say about working with me and the impact of our collaborations.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div 
            ref={containerRef} 
            className="flex overflow-x-auto scroll-smooth gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] md:min-w-[calc(50%-12px)] md:max-w-[calc(50%-12px)] snap-start"
              >
                <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 h-full flex flex-col shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#18d26e]">
                  {/* Quote Icon */}
                  <div className="mb-2">
                    <svg className="w-6 h-6 text-[#18d26e]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow line-clamp-6">
                    {testimonial.content}
                  </p>
                  
                  {/* Author Info */}
                  <div className="border-t border-gray-100 pt-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-black text-base mb-0.5">
                          {testimonial.name}
                        </div>
                        <div className="font-semibold text-black text-xs">
                          {testimonial.role}
                        </div>
                      </div>
                {testimonial.linkedinUrl && (
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                          className="ml-4 rounded-full border-2 border-[#0A66C2] p-1.5 hover:border-[#18d26e] transition-colors duration-300 flex items-center justify-center"
                    aria-label={`LinkedIn profile of ${testimonial.name}`}
                  >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2" className="hover:fill-[#18d26e] transition-colors duration-300">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                          </svg>
                  </a>
                )}
              </div>
            </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  stopSlider();
                  setStartIndex(idx);
                  startSlider();
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === startIndex % testimonials.length
                    ? 'bg-[#18d26e] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 