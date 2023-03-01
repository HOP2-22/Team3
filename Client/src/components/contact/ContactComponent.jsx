import React from "react";

function ContactComponent() {
  return (
    <div className="main">
      <div className="contactingPart">
        <div className="bigHeader">Contact Us</div>
        <div>
          <div className="help">
            Send us your query via the form below or send us
            <br /> an email at jawkhlan626@gmail.com for any issue your're
            facing!
          </div>
          <div className="input">
            <input className="nameInput" placeholder="Write your Name" />
            <input className="emailInput" placeholder="Email Address" />
            <textarea
              className="feedbackMessage"
              placeholder="Type your message here"
            />
          </div>
        </div>
        <div className="buttonHolder">
          <button className="submitButton">Submit</button>
        </div>
      </div>
      <div className="imageHolder">
        <img
          src="https://cdn.discordapp.com/attachments/1074649365253210153/1075378440670294036/09435730db48f21367bf3841cd8bca3a_pgxjdd.png"
          alt="serviceImg"
          className="serviceImage"
        />
      </div>
    </div>
  );
}

export default ContactComponent;
