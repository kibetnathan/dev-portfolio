import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Terminal, BookOpen } from 'lucide-react';

const milestones = [
  {
    title: "Zindua School",
    subtitle: "Software Engineering / Web Development",
    date: "Aug 2025 — March 2026",
    description: "Intensive immersive program focused on full-stack development. Developed 'Open Church Management' as a capstone project.",
    icon: <Terminal className="w-5 h-5" />,
    color: "var(--color-primary)",
    details: ["Full Stack", "Database", "API", "Agile"]
  },
  {
    title: "Goethe-Institut",
    subtitle: "Studienbrücke Program",
    date: "Feb 2025 — Nov 2025",
    description: "Successfully reached B2/C1 levels through the Studienbrücke program.",
    icon: <Languages className="w-5 h-5" />,
    color: "var(--color-secondary)",
    details: ["B2/C1 German", "Intercultural", "Academic Prep"]
  },
  {
    title: "Udemy & Self-Study",
    subtitle: "Continuous Learning",
    date: "2024 — Ongoing",
    description: "Extending my reach into low-level systems, modern frontend patterns, and state management.",
    icon: <BookOpen className="w-5 h-5" />,
    color: "#ffffff30",
    details: ["C", "React Patterns", "Zustand", "Cloud"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function EducationRoadmap() {
  return (
    <div className="relative py-6 px-2 max-w-lg mx-auto lg:mx-0">
      {/* Central Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent opacity-20" />

      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-8"
            variants={cardVariants}
          >
            {/* Timeline Dot/Icon */}
            <div 
              className="absolute left-[-16px] top-1 w-8 h-8 rounded-lg flex items-center justify-center border border-light/10 shadow-xl backdrop-blur-md z-10"
              style={{ backgroundColor: 'var(--color-dark)', color: item.color }}
            >
              {item.icon}
            </div>

            {/* Content Card */}
            <div className="group relative bg-light/[0.03] border border-light/5 rounded-2xl p-4 hover:bg-light/[0.05] hover:border-light/10 transition-all duration-300">
              <div 
                className="absolute top-0 left-0 w-full h-1 rounded-t-full"
                style={{ backgroundColor: item.color, opacity: 0.3 }}
              />
              
              <div className="flex flex-col gap-1 mb-3">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-display text-lg text-light uppercase tracking-tight">{item.title}</h4>
                  <span className="text-light/30 text-[0.6rem] font-mono font-bold uppercase tracking-widest bg-light/5 px-2 py-0.5 rounded">
                    {item.date}
                  </span>
                </div>
                <p className="text-primary text-[0.6rem] font-bold uppercase tracking-widest">{item.subtitle}</p>
              </div>

              <p className="text-light/50 text-[0.75rem] leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Tag Details */}
              <div className="flex flex-wrap gap-1.5">
                {item.details.map((detail, dIdx) => (
                  <span key={dIdx} className="text-[0.55rem] font-bold uppercase tracking-widest text-light/20 bg-light/5 border border-light/5 px-2 py-1 rounded-lg">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
