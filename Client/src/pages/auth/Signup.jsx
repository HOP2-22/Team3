import React, { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      handleRegister();
    }
  };

  const handleRegister = () => {
    info.firstname.length === 0
      ? firstnameRef.current.focus()
      : info.lastname.length === 0
      ? lastnameRef.current.focus()
      : info.email.length === 0
      ? emailRef.current.focus()
      : info.password.length === 0
      ? passwordRef.current.focus()
      : signup();
  };

  const signup = async () => {
    try {
      await axios.post("http://localhost:8000/user/auth/signup", {
        firstName: info.firstname,
        lastName: info.lastname,
        email: info.email,
        password: info.password,
      });

      navigate("/auth/login");
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  return (
    <div className="w-full grow h-full flex flex-col gap-5 justify-center items-center">
      <div className="">
        <p>firstname:</p>
        <input
          type="text"
          ref={firstnameRef}
          onKeyDown={handleOnKeyDown}
          value={info.firstname}
          className="bg-gray-100 w-[280px] rounded-[10px] pl-5 py-3 mt-2"
          onChange={(event) => {
            setInfo({ ...info, firstname: event.target.value });
          }}
        />
      </div>
      <div className="">
        <p>lastname:</p>
        <input
          type="text"
          ref={lastnameRef}
          onKeyDown={handleOnKeyDown}
          value={info.lastname}
          className="bg-gray-100 w-[280px] rounded-[10px] pl-5 py-3 mt-2"
          onChange={(event) => {
            setInfo({ ...info, lastname: event.target.value });
          }}
        />
      </div>
      <div className="">
        <p>Email:</p>
        <input
          type="text"
          ref={emailRef}
          onKeyDown={handleOnKeyDown}
          value={info.email}
          className="bg-gray-100 w-[280px] rounded-[10px] pl-5 py-3 mt-2"
          onChange={(event) => {
            setInfo({ ...info, email: event.target.value });
          }}
        />
      </div>
      <div className="">
        <p>password:</p>
        <input
          type="password"
          ref={passwordRef}
          onKeyDown={handleOnKeyDown}
          value={info.password}
          className="bg-gray-100 w-[280px] rounded-[10px] pl-5 py-3 mt-2"
          onChange={(event) => {
            setInfo({ ...info, password: event.target.value });
          }}
        />
      </div>
      <div
        onClick={() => {
          signup();
        }}
        className="px-8 py-4 rounded-[10px] bg-sky-500 text-white cursor-pointer hover:bg-sky-600 transition"
      >
        Signup
      </div>
      <div className=" pt-8">
        Back to login?
        <Link className="pl-2 text-pink-500" to={"/auth/login"}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
