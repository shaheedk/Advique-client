import { useContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import { AppContext } from "./contexts/AppContext";
import Preloader from "./components/UIElements/PreLoader";
import { Route,Routes } from "react-router-dom";
import AuthFlow from "./components/login/AuthFlow";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { showLogin } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex bg-black">
         <ToastContainer/>
      {loading ? (
        <Preloader />
        
      ) : (
        <div> 
           { showLogin &&<AuthFlow/>}
          <Routes>  
          <Route path='/' element={<Home />} />


        </Routes></div>
       
      
      )}
     
    </div>
  );
};

export default App;

