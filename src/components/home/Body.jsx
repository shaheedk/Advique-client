import React, { useContext, useRef, useState } from "react";
import { HiOutlineMicrophone } from 'react-icons/hi';
import assets from "../../assets/assets";
import { AppContext } from "../../contexts/AppContext";
import Heading from "./Heading";
import { Mic } from 'lucide-react';

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

  const recognitionRef = useRef(null);
  const [isMicOn, setIsMicOn] = useState(false);

  const handleMic = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = true;
      recognition.continuous = true;

      recognition.onresult = (event) => {
        let interimTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            setInput((prev) => prev.split("|")[0] + transcript);
          } else {
            interimTranscript += transcript;
          }
        }

        setInput((prev) => {
          const base = prev.split("|")[0];
          return `${base}| ${interimTranscript}`.trim();
        });
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };

      recognition.onend = () => {
        setIsMicOn(false);
        setInput((prev) => prev.split("|")[0]);
        recognitionRef.current = null;
      };

      recognitionRef.current = recognition;
    }

    if (isMicOn) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }

    setIsMicOn((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen pb-40 bg-black">
      {!showResult && <Heading />}

      {/* Message Section */}
      {showResult && (
        <div className="p-4 py-5 max-h-[70vh] overflow-y-scroll scroll-smooth text-white w-full max-w-[900px] mx-auto mt-5 scrollbar-hide">
          <div className="flex flex-col gap-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-5 ${
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
      <div className="absolute bottom-6 lg:bottom-18 left-0 right-0 w-full max-w-[900px] px-4 md:px-10 lg:px-20 mx-auto">
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
            <div
              className={`w-7 h-7 rounded-full flex justify-center items-center cursor-pointer ${
                isMicOn ? "bg-blue-600 text-white" : "text gray-400"
              }`}
              onClick={handleMic}
            >
              <Mic className='w-5 md:w-6 cursor-pointer' />
            </div>
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
