import React from "react";
import Avatar from "../../../components/Avatar/Avatar";
import Highlight from "react-highlight";
const AvatarContainer = () => {
  return (
    <div>
      <h4 className="text-center"> Avatar </h4>
      <hr />
      <div>
        <h5>Examples</h5>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "100%",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Avatar
              image="https://www.w3schools.com/howto/img_avatar.png"
              styles="circle"
            />
          </div>
          <div>
            <Avatar
              image="https://www.w3schools.com/howto/img_avatar2.png"
              styles="border"
            />
          </div>
          <div>
            <Avatar
              image="https://www.w3schools.com/w3images/avatar2.png"
              styles="leftTopRadius"
            />
          </div>
          <div>
            <Avatar
              image="https://www.w3schools.com/w3images/avatar6.png"
              styles="rightTopRadius"
            />
          </div>
          <div>
            <Avatar
              image="https://www.w3schools.com/w3images/avatar6.png"
              styles="round"
            />
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "100%",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Avatar
              image="https://www.w3schools.com/howto/img_avatar2.png"
              styles="leftBottomRadius"
            />
          </div>
          <div>
            <Avatar
              image="https://www.w3schools.com/w3images/avatar6.png"
              styles="rightBottomRadius"
            />
          </div>
        </div>
      </div>
      <section className="mt-5">
        <Highlight language="reactjs">{`

        <Avatar image="https://www.w3schools.com/howto/img_avatar.png" styles="circle" />

        <Avatar image="https://www.w3schools.com/howto/img_avatar2.png" styles="border" />

        <Avatar image="https://www.w3schools.com/w3images/avatar2.png" styles="leftTopRadius" />

        <Avatar image="https://www.w3schools.com/w3images/avatar6.png" styles="rightTopRadius" />

        <Avatar image="https://www.w3schools.com/w3images/avatar6.png" styles="round" />

        <Avatar image="https://www.w3schools.com/howto/img_avatar2.png" styles="leftBottomRadius" />

        <Avatar image="https://www.w3schools.com/w3images/avatar6.png" styles="rightBottomRadius" />

      `}</Highlight>
      </section>
    </div>
  );
};

export default AvatarContainer;
