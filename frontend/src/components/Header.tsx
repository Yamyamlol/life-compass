import React, { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { AppContext } from "@/context/AppContext";

const Header = () => {
  const { userData, isLoggedin, logout, isLoading } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showUserMenu, setShowUserMenu] = React.useState(false);

  // Get user's initial
  const getUserInitial = () => {
    if (userData && userData.name && userData.name.length > 0) {
      return userData.name[0].toUpperCase();
    }
    return "U"; // Default initial if name is empty
  };

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserMenu && !event.target.closest(".user-menu-container")) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showUserMenu]);

  return (
    <header className="bg-gradient-to-r from-myfit-700 to-myfit-500 text-white shadow-md relative z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            Life<span className="text-teal-950 font-extrabold">Compass</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="font-medium hover:text-teal-950 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/bmi"
            className="font-medium hover:text-teal-950 transition-colors"
          >
            BMI Calculator
          </Link>
          <Link
            to="/workouts"
            className="font-medium hover:text-teal-950 transition-colors"
          >
            Workouts
          </Link>
          <Link
            to="/nutrition"
            className="font-medium hover:text-teal-950 transition-colors"
          >
            Nutrition
          </Link>
          <Link
            to="/about"
            className="font-medium hover:text-teal-950 transition-colors"
          >
            About
          </Link>

          {isLoading ? (
            <div className="flex items-center">
              <div className="w-8 h-8 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            </div>
          ) : isLoggedin && userData ? (
            <div className="relative">
              <div
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-10 h-10 text-xl sm:w-12 sm:h-12 sm:text-2xl flex justify-center items-center rounded-full bg-teal-950 text-white relative cursor-pointer user-menu-container"
              >
                {getUserInitial()}
                {showUserMenu && (
                  <div className="w-48 absolute top-full right-0 mt-2 z-10 text-black rounded shadow-lg">
                    <div className="bg-white rounded overflow-hidden">
                      <div className="p-3 border-b border-gray-200">
                        <p className="font-medium text-gray-800">
                          {userData.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {userData.email}
                        </p>
                      </div>
                      <ul className="list-none m-0 p-0">
                        <li className="border-b border-gray-100">
                          <Link
                            to="/profile"
                            className="flex items-center p-3 hover:bg-gray-50"
                          >
                            <User size={16} className="mr-2" />
                            <span>Profile</span>
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              logout();
                              setShowUserMenu(false);
                            }}
                            className="flex items-center p-3 w-full text-left hover:bg-gray-50 text-red-600"
                          >
                            <LogOut size={16} className="mr-2" />
                            <span>Logout</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to="/login">
              <Button className="ml-4 bg-white text-myfit-700 hover:bg-white/90">
                Login
              </Button>
            </Link>
          )}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-myfit-700 z-50 shadow-xl">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium py-2 hover:text-teal-950 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/bmi"
                className="font-medium py-2 hover:text-teal-950 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                BMI Calculator
              </Link>
              <Link
                to="/workouts"
                className="font-medium py-2 hover:text-teal-950 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Workouts
              </Link>
              <Link
                to="/nutrition"
                className="font-medium py-2 hover:text-teal-950 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nutrition
              </Link>
              <Link
                to="/about"
                className="font-medium py-2 hover:text-teal-950 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              {isLoading ? (
                <div className="flex justify-center py-2">
                  <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                </div>
              ) : isLoggedin && userData ? (
                <div className="border-t border-myfit-600 pt-3 mt-2">
                  <div className="flex items-center space-x-3 px-1 py-2">
                    <div className="w-10 h-10 flex justify-center items-center rounded-full bg-teal-950 text-white">
                      {getUserInitial()}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{userData.name}</p>
                      <p className="text-xs text-myfit-100 truncate">
                        {userData.email}
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/profile"
                    className="flex items-center py-2 hover:text-teal-950 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={16} className="mr-2" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center py-2 hover:text-red-300 transition-colors text-white w-full text-left"
                  >
                    <LogOut size={16} className="mr-2" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-white text-myfit-700 hover:bg-white/90">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
