import Image from "next/image";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between bg-white py-10 px-10 md:px-28 font-montserrat"
    >
      <div className="text-center w-full">
        {/* Section Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h1>

        {/* About Description */}
        <p className="text-sm md:text-lg text-gray-600 mb-10 text-justify font-montserrat leading-6">
          At TrivexTech, we are a dynamic and results-driven software
          development company committed to building high-performance digital
          solutions tailored to modern business needs. With over 7 years of
          hands-on industry experience, our team specializes in full-stack
          development, mobile applications, cloud integrations, and cutting-edge
          technologies like AI and machine learning. We combine technical
          expertise with a deep understanding of our clients&apos; goals to deliver
          scalable, secure, and user-centric products. Whether you&apos;re a startup
          or an established enterprise, TrivexTech is your trusted partner for
          driving digital transformation and accelerating innovation.
        </p>

        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-4 ">
          {/* Text Content */}
          <div className="flex-1 text-left">
            {/* Vision */}
            <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2 font-montserrat">
              Our <span className="text-primary">Vision</span>
              <HiOutlineLightBulb className="md:w-9 md:h-9 w-6 h-6" />
            </h2>
            <p className=" text-sm md:text-lg text-gray-600 mb-6 text-justify font-montserrat leading-6">
              Our mission is to create impactful software and digital solutions
              that empower businesses to achieve their potential. We believe in
              collaboration, innovation, and customer satisfaction.
            </p>

            {/* Mission */}
            <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2 font-montserrat">
              Our <span className="text-primary">Mission</span>
              <TbTargetArrow className="md:w-9 md:h-9 w-6 h-6" />
            </h2>
            <p className="text-sm md:text-lg text-gray-600 text-justify font-montserrat leading-6">
              To become a global leader in delivering cutting-edge solutions
              that transform industries and set new standards for digital
              success.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 mb-0 md:mb-">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/assets/images/about/about.jpg"
                alt="Team collaboration illustration"
                fill
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
