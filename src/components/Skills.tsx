import React from 'react';
import { Code, Database, Globe, PenTool as Tool } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript','Bootstrap']
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      title: 'Tools & Other',
      icon: Tool,
      skills: ['Git', 'VS Code', 'Figma', 'AWS Basics']
    },
    {
      title: 'Programming',
      icon: Code,
      skills: ['JavaScript', 'TypeScript']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12 text-center tracking-wide">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mr-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;