import { useState } from "react";
import { Link } from "react-router-dom";

const coursesMenu = [
  { label: "NEET", children: ["Class 10", "Class 11", "Class 12"] },
  { label: "JEE", children: ["Class 10", "Class 11", "Class 12"] },
];

function Navbar() {
  const [openCourse, setOpenCourse] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/ALLEN_Career_Institute_logo.svg/2560px-ALLEN_Career_Institute_logo.svg.png"
                alt="Logo"
                className="h-10"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <div
              className="relative"
              onMouseEnter={() => setOpenCourse(true)}
              onMouseLeave={() => {
                setOpenCourse(false);
                setOpenSubmenu(null);
              }}
            >
              <button className="flex items-center text-gray-800 hover:text-blue-600 transition">
                Courses
                <svg
                  className="ml-1 h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openCourse && (
                <ul className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg w-48">
                  {coursesMenu.map((item) => (
                    <li
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
                        {item.label}
                        <svg
                          className="ml-1 h-3 w-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>

                      {openSubmenu === item.label && (
                        <ul className="absolute top-0 left-full ml-0 bg-white border rounded-lg shadow-lg w-40">
                          {item.children.map((sub) => (
                            <li key={sub}>
                              <Link
                                to={`/${item.label.toLowerCase()}/online-coaching-${sub
                                  .toLowerCase()
                                  .replace(" ", "-")}`}
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link to="/test-series" className="hover:text-blue-600 transition">
              Test Series
            </Link>
            <Link to="/results" className="hover:text-blue-600 transition">
              Results{" "}
              <span className="ml-1 px-1 bg-orange-100 text-orange-600 text-xs rounded">
                NEW
              </span>
            </Link>
            <Link
              to="/study-materials"
              className="hover:text-blue-600 transition"
            >
              Study Materials
            </Link>
            <Link to="/scholarships" className="hover:text-blue-600 transition">
              Scholarships
            </Link>
            <Link to="/books" className="hover:text-blue-600 transition">
              Books
            </Link>
            <Link to="/more" className="hover:text-blue-600 transition">
              More
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link
              to="/login"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Trigger */}
          <div className="md:hidden">
            <button className="p-2 text-gray-700 hover:text-blue-600">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
