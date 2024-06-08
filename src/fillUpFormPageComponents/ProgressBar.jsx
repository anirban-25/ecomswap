
import React, { useState, useEffect } from 'react';

const ProgressBar = ({ initialProgress }) => {
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    setProgress(initialProgress);
  }, [initialProgress]);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const decreaseProgress = () => {
    if (progress > 0) {
      setProgress(progress - 10);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Progress Bar Example</h1>
      <div className="w-full max-w-lg bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={decreaseProgress}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Decrease
        </button>
        <button
          onClick={increaseProgress}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
