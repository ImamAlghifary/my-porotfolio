import React, { useState, useEffect } from 'react'; 

const Hero = () => {
  
  const professions = ["Web Developer", "IoT Engineer", "Data Analyst"];
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProfessionIndex(prevIndex => (prevIndex + 1) % professions.length);
    }, 3000); 
    return () => clearInterval(intervalId);
  }, [professions.length]);

  return (
    <section id="hero" className="min-h-screen flex justify-center items-center h-[686] mx-10 pt-20 sm:pt-0">
            <div className="w-full hero-content flex flex-col text-beige gap-10 p-15">
                <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-3 pb-10">
                    <div>
                        <img src="https://picsum.photos/200" alt="Imam's photo" className=" w-32 h-32 " />
                    </div>
                    <div className="flex flex-col items-center md:items-start justify-center gap-2">
                        <p className="flex items-center font-EB-Garamond text-4xl">Muhammad Imam Alghifary</p>
                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                            <div className='bg-beige text-navy-blue p-2 flex items-center justify-center w-[150px]'>
                                <p key={currentProfessionIndex} className="font-Inter animate-fadeInOut">{professions[currentProfessionIndex]}</p>
                            </div>
                            <a href="Muhammad Imam Alghifary_CV.pdf" download="Muhammad_Imam_Alghifary_CV.pdf" className="flex items-center cursor-pointer text-2xl border-b-4 hover:text-teal hover:border-teal">Download CV</a>
                        </div>
                    </div>
                </div>
                <div className=" justify-center flex flex-col items-center md:items-start gap-3 md:gap-2 w-full">
                    <h4 className="text-5xl font-Inter ">Hi, I’m <span className="text-beige text-bold font-EB-Garamond px-2 border-4 ">Imam</span>:</h4>
                    <h2 className="text-6xl font-Inter">Web Developer & IoT Engineer</h2>
                    <p className="text-2xl text-center md:text-left w-3/4">
                       Welcome to my portfolio. I’m a passionate and detail-oriented developer with a strong interest in IoT, data systems, and digital design. My work focuses on building reliable, scalable, and user-friendly solutions that bridge technology and real-world impact.
                    </p>
                </div>
                {/* <div className="flex flex-col items-center md:items-start w-full max-w-4xl gap-3">
                    <h4 className="text-5xl font-Inter ">Hi, I’m <span className="text-beige text-bold font-EB-Garamond px-2 border-4 ">Imam</span>:</h4>
                    <h2 className="text-6xl font-Inter">Web Developer & IoT Engineer</h2>
                    <p className="text-xl md:text-2xl text-center md:text-left w-full md:w-3/4">
                        Welcome to my portfolio. I’m a passionate and detail-oriented developer with a strong interest in IoT, data systems, and digital design. My work focuses on building reliable, scalable, and user-friendly solutions that bridge technology and real-world impact.
                    </p>
                </div> */}
            </div>   
    </section>
  );
}

const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(-10px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(10px); }
  }
  .animate-fadeInOut {
    animation: fadeInOut 3s infinite;
  }
`;
document.head.appendChild(style);

export default Hero;