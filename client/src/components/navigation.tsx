import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-slate-800">
            JF<span className="text-blue-600">.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col p-6">
            <Button
              variant="ghost"
              size="sm"
              className="self-end mb-8"
              onClick={closeMobileMenu}
            >
              <X size={24} />
            </Button>
            <button 
              onClick={() => scrollToSection('home')}
              className="py-3 text-slate-600 hover:text-blue-600 transition-colors text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="py-3 text-slate-600 hover:text-blue-600 transition-colors text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="py-3 text-slate-600 hover:text-blue-600 transition-colors text-left"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="py-3 text-slate-600 hover:text-blue-600 transition-colors text-left"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="py-3 text-slate-600 hover:text-blue-600 transition-colors text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="py-3 text-slate-600 hover:text-blue-600 transition-colors text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
