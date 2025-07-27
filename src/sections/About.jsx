const About = () => {
  return (
    <section id="about" className="min-h-screen about m-10">
        <div className="font-EB-Garamond mb-6">
            <p className="text-6xl">About Me</p>
            <p className="text-2xl">Who I am & What I do </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mx-auto">
            <div className="bg-beige h-[500px]"></div>
            
            <div className="flex flex-col gap-4">
                <div className="bg-beige h-[240px]"></div>
                <div className="bg-beige h-[245px]"></div>
            </div>
        </div>
    </section>
  );
} 

export default About;