import { Award, Medal, Trophy } from "lucide-react";

export default function SkillsSection() {
  const productSkills = [
    { name: "Product Strategy", level: 95 },
    { name: "Product Lifecycle Management", level: 92 },
    { name: "Data-driven Decision Making", level: 90 },
    { name: "Feature Prioritization", level: 88 },
    { name: "Roadmap Development", level: 85 }
  ];

  const leadershipSkills = [
    { name: "Cross-functional Leadership", level: 95 },
    { name: "Team Building", level: 92 },
    { name: "Sprint Planning", level: 90 },
    { name: "User Research", level: 88 },
    { name: "Growth Hacking", level: 85 }
  ];

  const certifications = [
    {
      icon: Award,
      title: "Emerging Leader Award",
      provider: "Jio Media Family (2023-24)",
      color: "text-blue-600"
    },
    {
      icon: Medal,
      title: "PG Certificate - IT Management",
      provider: "IIM Kozhikode (2022)",
      color: "text-emerald-600"
    },
    {
      icon: Trophy,
      title: "3× Achiever Awards",
      provider: "Tata CLiQ (2018-19)",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for product leadership and digital transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Product Management</h3>
            
            <div className="space-y-6">
              {productSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600 font-medium">{skill.name}</span>
                    <span className="text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full skill-bar rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Leadership Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Leadership & Strategy</h3>
            
            <div className="space-y-6">
              {leadershipSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600 font-medium">{skill.name}</span>
                    <span className="text-emerald-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Certifications & Awards</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <cert.icon className={`${cert.color} text-3xl mb-4 mx-auto`} size={48} />
                <h4 className="font-bold text-slate-800 mb-2">{cert.title}</h4>
                <p className="text-slate-600 text-sm">{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
