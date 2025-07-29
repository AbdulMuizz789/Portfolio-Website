
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-orange">Portfolio</a>
            <p className="mt-2 text-gray-400 max-w-md">
              Aspiring software developer with a passion for learning and creating valuable software solutions.
            </p>
          </div>
          
          <div className="flex flex-col mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              <a href="#home" className="text-gray-400 hover:text-orange transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-orange transition-colors">About</a>
              <a href="#skills" className="text-gray-400 hover:text-orange transition-colors">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-orange transition-colors">Projects</a>
              <a href="#services" className="text-gray-400 hover:text-orange transition-colors">Services</a>
              <a href="#contact" className="text-gray-400 hover:text-orange transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/AbdulMuizz789" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/abdulmuizz789" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Abdul Muizz. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange transition-colors mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
