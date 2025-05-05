
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const languages = [
    { name: 'C/C++', progress: 85 },
    { name: 'Java', progress: 80 },
    { name: 'Python', progress: 75 },
    { name: 'JavaScript', progress: 70 },
    { name: 'PHP', progress: 65 }
  ];
  
  const frameworks = [
    { name: 'Node.js', progress: 70 },
    { name: 'React', progress: 65 },
    { name: 'Unity', progress: 60 },
    { name: 'Android Studio', progress: 75 },
    { name: 'Firebase', progress: 80 },
    { name: 'AWS', progress: 55 }
  ];
  
  const technologies = [
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 80 },
    { name: 'Google Firebase', progress: 75 },
    { name: 'C#', progress: 65 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Skills & Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="overflow-hidden border-t-4 border-t-orange">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-orange">Programming Languages</h3>
              <div className="space-y-6">
                {languages.map((language) => (
                  <div key={language.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{language.name}</span>
                      <span>{language.progress}%</span>
                    </div>
                    <Progress 
                      value={language.progress} 
                      className="h-2 bg-gray-200" 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Frameworks/Tools */}
          <Card className="overflow-hidden border-t-4 border-t-green">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-green">Frameworks/Tools</h3>
              <div className="space-y-6">
                {frameworks.map((framework) => (
                  <div key={framework.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{framework.name}</span>
                      <span>{framework.progress}%</span>
                    </div>
                    <Progress 
                      value={framework.progress} 
                      className="h-2 bg-gray-200" 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Technologies */}
          <Card className="overflow-hidden border-t-4 border-t-orange">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-orange">Technologies</h3>
              <div className="space-y-6">
                {technologies.map((tech) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{tech.name}</span>
                      <span>{tech.progress}%</span>
                    </div>
                    <Progress 
                      value={tech.progress} 
                      className="h-2 bg-gray-200"  
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
