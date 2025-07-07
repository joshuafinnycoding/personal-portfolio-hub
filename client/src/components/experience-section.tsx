import { Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Product Lead",
      company: "JioTV, Jio Platforms Ltd.",
      period: "Sep 2021 - Present",
      description: "Lead end-to-end product strategy for India's largest live TV streaming platform. Mentor 10-member product team (9 PMs, 1 Designer). Scaled platform to 1,000+ live TV channels, 10,000+ songs, 500+ games serving 50M+ active users. Launched JioTV SVOD aggregator with 10 OTT partners, onboarding 1M+ subscribers.",
      skills: ["Product Strategy", "Agentic AI", "Team Leadership", "OTT Platforms"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Product Manager",
      company: "NMIMS CDOE",
      period: "Sep 2019 - Jul 2021",
      description: "Led modernization of legacy university systems through AI and lean tooling. Streamlined admissions and grading with OCR + NLP tools. Deployed NLP-driven chatbot cutting human-handled queries by 50% and reducing cost-per-conversion from INR 9 to INR 5.",
      skills: ["EdTech", "OCR/NLP", "AI Chatbot", "Process Automation"],
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Product Manager",
      company: "Tata CLiQ",
      period: "May 2017 - Aug 2019",
      description: "Core member of 5-member omnichannel strategy team launching India's first brand-authorized marketplace. Integrated 10,000+ stores across 100+ brands. Launched Location-Based Shopping achieving 50% next-day delivery rate and built geofencing solution for in-store walk-ins.",
      skills: ["Omnichannel Strategy", "Geofencing", "Location-Based Tech", "Retail Innovation"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Lead Vision",
      company: "Fynd",
      period: "Dec 2014 - May 2017",
      description: "Founding team member (1 of 30) at India's first omnichannel tech startup. Led 15-member cross-functional team for cataloging and imaging infrastructure. Reduced cataloging cost per SKU by 60% from ₹40+ to ₹16 via automation. Contributed to systems leading to Fynd's acquisition by Reliance Jio.",
      skills: ["Founding Team", "Cost Optimization", "Process Automation", "Team Building"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Services Associate",
      company: "Amazon India",
      period: "Aug 2013 - Dec 2014",
      description: "Early team member (part of 120-member launch cohort) during Amazon India's pilot phase. Onboarded hundreds of SMBs in Mumbai to e-commerce via catalog and inventory management. Supported regional expansion launching operations in Pune and Ahmedabad.",
      skills: ["Marketplace Launch", "SMB Onboarding", "Catalog Management", "Regional Expansion"],
      color: "bg-cyan-100 text-cyan-600"
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
