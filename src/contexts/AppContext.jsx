import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const loadUserData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await axios.get(`${backendUrl}/api/user/userdata`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Raw user data from backend:", data);
        if (data && typeof data === "object" && data.name) {
          setUser(data);
          setIsLoggedIn(true);
          localStorage.setItem("userName", data.name); // Store user name
        } else {
          console.error("Invalid user data received:", data);
          handleLogout();
        }
      } catch (error) {
        console.error("Error loading user data:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
        handleLogout();
        toast.error("Session expired. Please log in again.");
      }
    } else {
      setUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem("userName");
    }
    setLoading(false); // Set loading to false after data is fetched
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await axios.post(
          `${backendUrl}/api/user/logout`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
    } catch (error) {
      console.error("Logout Error:", error);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUser(null);
    toast.success("Logged out successfully!");
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        showLogin,
        setShowLogin,
        backendUrl,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        logout: handleLogout,
        loading, // Expose loading state to components
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;