import React, { useContext, useState } from "react";
import BmiGauge from "@/components/BmiGauge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import bmiLog from "@/interfaces/BMILogs";
import { AppContext } from "@/context/AppContext";
import { toast } from "react-toastify";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const { backendUrl, userData, getUserData } = useContext(AppContext);
  const parsedHeight = parseFloat(height);
  const parsedInches = parseFloat(inches);

  // Convert height
  let heightInMeters = 0;
  if (heightUnit === "m") {
    heightInMeters = parsedHeight;
  } else if (heightUnit === "cm") {
    heightInMeters = parsedHeight / 100;
  } else if (heightUnit === "ft") {
    const totalInches =
      parsedHeight * 12 + (isNaN(parsedInches) ? 0 : parsedInches);
    heightInMeters = totalInches * 0.0254;
  }

  // Convert weight
  const weightInKg =
    weightUnit === "kg" ? parseFloat(weight) : parseFloat(weight) * 0.453592;

  // Calculate BMI
  const bmi =
    heightInMeters > 0 && weightInKg > 0
      ? weightInKg / (heightInMeters * heightInMeters)
      : 0;

const handleLogBMI = async (e: React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault();
  try {
    const log: bmiLog = {
      height: heightInMeters,
      weight: weightInKg,
      email: userData.email,
    };

    const { data } = await axios.post(backendUrl + "/api/data/push", log);
    if (data.success) {
      const updatedData = await getUserData(); // ✅ Use the return value
      toast.success("BMI logged and user data updated");
      console.log("Updated user data: ", updatedData);

    } else {

      console.error(data.message ," Data entry failed");
      toast.error(data.message || "Data entry failed");
    }
  } catch (error) {
    console.error("error while pushing BMI log: ",error )
    toast.error("Error while pushing the BMI log: " + error.message);
  }
};

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-secondary to-background py-12">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="bg-card shadow-lg rounded-2xl p-8">
            <h1 className="text-2xl font-bold text-center mb-2 gradient-text">
              BMI Calculator
            </h1>
            <p className="text-center text-muted-foreground mb-6">
              Track your fitness progress with our easy-to-use BMI calculator
            </p>

            <BmiGauge bmiValue={bmi} />

            {/* HEIGHT INPUT */}
            <div className="mt-8">
              <Label className="text-foreground font-medium mb-2">Height</Label>
              <div className="flex gap-3 items-center mt-1">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder={heightUnit === "ft" ? "Feet" : "Height"}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>

                {heightUnit === "ft" && (
                  <div className="w-24">
                    <Input
                      type="number"
                      placeholder="Inches"
                      value={inches}
                      onChange={(e) => setInches(e.target.value)}
                    />
                  </div>
                )}

                <div className="w-24">
                  <Select
                    value={heightUnit}
                    onValueChange={(value) => {
                      setHeightUnit(value);
                      setHeight("");
                      setInches("");
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="m">m</SelectItem>
                      <SelectItem value="cm">cm</SelectItem>
                      <SelectItem value="ft">ft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* WEIGHT INPUT */}
            <div className="mt-6">
              <Label className="text-foreground font-medium mb-2">Weight</Label>
              <div className="flex gap-3 items-center mt-1">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder="Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className="w-24">
                  <Select
                    value={weightUnit}
                    onValueChange={(value) => {
                      setWeightUnit(value);
                      setWeight("");
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="lb">lb</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* LOG BMI BUTTON */}
            <div className="mt-6">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleLogBMI}
              >
                Log BMI
              </Button>
            </div>

            {bmi > 0 && (
              <div className="mt-8 p-4 bg-secondary rounded-lg">
                <p className="text-center">
                  Your BMI is{" "}
                  <span className="font-semibold">
                    {Math.round(bmi * 10) / 10}
                  </span>{" "}
                  which indicates you are{" "}
                  <span className="font-semibold">
                    {bmi < 18.5 && "underweight"}
                    {bmi >= 18.5 && bmi < 25 && "at a healthy weight"}
                    {bmi >= 25 && bmi < 30 && "overweight"}
                    {bmi >= 30 && "obese"}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BMI;
