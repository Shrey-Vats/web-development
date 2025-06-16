import React, { useState } from "react";

// SignupPage component for Allen Career Institute - Redesigned for Premium Aesthetics
const SignupPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle form submission (UI only - no actual logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted (UI only):", formData);
      console.log(
        "Signup successful! (This is a UI demo, no actual registration occurred.)"
      );
    }
  };

  // Reusable InputField component with floating label, premium styling, and icon
  const InputField = ({
    label,
    type,
    name,
    value,
    onChange,
    error,
    icon: IconComponent,
    placeholder,
  }) => {
    const isFloating = value.length > 0;

    return (
      <div className="relative z-10 group">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder || " "}
          className={`
            peer w-full px-5 py-3.5
            border border-gray-200 rounded-xl
            bg-white text-gray-800
            focus:outline-none focus:ring-3 focus:ring-tory-blue-light focus:border-tory-blue
            transition-all duration-300 ease-in-out
            placeholder-transparent
            ${IconComponent ? "pl-14" : ""} /* Add padding for icon */
            shadow-md-custom /* More pronounced shadow for depth */
            hover:shadow-lg-custom /* Hover effect */
            appearance-none /* Reset default browser styles */
          `}
          aria-label={label}
        />
        <label
          htmlFor={name}
          className={`
            absolute left-5 transition-all duration-300 ease-in-out
            ${
              isFloating || value
                ? "-top-2.5 text-xs peer-focus:-top-2.5 peer-focus:text-xs"
                : "top-3.5 text-base"
            }
            peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
            peer-focus:-top-2.5 peer-focus:text-tory-blue peer-focus:text-xs
            text-gray-500
            px-1 bg-white rounded-md
            ${
              IconComponent ? "left-14" : "left-5"
            } /* Adjust label position if icon present */
            pointer-events-none /* Make label unclickable */
          `}
        >
          {label}
        </label>
        {IconComponent && (
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-tory-blue transition-colors duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
        )}
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
    );
  };

  // SVG Icons for input fields (more refined style)
  const UserIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const MailIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const LockIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );

  const PhoneIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2H7c.45 0 .9.09 1.3.26L9.83 4.84a1 1 0 0 1-.27 1.1L7.54 8.2c.42.98.83 1.96 1.25 2.94a15.7 15.7 0 0 0 4.09 4.09c.98.42 1.96.83 2.94 1.25l2.29-2.02a1 1 0 0 1 1.1-.27l2.58 1.5c.37.22.61.64.61 1.09z"></path>
    </svg>
  );

  // SVG Icons for social logins (more modern, refined versions)
  const GoogleIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 11.23V13.88H16.4C16.14 14.85 15.5 15.7 14.6 16.29V18.96H17.96C19.86 17.18 21 14.68 21 12C21 11.26 20.94 10.53 20.82 9.82H12V11.23Z"
        fill="#4285F4"
      />
      <path
        d="M12 21C14.77 21 17.16 20.08 17.96 18.96L14.6 16.29C13.72 16.92 12.78 17.29 12 17.29C9.17 17.29 6.78 15.54 5.92 12.87H2.56V15.51C3.38 18.5 7.37 21 12 21Z"
        fill="#34A853"
      />
      <path
        d="M5.92 12.87C5.7 12.21 5.58 11.53 5.58 10.87C5.58 10.21 5.7 9.53 5.92 8.87V6.23H2.56C1.72 7.84 1.29 9.35 1.29 10.87C1.29 12.39 1.72 13.9 2.56 15.51L5.92 12.87Z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.71C13.56 4.71 14.77 5.37 15.58 6.13L18.06 3.65C16.71 2.39 14.77 1.5 12 1.5C7.37 1.5 3.38 3.99 2.56 6.98L5.92 9.63C6.78 6.96 9.17 5.21 12 5.21V4.71Z"
        fill="#EA4335"
      />
    </svg>
  );

  const FacebookIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2H14C12.67 2 12 2.67 12 4V7H17L16 12H12V22H7V12H4V7H7V4C7 1.34 8.67 0 12 0H17V2Z"
        fill="#1877F2"
      />
    </svg>
  );

  const AppleIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20.1C10.5 20.1 9.3 19 9.3 17.5C9.3 16 10.5 14.9 12 14.9C13.5 14.9 14.7 16 14.7 17.5C14.7 19 13.5 20.1 12 20.1ZM12 4.1C10.5 4.1 9.3 5.2 9.3 6.7C9.3 8.2 10.5 9.3 12 9.3C13.5 9.3 14.7 8.2 14.7 6.7C14.7 5.2 13.5 4.1 12 4.1ZM12 12.1C10.5 12.1 9.3 13.2 9.3 14.7C9.3 16.2 10.5 17.3 12 17.3C13.5 17.3 14.7 16.2 14.7 14.7C14.7 13.2 13.5 12.1 12 12.1ZM12 8.1C10.5 8.1 9.3 9.2 9.3 10.7C9.3 12.2 10.5 13.3 12 13.3C13.5 13.3 14.7 12.2 14.7 10.7C14.7 9.2 13.5 8.1 12 8.1ZM12 16.1C10.5 16.1 9.3 17.2 9.3 18.7C9.3 20.2 10.5 21.3 12 21.3C13.5 21.3 14.7 20.2 14.7 18.7C14.7 17.2 13.5 16.1 12 16.1ZM12 0.1C10.5 0.1 9.3 1.2 9.3 2.7C9.3 4.2 10.5 5.3 12 5.3C13.5 5.3 14.7 4.2 14.7 2.7C14.7 1.2 13.5 0.1 12 0.1Z"
        fill="#333333"
      />
    </svg>
  );

  // SVG for the Allen 'A' logo-like shape as a background accent
  const AllenAccentSVG = (props) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L2 22H22L12 2ZM12 5.2L18.4 19.8H5.6L12 5.2Z"
        fill="currentColor"
      />
      <path d="M12 7.5L16.5 17H7.5L12 7.5Z" fill="currentColor" opacity="0.8" />
    </svg>
  );

  // SVG for a more abstract Math pattern
  const AbstractMathPattern = (props) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
      />
      <line
        x1="20"
        y1="50"
        x2="80"
        y2="50"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
      />
      <line
        x1="50"
        y1="20"
        x2="50"
        y2="80"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
      />
      <path
        d="M25 75 C40 60, 60 60, 75 75"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
      />{" "}
      {/* Sine-like wave */}
      <path
        d="M25 25 C40 40, 60 40, 75 25"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
      />{" "}
      {/* Inverse Sine-like wave */}
      <polygon
        points="50,10 60,30 40,30"
        fill="currentColor"
        opacity="0.05"
      />{" "}
      {/* Triangle */}
      <rect
        x="30"
        y="30"
        width="40"
        height="40"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
      />{" "}
      {/* Square */}
    </svg>
  );

  // SVG for a more abstract Physics pattern (orbitals, waves)
  const AbstractPhysicsPattern = (props) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="20"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
      />
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
      />
      <path
        d="M20 50 C35 30, 65 30, 80 50 S65 70, 50 70 S35 70, 20 50Z"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
      />{" "}
      {/* Wave-like path */}
      <path
        d="M50 20 L55 50 L50 80 L45 50 Z"
        fill="currentColor"
        opacity="0.05"
      />{" "}
      {/* Abstract atom nucleus */}
    </svg>
  );

  return (
    // Main container with sophisticated background gradient and subtle textures
    <div
      className="min-h-screen relative flex items-center justify-center font-inter text-gray-800 p-4 md:p-8 overflow-hidden
      bg-gradient-to-br from-[#f8f9fa] via-vis-vis to-[#e0eaf2]"
    >
      {" "}
      {/* Premium light gradient */}
      {/* Background overlay for academic motifs - dynamic and integrated */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* Abstract Math Pattern */}
        <AbstractMathPattern
          className="absolute top-0 left-0 w-1/3 h-1/3 text-tory-blue animate-pulse-slow rotate-45"
          style={{ transformOrigin: "top left", animationDelay: "0s" }}
        />
        <AbstractMathPattern
          className="absolute bottom-0 right-0 w-1/4 h-1/4 text-mustard animate-pulse-slow-delay -rotate-12"
          style={{ transformOrigin: "bottom right", animationDelay: "2s" }}
        />

        {/* Abstract Physics Pattern */}
        <AbstractPhysicsPattern
          className="absolute top-1/4 right-1/4 w-1/5 h-1/5 text-gray-500 animate-pulse-slow-reverse rotate-90"
          style={{ transformOrigin: "center center", animationDelay: "1s" }}
        />
        <AbstractPhysicsPattern
          className="absolute bottom-1/3 left-1/3 w-1/6 h-1/6 text-tory-blue opacity-5 animate-pulse-slow -rotate-30"
          style={{ transformOrigin: "center center", animationDelay: "3s" }}
        />
      </div>
      {/* High-quality Allen logo icon, more refined */}
      <div className="fixed top-8 left-8 z-50 animate-fade-in">
        <AllenAccentSVG className="w-16 h-16 text-tory-blue drop-shadow-lg-custom" />
      </div>
      {/* Signup Form Container - Unique and Premium Design */}
      <div
        className="relative z-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg
                     rounded-3xl shadow-3xl-tory-blue p-8 sm:p-10 md:p-12 lg:p-16
                     max-w-xl w-full mx-auto border border-gray-100
                     transform hover:scale-[1.005] transition-transform duration-300 ease-out
                     overflow-hidden"
      >
        {" "}
        {/* Added overflow-hidden for internal shadows */}
        {/* Inner subtle gradient and overlay for form card */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-50 rounded-3xl -z-10"></div>
        {/* Inner shadow for the form card to give more depth */}
        <div className="absolute inset-0 rounded-3xl shadow-inner-xl-custom -z-10"></div>
        {/* Headline */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-tory-blue text-center mb-10 leading-tight tracking-tight
                         bg-clip-text text-transparent bg-gradient-to-r from-tory-blue to-blue-700
                         drop-shadow-sm-custom animate-fade-in-up"
        >
          Your Journey to Excellence
        </h1>
        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-7">
          <InputField
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            icon={UserIcon}
          />
          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            icon={MailIcon}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            icon={LockIcon}
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            icon={LockIcon}
          />
          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            icon={PhoneIcon}
          />

          {/* Primary Call-to-Action Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-tory-blue to-blue-700 text-white font-bold py-4 px-8 rounded-xl
                         shadow-xl-tory-blue
                         transform hover:scale-105 transition-all duration-300 ease-in-out
                         focus:outline-none focus:ring-4 focus:ring-tory-blue-light
                         relative overflow-hidden
                         hover:from-blue-700 hover:to-tory-blue hover:shadow-2xl-tory-blue-hover"
          >
            <span className="relative z-10">Sign Up for Success</span>
          </button>
        </form>
        {/* OR divider with elevated design */}
        <div className="relative flex items-center justify-center my-8">
          <div className="w-full border-t border-gray-300"></div>
          <span className="absolute bg-white px-4 text-gray-500 font-semibold text-base">
            OR
          </span>
        </div>
        {/* Social Login Buttons - more spaced out and visually distinct */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            className="flex items-center justify-center w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-700
            hover:bg-gray-50 transition-colors duration-200 shadow-md-custom
            transform hover:scale-[1.02] hover:shadow-lg-custom"
          >
            <GoogleIcon className="w-6 h-6 mr-3" />
            <span className="text-sm md:text-base">Google</span>
          </button>
          <button
            className="flex items-center justify-center w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-700
            hover:bg-gray-50 transition-colors duration-200 shadow-md-custom
            transform hover:scale-[1.02] hover:shadow-lg-custom"
          >
            <FacebookIcon className="w-6 h-6 mr-3" />
            <span className="text-sm md:text-base">Facebook</span>
          </button>
          <button
            className="flex items-center justify-center w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-700
            hover:bg-gray-50 transition-colors duration-200 shadow-md-custom
            transform hover:scale-[1.02] hover:shadow-lg-custom"
          >
            <AppleIcon className="w-6 h-6 mr-3" />
            <span className="text-sm md:text-base">Apple</span>
          </button>
        </div>
        {/* Forgot Password Link */}
        <p className="text-center mt-7 text-base text-gray-600">
          Already have an account?{" "}
          <a
            href="#"
            className="text-tory-blue hover:underline font-bold transition-colors duration-200"
          >
            Login here
          </a>
        </p>
        {/* Legal Links */}
        <div className="text-center text-xs text-gray-500 mt-10 space-x-6">
          <a
            href="#"
            className="hover:underline text-gray-500 transition-colors duration-200"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="hover:underline text-gray-500 transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

// --- Tailwind CSS Configuration and Global Styles ---
// This part would typically be in your tailwind.config.js and global CSS file.
// Included here for self-contained execution in the immersive environment.
window.onload = () => {
  const head = document.head;

  const tailwindScript = document.createElement("script");
  tailwindScript.src = "https://cdn.tailwindcss.com";
  head.appendChild(tailwindScript);

  tailwindScript.onload = () => {
    window.tailwind.config = {
      theme: {
        extend: {
          colors: {
            "tory-blue": "#0c54a0",
            mustard: "#fed350",
            "vis-vis": "#fff4a2",
            "mustard-light": "#fef7be", // A lighter shade for gradients
            "mustard-dark": "#e0b230", // A darker shade for gradients
            "tory-blue-light": "rgba(12, 84, 160, 0.25)", // For focus rings
            "blue-700": "#1d4ed8", // For gradient effect on headline/button
          },
          fontFamily: {
            inter: ["Inter", "sans-serif"], // Or 'Open Sans' if preferred primary, ensure it's imported
          },
          boxShadow: {
            // Custom shadows for a more premium look
            "md-custom":
              "0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
            "lg-custom":
              "0 8px 16px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)",
            "xl-custom":
              "0 10px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.08)",
            "2xl-custom":
              "0 20px 40px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)",
            "3xl-tory-blue":
              "0 25px 50px -12px rgba(12, 84, 160, 0.25), 0 10px 20px -5px rgba(12, 84, 160, 0.15)",
            "inner-xl-custom": "inset 0 2px 8px rgba(0, 0, 0, 0.05)",
            "drop-shadow-lg-custom":
              "drop-shadow(0 10px 8px rgba(12, 84, 160, 0.1)) drop-shadow(0 4px 3px rgba(12, 84, 160, 0.07))",
            "sm-custom": "0 1px 2px rgba(0, 0, 0, 0.08)", // For subtle text shadow
            "2xl-tory-blue-hover":
              "0 15px 30px -8px rgba(12, 84, 160, 0.35), 0 8px 15px -4px rgba(12, 84, 160, 0.2)", // More pronounced shadow on hover
          },
          keyframes: {
            "fade-in": {
              "0%": { opacity: "0", transform: "translateY(-10px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
            "fade-in-up": {
              "0%": { opacity: "0", transform: "translateY(20px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
            float: {
              "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
              "25%": { transform: "translateY(-5px) translateX(5px)" },
              "50%": { transform: "translateY(-10px) translateX(-5px)" },
              "75%": { transform: "translateY(-5px) translateX(5px)" },
            },
            "pulse-slow": {
              "0%, 100%": { opacity: "0.1", transform: "scale(1)" },
              "50%": { opacity: "0.25", transform: "scale(1.02)" },
            },
            "pulse-slow-delay": {
              "0%, 100%": { opacity: "0.1", transform: "scale(1)" },
              "50%": { opacity: "0.25", transform: "scale(1.02)" },
            },
          },
          animation: {
            "fade-in": "fade-in 0.8s ease-out forwards",
            "fade-in-up": "fade-in-up 0.8s ease-out 0.2s forwards",
            float: "float 6s ease-in-out infinite",
            "float-delay": "float 6s ease-in-out infinite 2s", // Longer delay for background elements
            "pulse-slow": "pulse-slow 8s ease-in-out infinite",
            "pulse-slow-delay": "pulse-slow 8s ease-in-out infinite 4s",
          },
        },
      },
      plugins: [],
    };
  };

  // Google Fonts (Open Sans and Inter)
  const openSansLink = document.createElement("link");
  openSansLink.href =
    "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap";
  openSansLink.rel = "stylesheet";
  head.appendChild(openSansLink);

  const interLink = document.createElement("link");
  interLink.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap";
  interLink.rel = "stylesheet";
  head.appendChild(interLink);

  // Apply general body styles (can be done via a global CSS file or within the component's main div)
  const style = document.createElement("style");
  style.innerHTML = `
    body {
      font-family: 'Inter', sans-serif;
      overflow: hidden; /* Prevent body scroll if content overflows due to absolute positioning */
    }
  `;
  head.appendChild(style);
};
