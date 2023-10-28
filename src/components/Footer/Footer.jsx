import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  function WindowOpen() {
    window.open("https://github.com/5Y3D-Bilal");
  }
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src="img/logo.png" alt="" title="name" className="logo" />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            magni similique fuga eius, exercitationem quis impedit voluptates
            eveniet? Veritatis, magnam!
          </p>
          <div className="socialIcon flex">
            <FaFacebook
              className="icon"
              data-aos="fade-left"
              data-aos-duration="2500"
            />
            <AiFillTwitterSquare
              className="icon"
              data-aos="fade-left"
              data-aos-duration="2500"
            />
            <BsYoutube
              className="icon"
              data-aos="fade-left"
              data-aos-duration="2500"
            />
            <AiOutlineInstagram
              className="icon"
              data-aos="fade-left"
              data-aos-duration="2500"
            />
          </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Flight Status</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Check In</a>
          </li>
          <li>
            <a href="#">Manage your booking</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">How to</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Beggage</a>
          </li>
          <li>
            <a href="#">Route map</a>
          </li>
          <li>
            <a href="#">Our communities</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">How to</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Beggage</a>
          </li>
          <li>
            <a href="#">Route map</a>
          </li>
          <li>
            <a href="#">Our communities</a>
          </li>
        </div>
      </div>

      <div className="copyRight flex" onClick={WindowOpen}>
        <p>Desgind by 567</p>
        <a href="https://github.com/5Y3D-Bilal">567-Productions</a>
      </div>
    </div>
  );
};

export default Footer;
