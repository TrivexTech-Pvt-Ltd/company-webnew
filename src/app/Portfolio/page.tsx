import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Ranik International PVT LTD",
      description:
        "A fully responsive online store built with Next.js, Tailwind CSS, and Stripe integration.",
      image: "assets/images/portfolio/Portfolio.png",
      link: "https://www.ranikinternational.com/",
    },
    {
      title: "Mobile Application",
      description:
        "Cross-platform mobile banking app with React Native and secure authentication.",
      image: "",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using Next.js, Tailwind CSS, and Framer Motion animations.",
      image: "",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 font-montserrat">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Portfolio
        </h2>
        <p className="text-cyan-500 font-semibold mt-2 text-lg underline decoration-cyan-400 decoration-4 underline-offset-4">
          Showcasing our projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            {/* Project Image */}
            <div
              className="h-56 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-cyan-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-cyan-500 font-medium hover:text-cyan-600 transition-colors"
              >
                View Project <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
