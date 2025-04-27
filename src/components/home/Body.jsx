import React, { useContext } from "react";

import assets from "../../assets/assets";
import { AppContext } from "../../contexts/AppContext";
import Heading from "./Heading";

const Body = () => {
  const {
    sendMessage,
    recentPrompt,
    showResult,
    loadingD,
    resultData,
    setInput,
    input,
    messages,
    setShowLogin,
    user,
  } = useContext(AppContext);

  return (
    <div className="relative min-h-screen pb-40"> 
      {!showResult && (
        <Heading/>
      )}

      {/* Message Section */}
      {showResult && (
        <div className="p-4 py-5 sm:max-h-[100vh-400px] lg:max-h-[70vh] overflow-y-scroll scroll-smooth text-white w-full max-w-[900px] mx-auto mt-5 scrollbar-hide">
          <div className="flex flex-col gap-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-5 ${
                  msg.sender === "user" ? "ml-0" : "ml-10 mt-3"
                }`}
              >
                <img
                  src={msg.sender === "user" ? assets.user_icon : assets.gemini_icon}
                  alt=""
                  className="w-10 rounded-full"
                />
                {msg.loading && msg.text === "" ? (
                  <div className="loader flex flex-col gap-2 w-full max-w-[700px]">
                    <hr className="rounded-md border-none bg-gradient-to-r from-violet-700 via-black to-violet-900 h-4 opacity-60 shadow-lg animate-[loader_3s_linear_infinite]" />
                    <hr className="rounded-md border-none bg-gradient-to-r from-violet-700 via-black to-violet-900 h-4 opacity-60 shadow-lg animate-[loader_3s_linear_infinite]" />
                    <hr className="rounded-md border-none bg-gradient-to-r from-violet-700 via-black to-violet-900 h-4 opacity-60 shadow-lg animate-[loader_3s_linear_infinite]" />
                  </div>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: msg.text.replace(/\*+/g, "<br/>"),
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input Section */}
      <div className="absolute bottom-4 lg:bottom-5 left-0 right-0 w-full max-w-[900px] px-4 md:px-10 lg:px-20 mx-auto">
        <div className="flex items-center justify-between gap-3 md:gap-5 mb-3 bg-white py-2 px-4 md:px-5 rounded-full">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (user) {
                  sendMessage();
                } else {
                  setShowLogin(true);
                }
              }
            }}
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="flex-grow bg-transparent border-none outline-none p-2 text-[16px] md:text-[18px]"
            type="text"
            placeholder="Enter your prompt here"
          />

          <div className="flex items-center gap-2 md:gap-3">
            <img className="w-5 md:w-6 cursor-pointer" src={assets.mic_icon} alt="mic" />
            <img
              className="w-5 md:w-6 cursor-pointer"
              src={assets.send_icon}
              alt="send"
              onClick={() => {
                if (user) {
                  sendMessage();
                } else {
                  setShowLogin(true);
                }
              }}
            />
          </div>
        </div>

        <p className="text-xs md:text-sm my-2.5 text-center font-light text-white">
          Advique AI may display inaccurate information, including about people,
          so please double-check its responses.
        </p>
      </div>
    </div>
  );
};

export default Body;
