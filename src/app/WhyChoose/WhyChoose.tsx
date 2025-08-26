import Image from "next/image";

export default function WhyChoose() {
  return (
    // <section className="w-full flex flex-col lg:flex-row items-center justify-between font-sans py-16 px-28">
    <section
      className="w-full flex flex-col lg:flex-row items-center justify-between font-sans bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/Hero/cta-3-1-bg.jpg')" }} // Background image here
    >
     
      <div className="lg:w-1/2 w-full">
        <Image
          src="/assets/images/Choose/choose.png" // must be in /public
          alt="Why Choose Us"
          width={700}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center mt-3 md:mt-0 px-8 lg:px-20 bg-transparent">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
          Why <span className="text-teal-600">Choose Trivex</span>
        </h2>
        <p className="text-gray-600 mb-8 md:text-base text-sm font-montserrat leading-6">
          TrivexTech is a trusted full-stack software development partner with over 7 years of experience, delivering high-quality, scalable, and performance-driven solutions for startups and enterprises alike. They specialize in cutting-edge services—ranging from web & mobile apps and cloud DevOps to AI-integrated systems and UI/UX design—built on agile transparency and cost-effective engineering.
        </p>

        <div className="flex items-start mb-6">
          <div className="w-10 h-10 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h3 className="md:text-lg text-md font-semibold text-gray-900 font-montserrat">
              Quality software product
            </h3>
            <p className="text-gray-600 md:text-lg text-sm font-montserrat leading-6">
              We deliver a high-performing and scalable digital solution. Throughout our collaboration, we ensure the final product is reliable, maintainable, and drives real impact for your business.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-10 h-10 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-4h6v4h5V8a2 2 0 00-2-2H6a2 2 0 00-2 2v9h5z"
              />
            </svg>
          </div>
          <div>
            <h3 className="md:text-lg text-md font-semibold text-gray-900 font-montserrat">
              Trusted tech partner
            </h3>
            <p className="md:text-lg text-sm text-gray-600 mb-4 font-montserrat leading-6" >
              Trust is at the heart of our organization, earning us recognition as a Great Place to Work. We don’t rely on managers to dictate—we build guidelines together. The same transparency and honesty we foster internally guide how we build lasting relationships with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
