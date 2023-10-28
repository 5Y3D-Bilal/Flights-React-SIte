import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Support = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan Your travel with Confidence</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
            exercitationem.
          </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo" data-aos='fade-down' data-aos-duration='2500'>
              <span className="number ">01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                neque, libero vero accusantium magni possimu!
              </p>
            </div>
            <div className="singleInfo" data-aos='fade-down' data-aos-duration='3000'>
              <span className="number colorOne">02</span>
              <h4>Chaffuer services at your arrivel</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                neque, libero vero accusantium magni possimu!
              </p>
            </div>
            <div className="singleInfo" data-aos='fade-down' data-aos-duration='3500'>
              <span className="number colorTow">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                neque, libero vero accusantium magni possimu!
              </p>
            </div>
          </div>
          <div className="imgDiv" data-aos='fade-left' data-aos-duration='2500'>
            <img src="img/window1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
