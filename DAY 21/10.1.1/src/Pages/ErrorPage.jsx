import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-700 flex flex-col items-center justify-center px-6 text-white">
      <h1 className="text-9xl font-extrabold tracking-wide drop-shadow-lg">
        404
      </h1>
      <p className="text-3xl sm:text-4xl font-semibold mt-4 drop-shadow-md">
        Oops! Page Not Found.
      </p>
      <p className="mt-2 text-lg sm:text-xl max-w-xl text-indigo-200 text-center drop-shadow-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <button
        onClick={()=> navigate("/")}
        className="mt-10 bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-100 transition duration-300"
      >
        Go Back
      </button>

      <svg
        className="absolute bottom-0 left-0 w-full h-48 opacity-30"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#gradient)"
          fillOpacity="0.7"
          d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,117.3C672,96,768,96,864,90.7C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="1440"
            y2="320"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7c3aed" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default NotFoundPage;
