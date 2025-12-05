// import Image from "next/image";

// export default function PartnersPage() {
//   return (
//     <section className="w-full bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide mb-4">
//           Our Digital Partner
//         </h2>

//         <p className="text-gray-600 max-w-xl mx-auto mb-12">
//           We proudly partner with Zara Wide to deliver high-quality digital
//           solutions and innovative experiences.
//         </p>

//         {/* Centered Logo */}
//         <div className="flex justify-center">
//           <Image
//             src="/assets/images/Partner/Zara_wide2.png"
//             alt="Zara Wide"
//             width={220}
//             height={120}
//             className="object-contain mx-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

export default function PartnersPage() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* 50/50 Responsive Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* LEFT SIDE CONTENT */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Our Business Partner
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              We proudly collaborate with
              <span className="font-semibold text-gray-800"> Zara Wide </span>
              to deliver innovative and high-quality digital solutions that help
              brands grow with confidence and excellence.
            </p>

            <div className="flex justify-center md:justify-start">
              <div className="h-1 w-28 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <Image
                src="/assets/images/Partner/Zara_wide2.png"
                alt="Zara Wide"
                width={260}
                height={140}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
