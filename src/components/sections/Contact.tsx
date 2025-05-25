import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
 

  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-primary-600">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        



        <div className="grid grid-cols-1 gap-12 mt-12">
  <motion.div
    className="flex flex-col justify-center items-center text-center w-full"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
  >
    {/* <h3 className="text-2xl font-semibold mb-6 text-primary-500 dark:text-white">Get in Touch</h3> */}
    
    <p className="mb-8 max-w-3xl mx-auto">
      I'm currently open to internship opportunities, collaboration on projects, 
      or just connecting with fellow developers and data scientists. Feel free to reach out!
    </p>
    
    <div className="space-y-6 w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-4 justify-center">
        <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-primary-500 rounded-full shadow-md flex items-center justify-center text-primary-500 dark:text-secondary-500">
          <Mail size={24} />
        </div>
        <div>
          <h4 className="font-medium text-primary-500 dark:text-white">Email</h4>
          <a 
            href="mailto:shriyacheruvu@gmail.com" 
            className="text-neutral-600 dark:text-neutral-300 hover:text-secondary-500 dark:hover:text-secondary-500 transition-colors"
          >
            shriyacheruvu@gmail.com
          </a>
        </div>
      </div>
      
      <div className="flex items-center gap-4 justify-center">
        <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-primary-500 rounded-full shadow-md flex items-center justify-center text-primary-500 dark:text-secondary-500">
          <Github size={24} />
        </div>
        <div>
          <h4 className="font-medium text-primary-500 dark:text-white">GitHub</h4>
          <a 
            href="https://github.com/shriyacheruvu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-300 hover:text-secondary-500 dark:hover:text-secondary-500 transition-colors"
          >
            github.com/shriyacheruvu
          </a>
        </div>
      </div>
      
      <div className="flex items-center gap-4 justify-center">
        <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-primary-500 rounded-full shadow-md flex items-center justify-center text-primary-500 dark:text-secondary-500">
          <Linkedin size={24} />
        </div>
        <div>
          <h4 className="font-medium text-primary-500 dark:text-white">LinkedIn</h4>
          <a 
            href="https://linkedin.com/in/shriyacheruvu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-300 hover:text-secondary-500 dark:hover:text-secondary-500 transition-colors"
          >
            linkedin.com/in/shriyacheruvu
          </a>
        </div>
      </div>
    </div>
     <p className="mb-8 max-w-3xl mx-auto">
                I'll get back to you as soon as possible!
              </p>
  </motion.div>

  
        </div>
      </div>
    </section>
  );
};

export default Contact;