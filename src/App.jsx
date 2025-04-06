import { useContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import { AppContext } from "./contexts/AppContext";
import Preloader from "./components/UIElements/PreLoader";

const App = () => {
  const { showLogin } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex bg-black">
      {loading ? (
        <Preloader />
        
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;

