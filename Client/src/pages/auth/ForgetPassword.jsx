import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    email: "",
    password: "",
    conPassword: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const conPasswordRef = useRef();

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      handleRegister();
    }
  };

  const handleRegister = () => {
    info.email.length === 0
      ? emailRef.current.focus()
      : info.password.length === 0
      ? passwordRef.current.focus()
      : info.conPassword.length === 0
      ? conPasswordRef.current.focus()
      : changePassword();
  };

  const changePassword = async () => {
    try {
      await axios.post("http://localhost:8000/user/auth/updatePassword", {
        email: info.email,
        password: info.password,
      });

      navigate("/auth/login");
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  return (
    <div className="w-full grow h-full  flex flex-col items-center justify-center">
      <div className="">
        <p>Email:</p>
        <input
          type="text"
          onKeyDown={handleOnKeyDown}
          ref={emailRef}
          value={info.email}
          className="bg-gray-100 w-[280px] rounded-[10px] pl-5 py-3 mt-2"
          onChange={(event) => {
            setInfo({ ...info, email: event.target.value });
          }}
        />
      </div>
      <div className="">
        <p>new password:</p>
        <input
          type="password"
          onKeyDown={handleOnKeyDown}
          ref={passwordRef}
          value={info.password}
          className="bg-gray-100 w-[280px] rounded-[10px] pl-5 py-3 mt-2"
          onChange={(event) => {
            setInfo({ ...info, password: event.target.value });
          }}
        />
      </div>
      <div className="">
        <p>confirm password:</p>
        <input
          type="password"
          onKeyDown={handleOnKeyDown}
          ref={conPasswordRef}
          value={info.conPassword}
          className="bg-gray-100 w-[280px] rounded-[10px] pl-5 py-3 mt-2"
          onChange={(event) => {
            setInfo({ ...info, conPassword: event.target.value });
          }}
        />
      </div>
      <div
        onClick={() => {
          handleRegister();
        }}
        className="px-8 mt-5 py-4 rounded-[10px] bg-sky-500 text-white cursor-pointer hover:bg-sky-600 transition"
      >
        change password
      </div>
      <div className=" pt-3">
        remember your password?
        <Link className="pl-2 text-indigo-500" to={"/auth/login"}>
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
