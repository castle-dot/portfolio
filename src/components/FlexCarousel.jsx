import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Kiray (ኪራይ)",
    role: "Full-Stack Web Platform",
    description: "Verified property rental platform localized in Amharic, Afaan Oromoo, and Tigrigna. Built with Django REST Framework and React.",
    image: "/images/kiray-bg.jpg", // Replace with your actual image path
    accent: "var(--color-cyan)"
  },
  {
    id: 2,
    title: "Streaming Architecture",
    role: "Backend Design",
    description: "System architecture, clean schema design, and caching specifications for a movie and TV streaming platform using PostgreSQL and Redis.",
    image: "/images/streaming-bg.jpg",
    accent: "var(--color-orange)"
  },
  {
    id: 3,
    title: "Crane Jib Analysis",
    role: "Mechanical Engineering & Electronics",
    description: "Design and stress analysis utilizing strain gauges, an operational amplifier Wheatstone bridge circuit, and an Arduino interface.",
    image: "/images/crane-bg.jpg",
    accent: "var(--color-cyan)"
  },
  {
    id: 4,
    title: "The Study Nook",
    role: "Educational Hub",
    description: "Telegram-based academic resources channel featuring branded promotional materials and standardized test preparation content.",
    image: "/images/studynook-bg.jpg",
    accent: "var(--color-orange)"
  }
];

export default function FlexCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full h-[600px] gap-3 p-4 max-w-7xl mx-auto">
      {projects.map((project, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={project.id}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer glass-card ${
              isActive ? 'flex-[5_5_0%]' : 'flex-[1_1_0%]'
            }`}
          >
            {/* Background Image & Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
              style={{ 
                backgroundImage: `url(${project.image})`,
                backgroundColor: 'var(--color-surface-elevated)', // Fallback if no image
                transform: isActive ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {/* Dark gradient overlay to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)] via-[var(--color-base)]/60 to-transparent opacity-90"></div>
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
              
              {/* Active State Details */}
              <div className={`transition-all duration-500 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute bottom-8 pointer-events-none'}`}>
                <span className="font-mono text-sm tracking-wider uppercase mb-3 block" style={{ color: project.accent }}>
                  {project.role}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 whitespace-nowrap">
                  {project.title}
                </h3>
                <p className="font-body text-[var(--color-text-muted)] text-base md:text-lg line-clamp-3 max-w-xl">
                  {project.description}
                </p>
              </div>
              
              {/* Inactive State Vertical Text (Desktop only) */}
              <div className={`hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 whitespace-nowrap ${isActive ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} -rotate-90 origin-bottom-left`}>
                 <h3 className="font-display text-xl font-bold text-white/50 group-hover:text-white/80 transition-colors">
                   {project.title}
                 </h3>
              </div>

              {/* Inactive State Horizontal Text (Mobile only) */}
              <div className={`md:hidden absolute bottom-6 left-6 transition-all duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                 <h3 className="font-display text-lg font-bold text-white/70">
                   {project.title}
                 </h3>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}