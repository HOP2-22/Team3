import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    email: "",
    password: "",
    conPassword: "",
  });

  const changePassword = async () => {
    try {
      await axios.post("http://localhost:8000/user/auth/signup", {
        email: info.email,
        password: info.password,
      });

      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full grow h-full  flex flex-col items-center justify-center">
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
        <p>new password:</p>
        <input
          type="password"
          value={info.password}
          className="bg-gray-100 w-[200px] pl-5 py-3 mt-2"
          onChange={(event) => {
            setInfo({ ...info, password: event.target.value });
          }}
        />
      </div>
      <div className="">
        <p>confirm password:</p>
        <input
          type="password"
          value={info.conPassword}
          className="bg-gray-100 w-[200px] pl-5 py-3 mt-2"
          onChange={(event) => {
            setInfo({ ...info, conPassword: event.target.value });
          }}
        />
      </div>
      <div
        onClick={() => {
          changePassword();
        }}
        className="px-8 py-4 rounded-[10px] bg-sky-500 text-white cursor-pointer hover:bg-sky-600 transition"
      >
        change password
      </div>
    </div>
  );
};

export default ForgetPassword;
