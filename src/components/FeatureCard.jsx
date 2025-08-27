import React from "react";

const FeatureCard = ({ icon, title, desc, gradient }) => {
  return (
    <div
      className="group w-[320px] flex-grow shadow-2xl py-6 px-8 space-y-4 rounded-xl 
      bg-white transition-all duration-500 ease-in-out 
      hover:bg-gradient-to-tl hover:from-pink-200 hover:to-sky-100"
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-lg text-white text-3xl bg-gradient-to-r ${gradient}`}
      >
        {icon}
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold group-hover:text-blue-600">{title}</h1>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
};

export default FeatureCard;
