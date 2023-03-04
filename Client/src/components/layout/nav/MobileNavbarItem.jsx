import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../provider/Context";

const MobileNavbarItem = ({ link, index, title, setHamburger }) => {
  const { logOut } = useContext(Context);

  return (
    <div className="w-full flex justify-center py-3 hover:bg-zinc-100 transition-colors duration-300">
      <Link
        to={link}
        onClick={() => {
          setHamburger(false);
          if (index === 3) {
            logOut();
          }
        }}
        className={`transition-color duration-300 cursor-pointer text-secondary-text hover:text-gray-800"} `}
      >
        {title}
      </Link>
    </div>
  );
};

export default MobileNavbarItem;
