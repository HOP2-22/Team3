import React from "react";
import "../../css/Services.css";
import MediaCard from "./ExampleCard";
const HowItWorks = () => {
  return (
    <div className="bigContainer">
      <div className="All" style={{ marginTop: "69px", gap: "10px" }}>
        <div className="Container">
          <div className="HowItWorks">
            <h1 className="Text-BigText">How It works</h1>
            <hr></hr>
            <div>
              You can make a post about your thoughts. People will agree or
              disagree about your thoughts in the comment section. This is also
              your hub for teamwork. Give everyone you work with inside and
              outside your company a more productive way to stay in sync.
              Respond faster with emoji, keep conversations focused in channels,
              and simplify all your communication into one place.
            </div>
          </div>
          <div className="ExampleCard">
            This is an example post in our site
            <MediaCard />
          </div>
          <div className="Schedule">
            <div className="ScheduleText">Scheduling that actually works</div>
            <hr></hr>
            <div className="TextSche">
              Give everyone you work with inside and outside your company a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
