interface UserData {
  _id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

interface AppContextType {
  backendUrl: string;
  isLoggedin: boolean;
  setIsLoggedin: (isLoggedin: boolean) => void;
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
  getUserData: () => Promise<UserData | null>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

export default AppContextType;
