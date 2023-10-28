import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-Lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex" data-aos='fade-down' data-aos-duration='2500'>
        <div className="videoDiv">
          <video
            src="img/video.mp4"
            autoPlay
            muted
            loop
            className="video"
          ></video>
        </div>
        <img src="img/plane.png" alt="" className="plane" />
      </div>
    </div>
  );
};

export default Home;
