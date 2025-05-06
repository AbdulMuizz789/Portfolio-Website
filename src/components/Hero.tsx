import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  return <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div ref={heroRef} className="md:w-1/2 mb-10 md:mb-0 opacity-0 transition-opacity duration-1000">
            <p className="text-green font-medium mb-3 animate-slide-in-left opacity-0" style={{
            animationDelay: '0.3s'
          }}>Hello, my name is</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-in-left opacity-0" style={{
            animationDelay: '0.5s'
          }}>
              <span className="block">Abdul Muizz</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 animate-slide-in-left opacity-0" style={{
            animationDelay: '0.7s'
          }}>
              Aspiring Software Developer | Problem Solver | Tech Enthusiast
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8 animate-slide-in-left opacity-0" style={{
            animationDelay: '0.9s'
          }}>
              I am a persistent learner, a computer science enthusiast, and a voracious reader of books. My professional aim is to help the world be a better place by contributing to valuable software products.
            </p>
            <div className="flex space-x-4 animate-slide-in-left opacity-0" style={{
            animationDelay: '1.1s'
          }}>
              <Button className="bg-orange hover:bg-orange-dark flex items-center">
                View Projects <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-green text-green hover:bg-green-light">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-slide-in-right opacity-0" style={{
          animationDelay: '0.5s'
        }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-orange/20 rounded-full -z-10 translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-green/20 rounded-full -z-10 -translate-x-4 -translate-y-4"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                {/* TODO:Add Profile photo */}
                <img alt="Profile" className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;