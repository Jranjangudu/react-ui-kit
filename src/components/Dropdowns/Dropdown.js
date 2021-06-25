import React from "react";
import "./dropdown.css";
import Typography from "../../container/Maincontainer/Typography ";
const Dropdown = ({ btnvalue, children, variant, RightAlign }) => {
  return (
    <div className="dropdown">
      {RightAlign ? (
        <div style={{ margin: "20px" }}>
          <button className={`dropbtn btn-${variant}`}>{btnvalue}</button>
          <div
            className="dropdown-content"
            style={{ cursor: "pointer", right: "0" }}
          >
            <Typography align="center">{children}</Typography>
          </div>
        </div>
      ) : (
        <>
          <button className={`dropbtn btn-${variant}`}>{btnvalue}</button>
          <div className="dropdown-content" style={{ cursor: "pointer" }}>
            <Typography align="center">{children}</Typography>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Dropdown;
export const DropImg = ({ smallimg, bigimg }) => {
  return (
    <div className="dropdown">
      <img
        src={smallimg}
        alt="Cinque Terre"
        width="100"
        height="50"
        alt="img"
      />
      <div className="dropdown-content-img">
        <img
          src={bigimg}
          alt="Cinque Terre"
          width="300"
          height="200"
          alt="img"
        />
        <div className="desc">Beautiful Cinque Terre</div>
      </div>
    </div>
  );
};
