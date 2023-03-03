import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const Provider = ({ children }) => {
  const [loading, SetLoading] = useState(false);

  const location = useLocation();
  const [path, setpath] = useState(window.location.pathname);

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleToTop();
    setpath(location.pathname);
  }, [location]);

  return (
    <Context.Provider
      value={{
        path,
        loading,
        SetLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
