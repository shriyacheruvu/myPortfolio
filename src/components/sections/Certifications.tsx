import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Certification } from '../../types';

const certificationsData: Certification[] = [
  {
    id: 1,
    title: "Programming & Data Science",
    issuer: "IITM",
    link: "https://drive.google.com/file/d/1uSk23DKr2JA8tAMGeBG0V9xcTv6TgDIa/view"
  },
  {
    id: 2,
    title: "Joy of Computing",
    issuer: "NPTEL",
    
    link: "https://drive.google.com/file/d/1jInhLxgdcH-mVT988oKc39SuWehMxHj8/view"
  },
  {
    id: 3,
    title: "Soft Skills",
    issuer: "NPTEL",
    
    link: "https://drive.google.com/file/d/1lBn6_AXhqbBz4WmA-AB9yIW375FDH0Qb/view"
  },
  {
    id: 4,
    title: "Business Ethics",
    issuer: "NPTEL",
    achievement: "Top 2%",
    link: "https://drive.google.com/file/d/1tZ75fOugGfJ0mJ6iS5jddymTudZTN7ju/view"
  },
  {
    id: 5,
    title: "SQL for Data Science",
    issuer: "Coursera",
    link: "https://drive.google.com/file/d/1L09F7ipRru1jiI-eaDHN8jrSor8XNCb2/view"
  },
  {
    id: 6,
    title: "Python (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/df0b565a6f47"
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-neutral-50 dark:bg-primary-600">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
        
        <p className="max-w-full  mb-12">
          I'm committed to continuous learning and have completed various certifications
          to enhance my knowledge and skills in different domains.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-primary-500 rounded-xl shadow-md overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center text-secondary-500">
                    <Award size={20} />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-primary-500 dark:text-white mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-300 mb-3">
                  {cert.issuer}
                </p>
                
                {cert.achievement && (
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 text-xs font-medium">
                    {cert.achievement}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;