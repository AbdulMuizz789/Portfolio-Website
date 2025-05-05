
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Twitter, Linkedin, Github } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Form submission:', formData);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <Card className="h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Feel free to reach out if you have a project idea, job opportunity, or just want to say hello!
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-light flex items-center justify-center mr-4 shrink-0">
                      <Mail size={20} className="text-green" />
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">[Email Placeholder]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-light flex items-center justify-center mr-4 shrink-0">
                      <Phone size={20} className="text-green" />
                    </div>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">Available upon request</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-bold mb-4">Find me on</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white hover:bg-orange-dark transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white hover:bg-orange-dark transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white hover:bg-orange-dark transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-2/3">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <label htmlFor="message" className="block font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="bg-orange hover:bg-orange-dark w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
