
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Infarmaland',
      description: 'A mobile app to fetch agricultural and real estate land details using ULPIN. Developed using Android Studio (XML front-end) and Firebase (JSON back-end).',
      image: '/placeholder.svg',
      tags: ['Android', 'Firebase', 'XML', 'JSON'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Tailwind CSS featuring modern design principles and responsive layout.',
      image: '/placeholder.svg',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Task Manager',
      description: 'A web application for managing daily tasks with features like authentication, task categorization, and reminders.',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-title">Projects</h2>
          <Button variant="ghost" className="text-orange hover:text-orange-dark flex items-center">
            View All <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tech-pill">{tag}</span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink} 
                    className="flex items-center text-gray-800 dark:text-gray-200 hover:text-orange transition-colors"
                  >
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    className="flex items-center text-gray-800 dark:text-gray-200 hover:text-green transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" /> Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
