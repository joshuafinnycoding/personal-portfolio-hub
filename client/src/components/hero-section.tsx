import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Hi, I'm <span className="gradient-text">John Anderson</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 mb-8">
              Full-Stack Developer & UI/UX Designer
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Passionate about creating exceptional digital experiences through clean code and intuitive design. 
              8+ years transforming ideas into scalable, user-centered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-base font-medium transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                alt="John Anderson - Professional headshot" 
                className="w-80 h-80 rounded-2xl shadow-2xl object-cover border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-full flex items-center justify-center animate-bounce-gentle">
                <Code className="text-white text-2xl" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
