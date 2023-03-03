import React, { useState } from "react";
import axios from "axios";

function ContactComponent() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [feedValue, setFeedValue] = useState("");
  const createContact = async () => {
    try {
      await axios.post("http://localhost:8000/contact", {
        name: nameValue,
        email: emailValue,
        text: feedValue,
      });
      console.log("1");
    } catch (error) {
      console.log(error);
    }
  };

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
            <input
              className="nameInput"
              placeholder="Write your Name"
              value={nameValue}
              onChange={(event) => {
                setNameValue(event.target.value);
              }}
            />
            <input
              className="emailInput"
              placeholder="Email Address"
              value={emailValue}
              onChange={(event) => {
                setEmailValue(event.target.value);
              }}
            />
            <textarea
              className="feedbackMessage"
              placeholder="Type your message here"
              value={feedValue}
              onChange={(event) => {
                setFeedValue(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="buttonHolder">
          <button
            className="submitButton"
            onClick={() => {
              createContact();
            }}
          >
            Submit
          </button>
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
