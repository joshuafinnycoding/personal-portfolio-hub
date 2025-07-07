import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "JioTV Platform Transformation",
      description: "Led product strategy for India's largest live TV platform. Scaled to 1,000+ channels, 10,000+ songs, 500+ games serving 50M+ users. Launched SVOD aggregator with 10 OTT partners, onboarding 1M+ subscribers. Pioneered JioTV for JioBharat reaching 10M+ feature phone users.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["OTT Platform", "Product Strategy", "Feature Phones", "SVOD Aggregation"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "India's First Omnichannel Marketplace",
      description: "Core team member launching India's first brand-authorized omnichannel marketplace at Tata CLiQ. Integrated 10,000+ stores across 100+ brands. Built Location-Based Shopping achieving 50% next-day delivery and pioneered geofencing for in-store walk-ins.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Omnichannel", "Location-Based Tech", "Geofencing", "Retail Innovation"],
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "University Digital Transformation",
      description: "Modernized legacy academic systems at NMIMS through AI and automation. Deployed OCR+NLP tools for admissions/grading, built AI chatbot reducing queries by 50% and cost-per-conversion from INR 9 to INR 5. Created zero-cost agile planning tools.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["EdTech Transformation", "OCR/NLP", "AI Chatbot", "Cost Optimization"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Fynd Omnichannel Tech Stack",
      description: "Founding team member (1 of 30) building India's first omnichannel tech startup. Led 15-member team for cataloging infrastructure. Reduced cost per SKU by 60% from ₹40+ to ₹16. Contributed to foundational systems leading to Reliance Jio acquisition.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Founding Team", "Cost Engineering", "Process Automation", "Startup Scale"],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Key platforms and transformations I've led across AI, EdTech, RetailTech, and MediaTech
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`${project.color} px-3 py-1 rounded-full text-sm`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </button>
                  <button className="text-slate-600 hover:text-slate-800 transition-colors flex items-center">
                    <Github className="mr-2" size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium transition-all duration-300 transform hover:scale-105">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
