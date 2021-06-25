import React from "react";
import Shadow from "../../../components/Shadows/Shadow";
import Highlight from "react-highlight";
const ShadowContainer = () => {
  return (
    <div>
      <h4 className="text-center">Shadow </h4>
      <hr />
      <div className="my-5">
        <h5>Examples</h5>
      </div>
      <Shadow size="none">No shadow</Shadow>
      <Shadow size="sm">Small shadow</Shadow>

      <Shadow size="lg">Larger shadow</Shadow>

      <section className="mb-5">
        <Highlight language="reactjs">{`

           <Shadow size="none">No shadow</Shadow>
           
           <Shadow size="sm">Small shadow</Shadow>
     
           <Shadow size="lg">Larger shadow</Shadow>

          `}</Highlight>
      </section>
    </div>
  );
};

export default ShadowContainer;
