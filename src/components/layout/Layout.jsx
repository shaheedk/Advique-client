import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
