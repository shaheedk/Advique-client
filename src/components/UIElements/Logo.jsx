import React from 'react';

const Logo = () => {
  return (
    <svg width="300" height="300" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
          .brain {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            animation: draw 2s ease forwards;
          }

          .pulse {
            animation: pulse 1.5s infinite;
          }

          .line {
            stroke-dasharray: 20;
            stroke-dashoffset: 20;
            animation: draw 1s ease 1s forwards;
          }

          .fade-in {
            opacity: 0;
            animation: fadeIn 1s ease 2s forwards;
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes pulse {
            0%, 100% {
              r: 2.5;
              opacity: 1;
            }
            50% {
              r: 4;
              opacity: 0.6;
            }
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>

      {/* Background */}
      <rect width="100" height="100" rx="5" fill="#0d1117" />

      {/* AI Grid Style */}
      <rect x="25" y="25" width="50" height="50" stroke="#8b5cf6" strokeWidth="2" className="brain" />

      {/* Circles (Tech Nodes) */}
      <circle cx="30" cy="30" r="2.5" fill="#a78bfa" className="pulse" />
      <circle cx="70" cy="30" r="2.5" fill="#a78bfa" className="pulse" />
      <circle cx="70" cy="70" r="2.5" fill="#a78bfa" className="pulse" />
      <circle cx="30" cy="70" r="2.5" fill="#a78bfa" className="pulse" />
      <circle cx="50" cy="50" r="2.5" fill="#a78bfa" className="pulse" />

      {/* Lines */}
      <line x1="30" y1="30" x2="70" y2="30" stroke="#8b5cf6" strokeWidth="1.5" className="line" />
      <line x1="70" y1="30" x2="70" y2="70" stroke="#8b5cf6" strokeWidth="1.5" className="line" />
      <line x1="70" y1="70" x2="30" y2="70" stroke="#8b5cf6" strokeWidth="1.5" className="line" />
      <line x1="30" y1="70" x2="30" y2="30" stroke="#8b5cf6" strokeWidth="1.5" className="line" />
      <line x1="30" y1="30" x2="50" y2="50" stroke="#8b5cf6" strokeWidth="1" className="line" />
      <line x1="70" y1="30" x2="50" y2="50" stroke="#8b5cf6" strokeWidth="1" className="line" />
      <line x1="70" y1="70" x2="50" y2="50" stroke="#8b5cf6" strokeWidth="1" className="line" />
      <line x1="30" y1="70" x2="50" y2="50" stroke="#8b5cf6" strokeWidth="1" className="line" />

      {/* Brand Text */}
      <text
        x="50%"
        y="95"
        textAnchor="middle"
        fill="#8b5cf6"
        fontSize="9"
        fontFamily="Verdana"
        className="fade-in"
        translate="no"
      >
        Advique AI
      </text>
    </svg>
  );
};

export default Logo;
