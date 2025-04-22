import React, { useContext } from "react";
import { LuMessageSquare } from "react-icons/lu";
import { FaCode, FaCompass } from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";
import assets from "../../assets/assets";
import Heading from "./Heading";
import { AppContext } from "../../contexts/AppContext";

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
  const filteredMessages = messages.slice(1); // Skip the first message (user's prompt)

  return (
    <div>
      {!showResult ? (
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
      ) : (
        <div className="result p-0 py-5 max-h-[70vh] overflow-y-scroll text-white max-w-[900px] ">
          <div className="result p-0 py-5 max-h-[70vh] overflow-y-scroll text-white max-w-[900px] mt-5">
            <div className="text-white flex flex-col gap-4 px-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-[20px] ${
                    msg.sender === "user" ? "ml-0" : "ml-10 mt-3"
                  }`}
                >
                  <img
                    src={
                      msg.sender === "user"
                        ? assets.user_icon
                        : assets.gemini_icon
                    }
                    alt=""
                    className="w-10 rounded-full"
                  />
                  {msg.loading && msg.text === "" ? (
                    <div className="loader flex flex-col gap-[6px] w-full max-w-[700px]">
                      <hr className="rounded-md border-none bg-gradient-to-r from-violet-700 via-black to-violet-900 h-[16px] opacity-60 shadow-lg animate-[loader_3s_linear_infinite]" />
                      <hr className="rounded-md border-none bg-gradient-to-r from-violet-700 via-black to-violet-900 h-[16px] opacity-60 shadow-lg animate-[loader_3s_linear_infinite]" />
                      <hr className="rounded-md border-none bg-gradient-to-r from-violet-700 via-black to-violet-900 h-[16px] opacity-60 shadow-lg animate-[loader_3s_linear_infinite]" />
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
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 max-w-[900px] py-0 px-20 m-auto">
        <div className="flex items-center justify-between gap-5 mb-3 ml-6 bg-white py-2 px-5 rounded-[50px]">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (user) {
                  sendMessage();
                } else {
                  setShowLogin(true); // or alert("Please login to continue.")
                }
              }
            }}
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="flex-grow flex-shrink basis-0 bg-transparent border-none outline-none p-2 text-[18px]"
            type="text"
            placeholder="Enter your prompt here"
          />

          <div className="flex items-center gap-3">
            <img className="w-6 cursor-pointer" src={assets.mic_icon} alt="" />
            <img
              className="w-6 cursor-pointer"
              src={assets.send_icon}
              alt="send"
              onClick={() => {
                if (user) {
                  sendMessage();
                } else {
                  setShowLogin(true); // show the login modal or component
                }
              }}
            />
          </div>
        </div>
        <p className="text-sm my-3.5 mt-auto text-center font-light text-white">
          Advique AI may display inaccurate information, including about people,
          so please double-check its responses.
        </p>
      </div>
    </div>
  );
};

export default Body;
