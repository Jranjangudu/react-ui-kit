import React from "react";

const Navbar = ({ variant, bg, title, severity, brandName }) => {
  return (
    <nav className={`navbar m-3 navbar-${variant} bg-${bg}`}>
      <div className="container-fluid">
        <p className="navbar-brand" style={{ paddingBottom: "0" }}>
          {brandName}
        </p>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder={title}
            aria-label={title}
          />
          <button className={`btn btn-outline-${severity}`} type="submit">
            {title}
          </button>
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
