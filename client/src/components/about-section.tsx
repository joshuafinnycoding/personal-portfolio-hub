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
              With over 11 years of founder-like ownership, I specialize in building 0→1 platforms and driving 
              org-wide transformation. Currently leading product initiatives at Jio Platforms, where I've scaled 
              teams and built JioTV's product organization from the ground up, serving 50M+ monthly active users.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              My expertise spans Agentic AI, omnichannel strategy, and scalable systems. I've had the privilege 
              of working with industry leaders including Amazon India's founding team, Tata CLiQ's core team, 
              and pioneering India's first brand-authorized omnichannel marketplace. I'm passionate about 
              leveraging emerging technologies to create impactful solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">11+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
                <div className="text-slate-600">Monthly Active Users</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-slate-600">Store Integrations</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-slate-600">Major Awards</div>
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
