import React from "react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types";

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Artisan Auctions - Online Art Auction Platform",
      description:
        "Real-time auction platform where users can bid on artworks, with admin approval workflows and Stripe payments.",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "MongoDB"],
      githubUrls: [
        {
          label: "Frontend",
          url: "https://github.com/mhdfais/ArtisanAuctions-client",
        },
        {
          label: "Backend",
          url: "https://github.com/mhdfais/ArtisanAuctions-server",
        },
      ],
      // liveUrl: "https://artisan-auctions.netlify.app",
    },
    {
      id: 2,
      title: "Teapoy - Furniture E-commerce",
      description:
        "A full-stack furniture e-commerce website built with Node.js, Express, MongoDB, and EJS. Features include dynamic product listings, user authentication, cart management, and admin product control. Styled with Bootstrap for responsive design.",
      technologies: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
      githubUrl: "https://github.com/mhdfais/Ecommerce",
      liveUrl: "https://ecommerce-ziwv.onrender.com/",
    },

    // {
    //   id: 3,
    //   title: "URL Shortener",
    //   description:
    //     "A simple service to shorten long URLs with redirect support and analytics.",
    //   technologies: ["Node.js", "Express", "MongoDB", "NanoID"],
    //   githubUrl: "https://github.com/yourname/url-shortener",
    //   isMini: true,
    // },
    {
      id: 4,
      title: "To-Do App",
      description:
        "A lightweight task management app that allows users to add, edit, delete, and mark tasks as complete. Data is stored locally for persistence.",
      technologies: ["ReactJS", "Bootstrap", "localStorage"],
      githubUrl: "https://github.com/mhdfais/ToDo-App",
      isMini: true,
    },

    {
      id: 5,
      title: "User Management System",
      description:
        "A simple system to manage users with functionality to add, update, delete, and list users. Built with MERN Stack.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "Express",
        "Typescript",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/mhdfais/user-management-system---react",
      isMini: true,
    },

    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description:
    //     "A responsive weather application that provides current weather conditions, forecasts, and weather maps with location-based services.",
    //   technologies: ["React", "Weather API", "Chart.js", "CSS3", "JavaScript"],
    //   githubUrl: "https://github.com/alexjohnson/weather-dashboard",
    // },
  ];
  const mainProjects = projects.filter((p) => !p.isMini);
  const miniProjects = projects.filter((p) => p.isMini);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12 text-center tracking-wide">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainProjects.map((project) => (
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
                  {/* Single GitHub Link */}
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

                  {/* Multiple GitHub Links */}
                  {project.githubUrls &&
                    project.githubUrls.map((repo, idx) => (
                      <a
                        key={idx}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span className="text-sm">{repo.label}</span>
                      </a>
                    ))}

                  {/* Live Demo Link */}
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

        {/* Mini Projects */}
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mt-20 mb-8 text-center tracking-wide">
          Mini Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {miniProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {project.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600"
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
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
