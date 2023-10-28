import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Subcriber = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="subcriber section">
      <div className="sectionContainer container">
        <h2 data-aos='fade-down' data-aos-duration='2500'>Newsletters & get Latest News</h2>
        <div className="inputDiv flex" data-aos='fade' data-aos-duration='2500'>
          <input type="text" placeholder="Enter your email" />
        <button className="btn">Subcriber</button>
        </div>
      </div>
    </div>
  );
};

export default Subcriber;
