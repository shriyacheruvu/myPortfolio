import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
  const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  // If you want to submit the form normally after validation:
  form.submit();
};

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-500 dark:text-white">Get in Touch</h3>
            
            <p className="mb-8">
              I'm currently open to internship opportunities, collaboration on projects, 
              or just connecting with fellow developers and data scientists. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
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
              
              <div className="flex items-center gap-4">
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
              
              <div className="flex items-center gap-4">
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-primary-500 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-500 dark:text-white">Send a Message</h3>
            
            <form  name="contact" method="POST" data-netlify="true" action="/thankyou.html" className="space-y-6" onSubmit={handleSubmit}>
               <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-primary-400 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 dark:bg-primary-600 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-primary-400 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 dark:bg-primary-600 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-primary-400 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 dark:bg-primary-600 dark:text-white"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
              
              <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mt-4">
                I'll get back to you as soon as possible!
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;