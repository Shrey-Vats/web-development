import React from "react";
import { useNavigate } from "react-router-dom";

const demoCourses = [
  {
    id: 1,
    title: "Physics - Mechanics",
    description:
      "Master the concepts of motion, force, and energy with interactive lessons and problem-solving.",
    icon: "⚛️",
  },
  {
    id: 2,
    title: "Chemistry - Organic Basics",
    description:
      "Understand the fundamentals of organic chemistry to build a strong foundation for JEE.",
    icon: "🧪",
  },
  {
    id: 3,
    title: "Mathematics - Algebra & Trigonometry",
    description:
      "Sharpen your skills in algebraic manipulation and trigonometric identities.",
    icon: "📐",
  },
];

const demoTeachers = [
  {
    id: 1,
    name: "Dr. Aman Verma",
    subject: "Physics",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    name: "Ms. Sneha Gupta",
    subject: "Chemistry",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Mr. Rajesh Kumar",
    subject: "Mathematics",
    photo: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];


const JeeClass11 = () => {
    
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            A
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-indigo-900">
            Allen Base Class 11th - JEE Preparation
          </h1>
        </div>
        <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-5 py-2 rounded-md font-semibold shadow-lg transition duration-300" onClick={()=>navigate('/')}>
          Enroll Now
        </button>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center rounded-b-3xl shadow-lg max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Ace Your Class 10th JEE with Allen
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-8">
          Expert-led classes, detailed study material, and mock tests designed
          to prepare you for JEE success.
        </p>
        <button className="bg-yellow-400 text-indigo-900 font-bold px-8 py-3 rounded-lg shadow hover:bg-yellow-300 transition">
          Get Started
        </button>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-8 text-indigo-900 text-center">
          Featured Courses
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {demoCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">{course.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
              <p className="text-gray-600">{course.description}</p>
              <button className="mt-4 inline-block text-indigo-700 font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers Section */}
      <section className="bg-indigo-50 py-16 px-6">
        <h3 className="text-3xl font-bold mb-8 text-indigo-900 text-center">
          Meet Our Tutors
        </h3>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around gap-12">
          {demoTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
              />
              <h4 className="text-xl font-semibold text-indigo-900">
                {teacher.name}
              </h4>
              <p className="text-indigo-700 italic">{teacher.subject} Expert</p>
              <button className="mt-4 bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-md transition font-semibold">
                Contact
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / Info Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-8 text-indigo-900 text-center">
          Why Choose Allen for JEE Class 10th?
        </h3>
        <ul className="space-y-6 text-gray-700 text-lg max-w-3xl mx-auto">
          <li>✅ Comprehensive syllabus covering all essential topics</li>
          <li>✅ Personalized doubt clearing sessions</li>
          <li>✅ Regular mock tests with detailed performance analysis</li>
          <li>✅ Experienced and passionate educators</li>
          <li>✅ Interactive live classes & recorded sessions available</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-indigo-100 py-6 mt-16 text-center font-medium">
        © 2025 Allen Base Class 10th JEE | All rights reserved.
      </footer>
    </div>
  );
};

export default JeeClass11;
