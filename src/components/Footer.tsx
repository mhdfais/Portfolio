import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {currentYear} Mohammed Fais TM. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;