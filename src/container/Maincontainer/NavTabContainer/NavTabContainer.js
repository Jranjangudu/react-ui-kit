import React from "react";
import NavTab from "../../../components/Nav and Tabs/NavTab";
import Highlight from "react-highlight";
import style from "./navtabcontainer.module.css";

const NavTabContainer = () => {
  return (
    <section>
      <h4 className="text-center">Navs and Tabs </h4>
      <hr />
      <div>
        <h5>Examples</h5>
      </div>

      <div className={style.navtab_container}>
        <NavTab data1="Home" data2="About" data4="Disabled" />
      </div>

      <section>
        <Highlight language="reactjs">
          {`
                    <NavTab data1="Home" data2="About" data3="Link" data4="Disabled" />
                `}
        </Highlight>
      </section>

      <div className={style.navtab_container}>
        <NavTab
          variant="justify-content-center"
          data1="Home"
          data2="About"
          data3="Contact"
          data4="Disabled"
        />
      </div>

      <section>
        <Highlight language="reactjs">
          {`
                    <NavTab variant="justify-content-center" data1="Home" data2="About" data3="Contact" data4="Disabled" />
                `}
        </Highlight>
      </section>

      <div className={style.navtab_container}>
        <NavTab
          variant="nav-pills"
          data1="Home"
          data2="Blogs"
          data3="Contact us"
          data4="Disabled"
        />
      </div>

      <section>
        <Highlight language="reactjs">
          {`
                    <NavTab variant="nav-pills" data1="Home" data2="Blogs" data3="Contact us" data4="Disabled" />

                `}
        </Highlight>
      </section>
    </section>
  );
};

export default NavTabContainer;
