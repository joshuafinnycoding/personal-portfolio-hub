import { Linkedin, Github, Twitter } from "lucide-react";
import { FaDribbble } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://in.linkedin.com/in/joshua-finny" },
    { icon: Github, href: "#" },
    { icon: FaDribbble, href: "#" },
    { icon: Twitter, href: "https://twitter.com/joshuafinny" }
  ];

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              JF<span className="text-blue-600">.</span>
            </div>
            <p className="text-slate-300 mb-4">
              Product & Platform Leader driving digital transformation across AI, EdTech, and RetailTech.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Expertise</h4>
            <ul className="space-y-2">
              <li className="text-slate-300">Product Strategy</li>
              <li className="text-slate-300">Digital Transformation</li>
              <li className="text-slate-300">Team Leadership</li>
              <li className="text-slate-300">Platform Development</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">
            © 2024 Joshua Finny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
