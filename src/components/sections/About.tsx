import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-primary-500">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="mb-6">
              I'm a <span className="highlight">Computer Science and Engineering (Data Science)</span> student 
              at BV Raju Institute of Technology, passionate about creating technology that makes 
              a positive impact on people's lives.
            </p>
            <p className="mb-6">
              With a current CGPA of <span className="highlight">8.3/10</span>, I've focused my studies on 
              developing a strong foundation in both theoretical concepts and practical applications 
              of computer science and data science.
            </p>
            <p className="mb-6">
              My journey in technology is driven by curiosity and a desire to solve real-world problems 
              through innovative solutions. I'm particularly interested in the intersection of 
              <span className="highlight"> web development, artificial intelligence, and data science</span>.
            </p>
            <p>
             Beyond my technical work, I enjoy playing the piano and dancing, which bring a creative balance to my routine.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-neutral-50 dark:bg-primary-600 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Education & Interests</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-700 rounded-full flex items-center justify-center text-primary-500 dark:text-secondary-500">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">B.Tech in CSE (Data Science)</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">BV Raju Institute of Technology (2022-2026)</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-700 rounded-full flex items-center justify-center text-primary-500 dark:text-secondary-500">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Current CGPA</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">8.3/10</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-700 rounded-full flex items-center justify-center text-primary-500 dark:text-secondary-500">
                    <Code size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Web Development</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Building interactive and responsive web applications</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-700 rounded-full flex items-center justify-center text-primary-500 dark:text-secondary-500">
                    <Database size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Data Science & AI</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Exploring data-driven solutions and AI applications</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;