import React from "react";
import style from "./navtab.module.css";

const NavTab = ({ variant, data1, data2, data3, data4 }) => {
  return (
    <ul className={`nav ${variant}`}>
      <li className={style.nav_link}>
        <p className="nav-link active" aria-current="page">
          {data1}
        </p>
      </li>
      <li className={style.nav_link}>
        <p className="nav-link">{data2}</p>
      </li>
      <li className={style.nav_link}>
        <p className="nav-link">{data3}</p>
      </li>
      <li className={style.nav_link}>
        <p className="nav-link disabled" tabIndex="-1" aria-disabled="true">
          {data4}
        </p>
      </li>
    </ul>
  );
};

export default NavTab;
