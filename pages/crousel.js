import Carousel from "react-bootstrap/Carousel";
import React from "react";
function crouse() {
  return (
    <div style={{ padding: "20px" }}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className="our-course-card">
            <h1>
              <i>OUR COURSES</i>
            </h1>
          </div>

          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="our-course-card1">
            <div className="">
              <img
                src="/DOUBTPUCHO LOGO 1.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <h2 className="ad">Ab Kaho No Doudth</h2>
          </div>
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="our-course-card1">
            <div className="Quiz-card-update">
              <i className="quiz-style">QUIZ OF THE DAY</i>
            </div>
            <button className="Quiz-button">
              <i>Play Now</i>
            </button>
          </div>
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="our-course-card1">
            <h1 className="get-rout">
              <div className="second-heading">
                Get UPTO <i className="italic-style">100%</i> Scholarship
              </div>
              <img src="/Screenshot (68).png" style={{ width: "45%" }} />
            </h1>

            <div className="button-main-class1">
              <button className="button-register">REGISTER NOW</button>
              <p className="Application1">
                Application on only <br />
                Full Length Course
              </p>
            </div>
          </div>
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="our-course-card4">
            <div className="main-class">
              <h1 className="blog-heading1">Blogs</h1>
              <img src="/images1 .png" alt="" className="card-style-image" />
              <img src="/images1 .png" alt="" className="card-style-image" />
              <img src="/images1 .png" alt="" className="card-style-image" />
              <img src="/images1 .png" alt="" className="card-style-image" />
            </div>
          </div>
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default crouse;
