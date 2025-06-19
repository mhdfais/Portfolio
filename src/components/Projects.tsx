import React from "react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types";

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Teapoy - Furniture E-commerce",
      description:
        "A full-stack furniture e-commerce website built with Node.js, Express, MongoDB, and EJS. Features include dynamic product listings, user authentication, cart management, and admin product control. Styled with Bootstrap for responsive design.",
      technologies: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
      githubUrl: "https://github.com/mhdfais/Ecommerce",
      liveUrl: "https://ecommerce-ziwv.onrender.com/",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "MongoDB"],
      githubUrl: "https://github.com/alexjohnson/task-manager",
      liveUrl: "https://taskmanager-demo.netlify.app",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current weather conditions, forecasts, and weather maps with location-based services.",
      technologies: ["React", "Weather API", "Chart.js", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12 text-center tracking-wide">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
