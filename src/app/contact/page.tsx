"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input/select/textarea changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Optional: API call here
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

    alert("Your message has been sent!");
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 font-montserrat">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Don't Hesitate To Contact Us
        </h2>
        <p className="text-gray-600 mt-2">
          Fill out the form below and we’ll get back to you shortly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" bg-white p-8 rounded-xl shadow-md space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          >
            <option value="">Select Subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Write your message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            SEND MESSAGE →
          </button>
        </div>
      </form>
    </section>
  );
}
