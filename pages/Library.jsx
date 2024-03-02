import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Library = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="TestiMainCont">
      <Carousel responsive={responsive}>
        <div className="TestiSubMainCont">
          <div className="Item1">
            <div className="itemimage">
              <img src="/Screenshot 2024-02-10 163338.png" alt="" />
            </div>
            <div className="itemimagecont">
              <h6> Mohit Sir </h6>
              <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
            </div>
          </div>
        </div>
        <div>
          <div className="Item1">
            <div className="itemimage">
              <img src="/Screenshot 2024-02-10 163338.png" alt="" />
            </div>
            <div className="itemimagecont">
              <h6> Mohit Sir </h6>
              <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
            </div>
          </div>
        </div>
        <div>
          <div className="Item1">
            <div className="itemimage">
              <img src="/Screenshot 2024-02-10 163338.png" alt="" />
            </div>
            <div className="itemimagecont">
              <h6> Mohit Sir </h6>
              <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
            </div>
          </div>
        </div>
        <div>
          <div className="Item1">
            <div className="itemimage">
              <img src="/Screenshot 2024-02-10 163338.png" alt="" />
            </div>
            <div className="itemimagecont">
              <h6> Mohit Sir </h6>
              <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
            </div>
          </div>
        </div>
        <div>
          <div className="Item1">
            <div className="itemimage">
              <img src="/Screenshot 2024-02-10 163338.png" alt="" />
            </div>
            <div className="itemimagecont">
              <h6> Mohit Sir </h6>
              <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
            </div>
          </div>
        </div>
        <div>
          <div className="Item1">
            <div className="itemimage">
              <img src="/Screenshot 2024-02-10 163338.png" alt="" />
            </div>
            <div className="itemimagecont">
              <h6> Mohit Sir </h6>
              <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
            </div>
          </div>
        </div>
        <div>
          <div className="Item1">
            <div className="itemimage">
              <img src="/Screenshot 2024-02-10 163338.png" alt="" />
            </div>
            <div className="itemimagecont">
              <h6> Mohit Sir </h6>
              <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
            </div>
          </div>
        </div>
        <div>
          <div className="Item1">
            <div className="itemimage">
              <img src="/Screenshot 2024-02-10 163338.png" alt="" />
            </div>
            <div className="itemimagecont">
              <h6> Mohit Sir </h6>
              <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
            </div>
          </div>
        </div>
        <div>
          <div className="Item1">
            <div className="itemimage">
              <img src="/Screenshot 2024-02-10 163338.png" alt="" />
            </div>
            <div className="itemimagecont">
              <h6> Mohit Sir </h6>
              <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
            </div>
          </div>
        </div>
        <div></div>
      </Carousel>
    </div>
  );
};

export default Library;
