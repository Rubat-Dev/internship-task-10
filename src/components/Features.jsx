import React from "react";
import FeatureCard from "./FeatureCard";
import Head from "./Head";
import { LiaBrainSolid } from "react-icons/lia";
import { FaCloud, FaLock, FaCogs, FaChartLine, FaMobileAlt } from "react-icons/fa";

const features = [
    {
      id: 1,
      icon: <LiaBrainSolid />,
      title: "AI-Powered Analytics",
      desc: "Leverage advanced machine learning algorithms to gain deeper insights into your data and make informed decisions that drive smarter strategies and long-term growth.",
      gradient: "from-blue-400 to-blue-700",
    },
    {
      id: 2,
      icon: <FaCloud />,
      title: "Cloud Integration",
      desc: "Seamlessly integrate with leading cloud platforms, ensuring scalability, efficiency, and secure access to your data from anywhere in the world at any time.",
      gradient: "from-purple-400 to-pink-600",
    },
    {
      id: 3,
      icon: <FaChartLine />,
      title: "Real-time Monitoring",
      desc: "Stay updated with live dashboards, performance tracking, and intelligent alerts that help your business react quickly and make proactive decisions with ease.",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      id: 4,
      icon: <FaCogs />,
      title: "Automation Tools",
      desc: "Automate repetitive workflows, streamline operations, and empower your teams to focus on high-value tasks while improving productivity across your organization.",
      gradient: "from-orange-400 to-red-600",
    },
    {
      id: 5,
      icon: <FaLock />,
      title: "Secure Infrastructure",
      desc: "Enjoy enterprise-grade security with end-to-end encryption, threat monitoring, and compliance support to protect sensitive data and build customer trust.",
      gradient: "from-cyan-400 to-blue-600",
    },
    {
      id: 6,
      icon: <FaMobileAlt />,
      title: "Customizable Solutions",
      desc: "Tailor every feature to your unique business needs with flexible modules, scalable tools, and user-friendly customization options built for growth.",
      gradient: "from-pink-400 to-fuchsia-600",
    },
  ];
  

const Features = () => {
  return (
    <div className="px-[8vw] py-16">
      <Head
        title="Features That Set Us Apart"
        desc="Discover the powerful tools and capabilities that make TechFlow the preferred choice for forward-thinking businesses."
      />

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
            gradient={feature.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
