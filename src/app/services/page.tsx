import { FaLaptopCode, FaNetworkWired } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbDeviceMobileCode } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

export default function Services() {
  const services = [
    {
      icon: <MdMiscellaneousServices size={40} className="text-cyan-400" />,
      title: "Services",
      description:
        "Empowering your business with cutting-edge software solutions tailored to meet modern digital demands.",
      image: "assets/images/about/about.jpg",
    },
    {
      icon: <FaLaptopCode size={40} className="text-cyan-400" />,
      title: "Custom Software Development",
      description:
        "We build robust, scalable, and secure software solutions tailored to your business needs — from idea to deployment.",
      image: "assets/images/about/about.jpg",
    },
    {
      icon: <TbDeviceMobileCode size={40} className="text-cyan-400" />,
      title: "Mobile App Development",
      description:
        "Deliver seamless mobile experiences with native and cross-platform applications built for performance and user engagement.",
      image: "assets/images/about/about.jpg",
    },
    {
      icon: <VscAzureDevops size={40} className="text-cyan-400" />,
      title: "Cloud Solutions & DevOps",
      description:
        "Accelerate your infrastructure with scalable cloud architecture, CI/CD pipelines, and DevOps automation for faster delivery.",
      image: "assets/images/about/about.jpg",
    },
    {
      icon: <MdMiscellaneousServices size={40} className="text-cyan-400" />,
      title: "AI & Machine Learning Integration",
      description:
        "Leverage artificial intelligence to unlock predictive analytics, automation, and intelligent business insights.",
      image: "assets/images/about/about.jpg",
    },
    {
      icon: <RiLockPasswordLine size={40} className="text-cyan-400" />,
      title: "IT Consulting & System Architecture",
      description:
        "Get expert guidance on choosing the right technology stack, system design, and architecture for long-term success.",
      image: "assets/images/about/about.jpg",
    },
  ];

  return (
    <section
      id="services"
      className=" relative md:py-20 px-4 md:px-28 font-montserrat"
      style={{
        backgroundImage: "url('/assets/images/Hero/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional white overlay for readability */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="relative z-10 text-center md:mb-14 mb-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-montserrat">
          Our Services and expertise
        </h2>
        <p className="text-cyan-500 font-montserrat font-semibold mt-2 text-sm md:text-lg underline decoration-cyan-400 decoration-4 underline-offset-4">
          we provide
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center cursor-pointer group overflow-hidden flex flex-col"
          >
            {/* Background Image Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-70 transition-opacity duration-500"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="flex justify-center mb-4">
                <div className="text-cyan-400 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-sm md:text-xl font-montserrat font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 mb-3">
                {service.title}
              </h3>
              <p className="text-sm md:text-xl font-montserrat leading-6   text-gray-600 group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                {service.description}
              </p>
              <button className="text-sm md:text-xl mt-4 font-montserrat md:mt-auto px-5 py-2 font-medium rounded-full border border-cyan-400 text-cyan-400 group-hover:border-white group-hover:text-white group-hover:bg-cyan-500 transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
