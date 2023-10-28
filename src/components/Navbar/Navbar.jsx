import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };
  const RemoveNavBar = () => {
    setActive("navBarMenu");
  };

  const [bgcolor, setBgColor] = useState("navBartow");

  const BgColors = () => {
    if (window.scrollY >= 20) {
      setBgColor("navBartow header_Bg");
    } else {
      setBgColor("navBartow");
    }
  };
  window.addEventListener('scroll' , BgColors)

  return (
    <>
      <div className="navBar flex">
        <div className="navBarone flex">
          <div>
            <SiConsul className="icon" />
          </div>

          <div className="none flex">
            <li className="flex">
              {" "}
              <BsPhoneVibrate className="icon" /> Support
            </li>
            <li className="flex">
              {" "}
              <AiOutlineGlobal className="icon" /> Languages
            </li>
          </div>

          <div className="atb flex">
            <span>SignIn</span>
            <span>SignOut</span>
          </div>
        </div>

        <div className={bgcolor}>
          <div className="logoDiv">
            <img src="img/logo.png" className="logo" alt="" />
          </div>

          <div className={active}>
            <ul className="menu flex"> 
              <li onClick={RemoveNavBar} className="listItem">
                Home
              </li>
              <li onClick={RemoveNavBar} className="listItem">
                About
              </li>
              <li onClick={RemoveNavBar} className="listItem">
                Offers
              </li>
              <li onClick={RemoveNavBar} className="listItem">
                Seats
              </li>
              <li onClick={RemoveNavBar} className="listItem">
                Destinations
              </li>
            <button onClick={RemoveNavBar} className="btn cont flex">
              Contact{" "}
            </button>
            </ul>
          </div>
         
          <div className="toggleIcon" onClick={showNavBar}>
            <CgMenuGridO className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
