import React from "react";
import "../../css/Services.css";
import MediaCard from "./ExampleCard";
import RowAndColumnSpacing from "./try";
import "../../css/Services.css";
const HowItWorks = () => {
  return (
    <div className="bigContainer">
      <div className="All" style={{ marginTop: "69px", gap: "10px" }}>
       
        <div className="con">
          <div className="SimpleTask">
            <div className="SimpleTaskText">Simple task management</div>
            <hr></hr>
            <div className="TextSim">
              Give everyone you work with inside and outside your company a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
          </div>
          <div className="TeamWork">
            <div className="TeamWorkText">Your Hub for teamwork</div>
            <hr></hr>
            <div className="TeamWorkText2">
              Give everyone you work with inside and outside your company a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
          </div>
          <div className="YtVideo">
            <div className="YtVideoText">Youtube video for instructions</div>
            <hr></hr>
            <img
              className="Img"
              src="https://res.cloudinary.com/dw8hfvbgl/image/upload/v1677486956/Services/Rectangle_bqryua.png"
              alt="w"
            ></img>
            <a
              className="ButtonLink"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
      <RowAndColumnSpacing />
    </div>
  );
};
export default HowItWorks;
