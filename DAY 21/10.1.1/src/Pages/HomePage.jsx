import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full font-sans bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white px-6 py-24 text-center shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-30 bg-white blur-xl z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            Empower Your Journey with Allen Premier Academy
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-indigo-200 drop-shadow-md max-w-2xl mx-auto">
            Join India’s #1 coaching institute trusted by NEET, JEE & Olympiad
            toppers for excellence in competitive exams.
          </p>
          <button className="mt-10 bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition">
            📚 Explore Courses
          </button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Premier Courses
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "NEET 2025 - Class 12",
              desc: "Live + recorded lectures, practice tests, and expert mentorship tailored for NEET aspirants.",
            },
            {
              title: "JEE Main + Advanced",
              desc: "Advanced coaching with DPPs, mock tests, and in-depth analysis for Class 11 & 12.",
            },
            {
              title: "Foundation - Class 9 & 10",
              desc: "Early-stage preparation for NTSE, Olympiads, and competitive foundations with elite faculty.",
            },
          ].map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-2xl p-6 hover:scale-105 transition-transform duration-300 border-t-4 border-indigo-500"
            >
              <h3 className="text-2xl font-bold text-indigo-800 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">{course.desc}</p>
              <button className="text-indigo-700 hover:text-indigo-500 font-semibold">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Allen Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Allen?
        </h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "👨‍🏫 Top IIT/AIIMS Faculty",
            "🏆 Consistent Rankers in NEET & JEE",
            "📈 Personalized Progress Tracking",
            "🧠 Daily Practice & Doubt Solving",
            "🖥️ Smart Learning Platform (LMS)",
            "🎥 Live + Recorded Class Access",
          ].map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <p className="text-lg font-medium text-indigo-700">{point}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
