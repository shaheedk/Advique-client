import { useContext } from "react";
import assets from "../assets/assets";
import { AppContext } from "../contexts/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, loading } = useContext(AppContext);

  if (loading) {
    return (
      <header className="flex justify-between items-center px-4 py-3 bg-black w-full fixed">
        <div>Loading...</div>
      </header>
    );
  }
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-black w-full">
      <div className="flex items-center">
        <img src={assets.logo} alt="Logo" width={100} />
      </div>
      <div className="flex-grow" />
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-gray-100 hidden sm:inline-block">
              Welcome, {user.name}
            </span>
            <div className="relative group">
              <img
                src={assets.user_icon}
                alt="User Icon"
                className="w-10 h-10 rounded-full border border-gray-400 cursor-pointer"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border-none text-sm">
                  <li
                    className="py-1 px-2 cursor-pointer pr-10 hover:bg-gray-100"
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

export default Navbar;
