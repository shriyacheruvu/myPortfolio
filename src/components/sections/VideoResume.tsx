import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Youtube } from 'lucide-react';

const VideoResume: React.FC = () => {
  return (
    <section id="video-resume" className="py-20 bg-neutral-50 dark:bg-primary-600">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Video Resume & CV
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-video bg-white dark:bg-primary-500 rounded-xl shadow-lg overflow-hidden"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/MSq4FGhSMps"
              title="Video Resume"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-500 dark:text-white">
              Quick Access to My Profile
            </h3>
            
            <p className="mb-8 text-neutral-600 dark:text-neutral-300">
              Get a comprehensive overview of my skills, experience, and personality through my video resume, 
              or download my CV for a detailed look at my professional background.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://youtube.com/watch?v=MSq4FGhSMps"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-primary-500 dark:bg-secondary-500 text-white dark:text-primary-800 hover:bg-primary-600 dark:hover:bg-secondary-400 flex items-center justify-center gap-2"
              >
                <Youtube size={20} />
                <span>Watch on YouTube</span>
              </a>
              
              <a
                href="Shriya_Cheruvu_CV.pdf"
                download="Shriya_Cheruvu_CV.pdf"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <FileDown size={20} />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoResume;