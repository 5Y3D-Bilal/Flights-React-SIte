import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Travelers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const travelers = [
    {
      id: 1,
      destination: "img/Takyo.jpg",
      travelerimg: "img/travelerimg.jpg",
      travelerName: "Sara",
      socailLink: "Sare67",
    },
    {
      id: 2,
      destination: "img/amrica.jpg",
      travelerimg: "img/travelerimg2.jpg",
      travelerName: "keny",
      socailLink: "Keny03",
    },
    {
      id: 3,
      destination: "img/china.jpg",
      travelerimg: "img/travelerimg3.jpg",
      travelerName: "Muee",
      socailLink: "Muee03",
    },
    {
      id: 4,
      destination: "img/china.jpg",
      travelerimg: "img/travelerimg3.jpg",
      travelerName: "Muee",
      socailLink: "Muee03",
    },
  ];

  return (
    <>
      <div className="travelers container section">
        <h2>Top Travelers of this month!</h2>
        {travelers.map(
          ({ id, destination, travelerimg, travelerName, socailLink }) => {
            return (
              <div key={id} className="sectionContainer">
                <div className="travelersContainer">
                  <div className="singleTraveler " data-aos='fade-left' data-aos-duration='2500'>
                    <img src={destination} alt="" className="destination" />

                    <div className="travelerDetails">
                      <div className="travelerPicture">
                        <img src={travelerimg} alt="" className="travelerimg" />
                      </div>
                      <div className="travelerName">
                        <span>{travelerName}</span>
                        <p>{socailLink}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Travelers;
