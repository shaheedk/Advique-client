import { useEffect, useState,useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {  AppContext } from "./contexts/AppContext";
import Home from "./pages/Home";
import AuthFlow from "./components/login/AuthFlow";
import Preloader from "./components/UIElements/PreLoader";


const App = () => {
  const { showLogin } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex bg-black sm:max-h-screen md:min-h-screen">
      <ToastContainer />
      {loading ? (
        <Preloader />
      ) : (
        <div className="w-full">
        
          {showLogin && <AuthFlow />}
         <Home/>
        </div>
      )}
  
    </div>
  );
};


export default App;