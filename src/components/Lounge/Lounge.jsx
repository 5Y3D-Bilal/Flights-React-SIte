import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Lounge = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv" data-aos='fade-left' data-aos-duration='2500'>
          <img src="img/lounge.webp" alt="" />
        </div>
        <div className="textDiv">
          <h2 data-aos='fade-down' data-aos-duration='2500'>Unaccompanid Minor Lounge</h2>
          <div className="grids grid">
            <div className="singleGrid" data-aos='fade-right' data-aos-duration='2500'>
              <span className="gridTitle">Help though the airpot</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nemo asperiores sunt
              </p>
            </div>

            <div className="singleGrid" data-aos='fade-left' data-aos-duration='3000'>
              <span className="gridTitle">Care on the flight</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nemo asperiores sunt
              </p>
            </div>

            <div className="singleGrid" data-aos='fade-up' data-aos-duration='3500'>
              <span className="gridTitle">Priority Boarding</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nemo asperiores sunt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
