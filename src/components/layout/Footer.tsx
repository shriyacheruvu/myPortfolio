import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-primary-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">
              Shriya<span className="text-secondary-500">.dev</span>
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
              &copy; {new Date().getFullYear()} Cheruvu Shriya. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/shriyacheruvu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a 
                href="https://linkedin.com/in/shriyacheruvu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a 
                href="mailto:shriyacheruvu@gmail.com" 
                className="social-icon"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Built with React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;