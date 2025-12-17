const PodcastsAndTalksSection = () => {
  // YouTube video IDs
  const videoIds = [
    '0LyBe81z_zw', // First podcast video
    'Ey-4qenjyTs', // Second podcast video
  ];

  return (
    <section id="podcasts-talks" className="pt-8 sm:-mt-24 sm:pt-0 pb-12 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 sm:mb-12 text-center">
          <span className="relative inline-block">
            Podcasts & Talks
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoIds.map((videoId, index) => (
            videoId.trim() !== '' ? (
              <div key={index} className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Podcast ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div key={index} className="relative w-full bg-gray-100 rounded-lg shadow-lg flex items-center justify-center" style={{ paddingBottom: '56.25%', minHeight: '315px' }}>
                <p className="text-gray-500 text-center p-4">Add YouTube video ID {index + 1}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastsAndTalksSection;

