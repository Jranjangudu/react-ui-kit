import React from "react";
import Alert from "../../../components/Alerts/Alert";
import AlertTitle from "../../../components/Alerts/AlertTitle";

import Highlight from "react-highlight";
const AlertContainer = () => {
  return (
    <section>
      <h4 className="text-center">Alerts </h4>
      <hr />
      <div>
        <h5>Examples</h5>
      </div>

      <Alert severity="primary"> This is a primary alert — check it out!</Alert>
      <Alert severity="warning"> This is a warning alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      <Alert severity="danger">This is a error alert — check it out!</Alert>
      <Alert severity="info">This is a info alert — check it out!</Alert>

      <section>
        <Highlight language="reactjs">{`

      <Alert severity="primary"> This is a primary alert — check it out!</Alert>
      <Alert severity="warning"> This is a warning alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      <Alert severity="danger">This is a error alert — check it out!</Alert>
      <Alert severity="info">This is a info alert — check it out!</Alert>
      
      `}</Highlight>
      </section>

      <section className="mt-3">
        <p>
          You can use the <code>AlertTitle</code> component to display a
          formatted title above the content.
        </p>
        <Alert severity="primary">
          <AlertTitle> primary </AlertTitle> This is a primary alert — check it
          out!
        </Alert>
        <Alert severity="warning">
          <AlertTitle> warning </AlertTitle> This is a warning alert — check it
          out!
        </Alert>
        <Alert severity="success">
          <AlertTitle> success </AlertTitle>
          This is a success alert — check it out!
        </Alert>
        <Alert severity="danger">
          <AlertTitle> Error </AlertTitle>
          This is a error alert — check it out!
        </Alert>
        <Alert severity="info">
          <AlertTitle> info </AlertTitle>
          This is a info alert — check it out!
        </Alert>
      </section>

      <section>
        <Highlight language="reactjs">{`
        <Alert severity="primary">
          <AlertTitle> primary </AlertTitle> This is a primary alert — check it
          out!
        </Alert>
        <Alert severity="warning">
          <AlertTitle> warning </AlertTitle> This is a warning alert — check it
          out!
        </Alert>
        <Alert severity="success">
          <AlertTitle> success </AlertTitle>
          This is a success alert — check it out!
        </Alert>
        <Alert severity="danger">
          <AlertTitle> Error </AlertTitle>
          This is a error alert — check it out!
        </Alert>
        <Alert severity="info">
          <AlertTitle> info </AlertTitle>
          This is a info alert — check it out!
        </Alert>
        
        `}</Highlight>
      </section>
    </section>
  );
};

export default AlertContainer;
