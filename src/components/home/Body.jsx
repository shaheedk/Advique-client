import React from "react";
import assets from "../../assets/assets";
import { LuMessageSquare } from "react-icons/lu";
import { FaCode, FaCompass } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";

const Body = () => {
  return (
    <div className="max-w-[900px] m-auto bg-black text-white">
      <div className="my-[50px] mx-0 text-5xl font-medium p-5 text-gray-400 ">
        <p>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#301370]">
            Hello, Dev
          </span>
        </p>
        <p>How Can I help you today</p>
      </div>
      <div className="grid gap-3.5 p-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] ">
        <div className="h-48 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-md relative cursor-pointer transition-all duration-300 hover:brightness-105  hover:shadow-purple-500/30">
          <p className="text-lg">
            Suggest beautiful places to see on an upcoming road trip
          </p>

          <div className="w-7 h-7 flex items-center justify-center  rounded-full absolute bottom-2 right-2">
            <FaCompass className="text-white text-base" size={27} />
          </div>
        </div>
        <div className="h-48 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-md relative cursor-pointer transition-all duration-300 hover:brightness-105  hover:shadow-purple-500/30">
          <p className="text-lg">
            Briefly summarize this concept :urban planning
          </p>
          <div className=" absolute bottom-2 right-2">
            <MdLightbulbOutline size={29} />
          </div>
        </div>
        <div className="h-48 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-md relative cursor-pointer transition-all duration-300 hover:brightness-105  hover:shadow-purple-500/30">
          <p className="text-lg">
            Brainstorm team bonding activities for out work retreat
          </p>
          <div className=" absolute bottom-2 right-3">
            <LuMessageSquare size={25} />
          </div>
        </div>
        <div className="h-48 p-4 bg-gradient-to-r from-[#21045f] to-[#5b03ac] rounded-md relative cursor-pointer transition-all duration-300 hover:brightness-105  hover:shadow-purple-500/30">
          <p className="text-lg">
            Improve the readability of the following code
          </p>
          <div className=" absolute bottom-2 right-2">
            <FaCode size={27} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
