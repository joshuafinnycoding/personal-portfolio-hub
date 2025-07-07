import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { FaDribbble } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/joshua-finny", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: Github, href: "#", color: "bg-gray-800 hover:bg-gray-700" },
    { icon: FaDribbble, href: "#", color: "bg-pink-500 hover:bg-pink-600" },
    { icon: Twitter, href: "#", color: "bg-blue-500 hover:bg-blue-600" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to discuss your next project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-600 font-medium mb-2">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-600 font-medium mb-2">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="project-type" className="text-slate-600 font-medium mb-2">Project Type</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-strategy">Product Strategy</SelectItem>
                      <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                      <SelectItem value="team-leadership">Team Leadership</SelectItem>
                      <SelectItem value="platform-development">Platform Development</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-slate-600 font-medium mb-2">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in touch</h3>
              <p className="text-slate-600 mb-8">
                I'm always open to discussing new opportunities, product strategy, or potential collaborations. 
                Whether you have a platform to build, team to scale, or transformation challenge to solve, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-slate-600">Email</p>
                  <p className="text-slate-800 font-medium">joshuafinny@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-slate-600">Phone</p>
                  <p className="text-slate-800 font-medium">+91 9773474983</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-slate-600">Location</p>
                  <p className="text-slate-800 font-medium">Mumbai, India</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8 border-t border-slate-200">
              <h4 className="text-lg font-bold text-slate-800 mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 ${social.color} text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
