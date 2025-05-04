import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Heading } from "@/components/auth/Heading";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "@/context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, userData, getUserData } =
    useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activeButton, setActiveButton] = useState<"signin" | "signup">(
    "signin"
  );
  const [loading, setLoading] = useState(!getUserData);

  useEffect(() => {
    if (!getUserData) {
      setLoading(true);
      getUserData().then(() => setLoading(false));
    }
  }, [getUserData]);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;

    try {
      if (activeButton === "signup") {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
        });
        while (loading);
        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          console.log("user data: ", userData);
          navigate("/");
        } else {
          toast.error(data.message || "Authentication failed");
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });
        while (loading);
        if (data.success) {
          console.log(data)
          setIsLoggedin(true);
          getUserData();
          console.log("user data: ", userData);
          navigate("/");
        } else {
          toast.error(data.message || "Authentication failed");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center px-6 sm:px-10 py-6 sm:py-10 bg-myfit-50">
        <div className="w-full max-w-md rounded-lg flex flex-col justify-center p-4 sm:p-8 bg-white shadow-lg">
          <div className="text-center">
            <Heading
              style="font-bold text-lg sm:text-xl tracking-tight"
              label="Welcome to Life Compass"
            />
            <p className="text-xs sm:text-sm font-extralight text-gray-500 pb-2">
              Sign in to your account or create a new one
            </p>
          </div>
          <div className="flex items-center justify-center my-3">
            <span className="flex-grow h-px bg-gray-300"></span>
            <div className="mx-2 sm:mx-4 text-gray-500 font-normal text-xs">
              FITNESS STARTS HERE
            </div>
            <span className="flex-grow h-px bg-gray-300"></span>
          </div>

          {/* Sign In / Sign Up Toggle */}
          <div className="flex bg-gray-200 rounded-xl mb-4 overflow-hidden">
            <div
              className={`flex-1 m-1 text-center py-2 sm:py-3 cursor-pointer font-semibold text-xs sm:text-sm transition-all duration-300 rounded-lg ${
                activeButton === "signin"
                  ? "bg-white text-black"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveButton("signin")}
            >
              Sign In
            </div>
            <div
              className={`flex-1 m-1 text-center py-2 sm:py-3 cursor-pointer font-semibold text-xs sm:text-sm transition-all duration-300 rounded-lg ${
                activeButton === "signup"
                  ? "bg-white text-black"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveButton("signup")}
            >
              Sign Up
            </div>
          </div>

          <form className="space-y-2" onSubmit={onSubmitHandler}>
            {activeButton === "signup" && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-700 sm:text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-0.5 block w-full px-2 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md outline-none focus:border-2 focus:border-indigo-600"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-700 sm:text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-0.5 block w-full px-2 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md outline-none focus:border-2 focus:border-indigo-600"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-gray-700 sm:text-sm"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-0.5 block w-full px-2 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md outline-none focus:border-2 focus:border-indigo-600"
              />
            </div>

            {activeButton === "signup" && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-medium text-gray-700 sm:text-sm"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-0.5 block w-full px-2 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md outline-none focus:border-2 focus:border-indigo-600"
                />
              </div>
            )}

            {activeButton === "signin" && (
              <a
                href="#"
                className="flex text-xs text-gray-500 justify-end hover:text-cyan-600 transition-colors duration-300"
              >
                Forgot password?
              </a>
            )}

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-1.5 px-4 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold hover:bg-cyan-700 transition"
            >
              {activeButton === "signin" ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="text-center text-xs text-gray-500 mt-4">
            By signing up, you agree to our
            <a href="/terms" className="text-myfit-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-myfit-500">
              Privacy Policy
            </a>
            .
          </div>

          <div className="text-center mt-4">
            <button
              onClick={() => navigate("/")}
              className="w-full border border-gray-300 py-2 sm:py-3 font-semibold px-4 sm:px-6 rounded-lg text-xs sm:text-sm hover:bg-gray-100 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
