import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./menu.css";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
const index = () => {
  return (
    <header className="container-fluid mt-3 ">
      <div className="row">
        <BrowserRouter>
          <section className="col-sm-2 rightbar">
            <Leftsection />
          </section>

          <section className="col-sm-9">
            <Rightsection />
          </section>
        </BrowserRouter>
      </div>
      <div className="mt-4 pb-2 desktop_copyright">
        <strong className="text-secondary " style={{ fontFamily: "monospace" }}>
          copyright &copy; 2021 all rights reserved
        </strong>
      </div>
    </header>
  );
};

export default index;
