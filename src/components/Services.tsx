
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Smartphone, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive, user-friendly websites and web applications using modern technologies and frameworks.',
      icon: <Code size={36} className="text-orange" />
    },
    {
      title: 'Mobile App Development',
      description: 'Designing and building native Android applications with focus on performance, usability, and seamless user experience.',
      icon: <Smartphone size={36} className="text-orange" />
    },
    {
      title: 'Software Design & Development',
      description: 'Crafting efficient, scalable software solutions tailored to specific needs with clean architecture and best practices.',
      icon: <Laptop size={36} className="text-orange" />
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover border-none bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-md"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-light flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
