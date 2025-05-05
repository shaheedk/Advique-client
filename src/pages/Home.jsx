import React from "react";

import Main from "../components/home/Main";
import Navbar from '../layout/Navbar'
import Sidebar from "../layout/Sidebar";

const Home = () => {
  return (
    <div className="flex w-full">
      <Sidebar/>

      <div className="flex flex-col w-full">
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
