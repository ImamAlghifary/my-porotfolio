import React, { useState } from 'react';
import skillsData from '../Data/skillsData';

const Skills = () => {

  const skills = skillsData.map(skill => ({
    ...skill,
    illustration: `https://placehold.co/600x300/2F4156/C8D9E6?text=${encodeURIComponent(skill.name.replace(/\./g, ''))}`
  }));

  const categories = ["ALL", "Web Dev", "IoT", "Database"];

  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedSkill, setSelectedSkill] = useState(null);

  
  const filteredSkillsIcons = activeCategory === "ALL"
  ? skills
  : skills.filter(skill => skill.category === activeCategory);
  
  const mainExplanationContent = {
    icon: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm10.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z", // Placeholder for a general "developer" or "coding" icon
    name: "Welcome to my portfolio.",
    description: "I'm a passionate and detail-oriented developer with a strong interest in IoT, data systems, and digital design. My work focuses on building reliable, scalable, and user-friendly solutions that bridge technology and real-world impact.",
    level: "Overall Advanced Proficiency"
  };
  
  const displayed = selectedSkill || mainExplanationContent;

  return (
    <section id="skills" className="min-h-screen skills p-20 flex flex-col items-center">
      <div className="font-EB-Garamond mb-6 text-center">
        <p className="text-6xl">Skills</p>
        <p className="text-2xl">What I Know & How I Build</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-[1064px] mx-auto">
        <div className="bg-beige p-4 flex flex-col items-center justify-start  h-full"> 
          <div className="font-EB-Garamond text-xl w-full">
            {categories.map(category => (
              <p
                key={category}
                className={`py-2 px-4 cursor-pointer transition-colors duration-300 text-navy-blue ${
                  activeCategory === category
                    ? "text-navy-blue border-b-2 border-navy-blue"
                    : "hover:text-teal border-b-2 border-transparent"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </p>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <div className="bg-beige p-6 flex flex-col items-center text-center h-auto">
            <svg className="text-navy-blue fill-current mb-4" width={64} height={64} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Overall Skills</title>
              <path d={displayed.icon} />
            </svg>
            <p className="text-2xl text-navy-blue font-Inter font-semibold mb-2" >{displayed.name}</p>
            <p className="text-base text-navy-blue font-Inter mb-4" >{displayed.description}</p>
            <p className="text-lg font-medium text-navy-blue font-Inter" >{displayed.level}</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 p-4 bg-beige flex-grow"> 
            {filteredSkillsIcons.length > 0 ? (
              filteredSkillsIcons.map((skill, index) => (
                <div key={index} 
                className="flex flex-col text-navy-blue items-center justify-center text-center"
                onClick={() => setSelectedSkill(skill)}
                >
                  <svg className="text-navy-blue fill-current" width={32} height={32} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>{skill.name}</title>
                    <path d={skill.icon} />
                  </svg>
                  <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-Inter)' }}>{skill.name}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-lg py-10">No skills found for this category.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
