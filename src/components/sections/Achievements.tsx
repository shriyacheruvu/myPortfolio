import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Trophy } from 'lucide-react';
import { Achievement } from '../../types';

const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "JEE Mains",
    description: "90.33 percentile (2022)"
  },
  {
    id: 2,
    title: "Intermediate",
    description: "93.8% marks"
  },
  {
    id: 3,
    title: "10th Grade",
    description: "GPA 10.0/10"
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-primary-500">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>
        
        <p className="max-w-full  mb-12">
          A showcase of my academic accomplishments and recognition throughout my educational journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-700 rounded-full flex items-center justify-center text-primary-500 dark:text-secondary-500 mx-auto mb-6">
                {index === 0 ? <TrendingUp size={28} /> : index === 1 ? <Award size={28} /> : <Trophy size={28} />}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-primary-500 dark:text-white">
                {achievement.title}
              </h3>
              
              <p className="text-neutral-600 dark:text-neutral-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;