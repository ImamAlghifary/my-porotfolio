import React from 'react';

const About = () => {
  return (
    <section id="about" className="about w-full ">
      <div className="font-EB-Garamond mb-6">
        <p className="text-6xl">About Me</p>
        <p className="text-2xl">Who I am & What I do </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        <div className="h-[400px] sm:h-[500px] relative overflow-hidden">
          <img
            src="about_section1.jpg"
            alt="Main about me photo"
            className="w-full h-[400px] sm:h-full  object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-70"></div>
          <div className="absolute inset-0 flex items-end justify-end p-8 text-right text-beige">
            <div className="max-w-sm">
              <h3 className="text-4xl font-bold mb-4 font-EB-Garamond">Me</h3>
              <p className="sm:text-lg  font-Inter ">
                 I’m a curious thinker, a problem solver, and someone who genuinely enjoys turning ideas into things that work. I find joy in learning, whether it’s a new framework, a hardware module, or just a better way to solve a problem. Outside of the screen, I enjoy observing how technology blends with everyday life. That curiosity drives how I build, design, and grow as a developer.
              </p>
            </div>
          </div>
        </div>

        {/* Stacked Images on the right with gradient */}
        <div className="flex flex-col gap-4">
          <div className="h-[240px] relative overflow-hidden">
            <img
              src="about_section2.jpg"
              alt="About me detail photo 1"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-70"></div>
            <div className="absolute inset-0 flex items-end justify-start p-8 text-left text-beige">
              <div className="max-w-md">
                <h3 className="text-4xl font-bold mb-4 font-EB-Garamond">Education</h3>
                <p className="text-lg  font-EB-Garamond">
                  I'm a third year student at Prsident University
                </p>
              </div>
            </div>
          </div>
          <div className="h-[245px] relative overflow-hidden">
            <img
              src="about_section3.jpg"
              alt="About me detail photo 2"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-70"></div>
            <div className="absolute inset-0 flex items-end justify-start p-8 text-left text-beige">
              <div className="max-w-md">
                <h3 className="text-4xl font-bold mb-4 font-EB-Garamond">Major</h3>
                <p className="text-lg  font-EB-Garamond">
                  I'm majoring in Information Technology, focusing on Internet of Things
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 

export default About;
