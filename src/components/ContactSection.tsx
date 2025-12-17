import { Mail, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactSection = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'raghulmadhavan1@gmail.com',
      href: 'mailto:raghulmadhavan1@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: ' Chennai , India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            <span className="relative inline-block">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8">
              I'm always interested in new opportunities and challenging projects. 
              Whether you're a company looking to hire, or you're someone wanting to collaborate, 
              don't hesitate to reach out.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const isEmail = info.label === 'Email';
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isEmail 
                        ? 'bg-blue-500 group-hover:bg-blue-600' 
                        : 'bg-[#18d26e] group-hover:bg-[#15b85a]'
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{info.label}</p>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                );
              })}
              
              {/* Social Media Profiles */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-black mb-4">Connect with me</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Raghul-M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 bg-black hover:bg-gray-800 text-white shadow-md hover:shadow-lg hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/m-raghul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://x.com/RaghulM01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 bg-blue-400 hover:bg-blue-500 text-white shadow-md hover:shadow-lg hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/raghul_official._/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md hover:shadow-lg hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map View */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600708854!2d79.10131854999999!3d13.0474878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf368df49129e33b2!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chennai Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
