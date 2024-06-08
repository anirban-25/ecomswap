import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 rounded-lg mt-10 h-6 overflow-hidden">
      <div
        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-6 text-center text-white transition-all duration-300 ease-in-out font-gilroy-bold "
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
