import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 sm:px-10 lg:px-0">
      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About TechFlow
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2020, TechFlow has been at the forefront of AI innovation, 
              helping businesses transform their operations through intelligent automation 
              and data-driven insights. Our mission is to democratize advanced technology 
              and make it accessible to organizations of all sizes.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a team of world-class engineers and data scientists, we've built a 
              platform that combines cutting-edge AI with intuitive design, enabling 
              our clients to focus on what they do best while we handle the complexity.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="text-center md:text-left flex-grow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
              <div className="text-center md:text-left flex-grow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-3">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
              <div className="text-center md:text-left flex-grow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-3">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600 text-sm">Industry Awards</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed mb-6">
                To create a world where every business, regardless of size, 
                has access to enterprise-grade AI capabilities that drive 
                innovation and growth.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="font-semibold">Innovation First</div>
                    <div className="text-sm opacity-90">Always pushing boundaries</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;