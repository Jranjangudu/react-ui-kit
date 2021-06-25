import React from "react";

const Shadow = ({ size, children }) => {
  return (
    <div className={`shadow-${size} p-3 mb-5 bg-body rounded`}>{children}</div>
  );
};

export default Shadow;
