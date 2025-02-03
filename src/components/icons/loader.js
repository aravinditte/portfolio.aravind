import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round">
      {/* Hexagonal shape */}
      <path
        d="M 50, 5
           L 11, 27
           L 11, 72
           L 50, 95
           L 89, 73
           L 89, 28 z"
      />
    </g>

    {/* Improved Letter "A" */}
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="40"
      fontWeight="normal"
      fill="currentColor"
      fontFamily="Arial, sans-serif">
      A
    </text>
  </svg>
);

export default IconLoader;
