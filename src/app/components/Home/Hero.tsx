// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <>
//       <hr className="border-gray-300" />
//       <section className="Logo flex flex-col md:flex-row items-center justify-between bg-white py-16 px-8 md:px-20 font-montserrat">
//         <div className="max-w-xl text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//             Welcome to TrivexTech Pvt Ltd
//           </h1>
//           <p className="mt-6 text-gray-600 text-lg">
//             TrivexTech is a full-stack software development company focused on
//             delivering high-quality, performance-driven, and scalable tech
//             solutions. From startups to enterprises, we bring ideas to life
//             through innovative engineering.
//           </p>
//           <button className="mt-8 bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-colors cursor-pointer">
//             SEE MORE
//           </button>
//         </div>
//         {/* <div className="mt-12 md:mt-0 md:ml-12 w-full md:w-1/2">
//           <Image
//             src="/assets/images/Hero/Hero.png"
//             alt="Team meeting illustration"
//             layout="responsive"
//             width={800}
//             height={600}
//             className="object-contain"
//           />
//         </div> */}
//       </section>
//     </>
//   );
// }
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* <hr className="border-gray-300" /> */}
      <section className="relative h-[520px] md:min-h-screen w-full flex items-center justify-center text-center px-4">
        {/* Background Image */}
        <div className=" h-screen absolute inset-0 -z-10">
          <Image
            src="/assets/images/Hero/slider-bg.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
        {/* <Image
          src="/assets/images/Hero/Hero.png"
          alt="Team meeting illustration"
          layout="responsive"
          width={800}
          height={600}
          className="object-contain"
        /> */}
        {/* Content */}
        <div className="px-28 md:text-left relative z-10 grid grid-cols-2 top-5">
          <div >
            <h2 className="text-xl md:text-xl font-bold text-primary leading-tight mb-4">We provide IT Services</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Welcome to TrivexTech Pvt Ltd
            </h1>
            <p className="mt-6 text-gray-400 text-lg">
              TrivexTech is a full-stack software development company focused on
              delivering high-quality, performance-driven, and scalable tech
              solutions. From startups to enterprises, we bring ideas to life
              through innovative engineering.
            </p>
            <button className="mt-8 bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-6 shadow-md transition-colors cursor-pointer">
              SEE MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
