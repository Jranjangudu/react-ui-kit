import React from "react";
import Styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={Styles.container}>
      <div className="text-center">
        <h3
          className="py-3 text-light"
          style={{
            fontFamily: "monospace",
            textAlign: "left",
            paddingLeft: "20px",
          }}
        >
          Invinci UI Kit
        </h3>
      </div>
    </header>
  );
};

export default Navbar;
