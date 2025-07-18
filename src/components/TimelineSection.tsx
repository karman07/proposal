import { Calendar, CheckCircle, Rocket } from 'lucide-react';

export const TimelineSection = () => {
  const timelineItems = [
    {
      week: "Week 1",
      title: "Kickoff & Scheduling",
      description: "Project initiation, team introductions, and scheduling photoshoot sessions",
      icon: "🚀",
      color: "bg-blue-500"
    },
    {
      week: "Week 2–3",
      title: "Photoshoot & 3D modeling",
      description: "Professional food photography and 3D model creation of all menu items",
      icon: "📸",
      color: "bg-purple-500"
    },
    {
      week: "Week 4",
      title: "Testing & Team Training",
      description: "Quality assurance testing and comprehensive staff training sessions",
      icon: "🎓",
      color: "bg-green-500"
    },
    {
      week: "Week 5",
      title: "Live Launch",
      description: "Official deployment and go-live with full support",
      icon: "🚀",
      color: "golden-gradient"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Calendar className="w-12 h-12 golden-text" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 golden-gradient-text">
            🗓️ Timeline Overview (5 Weeks)
          </h2>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full golden-gradient rounded-full"></div>
          
          {timelineItems.map((item, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:golden-border transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold golden-text">{item.week}</h3>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 golden-gradient rounded-full flex items-center justify-center border-4 border-black">
                <span className="text-black font-bold text-lg">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
