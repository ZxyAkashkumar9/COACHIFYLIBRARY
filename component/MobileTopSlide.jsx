import Carousel from "react-bootstrap/Carousel";

function MobileTopSlide() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="our-course-card">
          <h1>
            <i>OUR COURSES</i>
          </h1>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="our-course-card">
          <div className="">
            <img
              src="/DOUBTPUCHO LOGO 1.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <h2 className="ad">Ab Kaho No Doudth</h2>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="our-course-card">
          <div className="Quiz-card-update">
            <i className="quiz-style">QUIZ OF THE DAY</i>
          </div>
          <button className="Quiz-button-for-play">
            <i>Play Now</i>
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="our-course-card">
          <h1 className="get-rout">
            Get UPTO <i className="italic-style">100%</i> Scholarship
          </h1>

          <div className="image-for-get-item">
            <img src="/Screenshot (68).png" style={{ width: "45%" }} />
          </div>

          <div className="button-main-class1">
            <button className="button-register">REGISTER NOW</button>
            <p className="Application1">
              Application on only <br />
              Full Length Course
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MobileTopSlide;
