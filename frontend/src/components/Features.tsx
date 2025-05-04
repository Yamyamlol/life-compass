
import React from 'react';

const features = [
  {
    title: 'Personalized Workouts',
    description: 'Get custom workout plans based on your fitness level, goals, and available equipment.',
    icon: (
      <svg className="w-10 h-10 text-myfit-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Progress Tracking',
    description: 'Track your fitness journey with detailed metrics and see your improvements over time.',
    icon: (
      <svg className="w-10 h-10 text-myfit-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Nutrition Guidance',
    description: 'Access meal plans and nutritional advice tailored to support your fitness objectives.',
    icon: (
      <svg className="w-10 h-10 text-myfit-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need For Your <span className="gradient-text">Fitness Journey</span>
          </h2>
          <p className="text-gray-600">
            MyFit provides all the tools you need to reach your fitness goals, whether you're just starting out or a seasoned athlete.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-myfit-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-white rounded-2xl p-4 inline-block shadow-sm mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-myfit-700 to-myfit-500 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your fitness routine?</h2>
              <p className="text-myfit-100 mb-8">
                Get started today and join thousands of users who have achieved their fitness goals with MyFit.
              </p>
              <button className="btn-secondary self-start">
                Start Your Free Trial
              </button>
            </div>
            <div className="hidden md:block bg-myfit-100 h-full">
              <div className="h-full flex items-center justify-center">
                <div className="transform -rotate-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="bg-myfit-50 rounded-lg p-4">
                    <div className="w-64 space-y-4">
                      <div className="h-6 bg-myfit-200 rounded-md"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-white rounded-lg shadow-sm"></div>
                        <div className="h-24 bg-white rounded-lg shadow-sm"></div>
                      </div>
                      <div className="h-6 bg-myfit-200 rounded-md w-3/4"></div>
                      <div className="h-20 bg-white rounded-lg shadow-sm"></div>
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

export default Features;
