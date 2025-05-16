"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  MessageSquare,
} from "lucide-react";

export default function ContactMe_Route() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:26hptl@gmail.com?subject=Portfolio Contact from ${
      formData.name
    }&body=${encodeURIComponent(formData.message)} (${formData.email})`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contact Me
      </h2>

      {/* Personal Info */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-inner">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-gray-700">Harsh Patel</p>
          <p className="flex items-center gap-2 text-gray-600">
            <Phone size={18} /> +91-9409180337
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <MessageSquare size={18} />{" "}
            <a
              href="https://wa.me/919409180337"
              target="_blank"
              className="underline"
            >
              WhatsApp
            </a>
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Mail size={18} /> 26hptl@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} /> Ahmedabad, Gujarat, India
          </p>
        </div>
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-gray-600">
            <Linkedin size={18} />{" "}
            <a
              href="https://www.linkedin.com/in/26hptl/"
              target="_blank"
              className="underline"
            >
              linkedin.com/in/26hptl
            </a>
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Github size={18} />{" "}
            <a
              href="https://github.com/26HarshPatel"
              target="_blank"
              className="underline"
            >
              github.com/26HarshPatel
            </a>
          </p>
          {/* Add more if needed */}
        </div>
      </div>

      <p className="text-center text-gray-600 mb-12">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-md rounded-2xl p-8"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="inline-block rounded-xl bg-indigo-600 px-6 py-2 text-white font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
