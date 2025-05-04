
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface BmiGaugeProps {
  bmiValue: number;
}

const BmiGauge: React.FC<BmiGaugeProps> = ({ bmiValue }) => {
  const roundedBmi = Math.round(bmiValue * 10) / 10;
  
  // Determine BMI category and color
  let category = "";
  let color = "";
  
  if (bmiValue < 18.5) {
    category = "Underweight";
    color = "#00BFFF"; // Light Blue
  } else if (bmiValue >= 18.5 && bmiValue < 25) {
    category = "Normal weight";
    color = "#3CB371"; // Medium Sea Green
  } else if (bmiValue >= 25 && bmiValue < 30) {
    category = "Overweight";
    color = "#FFD700"; // Gold
  } else if (bmiValue >= 30 && bmiValue < 35) {
    category = "Obese (Class I)";
    color = "#FF8C00"; // Dark Orange
  } else if (bmiValue >= 35) {
    category = "Obese (Class II+)";
    color = "#FF4500"; // Orange Red
  }
  
  // Calculate position for gauge visual
  const maxBmi = 40; // Maximum BMI value on gauge
  const percentage = Math.min((bmiValue / maxBmi) * 100, 100);
  
  // Chart data
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color || '#e2e8f0', '#e2e8f0'],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
      },
    ],
  };
  
  const options = {
    cutout: '70%',
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[250px] h-[150px]">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center">
          <div className="font-bold text-2xl" style={{ color }}>{roundedBmi || '—'}</div>
          <div className="text-sm mt-1">{bmiValue > 0 ? category : 'Enter your details'}</div>
        </div>
      </div>
      
      <div className="w-full grid grid-cols-5 text-xs mt-4 text-center">
        <div className="text-[#00BFFF]">Underweight<br/>&lt;18.5</div>
        <div className="text-[#3CB371]">Normal<br/>18.5-24.9</div>
        <div className="text-[#FFD700]">Overweight<br/>25-29.9</div>
        <div className="text-[#FF8C00]">Obese I<br/>30-34.9</div>
        <div className="text-[#FF4500]">Obese II<br/>&gt;35</div>
      </div>
    </div>
  );
};

export default BmiGauge;
