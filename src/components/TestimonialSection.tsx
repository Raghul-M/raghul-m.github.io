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
      setStartIndex((prev) => (prev + 1) % testimonials.length); // Loop through testimonials
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
      // Calculate the index of the card to scroll into view
      // We want to scroll to the start of the current group of visible cards
      const cardElement = containerRef.current.children[startIndex % testimonials.length] as HTMLElement;
      if (cardElement) {
        containerRef.current.scrollTo({
          left: cardElement.offsetLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [startIndex, testimonials.length]);


  const goToPrevious = () => {
    stopSlider();
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startSlider();
  };

  const goToNext = () => {
    stopSlider();
    setStartIndex((prev) => (prev + 1) % testimonials.length);
    startSlider();
  };

  // Removed visibleTestimonials slicing logic here. 
  // We will render all testimonials in the container and let overflow/scrolling handle visibility.

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#18d26e]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#18d26e]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-black mb-6">
            Recommendations <span className="text-[#18d26e]"> & Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Hear what mentors, managers, and industry professionals have to say about working with me and the impact of our collaborations.
          </p>
        </div>
        {/* Testimonials Container - Enabled Responsive Horizontal Scrolling and Auto-Slide */}
        {/* Flex container showing 1 card on mobile, 2 on medium+, with overflow and gap */}
        {/* Updated container to hold all cards for scrolling and applied responsive widths to cards */}
        <div ref={containerRef} className="flex flex-row overflow-x-hidden overflow-y-hidden flex-nowrap gap-10 pb-4 scrollbar-hide">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`relative bg-white rounded-3xl border-2 border-black pt-6 pb-6 px-4 md:px-6 flex-shrink-0 w-full xl:w-[calc(50%-20px)] flex flex-col items-center transition-all duration-300`}
              style={{ zIndex: 10 - idx }}
            >
              <p className="text-gray-700 text-center text-lg mb-8">"{testimonial.content}"</p>
              <div className="text-center mt-auto flex flex-col items-center">
                <div className="font-bold text-[#18d26e] text-xl">{testimonial.name}</div>
                <div className="text-gray-500 text-base mb-2">{testimonial.role}</div>
                {testimonial.linkedinUrl && (
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#18d26e] transition-colors duration-300"
                    aria-label={`LinkedIn profile of ${testimonial.name}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2" stroke="#0A66C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Arrow buttons are positioned relative to the main container div now */}
          <button
            onClick={goToPrevious}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300 z-20 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left text-gray-700"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300 z-20 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right text-gray-700"><path d="m9 18 6-6-6-6"/></svg>
          </button>
      </div>
    </section>
  );
};

export default TestimonialSection; 