import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-primary-500 dark:text-white flex items-center gap-2">
          {project.title}
          <ExternalLink size={16} className="text-secondary-500" />
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="text-xs px-2 py-1 bg-neutral-100 dark:bg-primary-700 text-neutral-700 dark:text-neutral-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;