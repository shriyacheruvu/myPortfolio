import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { Project } from '../../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: "Career Catalyst",
    description: "A full-stack AI-powered platform for resume analysis and personalized job matching using React, Node.js, Flask, and various APIs.",
    technologies: ["React", "Node.js", "Flask", "MongoDB", "Vercel"],
    link: "https://github.com/sriraghavi22/careerCatalyst"
  },
  {
    id: 2,
    title: "Service Management System",
    description: "A role-based web application built with Flask for managing service requests and user access across Admins, Service Professionals, and Customers.",
    technologies: ["Flask", "SQLAlchemy", "HTML", "Bootstrap", "Jinja2"],
    link: "https://github.com/shriyacheruvu/HomeEase"
  },
  {
    id: 3,
    title: "Currency Converter",
    description: "A Java Swing desktop application that fetches real-time exchange rates via REST API for multi-currency conversion.",
    technologies: ["Java", "Swing", "API Integration", "JSON"],
    link: "https://github.com/shriyacheruvu/CurrencyConverter"
  },
  {
    id: 4,
    title: "Rock Paper Scissors Game",
    description: "An interactive web game using JavaScript and DOM manipulation with real-time feedback and score tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/shriyacheruvu/RockPaperScissors"
  },
  {
    id: 5,
    title: "Hangman Game",
    description: "A console-based Python Hangman game featuring random word selection, turn-based gameplay, and real-time user input handling.",
    technologies: ["Python", "Random module", "Console UI"],
    link: "https://github.com/shriyacheruvu/HangmanGame"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-primary-600">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <p className="max-w-full mb-12">
          Here are some of my projects showcasing skills in full-stack development, AI integration, and problem-solving through practical web and desktop applications.


        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;