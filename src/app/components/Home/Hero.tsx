
import Image from "next/image";

export default function HeroSection() {
  return (
 
      <section className="relative h-96 md:h-[520px] md:min-h-screen w-full flex items-center justify-center text-center px-4">
       
        <div className=" h-screen  absolute inset-0 -z-10">
          <Image
            src="/assets/images/Hero/slider-bg.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
        <div className="md:px-28 px-10 md:text-left relative z-10 grid md:grid-cols-2 top-5">
          <div >
            <h2 className="text-base md:text-xl font-bold text-primary leading-tight mb-4 font-montserrat">We provide IT Services</h2>
            <h1 className="text-2xl md:text-5xl font-bold text-white leading-tight font-montserrat">
              Welcome to TrivexTech Pvt Ltd
            </h1>
            <p className="mt-6 text-gray-400 text-sm md:text-lg font-montserrat leading-6">
              TrivexTech is a full-stack software development company focused on
              delivering high-quality, performance-driven, and scalable tech
              solutions. From startups to enterprises, we bring ideas to life
              through innovative engineering.
            </p>
            <button className="bg-primary mt-4 rounded-sm text-white md:px-4 px-2 md:py-4 py-2 font-montserrat font-medium hover:bg-blue-800 transition-colors duration-300  text-sm">
              See More
            </button>
          </div>
        </div>
      </section>

  );
}
