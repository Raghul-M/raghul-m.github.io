import { Calendar, MapPin, Building, ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Quality Engineer ',
      company: 'RedHat',
      location: 'Remote',
      period: 'Feb2024 - Present',
      description: 'Model Serving Runtimes in Openshift AI ',
      achievements: [
        "Led Model Deployment at Scale: Spearheaded the RHOAI Model Images project and testing efforts for model serving runtimes in OpenShift AI, ensuring production-grade stability and accuracy.",
        "Optimized Model Serving: Conducted end-to-end release verification and validation for ML models using KServe, ModelMesh, and vLLM, enhancing deployment confidence.", 
        "Enabled High-Performance Inference: Pioneered the integration of NVIDIA Triton Inference Server on OpenShift AI to support multi-framework, high-throughput inferencing.",
        "Hands-On with GenAI: Applied cutting-edge techniques in transformers, embedding models, and inference optimization using Python-based ML frameworks.",
        "MLOps: Actively contribute to the Model Serving Runtimes team, working with OpenAI APIs, TGIS, Caikit-TGIS, and vLLM for scalable GenAI serving.",
        "CI/CD Automation: Streamlined workflows with GitHub Actions, Jenkins, and scripting (Python, Bash), reducing manual tasks and improving deployment velocity.",  
        "Containerization & Orchestration: Proficient with Docker, Podman, and Kubernetes Operators in OpenShift environments for scalable, resilient infrastructure.",  
        "Hardware-Aware Optimization: Worked across NVIDIA, AMD, and Intel Gaudi hardware to accelerate ML workloads and optimize inferencing pipelines.",
        "Agile Development: Experienced in Agile methodologies, contributing to sprint planning, peer reviews, and collaborative, cross-functional development.",
      ],
    },
    {
      id: 2,
      title: 'Software Engineer Intern',
      company: 'RedHat',
      location: 'Remote',
      period: 'Aug 2023 - Feb 2024',
      description: 'Distributed Workloads & Data Science Pipelines in Openshift AI ',
      achievements: [
       'Collaborated with developers , Data Scientists  and senior software quality engineers as a SQE',
       "Developed unit tests in Go (Golang) for distributed workloads as part of the CodeFlare project, ensuring code reliability and maintaining high-quality standards across microservices.",
        'Worked on the RHOAI project, contributing to Project Codeflare, Kubeflow , Jupyter Notebook [Elyra] and Openshift AI',
        'Engaged in automation testing to ensure product quality and reliability.',
        'Gained hands-on experience in quality assurance methodologies and processes. Devops latest tools and Technologies'
      ],
    },
    {
      id: 3,
      title: 'Data Analyst Intern',
      company: 'Ernst & Young (EY)',
      location: 'Chennai, India',
      period: 'Dec 2022 - Jul 2023',
      description: 'Project : Social Media Intelligence',
      achievements: [
        'Data Collection: Collect data from 20 diverse sources (articles, reviews) using Python and web scraping (Selenium, Tweepy, Snscraper) to gather comprehensive brand insights.',
'Emotional & Sentiment Analysis: Analyze sentiments and emotions in the data to understand public opinion, brand perception, and customer satisfaction. Utilize Python libraries (pandas, numpy, matplotlib) for efficient data processing and visualization',
'Credit Assurance & Time Savings: Create credit assurance report with actionable insights. Save 1000 hours/month through automation and streamlined data processing, optimizing decision-making and resource allocation'
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'SRM Institute of Science and Technology',
      period: '2020 - 2023',
      location: 'Chennai, India',
    },
    {
      degree: 'High School',
      school: 'Santhome HSS',
      period: '2018 - 2020',
      location: 'Chennai, India',
    }
  ];

  const certifications = [
    {
      degree: 'AWS ML Engineer ',
      school: 'AWS',
      period: '2025',
      location: 'Online Certification',
      verifyUrl: 'https://www.credly.com/badges/ee2690c0-37f0-4802-9b69-efb940f11097/public_url'
    },
    {
      degree: 'RedHat Certified Linux Administrator ',
      school: 'RedHat',
      period: '2025',
      location: 'Online Certification',
      verifyUrl: '#'
    },
{
    degree: 'RedHat Container Specialist ',
    school: 'RedHat',
    period: '2025',
    location: 'Online Certification',
    verifyUrl: 'https://www.credly.com/badges/94484f47-4403-4739-b663-d569eb83bb67/public_url'
  },
    {
      degree: 'Github Actions',
      school: 'Github',
      period: '2025',
      location: 'Online Certification',
      verifyUrl: 'https://www.credly.com/badges/ad16c2aa-1733-4cbe-b438-9eab7a949a73/public_url'
    },
    {
      degree: 'Github Foundations',
      school: 'Github',
      period: '2024',
      location: 'Online Certification',
      verifyUrl: 'https://www.credly.com/badges/890eae17-38fb-4000-a20a-9c93ded23040/public_url'
    },
    {
      degree: 'Redhat Openshift AI Administration',
      school: 'Redhat',
      period: '2024',
      location: 'Online Certification',
      verifyUrl: 'https://www.credly.com/badges/d511cb85-a076-40c3-b8ba-6830499dd704/public_url'
    },
    {
      degree: 'Azure AI Fundamentals (AI-900)',
      school: 'Microsoft Azure',
      period: '2024',
      location: 'Online Certification',
      verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/MRaghul-8878/7A48762BC27B334B?sharingId'
    },
    {
      degree: 'Azure Fundamentals (Az-900)',
      school: 'Microsoft Azure',
      period: '2022',
      location: 'Online Certification',
      verifyUrl: 'https://www.credly.com/badges/a5db947f-7496-4f1b-9744-ca61ccf132fa/public_url'
    },
    {
      degree: 'Artifical Intelligence Foundations ',
      school: 'IBM',
      period: '2024',
      location: 'Online Certification',
      verifyUrl: 'https://www.credly.com/badges/3937c11e-5da5-49f8-bcb1-73049f732c30/public_url'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Professional <span className="text-[#18d26e]">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey as a developer, from junior positions to senior roles, 
            building expertise across the full technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
              <Building className="w-6 h-6 text-[#18d26e] mr-3" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-full bg-[#18d26e]/30"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline dot */}
                    <div className="w-8 h-8 bg-[#18d26e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-lg flex-1 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-bold text-black">{exp.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <Building className="w-4 h-4 mr-2 text-[#18d26e]" />
                        <span className="font-medium">{exp.company}</span>
                        <MapPin className="w-4 h-4 ml-4 mr-1 text-[#18d26e]" />
                        <span>{exp.location}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-[#18d26e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
                <Calendar className="w-6 h-6 text-[#18d26e] mr-3" />
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index !== education.length - 1 && (
                      <div className="absolute left-4 top-12 w-0.5 h-full bg-[#18d26e]/30"></div>
                    )}
                    <div className="flex items-start space-x-4">
                      {/* Timeline dot */}
                      <div className="w-8 h-8 bg-[#18d26e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="bg-white rounded-lg p-6 shadow-lg flex-1 hover:shadow-xl transition-shadow duration-300">
                        <h4 className="text-xl font-bold text-black mb-2">{edu.degree}</h4>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Building className="w-4 h-4 mr-2 text-[#18d26e]" />
                          <span className="font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
                <Calendar className="w-6 h-6 text-[#18d26e] mr-3" />
                Certifications
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h4 className="text-xl font-bold text-black mb-2">{cert.degree}</h4>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Building className="w-4 h-4 mr-2 text-[#18d26e]" />
                      <span className="font-medium">{cert.school}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.period}
                      </div>
                      {/* Conditionally render Link Verify or location */}
                      <div className="flex items-center space-x-1">
                        {cert.verifyUrl ? (
                          <a 
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#18d26e] hover:underline flex items-center"
                          >
                            <span>Verify</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        ) : (
                          null // Render nothing if verifyUrl is not present
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
