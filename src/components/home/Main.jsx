import React from 'react';
import Navbar from '../common/Navbar';
import Body from './Body';
import Input from './Input';

const Main = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main content body */}
      <main className="flex-1">
        <Body />
      </main>

   
      <footer >
        <Input />
      </footer>
    </div>
  );
};

export default Main;

