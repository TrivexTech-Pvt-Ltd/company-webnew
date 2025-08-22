// "use client";
// import { useState, ChangeEvent, FormEvent } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   // Handle input/select/textarea changes
//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submit
//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);

//     // Optional: API call here
//     // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

//     alert("Your message has been sent!");
//   };

//   return (
//     <section className="bg-gray-50 py-20 px-6 md:px-16 font-montserrat">
//       <div className="text-center mb-14">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Don't Hesitate To Contact Us
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Fill out the form below and we’ll get back to you shortly.
//         </p>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className=" bg-white p-8 rounded-xl shadow-md space-y-6"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             required
//           />
//           <select
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             required
//           >
//             <option value="">Select Subject</option>
//             <option value="General Inquiry">General Inquiry</option>
//             <option value="Support">Support</option>
//             <option value="Business">Business</option>
//           </select>
//         </div>

//         <textarea
//           name="message"
//           placeholder="Write your message"
//           rows={5}
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           required
//         ></textarea>

//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
//           >
//             SEND MESSAGE →
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { useEffect } from "react";
export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Replace with API call or form handling logic
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-28 md:px-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact with us</h2>
          <p className="text-gray-600 mb-6">
            Dolor sit amet consectetur elit sed eiusmod tempor incididunt labore
            et dolore magna aliqua enim minim veniam quis nostrud exercitation
            ullamco.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-cyan-500 transition"
            >
              Free Consultation
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col justify-between h-full bg-[#05365F] text-white p-10 rounded-lg shadow-lg">
          <div>
            <h3 className="text-2xl font-bold leading-snug">
              We run all kinds of IT services <br />
              that vow your success
            </h3>
            <button className="mt-6 bg-primary text-white px-6 py-3 rounded-md hover:bg-cyan-500 transition">
              Talk to Us
            </button>
          </div>
          <div className="mt-12">
            <p className="text-lg font-semibold">
              Make a contact with our IT staffs. <br /> Call Us?
            </p>
            <p className="text-primary text-3xl font-bold mt-2">
              +94 773 223 282
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
