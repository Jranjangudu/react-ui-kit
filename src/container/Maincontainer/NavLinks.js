import React from "react";
import style from "./index.module.css";
import { NavLink } from "react-router-dom";
const NavLinks = () => {
  return (
    <div>
      <NavLink
        to="/component/alert"
        className={style.navlink}
        activeStyle={{
          color: "red",
        }}
      >
        <dd> Alert</dd>
      </NavLink>
      <NavLink
        to="/component/button"
        className={style.navlink}
        activeStyle={{
          color: "red",
        }}
      >
        <dd> Button</dd>
      </NavLink>

      <NavLink
        to="/component/shadows"
        className={style.navlink}
        activeStyle={{
          color: "red",
        }}
      >
        <dd> Shadows</dd>
      </NavLink>

      <NavLink
        to="/component/card"
        className={style.navlink}
        activeStyle={{
          color: "red",
        }}
      >
        <dd> Card</dd>
      </NavLink>

      <NavLink
        to="/component/textfield"
        className={style.navlink}
        activeStyle={{
          color: "red",
        }}
      >
        <dd> Textfield</dd>
      </NavLink>

      <NavLink
        to="/component/dropdowns"
        className={style.navlink}
        activeStyle={{
          color: "red",
        }}
      >
        <dd> Dropdowns</dd>
      </NavLink>

      <NavLink
        to="/component/navs|tabs"
        className={style.navlink}
        activeStyle={{
          color: "red",
        }}
      >
        <dd> Navs and tabs</dd>
      </NavLink>

      <NavLink
        to="/component/navbar"
        className={style.navlink}
        activeStyle={{
          color: "red",
        }}
      >
        <dd>Navbar</dd>
      </NavLink>

      <NavLink
        to="/component/progress"
        className={style.navlink}
        activeStyle={{
          color: "red",
        }}
      >
        <dd>Progress</dd>
      </NavLink>

      <NavLink
        to="/component/avatar"
        className={style.navlink}
        activeStyle={{
          color: "red",
        }}
      >
        <dd>Avatar</dd>
      </NavLink>
    </div>
  );
};

export default NavLinks;
