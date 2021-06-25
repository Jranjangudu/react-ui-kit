import React from "react";

import style from "./index.module.css";
import NavLinks from "./NavLinks";

const Desktopscreen = () => {
  return (
    <section>
      <div className={style.listswrapper}>
        <dt className="py-2">
          <h5>components</h5>
        </dt>
        <NavLinks />
      </div>
    </section>
  );
};

export default Desktopscreen;
