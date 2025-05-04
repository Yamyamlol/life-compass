import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar as CalendarIcon,
  LogOut,
  User,
  Mail,
  Activity,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { AppContext } from "@/context/AppContext";
import axios from "axios";

// Dummy BMI history data - in a real app, this would come from a database
const bmiHistory = {
  "2025-05-01": 24.2,
  "2025-04-28": 24.5,
  "2025-04-25": 24.8,
  "2025-04-20": 25.1,
  "2025-04-15": 25.4,
};

const Profile = () => {
  const { backendUrl, userData } = useContext(AppContext);
  const [date, setDate] = useState(new Date());
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    currentBmi: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Use useEffect to fetch BMI data on component mount or when userData changes
  useEffect(() => {
    // Only proceed if we have userData (particularly email)
    if (userData?.email) {
      const fetchBMIData = async () => {
        setIsLoading(true);
        try {
          const { data } = await axios.get(
            `${backendUrl}/api/data/get?email=${userData.email}`
          );

          if (data && data.length > 0) {
            setUserInfo({
              name: userData.name || "",
              email: userData.email || "",
              currentBmi: data[0].BMI || 0,
            });
          } else {
            setUserInfo({
              name: userData.name || "",
              email: userData.email || "",
              currentBmi: 0,
            });
          }
        } catch (error) {
          console.error("Error fetching BMI data:", error);
          toast.error("Failed to load your BMI data");
        } finally {
          setIsLoading(false);
        }
      };

      fetchBMIData();
    }
  }, [backendUrl, userData]);

  // Get BMI for the selected date (if available)
  const getSelectedDateBMI = () => {
    if (!date) return null;

    const dateString = date.toISOString().split("T")[0];
    return bmiHistory[dateString];
  };

  // Determine progress message based on BMI trend
  const getMotivationalMessage = () => {
    // In a real app, this would analyze the actual trend of BMI values
    const isPositiveTrend = true; // Dummy value

    if (isPositiveTrend) {
      return "Well done! You're making great progress on your fitness journey.";
    } else {
      return "Keep going! Every step counts towards your health goals.";
    }
  };

  const handleLogout = () => {
    toast.info("Logged out successfully!");
    // In a real app, this would handle actual logout functionality
  };

  // Get initials for avatar
  const getInitials = () => {
    if (!userInfo.name) return "U";
    const nameParts = userInfo.name.split(" ");
    if (nameParts.length === 1)
      return nameParts[0].substring(0, 2).toUpperCase();
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/50 to-background">
        <div className="text-center">
          <p className="text-lg">Loading your profile data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/50 to-background">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6">
            {/* Profile Header Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-4 border-primary/20">
                  <AvatarFallback className="bg-primary/20 text-lg font-medium text-primary">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold">
                    {userInfo.name || "User"}'s Dashboard
                  </h1>
                  <p className="text-muted-foreground">
                    Track your fitness journey and progress
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="gap-2"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" /> Log Out
              </Button>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Column - Personal Info */}
              <div className="md:col-span-3">
                <Card className="bg-card shadow-md border-primary/10 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Your account details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Full Name
                          </p>
                          <p className="font-medium">
                            {userInfo.name || "Not set"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Email Address
                          </p>
                          <p className="font-medium">
                            {userInfo.email || "Not set"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Activity className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Account Status
                          </p>
                          <p className="font-medium">Active</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Fitness Stats
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-secondary/80 rounded-lg p-3 text-center">
                          <p className="text-xs text-muted-foreground">
                            Total Workouts
                          </p>
                          <p className="text-xl font-semibold">28</p>
                        </div>
                        <div className="bg-secondary/80 rounded-lg p-3 text-center">
                          <p className="text-xs text-muted-foreground">
                            Days Active
                          </p>
                          <p className="text-xl font-semibold">15</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - BMI Tracking */}
              <div className="md:col-span-9">
                <div className="space-y-6">
                  {/* BMI Overview Card */}
                  <Card className="bg-gradient-to-r from-myfit-500/10 to-accent/5 border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                          <h2 className="text-2xl font-bold mb-2">
                            BMI Tracking
                          </h2>
                          <p className="text-muted-foreground mb-4">
                            Monitor your Body Mass Index and health progress
                          </p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold">
                              {userInfo.currentBmi
                                ? userInfo.currentBmi.toFixed(1)
                                : "0.0"}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              Current BMI
                            </span>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full ml-2">
                              Healthy
                            </span>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <div className="w-full max-w-[240px] h-2 bg-background/60 rounded-full overflow-hidden mt-2">
                              <div
                                className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                                style={{
                                  width: `${Math.min(
                                    100,
                                    ((userInfo.currentBmi || 0) / 40) * 100
                                  )}%`,
                                }}
                              />
                            </div>
                            <div className="text-xs text-muted-foreground">
                              18.5 - 24.9
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col md:items-end gap-3">
                          <div className="bg-accent/10 text-accent p-3 rounded-lg max-w-[280px] border border-accent/20">
                            <div className="flex gap-2 mb-1">
                              <Award className="h-5 w-5" />
                              <p className="font-medium">Daily Insight</p>
                            </div>
                            <p className="text-sm">
                              {getMotivationalMessage()}
                            </p>
                          </div>

                          <Link to="/bmi">
                            <Button className="gap-2 md:ml-auto">
                              <CalendarIcon className="h-4 w-4" /> Log Today's
                              BMI <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* BMI History Card */}
                  <Card className="shadow-md">
                    <CardHeader>
                      <CardTitle>BMI History</CardTitle>
                      <CardDescription>
                        View your BMI measurements over time
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Calendar View */}
                        <div className="basis-1/2">
                          <div className="p-4 border rounded-lg bg-card">
                            <p className="text-sm font-medium mb-2">
                              Select a date to view your BMI:
                            </p>
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              className="rounded-md border mx-auto"
                              modifiers={{
                                hasData: (date) => {
                                  const dateString = date
                                    .toISOString()
                                    .split("T")[0];
                                  return dateString in bmiHistory;
                                },
                              }}
                              modifiersClassNames={{
                                hasData: "bg-primary/20 font-bold",
                              }}
                            />
                            <div className="text-center mt-2 text-xs text-muted-foreground">
                              Dates with BMI records are highlighted
                            </div>
                          </div>
                        </div>

                        {/* Selected Date BMI & Progress */}
                        <div className="basis-1/2 flex flex-col gap-4">
                          <div className="border rounded-lg p-4 bg-card flex-1">
                            <p className="text-sm font-medium mb-3">
                              Selected Date BMI
                            </p>
                            {getSelectedDateBMI() ? (
                              <>
                                <div className="bg-secondary/40 rounded-lg p-4 text-center">
                                  <p className="text-muted-foreground text-sm">
                                    BMI on{" "}
                                    {date?.toLocaleDateString(undefined, {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    })}
                                  </p>
                                  <div className="text-4xl font-bold my-2">
                                    {getSelectedDateBMI()}
                                  </div>
                                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                    <TrendingUp className="h-3 w-3" /> Healthy
                                    Range
                                  </div>
                                </div>
                              </>
                            ) : (
                              <div className="bg-muted/30 flex flex-col items-center justify-center rounded-lg p-8 text-center h-full">
                                <p className="text-muted-foreground">
                                  No BMI data for this date
                                </p>
                                <Link to="/bmi" className="mt-3">
                                  <Button variant="outline" size="sm">
                                    Log a new measurement
                                  </Button>
                                </Link>
                              </div>
                            )}
                          </div>

                          {/* Progress Section */}
                          <div className="border rounded-lg p-4 bg-card">
                            <p className="text-sm font-medium mb-2">
                              Your Progress
                            </p>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between text-xs mb-1">
                                  <span>Weekly Goal</span>
                                  <span>75% Complete</span>
                                </div>
                                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                  <div
                                    className="bg-primary h-full"
                                    style={{ width: "75%" }}
                                  ></div>
                                </div>
                              </div>

                              <div>
                                <div className="flex justify-between text-xs mb-1">
                                  <span>Monthly Goal</span>
                                  <span>40% Complete</span>
                                </div>
                                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                  <div
                                    className="bg-accent h-full"
                                    style={{ width: "40%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
