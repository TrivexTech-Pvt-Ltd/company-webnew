import { FaReact, FaNodeJs, FaPython, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNextdotjs } from "react-icons/si";
import { DiDotnet } from "react-icons/di";

export default function Technology() {
  const technologies = [
    {
      icon: <FaReact size={40} className="text-cyan-400" />,
      name: "React.js",
      description:
        "Building dynamic and fast web interfaces with reusable components.",
    },
    {
      icon: <SiNextdotjs size={40} className="text-black" />,
      name: "Next.js",
      description:
        "Server-side rendering and static site generation for optimized performance.",
    },
    {
      icon: <DiDotnet size={40} className="text-purple-600" />,
      name: "ASP.NET",
      description:
        "Robust enterprise-grade framework for scalable web applications.",
    },
    {
      icon: <FaLaravel size={40} className="text-red-500" />,
      name: "Laravel",
      description:
        "Elegant PHP framework for building modern, scalable web applications.",
    },
    {
      icon: <FaNodeJs size={40} className="text-green-500" />,
      name: "Node.js",
      description: "Backend development with scalable, high-performance APIs.",
    },
    {
      icon: <SiTailwindcss size={40} className="text-sky-400" />,
      name: "Tailwind CSS",
      description: "Modern utility-first CSS framework for rapid design.",
    },
    {
      icon: <SiMongodb size={40} className="text-green-400" />,
      name: "MongoDB",
      description:
        "NoSQL database for flexible, high-performance data storage.",
    },
    {
      icon: <FaPython size={40} className="text-yellow-400" />,
      name: "Python",
      description:
        "Powerful scripting and backend solutions for modern applications.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 font-montserrat">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Technology Stack
        </h2>
        <p className="text-cyan-500 font-semibold mt-2 text-lg underline decoration-cyan-400 decoration-4 underline-offset-4">
          What we use
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
          >
            <div className="flex justify-center mb-4">{tech.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-cyan-500 transition-colors">
              {tech.name}
            </h3>
            <p className="text-gray-600">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
