import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';

const skillsData: Skill[] = [
  // Languages
  { name: 'Python', category: 'language' },
  { name: 'C', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Jinja2', category: 'frontend' },
  { name: 'Flask', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'SQLAlchemy', category: 'backend' },
  { name: 'SQLite', category: 'backend' },
  { name: 'DSA', category: 'concept' },
  { name: 'OS', category: 'concept' },
  { name: 'DBMS', category: 'concept' },
  { name: 'CN', category: 'concept' },
  { name: 'Web Development', category: 'concept' },
];

const groupedSkills = skillsData.reduce((groups, skill) => {
  const category = skill.category;
  if (!groups[category]) {
    groups[category] = [];
  }
  groups[category].push(skill);
  return groups;
}, {} as Record<string, Skill[]>);

const categoryNames = {
  language: 'Programming Languages',
  frontend: 'Frontend Development',
  backend: 'Backend & Databases',
  concept: 'CS Fundamentals'
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-primary-500">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        
        <p className="max-w-full mb-12">
          A comprehensive overview of my technical skills and proficiencies across
          various programming languages, technologies, and concepts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, skills], idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 dark:bg-primary-600 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">
                {categoryNames[category as keyof typeof categoryNames]}
              </h3>
              
              <div className="flex flex-wrap">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;