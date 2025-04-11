import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState(
    localStorage.getItem("userName")
      ? { name: localStorage.getItem("userName") }
      : null
  );
  const [loading, setLoading] = useState(true);

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
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      setIsLoggedIn(false);
      setUser(null);
      toast.success("Logged out successfully!");
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUserName = localStorage.getItem("userName");
console.log(token)
    if (token && savedUserName) {
      setIsLoggedIn(true);
      setUser({ name: savedUserName });
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
    setLoading(false);
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
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;