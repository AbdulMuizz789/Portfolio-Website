import React, { useState, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Twitter, Linkedin, Github, Loader2, Shield } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { 
  sanitizeInput, 
  validateEmail, 
  validateContent, 
  formRateLimiter, 
  getEmailConfig, 
  getSecureErrorMessage 
} from '@/lib/security';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Basic input length limits for security
    const maxLengths = {
      name: 100,
      email: 254,
      message: 2000
    };
    
    const maxLength = maxLengths[name as keyof typeof maxLengths] || 100;
    const truncatedValue = value.slice(0, maxLength);
    
    setFormData(prev => ({
      ...prev,
      [name]: truncatedValue
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check
    const clientId = 'contact_form'; // In a real app, use IP or user ID
    if (!formRateLimiter.isAllowed(clientId)) {
      const remainingTime = formRateLimiter.getRemainingTime(clientId);
      toast({
        title: "Too many attempts",
        description: `Please wait ${remainingTime} seconds before trying again.`,
        variant: "destructive"
      });
      return;
    }

    // Sanitize and validate inputs
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedMessage = sanitizeInput(formData.message);

    // Validate sanitized inputs
    if (!sanitizedName.trim() || sanitizedName.length < 2) {
      toast({
        title: "Invalid name",
        description: "Please enter a valid name (minimum 2 characters)",
        variant: "destructive"
      });
      return;
    }

    if (!sanitizedEmail.trim() || !validateEmail(sanitizedEmail)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    const messageValidation = validateContent(sanitizedMessage);
    if (!messageValidation.isValid) {
      toast({
        title: "Invalid message",
        description: messageValidation.message || "Please enter a valid message",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const emailConfig = getEmailConfig();
      
      // Create a sanitized form data object
      const sanitizedFormData = {
        name: sanitizedName,
        email: sanitizedEmail,
        message: sanitizedMessage
      };

      // Create a temporary form with sanitized data
      const tempForm = document.createElement('form');
      Object.entries(sanitizedFormData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.name = key;
        input.value = value;
        tempForm.appendChild(input);
      });

      const result = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        tempForm,
        emailConfig.publicKey
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form with sanitized empty values
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      const secureMessage = getSecureErrorMessage(error);
      toast({
        title: "Failed to send message",
        description: secureMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <Card className="h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="text-xl font-bold">Get in Touch</h3>
                  <Shield size={20} className="text-green" />
                </div>
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
                      <p className="text-gray-600 dark:text-gray-300">muizzabdul789@gmail.com</p>
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
                  {/* TODO: Add social profile links */}
                  <div className="flex space-x-4">
                    <a href="https://github.com/AbdulMuizz789" className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white hover:bg-orange-dark transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/abdulmuizz789" className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white hover:bg-orange-dark transition-colors">
                      <Linkedin size={20} />
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
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium">Name</label>
                      <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">Email</label>
                      <Input id="email" name="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <label htmlFor="message" className="block font-medium">Message</label>
                    <Textarea id="message" name="message" placeholder="Write your message here..." rows={6} value={formData.message} onChange={handleChange} required />
                  </div>
                  
                  <Button type="submit" className="bg-orange hover:bg-orange-dark w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </> : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
