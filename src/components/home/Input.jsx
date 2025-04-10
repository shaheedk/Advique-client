import React from "react";
import assets from "../../assets/assets";

const Input = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 max-w-[900px] py-0 px-20 m-auto">
      <div className="flex items-center justify-between gap-5 mb-3 ml-6 bg-white py-2 px-5 rounded-[50px]">
        <input className="flex-grow flex-shrink basis-0 bg-transparent border-none outline-none p-2 text-[18px]" type="text" placeholder="Enter your prompt here" />
        <div className="flex items-center gap-3">
          <img  className='w-6 cursor-pointer' src={assets.gallery_icon} alt="" />
          <img className='w-6 cursor-pointer' src={assets.mic_icon} alt="" />
          <img className='w-6 cursor-pointer' src={assets.send_icon} alt="" />
        </div>

      </div>
      <p className="text-sm my-3.5 mt-auto text-center font-light text-white">
      Advique AI may display inaccurate information, including about people, so please double-check its responses.
      </p>
    </div>
  );
};

export default Input;