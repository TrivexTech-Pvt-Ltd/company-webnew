import Image from "next/image";

export default function WhyChoose() {
  return (
    // <section className="w-full flex flex-col lg:flex-row items-center justify-between font-sans py-16 px-28">
    <section
      className="w-full flex flex-col lg:flex-row items-center justify-between font-sans py-16 px-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/Hero/cta-3-1-bg.jpg')" }} // Background image here
    >
      {/* Left Image Section */}
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
      <div className="lg:w-1/2 w-full flex flex-col justify-center px-8 lg:px-20 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Why <span className="text-teal-600">Choose Intech</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Dolor sit amet consectetur elit sed do eiusmod tempor incididunt
          labore et dolore magna aliqua. Enim ad minim veniam quis nostrud
          exercitation ullamco laboris aliquip ex ea commodo consequat.
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
            <h3 className="text-lg font-semibold text-gray-900">
              Protect your business
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod
              tempor incididunt ut labore.
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
            <h3 className="text-lg font-semibold text-gray-900">
              Secure your growth
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod
              tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
