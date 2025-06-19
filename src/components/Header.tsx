import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const Header: React.FC = () => {
  return (
    <header className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <AnimateOnScroll delay={0.2}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
              Mohammed Fais TM
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light tracking-wide">
              Software Developer
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-8">
          <AnimateOnScroll delay={0.4}>
            <div>
              <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6 tracking-wide">
                Connect with Me
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/mohammed-fais-tm-97a377313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mhdfais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  GitHub
                </a>
                <a
                  href="mailto:mhdfaistm@gmail.com"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Email
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.6}>
            <div>
              <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6 tracking-wide">
                Highlights
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
  href="/Mohammed_Fais_Resume.pdf"
  download
  className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
>
  Download CV
</a>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Visit Projects
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("skills")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Visit Skills
                </button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </header>
    // <header className="min-h-screen flex items-center justify-center px-4">
    //   <div className="text-center max-w-4xl mx-auto">
    //     <div className="mb-8">
    //       <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
    //         Mohammed Fais TM
    //       </h1>
    //       <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light tracking-wide">
    //         Software Developer
    //       </p>
    //     </div>

    //     <div className="space-y-8">
    //       <div>
    //         <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6 tracking-wide">
    //           Connect with Me
    //         </h2>
    //         <div className="flex flex-wrap justify-center gap-4">
    //           <a
    //             href="https://www.linkedin.com/in/mohammed-fais-tm-97a377313/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
    //           >
    //             LinkedIn
    //           </a>
    //           <a
    //             href="https://github.com/mhdfais"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
    //           >
    //             GitHub
    //           </a>
    //           <a
    //             href="mailto:mhdfaistm@gmail.com"
    //             className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
    //           >
    //             Email
    //           </a>
    //         </div>
    //       </div>

    //       <div>
    //         <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6 tracking-wide">
    //           Highlights
    //         </h2>
    //         <div className="flex flex-wrap justify-center gap-4">
    //           <button
    //             onClick={() => window.open('/cv.pdf', '_blank')}
    //             className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
    //           >
    //             Download CV
    //           </button>
    //           <button
    //             onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
    //             className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
    //           >
    //             Visit Projects
    //           </button>
    //           <button
    //             onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
    //             className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
    //           >
    //             Visit Skills
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
