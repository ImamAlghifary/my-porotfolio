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
    <section id="hero" className="min-h-[700px] flex justify-center items-center h-[686] mx-10 pt-20 sm:pt-0">
            <div className="w-full hero-content flex flex-col text-beige gap-10 p-15 ">
                <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-3 md:ps-20 ">
                    <div className=''>
                        <img src="40298-100197.jpg" alt="Imam's photo" className=" w-[120px] h-[120px] " />
                    </div>
                    <div className="flex flex-col items-center md:items-start justify-center gap-2 ">
                        <p className="flex items-center font-EB-Garamond text-4xl">Muhammad Imam Alghifary</p>
                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                            <div className='bg-beige text-navy-blue p-2 flex items-center justify-center w-[150px] mt-3 md:mt-0'>
                                <p key={currentProfessionIndex} className="font-Inter animate-fadeInOut">{professions[currentProfessionIndex]}</p>
                            </div>
                            <a href="Muhammad Imam Alghifary_CV.pdf" download="Muhammad_Imam_Alghifary_CV.pdf" className="flex items-center cursor-pointer text-2xl border-b-4 hover:text-teal hover:border-teal">Download CV</a>
                        </div>
                    </div>
                </div>
                <div className=" justify-center flex flex-col items-center gap-3 md:gap-2 w-full">
                    <h4 className="text-4xl sm:text-5xl font-EB-Garamond">Hi, I’m 
                      <span className="text-beige text-bold font-EB-Garamond px-2 border-4  ms-2">Imam</span>:
                    </h4>
                    <h2 className="text-6xl font-EB-Garamond">Web Developer & IoT Engineer</h2>
                    <p className="text-2xl flex justify-center text-center w-3/4 font-EB-Garamond">
                       Welcome to my portfolio.
                    </p>
                </div>
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