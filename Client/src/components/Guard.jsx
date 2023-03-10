import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Context } from "../provider/Context";

const Guard = ({ children }) => {
  const { logOut } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.post("http://localhost:8000/user/");

        if (res.data.data.data.exp * 1000 <= Date.now()) {
          logOut();
          navigate("/auth/login");
          return;
        }
      } catch (error) {
        navigate("/auth/login");
      }
    };

    getUser();
  });

  return <div className="w-full h-full grow">{children}</div>;
};

export default Guard;
