import React from "react";

import Desktopscreen from "./Desktopscreen";

import Mobilescreen from "./Mobilescreen";

const Leftsection = () => {
  return (
    <section>
      <Mobilescreen />

      <Desktopscreen />
    </section>
  );
};

export default Leftsection;
