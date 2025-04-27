import React, { useState } from "react";
import { FiHelpCircle, FiMenu, FiPlus, FiSettings } from "react-icons/fi";
import { FaHistory } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);

  const isMobile = window.innerWidth <= 768; // Just check once (simple way)

  const toggleSidebar = () => {
    if (!isMobile) {
      setExtended(prev => !prev);
    }
  };

  return (
    <div className={`min-h-screen  flex flex-col justify-between bg-gray-900 text-gray-100 py-6 transition-all duration-300 ${extended && !isMobile ? 'px-4' : 'px-1'}`}>
      {/* Top Section */}
      <div className="flex flex-col">
        <FiMenu
          size={22}
          className="cursor-pointer mb-6 ml-2"
          onClick={toggleSidebar}
        />

        {/* New Chat Button */}
        <div className="flex items-center gap-2 px-3 py-2 bg-[#7d18d6] rounded-full text-gray-100 text-sm cursor-pointer hover:bg-[#a855f7] transition">
          <FiPlus size={18} />
          {(extended && !isMobile) && <p>New Chat</p>}
        </div>

        {/* Recent Chats */}
        <div className="mt-6">
          {(extended && !isMobile) && <p className="text-sm font-medium mb-3">Recent</p>}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-800 transition">
            <LuMessageSquare className="w-4 h-4" />
            {(extended && !isMobile) && <p className="text-sm">What is React...</p>}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 px-3 py-2 rounded-full hover:bg-gray-700 cursor-pointer transition">
          <FiHelpCircle className="w-5 h-5" />
          {(extended && !isMobile) && <p className="text-sm">Help</p>}
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-full hover:bg-gray-700 cursor-pointer transition">
          <FaHistory className="w-5 h-5" />
          {(extended && !isMobile) && <p className="text-sm">Activity</p>}
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-full hover:bg-gray-700 cursor-pointer transition">
          <FiSettings className="w-5 h-5" />
          {(extended && !isMobile) && <p className="text-sm">Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
