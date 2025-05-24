import React from 'react';

// Updated data structure
const skillsDiagram = {
  title: 'MY SKILLS',
  mainCategories: [
    'Software Developer',
    'AI / ML Engineer',
    'Cloud & Devops ',
    'Gen Ai & MLOps'
  ],
  allSkills: [
    'PYTHON', 'DOCKER', 'GENAI', 'MACHINE LEARNING', 'AWS',
    'GO', 'PROMPT ENGINEERING', 'KUBERNETES', 'GIT',
    'GITHUB', 'GITHUB ACTIONS', 'LINUX', 'BASH SCRIPTING',
    'OPENSHIFT', 'REST API' , 'SQL', 'POSTGRES','VLLM', 'OLLAMA', 'DevOps', 'MLOps', 
    'CI/CD', 'JENKINS', 'AZURE', 'CUDA','NGINX','SONARQUBE',
    'POSTMAN' , 'SUPABASE', 'VECTOR DB','PYTORCH','LLM', 'MLFLOW', 'PODMAN'
  ]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-dark-navy text-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Central Skill Title */}
        <div className="bg-[#1d1a39] text-white py-3 px-6 rounded-md mb-12 border border-[#34305a]">
          <h2 className="text-xl font-bold">{skillsDiagram.title}</h2>
        </div>

        {/* Main Categories Container */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 w-full mb-6 hidden lg:flex">
          {skillsDiagram.mainCategories.map((mainCategory, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Main Category Badge */}
              <div className="bg-[#1d1a39] text-white py-2 px-5 rounded-md border border-[#34305a] text-lg font-semibold mb-8">
                {mainCategory}
              </div>
            </div>
          ))}
        </div>

        {/* Add horizontal line above skills */}
        <div className="w-full h-0.5 bg-[#34305a] mx-auto max-w-3xl lg:max-w-5xl mb-4"></div>

        {/* All Skills Container */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {skillsDiagram.allSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-[#18d26e] py-2 px-4 rounded-md border border-black text-sm font-medium hover:bg-[#18d26e] hover:text-white transition-colors duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
