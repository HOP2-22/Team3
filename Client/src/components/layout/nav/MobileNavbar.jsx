import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { HeaderTitles } from "../layoutdata";
import MobileNavbarItem from "./MobileNavbarItem";
import { Context } from "../../../provider/Context";

const MobileNavbar = ({ hamburger, setHamburger }) => {
  const { user } = useContext(Context);

  return (
    <div
      className={`absolute ${
        hamburger ? "translate-y-[60px]" : "-translate-y-80"
      } z-10 transition md:hidden divide-y w-full bg-white shadow-xl`}
    >
      {HeaderTitles.map((item, index) => {
        if (index === 3 && user !== null) {
          return (
            <MobileNavbarItem
              title={"Logout"}
              key={index}
              index={index}
              link={"/"}
              setHamburger={setHamburger}
            />
          );
        }
        return (
          <MobileNavbarItem
            title={item.name}
            key={index}
            index={index}
            link={item.link}
            setHamburger={setHamburger}
          />
        );
      })}
      <div className="w-full flex justify-center py-3">
        <Link
          className={`py-[10px] px-6  border rounded-[10px] cursor-pointer transition-color duration-400 text-[#6e6c68] border-[#82807e] hover:text-white hover:bg-[#82807e]
        `}
        >
          Get access
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
