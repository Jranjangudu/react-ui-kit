import React from "react";
import { Button } from "../../../components/Button/Button";
import Highlight from "react-highlight";
import style from "./buttoncontainer.module.css";

const ButtonContainer = () => {
  return (
    <section>
      <h4 className="text-center">Button </h4>
      <hr />
      <div>
        <h5>Examples</h5>
      </div>

      <div className={style.btn_container}>
        <div style={{ display: "flex", maxWidth: "100%", flexWrap: "wrap" }}>
          <Button variant="info">info</Button>
          <Button variant="danger">danger</Button>
          <Button variant="warning">warning</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="success">success</Button>
          <Button variant="primary">primary</Button>
        </div>
      </div>

      <section>
        <Highlight language="reactjs">{`
      <Button variant="info">info</Button>
      <Button variant="danger">danger</Button>
      <Button variant="warning">warning</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="success">success</Button>
      `}</Highlight>
      </section>

      <h4>Outline buttons</h4>
      <div className={style.btn_container}>
        <div
          style={{
            display: "flex",
            maxWidth: "100%",
            flexWrap: "wrap",
          }}
        >
          <Button outline="info">info</Button>
          <Button outline="success">success</Button>
          <Button outline="primary">primary</Button>
          <Button outline="danger">danger</Button>
          <Button outline="success">success</Button>
          <Button outline="warning">warning</Button>
          <Button outline="secondary">secondary</Button>
        </div>
      </div>
      <section>
        <Highlight language="reactjs">
          {`
        
       <Button outline="info">info</Button>
       <Button outline="success">success</Button>
       <Button outline="primary">primary</Button>
       <Button outline="danger">danger</Button>
       <Button outline="success">success</Button>
       <Button outline="warning">warning</Button>
       <Button outline="secondary">secondary</Button>

      `}
        </Highlight>
      </section>
    </section>
  );
};

export default ButtonContainer;
