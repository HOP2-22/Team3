import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { useLocation } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";

export const Context = createContext();

const Provider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const [path, setpath] = useState(window.location.pathname);

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  axios.interceptors.request.use(
    (config) => {
      const token = Cookie.get("token");
      if (token) {
        config.headers.set("token", token);
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  const logOut = (config) => {
    setUser(null);
    Cookie.remove("token");
    config.headers.remove("token");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://blog-website-team3.onrender.com/user/"
        );

        if (response.data.data.data.exp * 1000 <= Date.now()) {
          logOut();
          setLoading(false);
          return;
        }

        setUser(response.data.data.user);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    handleToTop();
    setpath(location.pathname);
  }, [location]);

  return (
    <Context.Provider
      value={{
        path,
        user,
        loading,
        setLoading,
        logOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
