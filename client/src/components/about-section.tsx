export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A seasoned product leader driving digital transformation across AI, EdTech, and RetailTech
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Currently leading end-to-end product strategy for JioTV—India's largest live TV streaming platform. 
              I mentor a 10-member product team and spearhead cross-functional collaboration across engineering, 
              design, content, and ecosystem partners. My work actively contributes to Jio's next-gen agentic AI 
              platform, integrating intelligent experiences across the Jio ecosystem.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              My expertise combines product vision, technical fluency, and execution rigor. I've been part of 
              founding teams at Amazon India (120-member launch cohort) and Fynd (1 of 30 founding members), 
              and was core to Tata CLiQ's omnichannel strategy team. I'm passionate about delivering scalable, 
              user-centric solutions in fast-paced, high-impact environments.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">11+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
                <div className="text-slate-600">Active Users</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-slate-600">TV Channels</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
                <div className="text-slate-600">JioBharat Users</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace with multiple monitors and design tools" 
              className="rounded-2xl shadow-2xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
