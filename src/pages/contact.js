import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 px-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl shadow-lg text-center w-full max-w-md transition-transform transform hover:scale-105">
        <h1 className="text-3xl font-bold text-white drop-shadow-md mb-3">Contact Us</h1>
        <p className="text-pink-100 text-sm mb-5">
          We’d love to hear from you! Feel free to reach out with any questions, suggestions, or feedback.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-3 rounded-lg border border-white bg-white bg-opacity-20 text-white placeholder-pink-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            className="w-full p-3 rounded-lg border border-white bg-white bg-opacity-20 text-white placeholder-pink-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            className="w-full p-3 rounded-lg border border-white bg-white bg-opacity-20 text-white placeholder-pink-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none h-32"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button
            className="w-full p-3 bg-yellow-400 text-gray-800 font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-600"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
