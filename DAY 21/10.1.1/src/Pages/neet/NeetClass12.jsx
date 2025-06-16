// pages/neet-class10.jsx
import React from "react";

const features = [
  {
    icon: "📚",
    title: "Live Lectures",
    desc: "Interactive online classes led by top faculty.",
  },
  {
    icon: "📝",
    title: "Practice Tests",
    desc: "Regular NEET-style mock tests with solutions.",
  },
  {
    icon: "🎥",
    title: "Recorded Sessions",
    desc: "Missed class? Watch anytime at your convenience.",
  },
  {
    icon: "🤝",
    title: "Doubt Support",
    desc: "24×7 doubt resolution via chat & email.",
  },
];

const curriculum = [
  { title: "Physics", topics: ["Motion", "Work & Energy", "Gravitation"] },
  {
    title: "Chemistry",
    topics: ["Periodic Table", "Chemical Bonding", "Stoichiometry"],
  },
  {
    title: "Biology",
    topics: ["Cell Structure", "Genetics", "Plant Physiology"],
  },
];

export default function NeetClass12() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 text-center rounded-b-3xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">NEET Class 12</h1>
        <p className="text-lg max-w-xl mx-auto">
          Build your foundation with our comprehensive NEET-ready curriculum.
        </p>
        <a
          href="#enroll"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Enroll Now
        </a>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose This Course
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Curriculum Overview
        </h2>
        <ul className="space-y-6 max-w-3xl mx-auto">
          {curriculum.map((c) => (
            <li key={c.title} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
              <ul className="list-disc list-inside text-gray-600">
                {c.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Enroll CTA */}
      <section id="enroll" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Course Fee: ₹45,000</h2>
        <p className="text-gray-700 mb-6">
          One-time investment with lifetime access to recordings and support.
        </p>
        <a
          href="/checkout"
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition"
        >
          Enroll Now
        </a>
      </section>
    </div>
  );
}
