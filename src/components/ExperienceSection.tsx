import { useState } from 'react';
import { Calendar, MapPin, Building, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const ExperienceSection = () => {
  const [expandedJobs, setExpandedJobs] = useState<number[]>([]);
  const [expandedVolunteering, setExpandedVolunteering] = useState<number[]>([]);

  const toggleJob = (jobId: number) => {
    setExpandedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const toggleVolunteering = (volId: number) => {
    setExpandedVolunteering(prev => 
      prev.includes(volId) 
        ? prev.filter(id => id !== volId)
        : [...prev, volId]
    );
  };
  const experiences = [
    {
      id: 1,
      title: 'Associate Software Engineer  ',
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
    }
  ];

  const volunteering = [
    {
      id: 1,
      organization: 'Teedians community',
      role: 'Mentor',
      period: '2024 - Present',
      location: 'Remote',
      achievements: [
        'Leveraging my expertise in Python, software development, Cloud, and DevOps, Aimed to guide students towards mastering these domains, fostering innovation and excellence within the Think Digital Community.',
        'With a focus on AI & ML, I endeavor to mentor aspiring students, nurturing their skills and igniting their passion for cutting-edge technologies, propelling them towards success in the digital realm.',
      ],
    },
    {
      id: 2,
      organization: 'Scaler',
      role: 'Community Volunteer',
      period: 'Jul 2022 - Sep 2022',
      location: 'Remote',
      achievements: [
        'As a Volunteer Assisting students and new members to understand the benefits of Scaler Academy courses and their career development sessions.',
        'Helping Internal Members to conduct and organize Offline Meetups , Industry Sessions and Hackathons',
      ],
    }
  ];

  const certifications = [
    {
      degree: 'AWS Developer Associate',
      school: 'AWS',
      period: '2025',
      location: 'Online Certification',
      verifyUrl: 'https://www.credly.com/badges/ee2690c0-37f0-4802-9b69-efb940f11097/public_url',
      ongoing: true
    },
    {
      degree: 'NVIDIA GenAI LLM Associate',
      school: 'NVIDIA',
      period: '2025',
      location: 'Online Certification',
      verifyUrl: 'https://www.credly.com/badges/nvidia-genai-llm-associate/public_url',
      ongoing: true
    },
    {
      degree: 'Terraform Associate',
      school: 'HashiCorp',
      period: '2025',
      location: 'Online Certification',
      verifyUrl: 'https://www.credly.com/badges/terraform-associate/public_url',
      ongoing: true
    },
{
    degree: 'RedHat Container Specialist ',
    school: 'RedHat',
    period: '2025',
    location: 'Online Certification',
    verifyUrl: 'https://www.credly.com/badges/7300a2d5-cdf9-4e64-97fc-b06933d12ef4/public_url'
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
      degree: 'Artifical Intelligence Foundations - IBM',
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
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
                <Building className="w-6 h-6 text-[#18d26e] mr-3" />
                <span className="relative inline-block">
                  Work Experience
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
                </span>
              </h3>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => {
                  const isExpanded = expandedJobs.includes(exp.id);
                  const isRedHat = exp.company.toLowerCase().includes('redhat') || exp.company.toLowerCase().includes('red hat');
                  const isEY = exp.company.toLowerCase().includes('ey') || exp.company.toLowerCase().includes('ernst');
                  
                  return (
                    <div key={exp.id} className="relative">
                      {/* Timeline line */}
                      {index !== experiences.length - 1 && (
                        <div className="absolute left-[7px] top-[18px] w-0.5 h-[calc(100%+1rem)] bg-black/30"></div>
                      )}
                      
                      <div className="flex items-start space-x-4">
                        {/* Timeline dot */}
                        <div className="w-4 h-4 bg-black rounded-full flex-shrink-0 mt-2"></div>
                        
                        <div className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex-1">
                      {/* Black Top Line */}
                      <div className="h-1 w-full bg-black"></div>
                      {/* Header - Always visible */}
                      <button
                        onClick={() => toggleJob(exp.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="text-xl font-bold text-black">{exp.title}</h4>
                            <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                          </div>
                          
                          <div className="flex items-center text-gray-600 flex-wrap gap-x-4 gap-y-1">
                            <div className="flex items-center">
                              {isRedHat ? (
                                <img src="/orgs/redhat.png" alt="Red Hat" className="w-5 h-5 mr-2 object-contain" />
                              ) : isEY ? (
                                <img src="/orgs/ey.png" alt="EY" className="w-5 h-5 mr-2 object-contain" onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  const fallback = document.createElement('div');
                                  fallback.className = 'w-5 h-5 mr-2 bg-black rounded flex items-center justify-center';
                                  fallback.innerHTML = '<span class="text-yellow-400 text-xs font-bold">EY</span>';
                                  e.currentTarget.parentNode?.insertBefore(fallback, e.currentTarget);
                                }} />
                              ) : (
                                <Building className="w-4 h-4 mr-2 text-[#18d26e]" />
                              )}
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1 text-[#18d26e]" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mt-2">{exp.description}</p>
                        </div>
                        
                        {/* Chevron Icon */}
                        <div className="ml-4 flex-shrink-0">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-[#18d26e]" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#18d26e]" />
                          )}
                        </div>
                      </button>
                      
                      {/* Expandable Content */}
                      {isExpanded && (
                        <div className="px-6 pb-6 border-t border-gray-100 pt-4 animate-in slide-in-from-top-2 duration-200">
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-[#18d26e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
                <Calendar className="w-6 h-6 text-[#18d26e] mr-3" />
                <span className="relative inline-block">
                  Education
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
                </span>
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => {
                  const isSRM = edu.school.toLowerCase().includes('srm');
                  
                  return (
                    <div key={index} className="relative">
                      {/* Timeline line */}
                      {index !== education.length - 1 && (
                        <div className="absolute left-[7px] top-[18px] w-0.5 h-[calc(100%+2rem)] bg-black/30"></div>
                      )}
                      
                      <div className="flex items-start space-x-4">
                        {/* Timeline dot */}
                        <div className="w-4 h-4 bg-black rounded-full flex-shrink-0 mt-2"></div>
                        
                        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex-1 relative z-10">
                          {/* Black Top Line */}
                          <div className="h-1 w-full bg-black"></div>
                          <div className="p-6">
                            <h4 className="text-xl font-bold text-black mb-2">{edu.degree}</h4>
                            <div className="flex items-center text-gray-600 mb-2">
                              {isSRM ? (
                                <img src="/orgs/srm.png" alt="SRM" className="w-8 h-8 mr-2 object-contain" onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  const fallback = document.createElement('div');
                                  fallback.className = 'w-8 h-8 mr-2 bg-gray-200 rounded flex items-center justify-center';
                                  fallback.innerHTML = '<span class="text-gray-600 text-xs font-bold">SRM</span>';
                                  e.currentTarget.parentNode?.insertBefore(fallback, e.currentTarget);
                                }} />
                              ) : (
                                <Building className="w-4 h-4 mr-2 text-[#18d26e]" />
                              )}
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
                  </div>
                  );
                })}
              </div>

              {/* Volunteering */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
                  <Calendar className="w-6 h-6 text-[#18d26e] mr-3" />
                  <span className="relative inline-block">
                    Volunteering
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
                  </span>
                </h3>
                
                <div className="space-y-8">
                  {volunteering.map((vol, index) => {
                    const isExpanded = expandedVolunteering.includes(vol.id);
                    const isTeedians = vol.organization.toLowerCase().includes('teedians');
                    const isScaler = vol.organization.toLowerCase().includes('scaler');
                    
                    return (
                      <div key={vol.id} className="relative">
                        {/* Timeline line - only between volunteering cards */}
                        {index !== volunteering.length - 1 && (
                          <div className="absolute left-[7px] top-[18px] w-0.5 h-[calc(100%+2rem)] bg-black/30"></div>
                        )}
                        
                        <div className="flex items-start space-x-4">
                          {/* Timeline dot */}
                          <div className="w-4 h-4 bg-black rounded-full flex-shrink-0 mt-2"></div>
                          
                          <div className="bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex-1 relative z-10">
                            {/* Black Top Line */}
                            <div className="h-1 w-full bg-black"></div>
                            
                            {/* Header - Always visible */}
                            <button
                              onClick={() => toggleVolunteering(vol.id)}
                              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                            >
                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                  <h4 className="text-xl font-bold text-black">{vol.role}</h4>
                                  <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {vol.period}
                                  </div>
                                </div>
                                
                                <div className="flex items-center text-gray-600 flex-wrap gap-x-4 gap-y-1">
                                  <div className="flex items-center">
                                    {isTeedians ? (
                                      <img src="/orgs/td.png" alt="Teedians" className="w-5 h-5 mr-2 object-contain" onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const fallback = document.createElement('div');
                                        fallback.className = 'w-5 h-5 mr-2 bg-gray-200 rounded flex items-center justify-center';
                                        fallback.innerHTML = '<span class="text-gray-600 text-xs font-bold">TD</span>';
                                        e.currentTarget.parentNode?.insertBefore(fallback, e.currentTarget);
                                      }} />
                                    ) : isScaler ? (
                                      <img src="/orgs/scaler.png" alt="Scaler" className="w-5 h-5 mr-2 object-contain" onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const fallback = document.createElement('div');
                                        fallback.className = 'w-5 h-5 mr-2 bg-gray-200 rounded flex items-center justify-center';
                                        fallback.innerHTML = '<span class="text-gray-600 text-xs font-bold">S</span>';
                                        e.currentTarget.parentNode?.insertBefore(fallback, e.currentTarget);
                                      }} />
                                    ) : (
                                      <Building className="w-4 h-4 mr-2 text-[#18d26e]" />
                                    )}
                                    <span className="font-medium">{vol.organization}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-1 text-[#18d26e]" />
                                    <span>{vol.location}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Chevron Icon */}
                              {vol.achievements && (
                                <div className="ml-4 flex-shrink-0">
                                  {isExpanded ? (
                                    <ChevronUp className="w-5 h-5 text-[#18d26e]" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-[#18d26e]" />
                                  )}
                                </div>
                              )}
                            </button>
                            
                            {/* Expandable Content */}
                            {isExpanded && vol.achievements && (
                              <div className="px-6 pb-6 border-t border-gray-100 pt-4 animate-in slide-in-from-top-2 duration-200">
                                <ul className="space-y-2">
                                  {vol.achievements.map((achievement, achievementIndex) => (
                                    <li key={achievementIndex} className="flex items-start">
                                      <div className="w-2 h-2 bg-[#18d26e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                      <span className="text-gray-600 text-sm">{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center">
              <Calendar className="w-6 h-6 text-[#18d26e] mr-3" />
              <span className="relative inline-block">
                Certifications
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#18d26e] rounded-full"></div>
              </span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => {
                const schoolLower = cert.school.toLowerCase();
                const isRedHat = schoolLower.includes('redhat') || schoolLower.includes('red hat');
                const isGitHub = schoolLower.includes('github') || schoolLower.includes('git hub') || schoolLower === 'github';
                const isIBM = schoolLower.includes('ibm');
                const isAWS = schoolLower.includes('aws');
                const isNVIDIA = schoolLower.includes('nvidia');
                const isHashiCorp = schoolLower.includes('hashicorp') || schoolLower.includes('terraform');
                const isAzure = schoolLower.includes('azure') || schoolLower.includes('microsoft');
                
                return (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <div className="flex items-center mb-2">
                      {isRedHat ? (
                        <img src="/orgs/redhat.png" alt="Red Hat" className="w-6 h-6 mr-2 object-contain" onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }} />
                      ) : isGitHub ? (
                        <img src="/orgs/github.png" alt="GitHub" className="w-6 h-6 mr-2 object-contain" onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }} />
                      ) : isIBM ? (
                        <img src="/orgs/ibm.png" alt="IBM" className="w-8 h-8 mr-2 object-contain" onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }} />
                      ) : isAWS ? (
                        <img src="/orgs/aws.png" alt="AWS" className="w-6 h-6 mr-2 object-contain" onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }} />
                      ) : isNVIDIA ? (
                        <img src="/orgs/nvidia.png" alt="NVIDIA" className="w-6 h-6 mr-2 object-contain" onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }} />
                      ) : isHashiCorp ? (
                        <img src="/orgs/terraform.png" alt="HashiCorp" className="w-6 h-6 mr-2 object-contain" onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }} />
                      ) : isAzure ? (
                        <img src="/orgs/azure.png" alt="Microsoft Azure" className="w-6 h-6 mr-2 object-contain" onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }} />
                      ) : null}
                      <h4 className="text-base font-bold text-black">{cert.degree}</h4>
                    </div>
                    <div className="mt-auto flex items-center justify-between text-xs text-gray-500 pt-2">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.period}
                      </div>
                      {cert.ongoing ? (
                        <span className="text-[#18d26e] font-medium">Ongoing</span>
                      ) : cert.verifyUrl && cert.verifyUrl !== '#' ? (
                        <a 
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#18d26e] hover:underline flex items-center"
                        >
                          <span>Verify</span>
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
