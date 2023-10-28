import { CiLocationOn } from "react-icons/ci";
import { BiUserCircle } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Search = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="search container section">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Ecomeny</span>
          </div>
          <div className="singleBtn">
            <span>Business Class</span>
          </div>
          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>
        <div data-aos='fade-up' data-aos-duration='2500' className="searchInputs flex">
          {/* Single input */}
          <div className="searchInput flex">
            <div className="iconDiv">
              <CiLocationOn className="icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where do you want to go ?" />
            </div>
          </div>

          <div className="searchInput flex">
            <div className="iconDiv">
              <SlCalender className="icon" />
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder="Add Guests" />
            </div>
          </div>

          <div className="searchInput flex">
            <div className="iconDiv">
              <BiUserCircle className="icon" />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Add Date" />
            </div>
          </div>

          <div className="searchInput flex">
            <div className="iconDiv">
              <BiUserCircle className="icon" />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Add Date" />
            </div>
          </div>
          <div className="SearchBtn">
            <button className="btn ">Search Flights</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
