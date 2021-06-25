import React from "react";

const Alert = ({ severity, children }) => {
  return (
    <div className={`alert alert-${severity}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;
