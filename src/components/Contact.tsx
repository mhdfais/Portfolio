import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12 text-center tracking-wide">
          Get In Touch
        </h2>
        
        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you're looking for a dedicated team member or want to discuss 
              a potential collaboration, I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a 
                    href="mailto:mhdfaistm@gmail.com"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    mhdfaistm@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a 
                    href="tel:+918590426896"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    +918590426896
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white">Kerala, Malappuram </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/mohammed-fais-tm-97a377313/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    linkedin.com/in/mohammed-fais-tm
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                  <a 
                    href="https://github.com/mhdfais"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    github.com/mhdfais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;