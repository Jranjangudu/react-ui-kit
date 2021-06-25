import React from "react";
import "./avatar.css";
const Avatar = ({ image, styles }) => {
  return <img src={image} alt="Avatar" className={styles} />;
};

export default Avatar;
