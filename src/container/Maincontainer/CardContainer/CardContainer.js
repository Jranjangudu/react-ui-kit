import React from "react";
import Highlight from "react-highlight";
import { Cards, Hcards } from "../../../components/Cards/Cards";
import Typography from "../Typography ";

import { Button } from "../../../components/Button/Button";
import "./card.css";
const CardContainer = () => {
  return (
    <section>
      <h4 className="text-center">Cards </h4>
      <hr />
      <div>
        <h5>Examples</h5>
      </div>
      <div className="card_container  container ">
        <div className="mobile_screen">
          <div style={{ margin: "auto" }}>
            <Cards
              cardTitle="card-title"
              image={
                "https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450__340.jpg"
              }
            >
              <Typography color="success" align="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus distinctio,
              </Typography>
              <Typography color="danger" align="center">
                <Button variant="center">read more</Button>
              </Typography>
            </Cards>
          </div>
          {/* ------------------------------ */}
          <div style={{ margin: "auto" }}>
            <Cards
              cardTitle="card-title"
              image={
                "https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826__340.jpg"
              }
            >
              <Typography color="danger" align="left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus distinctio,
              </Typography>
              <Typography color="danger" align="center">
                <Button variant="info">read more</Button>
              </Typography>
            </Cards>
          </div>

          <div style={{ margin: "auto" }}>
            <Cards
              cardTitle="card-title"
              image={
                "https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681__340.jpg"
              }
            >
              <Typography color="danger" align="left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus distinctio,
              </Typography>
              <Typography color="danger" align="right">
                <Button variant="primary">read more</Button>
              </Typography>
            </Cards>
          </div>
        </div>{" "}
        <section>
          {/* <Highlight innerHTML={true}>{"<p>Card component</p>"}</Highlight> */}
          <Highlight language="reactjs">{`
      <Cards cardTitle="card-title" image={image}>
      <Typography color="success" align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        distinctio,
      </Typography>
      <Typography color="danger" align="center">
        <Button variant="center">read more</Button>
      </Typography>
    </Cards>
    {/* ------------------------------ */}
    <Cards cardTitle="card-title" image={image}>
      <Typography color="danger" align="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        distinctio,
      </Typography>
      <Typography color="danger" align="center">
        <Button variant="info">read more</Button>
      </Typography>
    </Cards>
      `}</Highlight>
        </section>
        <h4 className="my-5"> Horizontal Cards</h4> <hr />
        <div
          className="card_block"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Hcards
              image={
                "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
              }
              cardTitle="card-title"
              cardText="card Footer"
            >
              {" "}
              <Typography color="danger" align="left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus distinctio,
              </Typography>
              <Typography color="danger" align="center">
                <Button variant="info">read more</Button>
              </Typography>
            </Hcards>
          </div>
          <div>
            <Hcards
              image={
                "https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879__340.jpg"
              }
              cardTitle="card-title"
              cardText="card Footer"
            >
              {" "}
              <Typography color="danger" align="left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus distinctio,
              </Typography>
              <Typography color="danger" align="left">
                <Button variant="success">read more</Button>
              </Typography>
            </Hcards>
          </div>
        </div>
        <section>
          <Highlight language="reactjs">{`

    <Hcards image={image} cardTitle="card-title" cardText="card Footer">
      <Typography color="danger" align="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        distinctio,
      </Typography>
      <Typography color="danger" align="center">
        <Button variant="info">read more</Button>
      </Typography>
    </Hcards>

      `}</Highlight>
        </section>
      </div>
    </section>
  );
};

export default CardContainer;
