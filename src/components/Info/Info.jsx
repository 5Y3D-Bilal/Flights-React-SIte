import { SlCalender } from "react-icons/sl";
import { BsShieldCheck } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Info = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2 data-aos='fade-right' data-aos-duration='2500'>Travel to make memories all around the world</h2>
          <div className="bnt">

          <button className="btn flex" data-aos='fade-left' data-aos-duration='2500'>View All</button>
          </div>
        </div>
        <div className="cardsDiv grid">
          <div className="singleCard grid" data-aos='fade-up' data-aos-duration='2000'>
            <div className="iconDiv flex">
              <SlCalender />
            </div>
            <span className="cardTitles">Book & Relax</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="singleCard grid" data-aos='fade-up' data-aos-duration='2500'>
            <div className="iconDiv colorOne flex">
              <BsShieldCheck />
            </div>
            <span className="cardTitles">Smart CheckList</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="singleCard  grid "data-aos='fade-up' data-aos-duration='3000'>
            <div className="iconDiv colorTow flex">
              <CiBookmarkCheck />
            </div>
            <span className="cardTitles">Save More</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
