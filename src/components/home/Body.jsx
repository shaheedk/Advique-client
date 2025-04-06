import React from "react";
import assets from "../../assets/assets";
import { LuMessageSquare } from "react-icons/lu";
import { FaCode, FaCompass } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";

const Body = () => {
  return (
    <div className="max-w-[900px] mx-auto px-6 pt-12 text-white">
      {/* Heading */}
      <div className="mb-10 text-4xl md:text-5xl font-medium">
        <p>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#301370]">
            Hello, Dev
          </span>
        </p>
        <p className="text-gray-300 mt-1">How Can I help you today</p>
      </div>

      {/* Cards */}
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {/* Card 1 */}
        <div className="h-44 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-xl relative cursor-pointer transition duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/30">
          <p className="text-base leading-snug">
            Suggest beautiful places to see on an upcoming road trip
          </p>
          <div className="absolute bottom-3 right-3   p-1">
            <FaCompass  size={24} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-44 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-xl relative cursor-pointer transition duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/30">
          <p className="text-base leading-snug">
            Briefly summarize this concept: urban planning
          </p>
          <div className="absolute bottom-3 right-3   p-1">
            <MdLightbulbOutline className="text-white" size={24} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="h-44 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-xl relative cursor-pointer transition duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/30">
          <p className="text-base leading-snug">
            Brainstorm team bonding activities for our work retreat
          </p>
          <div className="absolute bottom-3 right-3   p-1">
            <LuMessageSquare className="text-white" size={22} />
          </div>
        </div>

        {/* Card 4 */}
        <div className="h-44 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-xl relative cursor-pointer transition duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/30">
          <p className="text-base leading-snug">
            Improve the readability of the following code
          </p>
          <div className="absolute bottom-3 right-3   p-1">
            <FaCode className="text-white" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
