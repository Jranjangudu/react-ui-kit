import React from "react";
import Progress from "../../../components/Progress/Progress";
import Highlight from "react-highlight";
import style from "./progresscontainer.module.css";

const ProgressContainer = () => {
  return (
    <section>
      <h4 className="text-center">Progress </h4>
      <hr />
      <div>
        <h5>Examples</h5>
      </div>

      <div className={style.progress_container}>
        <div>
          <Progress currentVal="0" minVal="0" maxVal="100" />
          <br />
          <Progress width="25" currentVal="25" minVal="0" maxVal="100" />
          <br />
          <Progress width="50" currentVal="50" minVal="0" maxVal="100" />
          <br />
          <Progress width="75" currentVal="75" minVal="0" maxVal="100" />
          <br />
          <Progress width="100" currentVal="100" minVal="0" maxVal="100" />
        </div>
      </div>

      <section>
        <Highlight language="reactjs">{`
        
             <Progress currentVal="0" minVal="0" maxVal="100" />

             <Progress width="25" currentVal="25" minVal="0" maxVal="100" />
             
             <Progress width="50" currentVal="50" minVal="0" maxVal="100" />

             <Progress width="75" currentVal="75" minVal="0" maxVal="100" />

             <Progress width="100" currentVal="100" minVal="0" maxVal="100" />

        `}</Highlight>
      </section>

      <h4>Outline buttons</h4>
      <div className={style.progress_container}>
        <div>
          <Progress
            variant="danger"
            width="25"
            currentVal="25"
            minVal="0"
            maxVal="100"
          />
          <br />
          <Progress
            variant="warning"
            width="50"
            currentVal="50"
            minVal="0"
            maxVal="100"
          />
          <br />
          <Progress
            variant="success"
            width="75"
            currentVal="75"
            minVal="0"
            maxVal="100"
          />{" "}
          <br />
          <Progress
            variant="info"
            width="100"
            currentVal="100"
            minVal="0"
            maxVal="100"
          />
        </div>
      </div>
      <section>
        <Highlight language="reactjs">{`

          <Progress variant="danger" width="25" currentVal="25" minVal="0" maxVal="100" />

          <Progress variant="warning" width="50" currentVal="50" minVal="0" maxVal="100"/>

          <Progress variant="success" width="75" currentVal="75" minVal="0" maxVal="100"/>

          <Progress variant="info" width="100" currentVal="100" minVal="0" maxVal="100"/>

                `}</Highlight>
      </section>
    </section>
  );
};

export default ProgressContainer;
