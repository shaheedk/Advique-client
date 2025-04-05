// components/Preloader.jsx
import React from 'react';
import Logo from './Logo';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-[#0F172A] flex items-center justify-center z-50">
      <Logo />
    </div>
  );
};

export default Preloader;
