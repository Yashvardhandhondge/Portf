import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCloudArrowUp } from "react-icons/fa6";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, 
  SiTypescript, SiReact, SiNodedotjs, SiExpress,
  SiDocker, SiNextdotjs, SiMongodb, SiGit,
  SiFirebase, SiVercel, SiPostgresql
} from "react-icons/si";

const Skills = () => {
  const [skills] = useState([
    { name: "HTML", icon: SiHtml5, color: "text-orange-700" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-orange-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-yellow-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
    { name: "Deployment", icon: FaCloudArrowUp, color: "text-white" },
  ]);

  return (
    <section id="skills" className="relative py-20 xl:px-60 text-white overflow-hidden w-full">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl lg:text-7xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Tech Stack
        </motion.h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Skill Card Component with whileInView
const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center p-6 rounded-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10">
        <skill.icon className={`text-6xl ${skill.color} mb-4`} />
        <h3 className="text-sm md:text-lg font-semibold text-center">{skill.name}</h3>
      </div>

    </motion.div>
  );
};

export default Skills;
