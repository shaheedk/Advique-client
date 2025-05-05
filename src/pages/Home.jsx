import React from "react";

import Body from "../components/home/Body";
import Navbar from '../layout/Navbar'
import Sidebar from "../layout/Sidebar";

const Home = () => {
  return (
    <div className="flex w-full">
      <Sidebar/>

      <div className="flex flex-col w-full">
        <Navbar />
        <Body />
      </div>
    </div>
  );
};

export default Home;
