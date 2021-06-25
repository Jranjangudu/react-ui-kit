import React from "react";

export const TextField = ({ type, placeholder }) => {
  return (
    <div>
      <input type={type} className="form-control" placeholder={placeholder} />
    </div>
  );
};

export const TextArea = ({ label, placeholder }) => {
  return (
    <div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder={placeholder}
          id="floatingTextarea2"
          style={{ height: "100px" }}
        ></textarea>
        <label htmlFor="floatingTextarea2">{label}</label>
      </div>
    </div>
  );
};

export const LeftbtnField = ({ type, placeholder, custombtn, btncolor }) => {
  return (
    <section>
      <div className="input-group mb-3">
        <button
          className={`btn btn-outline-${btncolor}`}
          type="button"
          id="button-addon1"
        >
          {custombtn}
        </button>
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
    </section>
  );
};
export const RightbtnField = ({ type, placeholder, custombtn, btncolor }) => {
  return (
    <section>
      <div className="input-group mb-3">
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className={`btn btn-outline-${btncolor}`}
          type="button"
          id="button-addon2"
        >
          {custombtn}
        </button>
      </div>
    </section>
  );
};
