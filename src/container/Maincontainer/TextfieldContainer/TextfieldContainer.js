import React from "react";

import Highlight from "react-highlight";
import {
  TextField,
  TextArea,
  LeftbtnField,
  RightbtnField,
} from "../../../components/Textfields/TextField";
const TextfieldContainer = () => {
  return (
    <section className="mb-5">
      <h4 className="text-center">TextField </h4>
      <hr />
      <div className="my-5">
        <h5>Examples</h5>
      </div>
      <div className="my-5">
        <TextField type="text" placeholder="simple input box" /> <br />
        <TextField type="search" placeholder="search  input box" />
      </div>
      <section>
        <Highlight language="reactjs">{`

        <TextField type="text" placeholder="simple input box" /> 

        <TextField type="search" placeholder="search  input box" />

        `}</Highlight>
      </section>{" "}
      <h4 className="my-5">Textareas</h4>
      <div className="my-5">
        <TextArea label="Comments" placeholder="Enter your comments" />
      </div>
      <section>
        <Highlight language="reactjs">{`

          <TextArea label="Comments" placeholder="Enter your comments" />

        `}</Highlight>
      </section>
      <h4>Button With Input</h4>
      <div className="my-5">
        <LeftbtnField
          type="password"
          placeholder="Enter your password"
          custombtn="password"
          btncolor="primary"
        />
        <RightbtnField
          type="email"
          placeholder="Enter your Email"
          custombtn="send email"
          btncolor="info"
        />
        <LeftbtnField
          type="text"
          placeholder="Save"
          custombtn="submit"
          btncolor="success"
        />
      </div>
      <section>
        <Highlight language="reactjs">{`

         <LeftbtnField type="password" placeholder="Enter your password" custombtn="password" btncolor="primary" />

         <RightbtnField type="email" placeholder="Enter your Email" custombtn="send email"  btncolor="info"/>
        
         <LeftbtnField  type="text" placeholder="Save" custombtn="submit"  btncolor="success"  />

        `}</Highlight>
      </section>
    </section>
  );
};

export default TextfieldContainer;
