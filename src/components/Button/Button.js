import React from "react";

export const Button = ({ variant, children, outline }) => {
  return (
    <button
      type="button"
      className={`btn btn-${variant}  btn-outline-${outline}`}
      style={{ margin: "10px" }}
    >
      {" "}
      {children}
    </button>
  );
};
