import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="text-center space-y-10 min-h-[500px] flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="max-w-xl md:max-w-3xl mx-auto space-y-5">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
          Build the Future with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-bl from-violet-500 to-fuchsia-500">
            Revolutionary Tech
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl">
          Empower your business with cutting-edge AI solutions that transform
          workflows, boost productivity, and drive unprecedented growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="text-white border px-5 py-3 rounded-full flex items-center gap-3 text-sm sm:text-base hover:bg-white hover:bg-clip-text text-transparent bg-gradient-to-bl hover:text-black from-violet-500 to-fuchsia-500 border-violet-500 transition-all duration-500">
            Get Started Free <FaArrowRight />
          </button>

          <button className="px-5 py-3 rounded-full flex items-center gap-3 text-sm sm:text-base hover:text-white hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 border border-violet-500 transition-all duration-500">
            <IoPlayOutline /> Watch Demo
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center items-center max-w-3xl mx-auto w-full font-bold text-center gap-6 sm:gap-12">
        <div>
          <h1 className="text-2xl sm:text-3xl text-blue-700">50K+</h1>
          <p className="text-gray-600 font-normal text-sm sm:text-base">
            Active Users
          </p>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl text-purple-700">99.9%</h1>
          <p className="text-gray-600 font-normal text-sm sm:text-base">
            Uptime
          </p>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl text-blue-700">24/7</h1>
          <p className="text-gray-600 font-normal text-sm sm:text-base">
            Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
