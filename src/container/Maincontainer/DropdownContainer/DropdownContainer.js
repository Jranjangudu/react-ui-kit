import React from "react";
import Dropdown, { DropImg } from "../../../components/Dropdowns/Dropdown";
import Typography from "../Typography ";
import Highlight from "react-highlight";
import css from "./dropdown.module.css";
const DropdownContainer = () => {
  return (
    <div>
      <h4 className="text-center"> Dropdown </h4>
      <hr />
      <div>
        <h5>Examples</h5>
      </div>
      <div className={css.container}>
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div className="m-2">
            <Dropdown btnvalue="danger button" variant="danger">
              <Typography>Option one</Typography>
              <Typography>Option Two</Typography>
              <Typography>Option Three</Typography>
              <Typography>Option Four</Typography>
              <Typography>And so on</Typography>
            </Dropdown>
          </div>

          <div className="m-2">
            <Dropdown btnvalue="info button" variant="info">
              <Typography>Option one</Typography>
              <Typography>Option Two</Typography>
              <Typography>Option Three</Typography>
              <Typography>Option Four</Typography>
              <Typography>And so on</Typography>
            </Dropdown>
          </div>
          <div className="m-2">
            <Dropdown btnvalue="warning button" variant="warning">
              <Typography>Option one</Typography>
              <Typography>Option Two</Typography>
              <Typography>Option Three</Typography>
              <Typography>Option Four</Typography>
              <Typography>And so on</Typography>
            </Dropdown>
          </div>
          <div className="m-2">
            <Dropdown btnvalue="success button" variant="success">
              <Typography>Option one</Typography>
              <Typography>Option Two</Typography>
              <Typography>Option Three</Typography>
              <Typography>Option Four</Typography>
              <Typography>And so on</Typography>
            </Dropdown>
          </div>
          <div className="m-2">
            <Dropdown btnvalue="primary button" variant="primary">
              <Typography>Option one</Typography>
              <Typography>Option Two</Typography>
              <Typography>Option Three</Typography>
              <Typography>Option Four</Typography>
              <Typography>And so on</Typography>
            </Dropdown>
          </div>
        </section>
      </div>
      <section className="my-5">
        <Highlight language="reactjs">
          {`
            <Dropdown btnvalue="danger button" variant="danger">           
                <Typography>Option one</Typography>
                <Typography>Option Two</Typography>
                <Typography>Option Three</Typography>
                <Typography>Option Four</Typography>
                <Typography>And so on</Typography>
            </Dropdown>
            <Dropdown btnvalue="info button" variant="info">    
                <Typography>Option one</Typography>
                <Typography>Option Two</Typography>
                <Typography>Option Three</Typography>
                <Typography>Option Four</Typography>
                <Typography>And so on</Typography>
           </Dropdown>
           <Dropdown btnvalue="warning button" variant="warning">    
                 <Typography>Option one</Typography>
                 <Typography>Option Two</Typography>
                 <Typography>Option Three</Typography>
                 <Typography>Option Four</Typography>
                 <Typography>And so on</Typography>
           </Dropdown>
         `}
        </Highlight>
      </section>
      <h4 className="my-3 pl-3">Right aligned Dropdown Content</h4>

      <section className="mb-5 pl-3">
        <Dropdown btnvalue="primary button" variant="primary" RightAlign>
          <Typography>Option one</Typography>
          <Typography>Option Two</Typography>
          <Typography>Option Three</Typography>
          <Typography>Option Four</Typography>
          <Typography>And so on</Typography>
        </Dropdown>
      </section>

      <section>
        <Highlight language="reactjs">{`

            <Dropdown btnvalue="primary button" variant="primary" RightAlign>           
                <Typography>Option one</Typography>
                <Typography>Option Two</Typography>
                <Typography>Option Three</Typography>
                <Typography>Option Four</Typography>
                <Typography>And so on</Typography>
            </Dropdown>
           
            
         `}</Highlight>
      </section>
      <h4 className="my-3 pl-3">Dropdown Image</h4>

      <section className="my-5">
        <DropImg
          smallimg="https://www.w3schools.com/css/img_5terre.jpg"
          bigimg="https://www.w3schools.com/css/img_5terre.jpg"
        />
      </section>

      <section style={{ marginBottom: "50px" }}>
        <Highlight language="reactjs">{`

        <DropImg smallimg="https://www.w3schools.com/css/img_5terre.jpg"
         bigimg="https://www.w3schools.com/css/img_5terre.jpg" />
           
            
         `}</Highlight>
      </section>
    </div>
  );
};

export default DropdownContainer;
