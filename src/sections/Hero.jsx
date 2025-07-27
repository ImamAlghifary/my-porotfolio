
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen hero flex justify-center items-center h-[686] m-20">
            <div className="w-full hero-content flex flex-col text-beige gap-10 p-15">
                <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-3 pb-10">
                    <div>
                        <img src="https://picsum.photos/200" alt="Imam's photo" className=" w-32 h-32 " />
                    </div>
                    <div className="flex flex-col items-center md:items-start justify-center gap-2">
                        <p className="flex items-center font-EB-Garamond text-4xl">Muhammad Imam Alghifary</p>
                        <div className="flex items-center gap-3">
                            <p className="bg-beige text-navy-blue p-2 text-2xl font-Inter">Web Developer</p>
                            <button className="flex items-center text-2xl border-b-4 p-1">Download CV</button>
                        </div>
                    </div>
                </div>
                <div className=" justify-center flex-col flex items-center md:items-start gap-2 w-full">
                    <h4 className="text-5xl font-Inter ">Hi, I’m <span className="text-beige text-bold font-EB-Garamond px-2 border-4 border-beige">Imam</span>:</h4>
                    <h2 className="text-6xl font-Inter">Web Developer & IoT Engineer</h2>
                    <p className="text-2xl text-justify md:text-left w-3/4">
                       Welcome to my portfolio. I’m a passionate and detail-oriented developer with a strong interest in IoT, data systems, and digital design. My work focuses on building reliable, scalable, and user-friendly solutions that bridge technology and real-world impact.
                    </p>
                </div>
            </div>   
    </section>
  );
}

export default Hero;