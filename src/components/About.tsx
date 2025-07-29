import React from 'react';
import { Button } from '@/components/ui/button';
const About = () => {
  return <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <p className="mb-6 text-lg">
              I am a persistent learner, a computer science enthusiast, and a voracious reader of books. I like playing games like team-sports (mostly football) and puzzle games. My professional aim is to help the world be a better place by contributing to valuable software products.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-orange">Education</h3>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="font-bold">Bachelor of Engineering in Computer Science and Engineering</h4>
                <p className="text-gray-600 dark:text-gray-300">MVSR Engineering College, Nadergul, graduating in 2026</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-orange">Interests</h3>
              <div className="flex flex-wrap gap-3">
                <span className="tech-pill">Reading Books</span>
                <span className="tech-pill">Football</span>
                <span className="tech-pill">Puzzle Games</span>
                <span className="tech-pill">Problem Solving</span>
                <span className="tech-pill">Technology</span>
              </div>
            </div>
            
            <Button className="bg-green hover:bg-green-dark">
              Download Resume
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-2xl text-orange mb-2">2</h4>
                <p>Year of Experience</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-2xl text-green mb-2">02</h4>
                <p>Projects Completed</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-2xl text-orange mb-2">10+</h4>
                <p>Technologies</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-2xl text-green mb-2">∞</h4>
                <p>Learning Capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;