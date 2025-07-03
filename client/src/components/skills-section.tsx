import { Award, Medal, Trophy } from "lucide-react";

export default function SkillsSection() {
  const technicalSkills = [
    { name: "JavaScript / TypeScript", level: 95 },
    { name: "React / Next.js", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "Python / Django", level: 80 },
    { name: "AWS / Docker", level: 75 }
  ];

  const designSkills = [
    { name: "UI/UX Design", level: 92 },
    { name: "Figma / Adobe XD", level: 90 },
    { name: "Prototyping", level: 88 },
    { name: "User Research", level: 85 },
    { name: "Branding", level: 80 }
  ];

  const certifications = [
    {
      icon: Award,
      title: "AWS Solutions Architect",
      provider: "Amazon Web Services",
      color: "text-blue-600"
    },
    {
      icon: Medal,
      title: "Google UX Design Certificate",
      provider: "Google Career Certificates",
      color: "text-emerald-600"
    },
    {
      icon: Trophy,
      title: "Best Mobile App Design",
      provider: "Design Awards 2023",
      color: "text-blue-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern digital experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
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
          
          {/* Design Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Design Skills</h3>
            
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
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
