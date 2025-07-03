import { Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Product Lead",
      company: "JioTV, Jio Platforms Ltd.",
      period: "Sep 2021 - Present",
      description: "Scaled product team from 2 to 10 members; built JioTV's product org ground-up. Built and launched Jio's Agentic AI Platform to orchestrate cross-app synergy using LLMs and autonomous agents. Led product roadmap for 50M+ MAUs; sustained NPS >30 and app rating >4.0.",
      skills: ["Agentic AI", "LLMs", "Product Strategy", "5G Technology"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Product Manager",
      company: "NMIMS Global Access",
      period: "Sep 2019 - Jul 2021",
      description: "Core member of a 3-person product team that modernized a legacy academic system into a digital-first EdTech institution. Launched in-house LMS for 10K+ students annually; automated grading/admissions with OCR/NLP. Built AI chatbot to reduce query volume by 50%.",
      skills: ["EdTech", "LMS", "OCR/NLP", "AI Chatbot"],
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Product Manager",
      company: "Tata CLiQ",
      period: "May 2017 - Aug 2019",
      description: "Part of the 5-member core team that architected India's first brand-authorized omnichannel marketplace. Led integration of 10K+ stores across 100+ brands; enabled 92% store fulfillment and 50% local deliveries. Built inventory sync and phygital APIs in partnership with Unicommerce.",
      skills: ["Omnichannel", "Marketplace", "API Integration", "Retail Tech"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Lead - Vision & Catalog Ops",
      company: "Fynd",
      period: "Dec 2014 - May 2017",
      description: "Founding team member (1 of 30); led catalog and imaging infrastructure for India's earliest omnichannel tech stack. Developed product onboarding frameworks for unstructured retailers; automated workflows with RPA + ImageMagick. Mentored a 15-member cross-skilled team.",
      skills: ["RPA", "ImageMagick", "Catalog Management", "Team Leadership"],
      color: "bg-orange-100 text-orange-600"
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
