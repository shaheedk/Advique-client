import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Check if the user is already logged in based on localStorage token
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
      // Clear user data and token from localStorage and state
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      setIsLoggedIn(false);
      setUser(null);
      toast.success("Logged out successfully!");
      setLoading(false);
    }
  };

  // useEffect runs on initial component mount to set authentication state
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUserName = localStorage.getItem("userName");
    console.log(token);

    if (token && savedUserName) {
      setIsLoggedIn(true);
      setUser({ name: savedUserName });
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }

    setLoading(false);
  }, []);

  // function for setup the api and chat

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loadingD, setLoadingD] = useState(false);
  const [messages, setMessages] = useState([]);
  const [result, setResult] = useState("");

const delayParams=(index,nextWord)=>{

}

const sendMessage = async () => {
  if (!input.trim()) return;

  const userMsg = { sender: "user", text: input };
  const loadingBotMsg = { sender: "bot", text: "", loading: true };

  setMessages((prev) => [...prev, userMsg, loadingBotMsg]);
  setInput("");
  setRecentPrompt(input);
  setShowResult(true);

  // Typing effect function
  const typeText = (text, callback) => {
    let index = 0;
    const speed = 30; // typing speed in ms

    const interval = setInterval(() => {
      setMessages((prev) =>
        prev.map((msg, i, arr) =>
          i === arr.length - 1 && msg.loading
            ? { ...msg, text: text.slice(0, index + 1) }
            : msg
        )
      );

      index++;
      if (index === text.length) {
        clearInterval(interval);
        callback(); // Finish loading
      }
    }, speed);
  };

  try {
    const res = await axios.post(`${backendUrl}/api/chat`, {
      message: input,
    });

    const botReply = res.data.reply;

    typeText(botReply, () => {
      setMessages((prev) =>
        prev.map((msg, i, arr) =>
          i === arr.length - 1 && msg.loading
            ? { ...msg, loading: false }
            : msg
        )
      );
      setResult(botReply);
    });
  } catch (error) {
    const errorMsg = "⚠️ Error: Couldn't reach API.";
    setMessages((prev) =>
      prev.map((msg, i, arr) =>
        i === arr.length - 1 && msg.loading
          ? { sender: "bot", text: errorMsg }
          : msg
      )
    );
    setResult(errorMsg);
  }
};

  // Return the context provider with the states and functions as value
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
        sendMessage,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        showResult,
        setShowResult,
        loadingD,
        setLoadingD,
        messages,
        setMessages,
        result,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Export the AppProvider as default for wrapping the app
export default AppProvider;
