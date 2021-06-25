import React from "react";
import "./progress.module.css";

const Progress = ({ variant, width, currentVal, minVal, maxVal }) => {
  return (
    <div className="progress">
      <div
        className={`progress-bar bg-${variant}`}
        role="progressbar"
        style={{ width: `${width}%` }}
        aria-valuenow={currentVal}
        aria-valuemin={minVal}
        aria-valuemax={maxVal}
      ></div>
    </div>
  );
};

export default Progress;
