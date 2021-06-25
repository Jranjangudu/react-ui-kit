import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./banner.module.css";

const Banner = () => {
  return (
    <section className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.textCenter}>
          <h2 className={Styles.heroHeading}>
            A Surreal UI Kit. Yours for Free!
          </h2>
          <NavLink to="/component">
            <button className={Styles.button}>Get started &#8674;</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Banner;
