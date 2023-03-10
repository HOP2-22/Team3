import React, { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

const Login = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();

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
      : login();
  };

  const login = async () => {
    try {
      const response = await axios.post(
        "https://blog-website-team3.onrender.com/user/auth/login",
        {
          email: info.email,
          password: info.password,
        }
      );

      Cookie.set("token", response.data.data.token);
      navigate("/");

      window.location.reload();
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  return (
    <div className="pt-[60px] w-full grow h-full flex flex-col gap-5 justify-center items-center">
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
          login();
        }}
        className="px-8 py-4 rounded-[10px] bg-sky-500 text-white cursor-pointer hover:bg-sky-600 transition"
      >
        Login
      </div>
      <div className=" pt-8">
        Forget password?
        <Link className="pl-2 text-indigo-500" to={"/auth/forgetpassword"}>
          Change now
        </Link>
      </div>
      <div className=" pt-3">
        New to Blog?
        <Link className="pl-2 text-indigo-500" to={"/auth/signup"}>
          Signup now
        </Link>
      </div>
      <div className=" pt-3">
        Stop login?
        <Link className="pl-2 text-indigo-500" to={"/"}>
          Home page
        </Link>
      </div>
    </div>
  );
};

export default Login;
