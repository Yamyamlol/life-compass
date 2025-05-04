import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import AppContextType from "@/interfaces/AppContextType";

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getAuthState = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(backendUrl + "/api/auth/is-auth", {
        withCredentials: true,
      });

      if (data.success) {
        setIsLoggedin(true);
        await getUserData();
      }
    } catch (error) {
      console.error("Auth check error:", error);
      // Only show toast for real errors, not for "not authenticated" responses
      if (error.response?.status !== 401) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/data`, {
        withCredentials: true,
      });

      if (data.success) {
        console.log(data)
        setUserData(data.userData);
        return data.userData; // Return user data for immediate use
      } else {
        toast.error(data.message);
        console.error(data.message);
        return null;
      }
    } catch (error) {
      console.error("Get user data error:", error);
      toast.error(
        "Failed to fetch user data: " +
          (error.response?.data?.message || error.message)
      );
      return null;
    }
  };

  const logout = async () => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/auth/logout`,
        {},
        { withCredentials: true }
      );

      if (data.success) {
        setIsLoggedin(false);
        setUserData(null);
        toast.success("Logged out successfully");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error(
        "Logout failed: " + (error.response?.data?.message || error.message)
      );
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
    logout,
    isLoading,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
