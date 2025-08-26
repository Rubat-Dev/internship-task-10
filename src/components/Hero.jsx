import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <div className="text-center space-y-10 min-h-[500px] flex flex-col  justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-2xl mx-auto space-y-5">
        <h1 className="text-5xl font-bold">
          Build the Future with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-bl from-violet-500 to-fuchsia-500">
            Revolutionary Tech
          </span>
        </h1>
        <p className="text-gray-600 text-xl">
          Empower your business with cutting-edge AI solutions that transform
          workflows, boost productivity, and drive unprecedented growth.
        </p>
        <div className="flex items-center justify-center gap-3">
        <button className="text-white border px-5 py-3 rounded-full flex items-center gap-3 hover:bg-white hover:bg-clip-text text-transparent bg-gradient-to-bl hover:text-black from-violet-500 to-fuchsia-500 border-violet-500">Get Started Free <FaArrowRight /></button>
        <button className="px-5 py-3 rounded-full flex items-center gap-3 hover:text-white hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 border duration-500 border-violet-500"><IoPlayOutline /> Watch Demo</button>
        </div>
      </div>
      <div className="flex max-w-[600px] mx-auto w-full font-bold">
        <div className="flex-1">
          <h1 className="text-3xl  text-blue-700">50K+</h1>
          <p className="text-gray-600 font-normal">Active Users</p>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl text-purple-700">99.9%</h1>
          <p className="text-gray-600 font-normal">Uptime</p>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl text-blue-700">24/7</h1>
          <p className="text-gray-600 font-normal">Support</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
