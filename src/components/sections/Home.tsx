import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-neutral-100 dark:from-primary-500 dark:to-primary-700 -z-10" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="mb-4 text-primary-500 dark:text-white">
              Hi, I'm <span className="text-secondary-500">Shriya Cheruvu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-normal text-neutral-700 dark:text-neutral-200 mb-6">
              Aspiring Full-Stack Developer | Data Science Enthusiast
            </h2>
            <p className="mb-8 max-w-2xl">
              B.Tech student in Computer Science and Engineering (Data Science) 
              at BV Raju Institute of Technology, passionate about building innovative
              web applications and exploring data science.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary bg-primary-500 dark:bg-secondary-500 text-white dark:text-primary-800 hover:bg-primary-600 dark:hover:bg-secondary-400"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-outline"
              >
                Contact Me
              </Link>
            </div>
            <div className="mt-10 flex space-x-6">
              <a 
                href="https://github.com/shriyacheruvu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200 hover:text-secondary-500 dark:hover:text-secondary-500 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/shriyacheruvu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200 hover:text-secondary-500 dark:hover:text-secondary-500 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-secondary-500 rounded-3xl -rotate-6 scale-95 opacity-20 dark:opacity-10"></div>
              <div className="absolute inset-0 bg-primary-500 dark:bg-secondary-500 rounded-3xl rotate-3 scale-95 opacity-20"></div>
              <div className="relative bg-white dark:bg-primary-600 p-8 rounded-3xl shadow-xl">
                {/* <div className="aspect-square bg-neutral-100 dark:bg-primary-700 rounded-2xl flex items-center justify-center">
                  <span className="text-7xl text-secondary-500">SC</span>
                </div> */}
                <div className="aspect-square rounded-2xl overflow-hidden">
  <img
    src="/mypic.jpg"  // <-- Update this to match your actual image filename
    alt="Shriya Cheruvu"
    className="w-full h-full object-cover"
  />
</div>

                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold">Cheruvu Shriya</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-1">
                    B.Tech Student • Developer • Data Science
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
     
    </section>
  );
};

export default Home;