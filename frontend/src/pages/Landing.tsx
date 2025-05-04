import React from "react";
import Header from "../components/Header";

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <div className="pt-90 flex flex-col gap-5 text-center items-center justify-center">
        <div className="text-gray-500 text-2xl italic">Hello and</div>
        <div className="text-gray-700 text-5xl">
          Welcome to
          <span className="font-bold decoration-none"> life compass</span>
        </div>
        <div className="text-gray-500 text-2xl italic">
          your personal fitness companion
        </div>
      </div>
    </>
  );
};

export default Landing;
