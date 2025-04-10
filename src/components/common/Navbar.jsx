import { useContext, useState } from "react";
import assets from "../../assets/assets";
import { AppContext } from "../../contexts/AppContext";

const Navbar = () => {
  const { user, setShowLogin, showLogin, logout, loading } = useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    logout();
    setIsDropdownOpen(false);
  };

  if (loading) {
    return (
      <header className="flex justify-between items-center px-4 py-3 bg-black w-full">
        Loading...
      </header>
    );
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-black w-full">
      {/* Left - Logo */}
      <div className="flex items-center">
        <img src={assets.logo} alt="Logo" width={100} />
      </div>

      {/* Center - Empty spacer or nav items */}
      <div className="flex-grow" />

      {/* Right - User Info or Login Button */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-gray-100 hidden sm:inline-block">
              Welcome, {user.name}
            </span>
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <img
                src={assets.user_icon}
                alt="User Icon"
                className="w-10 h-10 rounded-full border border-gray-400 cursor-pointer"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 top-12 z-20 bg-white text-sm text-black rounded-md shadow-lg py-2 min-w-[120px]">
                  <ul>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm transition duration-200"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
