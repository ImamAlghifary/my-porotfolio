import CarouselComponent from '../components/Carousel';

const Experience = () => {
    return(
        <section id='experience' className=" relative w-screenflex flex-col items-center justify-start">
            <div className="w-full py-10 text-center z-10" style={{ backgroundColor: 'var(--color-navy-blue)', color: 'var(--color-beige)' }}>
                <p className="text-5xl font-bold" style={{ fontFamily: 'var(--font-EB-Garamond)' }}>Experience</p>
                <p className="text-xl mt-2" style={{ fontFamily: 'var(--font-Inter)' }}>Where I’ve Been & What I’ve Done</p>
            </div>
            <div className="relative w-full flex-grow">
                <CarouselComponent />
            </div>
        </section>
    );
}

export default Experience;