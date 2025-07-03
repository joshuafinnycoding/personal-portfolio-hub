import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "JioTV Agentic AI Platform",
      description: "Built and launched Jio's Agentic AI Platform to orchestrate cross-app synergy using LLMs and autonomous agents, serving 50M+ monthly active users.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Agentic AI", "LLMs", "5G Technology", "Product Strategy"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Omnichannel Marketplace",
      description: "Architected India's first brand-authorized omnichannel marketplace at Tata CLiQ, integrating 10K+ stores across 100+ brands with 92% store fulfillment.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Omnichannel", "API Integration", "Retail Tech", "Marketplace"],
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "EdTech LMS Platform",
      description: "Modernized legacy academic system into digital-first EdTech institution at NMIMS, launched LMS for 10K+ students with automated grading using OCR/NLP.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["EdTech", "LMS", "OCR/NLP", "AI Chatbot"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work spanning web applications, mobile apps, and design systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
