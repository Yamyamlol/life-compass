
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WorkoutCategories from '@/components/WorkoutCategories';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <WorkoutCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
