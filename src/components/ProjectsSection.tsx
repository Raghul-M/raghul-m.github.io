import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Filter } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Local LLM Server with Ollama + Cloudflare Tunnel',
      description: 'This project turns an old laptop into a fully functional AI server that can serve LLMs locally and access them globally using Cloudflare Tunnel on API . A simple Streamlit app provides a friendly frontend to interact with the model via API .',
      image: 'https://github.com/user-attachments/assets/b28c7fc9-8a98-4414-ad42-4fad5a9bb348',
      technologies: ['Python', 'Ollama', 'Streamlit', 'Rest API', 'Cloudflare'],
      category: 'ai',
      githubUrl: 'https://github.com/Raghul-M/laptop-local-llm-server/',
    },
    {
      id: 2,
      title: 'Gmail Sender Action - Custom GitHub Action',
      description: 'Custom GitHub Action enables you to send emails via Gmail using Custom HTML templates directly from your GitHub workflows.',
      image: 'https://github.com/user-attachments/assets/f8bca9ac-f0d6-4872-bfee-a94b6288ed0b',
      technologies: ['Python', 'Github Action', 'Docker', 'CI/CD', 'DevOps'],
      category: 'cloud',
      liveUrl: 'https://github.com/marketplace/actions/gmail-sender-action',
      githubUrl: 'https://github.com/Raghul-M/gmail-sender-action',
    },
    {
      id: 3,
      title: 'DevOps Hub',
      description: "DevOpsHub is a curated platform that offers hands-on DevOps resources, project ideas, and learning paths to help developers and engineers build real-world skills. Built with simplicity in mind, it serves as a one-stop hub for mastering DevOps tools, workflows, and best practices.",
      image: 'https://github.com/user-attachments/assets/d07139ac-e89c-4305-8b8d-e8156a87fb61',
      technologies: ['Web', 'DevOps', 'Cloud', 'Documentation','AWS'],
      category: 'cloud',
      liveUrl: 'https://devopshub.vercel.app/',
      githubUrl: 'https://github.com/Raghul-M/Devops-Hub',
    },
    {
      id: 4,
      title: 'Git Bounty : Image Generator ',
      description: "Git Bounty generates personalized anime-style pirate bounty posters based on a user's GitHub activity. Simply input a GitHub username, and the app pulls relevant data like contributions, favorite programming languages, and more to create a unique bounty poster",
      image: 'https://github.com/user-attachments/assets/f20459f6-3a9e-465c-93c4-051e29d09dfe',
      technologies: ['Github', 'Rest API', 'Python', 'Huggingface', 'GraphQL', 'Stable-diffusion'],
      category: 'ai',
      liveUrl: 'https://gitbounty.streamlit.app/',
      githubUrl: 'https://github.com/Raghul-M/Git-Bounty',
    },
    {
      id: 5,
      title: 'Deploying Docker App on Render Using Githubactions',
      description: 'The project showcases how to build, containerize, and deploy a Streamlit application seamlessly using Docker and automated CI/CD pipelines.',
      image: 'https://github.com/user-attachments/assets/a2e2a7e5-cf9d-4dc8-bb85-001ddf8685d6',
      technologies: ['Docker', 'Github', 'Github Actions', 'Python', 'Render', 'CI/CD'],
      category: 'cloud',
      githubUrl: 'https://github.com/Raghul-M/Deploying_Docker-App-on-Render_Using_Githubactions',
    },
    {
      id: 6,
      title: 'Deploying Docker App on Self-Hosted Runner (AWS EC2) Using Githubactions',
      description: 'Deploying Docker Python Application in AWS EC2 Using Github Actions CI/CD (self hosted runner)',
      image: 'https://github.com/user-attachments/assets/39ad53f3-2c5c-489d-8ada-dd2af9a75d60',
      technologies: ['Python', 'AWS', 'Self-Hosted', 'CI-CD', 'Docker', 'Github Actions '],
      category: 'cloud',
      githubUrl: 'https://github.com/Raghul-M/Docker_Github-Actions_AWS-App/',
    },
    {
      id: 7,
      title: 'GitHub - Jira Automation',
      description: 'GitHub-Jira integration project involves a Flask web application hosted on an AWS EC2 instance. The application automates the creation of Jira issues based on GitHub issue comments.',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*hzETdS_uSTlDKZienV0xTA.png',
      technologies: ['Python', 'AWS', 'Github', 'Jira', 'Rest API', 'Flask '],
      category: 'cloud',
      githubUrl: 'https://github.com/Raghul-M/GitHub-Jira_Automation-Flask-Application',
    },
    {
      id: 8,
      title: 'Clever-Cart',
      description: 'CleverCart: A Flask web app powered by Python, Selenium, and Requests for intelligent product scraping from Amazon and Flipkart, presenting results in an interactive interface for seamless online shopping comparisons',
      image: 'https://i.postimg.cc/MTTRGWgd/Whats-App-Image-2023-12-16-at-2-13-22-PM.jpg)',
      technologies: ['Python', 'Selenium', 'Web Scraping', 'Regex', 'Flask '],
      category: 'cloud',
      githubUrl: 'https://github.com/Raghul-M/Clever-Cart',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'cloud', label: 'Cloud & Devops' },
    { id: 'ai', label: 'AI/ML & GenAi ' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Featured <span className="text-[#18d26e]">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, cloud solutions, 
            AI/ML applications, and mobile development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`${
                activeFilter === filter.id 
                  ? 'bg-[#18d26e] hover:bg-[#15b85a] text-white' 
                  : 'border-[#18d26e] text-[#18d26e] hover:bg-[#18d26e] hover:text-white'
              } transition-all duration-300`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#18d26e] text-white p-2 rounded-full hover:bg-[#15b85a] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#18d26e] text-white p-2 rounded-full hover:bg-[#15b85a] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="border-[#18d26e] text-[#18d26e] hover:bg-[#18d26e] hover:text-white transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#18d26e] text-white text-center py-2 rounded-md hover:bg-[#15b85a] transition-colors font-medium"
                    >
                      Live 
                    </a>
                  )}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-[#18d26e] text-[#18d26e] text-center py-2 rounded-md hover:bg-[#18d26e] hover:text-white transition-colors font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
