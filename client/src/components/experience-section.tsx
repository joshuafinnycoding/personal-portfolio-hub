import { Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading development of enterprise-scale applications using React, Node.js, and AWS. Architected microservices that handle 1M+ daily transactions and reduced system latency by 40%.",
      skills: ["React", "Node.js", "AWS", "Docker"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Lead UI/UX Designer",
      company: "DesignStudio Inc.",
      period: "2020 - 2022",
      description: "Spearheaded design systems and user experience strategy for B2B SaaS products. Led a team of 5 designers and increased user engagement by 60% through data-driven design decisions.",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Frontend Developer",
      company: "StartupLab",
      period: "2018 - 2020",
      description: "Developed responsive web applications and mobile-first interfaces for early-stage startups. Collaborated with product managers and designers to deliver pixel-perfect implementations.",
      skills: ["Vue.js", "JavaScript", "SCSS", "Git"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey through leading tech companies and innovative startups
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8 timeline-item">
                <div className="flex-shrink-0 w-12"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-slate-600 mt-2 md:mt-0 flex items-center">
                      <Calendar className="mr-2" size={16} />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`${exp.color} px-3 py-1 rounded-full text-sm`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
