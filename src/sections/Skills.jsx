import React, { useState } from 'react';
import skillsData from '../data/skillsData';

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
      "name": "Node.js",
      "description": "A JavaScript runtime built on Chrome's V8 JavaScript engine, used for server-side applications and scalable network applications.",
      "icon": "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z",
  };
  
  const displayed = selectedSkill || mainExplanationContent;

  return (
    <section id="skills" className="min-h-[600px] skills p-20 flex flex-col items-center">
      <div className="font-EB-Garamond mb-6 text-center">
        <p className="text-6xl">Skills</p>
        <p className="text-2xl">What I Know & How I Build</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full max-w-[1064px] mx-auto">
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

        <div className="md:col-span-3 flex flex-col gap-2">
          <div className="bg-beige p-6 flex flex-col items-center text-center h-auto">
            <svg className="text-navy-blue fill-current mb-4" width={64} height={64} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Overall Skills</title>
              <path d={displayed.icon} />
            </svg>
            <p className="text-2xl text-navy-blue font-EB-Garamond font-semibold mb-2" >{displayed.name}</p>
            <p className="text-base text-navy-blue font-Inter mb-4" >{displayed.description}</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 p-4 bg-beige flex-grow"> 
            {filteredSkillsIcons.length > 0 ? (
              filteredSkillsIcons.map((skill, index) => (
                <div key={index} 
                className="flex flex-col text-navy-blue  hover:text-teal items-center justify-center text-center cursor-pointer transition-transform duration-300 transform hover:scale-110"
                onClick={() => setSelectedSkill(skill)}
                >
                  <svg className="text-navy-blue fill-current hover:text-teal " width={32} height={32} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>{skill.name}</title>
                    <path d={skill.icon} />
                  </svg>
                  <p className="text-xs mt-1 font-EB-Garamond">{skill.name}</p>
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
