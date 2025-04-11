import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = ({ onOtpSent }) => {
  const { setShowLogin, backendUrl, setUser, isLoggedIn, setIsLoggedIn, logout } =
    useContext(AppContext);
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (isSignUp && (!email || !password || !name)) {
      toast.error("Please fill in all required fields");
      return;
    } else if (!isSignUp && (!email || !password)) {
      toast.error("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    try {
      if (isSignUp) {
        const { data } = await axios.post(`${backendUrl}/api/user/send-otp`, {
          name,
          email,
          password,
        });
        if (data.success) {
          toast.success("OTP sent to your email.");
          onOtpSent(email);
          setUser({ name });
        } else {
          toast.error(data.message || "Failed to send OTP.");
        }
      } else {
        const { data } = await axios.post(
          `${backendUrl}/api/user/login`,
          { email, password },
          { headers: { "Content-Type": "application/json" } }
        );
        if (data.success) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userName", data.user?.name || name);
          setIsLoggedIn(true);
          setUser({ name: data.user?.name || name, email });
          toast.success("Login successful!");
          setShowLogin(false);
        } else {
          toast.error(data.message || "Login failed.");
        }
      }
    } catch (error) {
      console.error("Submit Error:", error);
      const message =
        error?.response?.data?.message ||
        (error?.response?.status === 400
          ? "Credentials are missing or invalid."
          : error?.response?.status === 401
          ? "Unauthorized. Please check your credentials."
          : error?.response?.status === 404
          ? "User not found."
          : "Something went wrong. Please try again later.");
      toast.error(message);
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.div
        className="relative bg-white p-10 rounded-xl text-slate-500"
        initial={{ opacity: 0.2, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isLoggedIn ? (
          <>
            <h1 className="text-center text-2xl text-neutral-700">Welcome</h1>
            <p className="text-sm text-center">You are logged in!</p>
            <button
              onClick={() => {
                logout();
                setName("");
                setEmail("");
                setPassword("");
              }}
              className="w-full mt-4 bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <form onSubmit={onSubmitHandler}>
            <h1 className="text-center text-2xl text-neutral-700">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h1>
            <p className="text-sm text-center">
              {isSignUp
                ? "Create your account to get started."
                : "Sign in to your account."}
            </p>

            {isSignUp && (
              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required={isSignUp}
                  className="outline-none text-sm flex-1"
                  onChange={(e) => setName(e.target.value.trim())}
                  value={name}
                />
              </div>
            )}

            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
              <input
                type="email"
                placeholder="Your Email Id"
                required
                className="outline-none text-sm flex-1"
                onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
                value={email}
              />
            </div>

            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
              <input
                type="password"
                placeholder="Password"
                required
                className="outline-none text-sm flex-1"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            {error && (
              <p className="mt-2 text-center text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-4 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting
                ? isSignUp
                  ? "Signing Up..."
                  : "Signing In..."
                : isSignUp
                ? "Sign Up"
                : "Sign In"}
            </button>

            <p className="mt-5 text-center">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Login" : "Sign Up"}
              </span>
            </p>
          </form>
        )}

        <button
          type="button"
          onClick={() => setShowLogin(false)}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );
};

export default SignUp;