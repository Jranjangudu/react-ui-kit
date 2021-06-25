import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Highlight from "react-highlight";
import style from "./navbarcontainer.module.css";

const NavbarContainer = () => {
  return (
    <section>
      <h4 className="text-center">Navbar </h4>
      <hr />
      <div>
        <h5>Examples</h5>
      </div>

      <div className={style.navbar_container}>
        <Navbar
          variant="light"
          bg="light"
          title="Search"
          severity="success"
          brandName="Navbar"
        />
        <Navbar
          variant="dark"
          bg="dark"
          title="Search"
          severity="danger"
          brandName="Navbar"
        />
        <Navbar
          variant="light"
          bg="primary"
          title="Search"
          severity="secondary"
          brandName="Navbar"
        />
      </div>

      <section>
        <Highlight language="reactjs">
          {`
          
                    <Navbar variant="light" bg="light" title="Search" severity="success" brandName="Navbar" />

                    <Navbar variant="dark" bg="dark" title="Search" severity="danger" brandName="Navbar" />
                    
                    <Navbar variant="light" bg="primary" title="Search" severity="secondary" brandName="Navbar" />

                `}
        </Highlight>
      </section>
    </section>
  );
};

export default NavbarContainer;
