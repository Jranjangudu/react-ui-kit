import React from "react";
import { useHistory } from "react-router-dom";
import img from "./images/404_face.png";
const PageNotFound = () => {
  const history = useHistory();
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h5 className="mt-4" style={{ fontFamily: "monospace" }}>
        Oops Page not Found
      </h5>
      <p
        className="my-3 "
        onClick={() => history.push("/component")}
        style={{ cursor: "pointer", fontFamily: "monospace", fontWeight: 700 }}
      >
        &#8592; go back
      </p>
      <img src={img} alt="404page" width="40%" height="auto" />
    </div>
  );
};

export default PageNotFound;
