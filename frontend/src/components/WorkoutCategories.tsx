
import React from 'react';

const categories = [
  {
    title: 'Strength Training',
    description: 'Build muscle and increase strength',
    workouts: 24,
    bgColor: 'bg-myfit-100',
    textColor: 'text-myfit-800',
  },
  {
    title: 'Cardio',
    description: 'Improve endurance and burn calories',
    workouts: 18,
    bgColor: 'bg-accent/10',
    textColor: 'text-accent',
  },
  {
    title: 'Yoga & Flexibility',
    description: 'Enhance mobility and reduce stress',
    workouts: 16,
    bgColor: 'bg-myfit-50',
    textColor: 'text-myfit-700',
  },
  {
    title: 'HIIT',
    description: 'High-intensity interval workouts',
    workouts: 12,
    bgColor: 'bg-accent/10',
    textColor: 'text-accent',
  },
];

const WorkoutCategories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore <span className="gradient-text">Workout Categories</span>
          </h2>
          <p className="text-gray-600">
            Discover a variety of workouts designed to target different aspects of your fitness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`workout-card group ${category.bgColor} border border-gray-100 cursor-pointer`}
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className={`text-xl font-bold ${category.textColor}`}>{category.title}</h3>
                    <span className="text-sm font-medium bg-white px-3 py-1 rounded-full shadow-sm">
                      {category.workouts} Workouts
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                </div>
                <div className={`inline-flex items-center font-medium ${category.textColor} group-hover:underline`}>
                  Explore Workouts
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkoutCategories;
