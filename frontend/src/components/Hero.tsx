
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-myfit-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-lg text-myfit-500 font-medium">Hello and</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Welcome to <span className="gradient-text">MyFit</span>
            </h1>
            <p className="text-lg text-gray-600 md:max-w-md">
              Your personal fitness companion that guides you to achieve your health and fitness goals with customized workouts and nutrition plans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-myfit-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white">JD</div>
                <div className="w-10 h-10 rounded-full bg-accent border-2 border-white flex items-center justify-center text-xs font-bold text-white">KL</div>
                <div className="w-10 h-10 rounded-full bg-myfit-600 border-2 border-white flex items-center justify-center text-xs font-bold text-white">MT</div>
                <div className="w-10 h-10 rounded-full bg-myfit-800 border-2 border-white flex items-center justify-center text-xs font-bold text-white">+5</div>
              </div>
              <p className="text-sm text-gray-600">Join 10,000+ users who achieved their fitness goals</p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-myfit-200 to-accent/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="relative bg-gradient-to-br from-myfit-100 to-white p-4 rounded-3xl shadow-xl">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-[4/3] bg-myfit-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-myfit-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">85%</span>
                      </div>
                      <h3 className="text-xl font-bold text-myfit-800">Weekly Goal</h3>
                      <p className="text-sm text-myfit-600 mt-2">You're making great progress!</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Your Fitness Journey</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Steps</span>
                        <span className="text-sm font-medium">8,456 / 10,000</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-myfit-500 h-2 rounded-full" style={{ width: '84%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Workouts</span>
                        <span className="text-sm font-medium">3 / 5</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
