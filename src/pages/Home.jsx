import React from "react";
import Sidebar from "../components/home/Sidebar";
import Main from "../components/home/Main";
import Navbar from "../components/common/Navbar";

const Home = () => {
  return (
    <div className="flex w-full">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Navbar />

        {/* Main content below the navbar */}
        <Main />
      </div>
    </div>
  );
};

export default Home;
