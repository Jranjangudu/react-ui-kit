import React from "react";

export const Cards = ({ cardTitle, children, cardLink, image }) => {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{children}</p>
        <p className=" btn-primary">{cardLink}</p>
      </div>
    </div>
  );
};

export const Hcards = ({ cardTitle, children, cardText, image }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "500px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} alt="..." className="card-img-top" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{children}</p>
            <p className="card-text">
              <small className="text-muted">{cardText}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
