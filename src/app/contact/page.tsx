
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
    <section id="contact" className="bg-gray-50 py-8 md:py-16 px-10 md:px-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Contact Form */}
        <div>
          <h2 className="md:text-2xl text-xl font-bold mb-4 font-montserrat">Contact with us</h2>
          <p className="text-gray-600 mb-6 md:text-xl text-sm font-montserrat leading-6">
            Have questions or a project in mind? Our team is ready to help you bring your ideas to life.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="border font-montserrat border-gray-300 p-3 rounded-md w-full md:text-xl text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                className="border font-montserrat border-gray-300 p-3 rounded-md w-full md:text-xl text-sm"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="border font-montserrat border-gray-300 p-3 rounded-md w-full md:text-xl text-sm"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="border font-montserrat border-gray-300 p-3 rounded-md w-full md:text-xl text-sm"
            />
            <button
              type="submit"
              className="bg-primary font-montserrat text-white px-6 py-3 rounded-md shadow-md hover:bg-cyan-500 transition md:text-xl text-sm"
            >
              Free Consultation
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col justify-between h-full bg-[#05365F] text-white p-10 rounded-lg shadow-lg">
          <div>
            <h3 className="md:text-2xl text-sm font-bold leading-snug font-montserrat">
              We run all kinds of IT services <br />
              that vow your success
            </h3>
            <button className="md:mt-6 mt-3 md:text-2xl text-sm font-montserrat bg-primary text-white md:px-6 px-3 md:py-3 py-1.5 rounded-md hover:bg-cyan-500 transition">
              Talk to Us
            </button>
          </div>
          <div className="mt-12">
            <p className="md:text-2xl text-sm font-semibold font-montserrat">
              Make a contact with our IT staffs. <br /> Call Us?
            </p>
            <p className="md:text-2xl text-sm text-primary  font-bold mt-2 font-montserrat" >
              +94 773 223 282
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
