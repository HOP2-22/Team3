import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/auth/login",
        {
          email: info.email,
          password: info.password,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-[60px] w-full grow h-full flex flex-col gap-5 justify-center items-center">
      <div className="">
        <p>Email:</p>
        <input
          type="text"
          value={info.email}
          className="bg-gray-100 w-[200px] pl-5 py-3 mt-2"
          onChange={(event) => {
            setInfo({ ...info, email: event.target.value });
          }}
        />
      </div>
      <div className="">
        <p>password:</p>
        <input
          type="password"
          value={info.password}
          className="bg-gray-100 w-[200px] pl-5 py-3 mt-2"
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
