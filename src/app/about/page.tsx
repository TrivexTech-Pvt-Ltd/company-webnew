import Image from "next/image";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";

export default function AboutUs() {
  return (
    //  <section className="flex flex-col md:flex-row items-center justify-between bg-white py-16 px-8 md:px-20 font-montserrat"></section>
    <section className="flex flex-col md:flex-row items-center justify-between bg-white py-16 px-8 md:px-20 font-montserrat">
      <div className=" text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-10 text-justify">
          At TrivexTech, we are a dynamic and results-driven software
          development company committed to building high-performance digital
          solutions tailored to modern business needs. With over 7 years of
          hands-on industry experience, our team specializes in full-stack
          development, mobile applications, cloud integrations, and cutting-edge
          technologies like AI and machine learning. We combine technical
          expertise with a deep understanding of our clients’ goals to deliver
          scalable, secure, and user-centric products. Whether you're a startup
          or an established enterprise, TrivexTech is your trusted partner for
          driving digital transformation and accelerating innovation.
        </p>
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
        
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              Our <span className="text-primary">Vision</span>{" "}
              <HiOutlineLightBulb size={38} />
            </h2>
            <p className="text-gray-600 mb-6 text-justify">
              Our mission is to create impactful software and digital solutions
              that empower businesses to achieve their potential. We believe in
              collaboration, innovation, and customer satisfaction.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              Our <span className="text-primary">Mission</span>{" "}
              <TbTargetArrow size={35} />
            </h2>
            <p className="text-gray-600 text-justify">
              To become a global leader in delivering cutting-edge solutions
              that transform industries and set new standards for digital
              success.
            </p>
          </div>
           <div className="flex-1 mb-8 md:mb-0">
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
