import React, { useRef, useState } from "react";
import "../../css/ContactPage.css";
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
      alert(error.response.data.error.message);
    }
  };

  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      handleRegister();
    }
  };

  const handleRegister = () => {
    nameValue.length === 0
      ? nameRef.current.focus()
      : emailValue.length === 0
      ? emailRef.current.focus()
      : feedValue.length === 0
      ? textRef.current.focus()
      : createContact();
  };

  return (
    <div className="main">
      <div className="contactingPart py-20">
        <div className="bigHeader">Contact Us</div>
        <div>
          <div className="help">
            Send us your query via the form below or send us
            <br /> an email at jawkhlan626@gmail.com for any issue your're
            facing!
          </div>
          <div className="input">
            <input
              ref={nameRef}
              className="nameInput py-2"
              placeholder="Write your Name"
              value={nameValue}
              onChange={(event) => {
                setNameValue(event.target.value);
              }}
              onKeyDown={handleOnKeyDown}
            />
            <input
              ref={emailRef}
              className="emailInput py-2"
              placeholder="Email Address"
              value={emailValue}
              onChange={(event) => {
                setEmailValue(event.target.value);
              }}
              onKeyDown={handleOnKeyDown}
            />
            <textarea
              ref={textRef}
              className="feedbackMessage py-2"
              placeholder="Type your message here"
              value={feedValue}
              onChange={(event) => {
                setFeedValue(event.target.value);
              }}
              onKeyDown={handleOnKeyDown}
            />
          </div>
        </div>
        <div className="buttonHolder">
          <button
            className="submitButton"
            onClick={() => {
              handleRegister();
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
