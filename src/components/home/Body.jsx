import React from "react";
import { LuMessageSquare } from "react-icons/lu";
import { FaCode, FaCompass } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";

import Heading from "./Heading";

const Body = () => {
  return (
    <div>
      <Heading />
      <div className="max-w-[900px] mx-auto px-6 pt-12 text-white">
        {/* Cards */}
        <div className="flex gap-4 ">
          {/* Card 1 */}
          <div className="min-w-[220px] h-44 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-xl relative cursor-pointer transition duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/30">
            <p className="text-base leading-snug">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <div className="absolute bottom-3 right-3 p-1">
              <FaCompass size={24} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[220px] h-44 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-xl relative cursor-pointer transition duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/30">
            <p className="text-base leading-snug">
              Briefly summarize this concept: urban planning
            </p>
            <div className="absolute bottom-3 right-3 p-1">
              <MdLightbulbOutline className="text-white" size={24} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-[220px] h-44 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-xl relative cursor-pointer transition duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/30">
            <p className="text-base leading-snug">
              Brainstorm team bonding activities for our work retreat
            </p>
            <div className="absolute bottom-3 right-3 p-1">
              <LuMessageSquare className="text-white" size={22} />
            </div>
          </div>

          {/* Card 4 */}
          <div className="min-w-[220px] h-44 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-xl relative cursor-pointer transition duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/30">
            <p className="text-base leading-snug">
              Improve the readability of the following code
            </p>
            <div className="absolute bottom-3 right-3 p-1">
              <FaCode className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
