import { useContext } from "react";
import assets from "../../assets/assets";
import { AppContext } from "../../contexts/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout } = useContext(AppContext);

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-black ">
      {/* Logo */}
      <div className="flex items-center">
        <img src={assets.logo} alt="Logo" width={100} />
      </div>

      {/* User Info or Login */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-gray-100 hidden sm:inline-block">
              Welcome, shaheed {user.name}
            </span>
            <div className="relative">
              <img
                src={assets.user_icon}
                alt="User Icon"
                className="w-10 h-10 rounded-full border border-gray-400 cursor-pointer"
              />
              {/* Dropdown */}
              <div className="absolute right-0 top-12 hidden group-hover:block hover:block z-20">
                <ul className="bg-white text-sm text-black rounded-md shadow-lg py-2 min-w-[120px]">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={logout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm transition duration-200"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar
