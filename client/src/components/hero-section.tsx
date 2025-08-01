import { Button } from "@/components/ui/button";
import { Code, Linkedin, Twitter } from "lucide-react";
import profileImage from "@assets/IMG_8625_1752752088245.jpg";

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
              Hi, I'm <span className="gradient-text">Joshua Finny</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 mb-8">
              Product & Platform Leader | Agentic AI | Omnichannel Strategy
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Product leader with 11+ years of founder-like ownership across AI, EdTech, RetailTech, and MediaTech. Proven track record of building 0→1 platforms, scaling cross-functional teams, and driving large-scale digital transformation.
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
            
            <div className="flex gap-4 justify-center md:justify-start mt-6">
              <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                <a href="https://in.linkedin.com/in/joshua-finny" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                <a href="https://twitter.com/joshuafinny" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                  Twitter
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-slide-up">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Joshua Finny - Professional headshot" 
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
