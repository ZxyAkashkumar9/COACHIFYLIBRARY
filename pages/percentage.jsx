import React, { useState } from "react";
import Page2 from "../component/Right_Sidebar";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MobileTopSlide from "../component/MobileTopSlide";
const Percentage = () => {
  const [tog, settog] = useState(0);
  return (
    <div>
      <Header />
      <div className="main-container-for-card">
        <MobileTopSlide />
      </div>
      <div className="Firstmaincontainer">
        <div className="Main-Container">
          <div className="container-1">
            <section>
              <div className="mylibrary1">
                <div className="mainheading">
                  <h1 className="library-heading-for-library">Percentage</h1>
                </div>
              </div>
              <div className="main-class-for-embeded">
                <div className="Embeded video">
                  <iframe
                    width="900"
                    height="515"
                    src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                    title="Embedded Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </section>
            <section>
              <div className="main-button-for-persontage">
                <div className="main-button-class1">
                  <div className="button-main-class2">
                    <button className="New-button">Level1</button>
                  </div>
                  <div className="button-main-class">
                    <button className="New-button">Topic</button>
                  </div>
                  <div className="button-main-class">
                    <button className="New-button">Topic</button>
                  </div>
                  <div className="button-main-class">
                    <button className="New-button">Topic</button>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="mylibrary2">
                <div className="mainheading3">
                  <h1 className="library-heading5">Notes</h1>
                </div>
              </div>
              <div className="how-to-uee-seaction6">
                <div className="Lorem-paragraph-fix8">
                  <p className="Lorem-paragraph9">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                    commodo consequat. Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla
                    facilisi
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                    commodo consequat. Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla
                    facilisi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="mylibrary">
                <div className="mainheading">
                  <div className="drop1">
                    <ul
                      className={
                        tog === 1
                          ? "unorderdlist1 unorderdnext1 "
                          : "unorderdlist1"
                      }
                    >
                      {tog === 1 && (
                        <li>
                          {" "}
                          <h6 className="library-heading">
                            <span onClick={(e) => settog(0)}>▼ </span>Read More
                          </h6>
                        </li>
                      )}
                      {tog !== 1 && (
                        <li className="library-list">
                          <span
                            className="library-list-span library-span"
                            onClick={(e) => settog(1)}
                          ></span>
                          <h6 className="library-heading"> Read More</h6>
                        </li>
                      )}
                    </ul>
                    <div
                      className={tog === 1 ? "show1" : "dropdown-menu col-12"}
                    ></div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="mylibrary2">
                <div className="mainheading3">
                  <h1 className="library-heading5">Formulae</h1>
                </div>
                <div className="span-text">
                  <p>
                    <span>32.</span> To express x% as a fraction, we have x% = x
                    / 100
                  </p>

                  <div>
                    <p>
                      <span>33.</span> To express a / b as a percent, we have a
                      / b = (a/bx100) %
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>34.</span> . If 'A' is R% more than 'B', <i>then</i>{" "}
                      'B' is less than 'A' by
                    </p>
                  </div>
                  <div>
                    <p>
                      If the price of a commodity {""}
                      <i>increases</i> by R%, then the reduction in consumption,
                      not to increase the expenditure is
                    </p>
                  </div>
                  <div>
                    <p style={{ textAlign: "center" }}>100R/ [100+ R] %</p>
                    <p>
                      <span>35.</span> . If 'A' is R%{""} <i>less</i> than 'B',
                      then 'B' is more than 'A' by
                    </p>
                    <p style={{ textAlign: "center" }}>OR</p>
                    <p>
                      If the price of a commodity decreases by R%, then the{""}
                      <i>increase</i> in consumption, not to increase the
                      expenditure is
                    </p>
                    <p style={{ textAlign: "center" }}>100R/ [100 - R] %</p>
                    <p>
                      <span>36.</span> . If the population of town is 'P' in a
                      year , then its population after 'N' years is
                    </p>
                    <p style={{ textAlign: "center" }}>P(1 + R.100)^N</p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="mylibrary1">
                <div className="mainheading">
                  <h1
                    className="library-heading1"
                    style={{ PaddingBottom: "17px" }}
                  >
                    Short Tricks{" "}
                  </h1>
                </div>
              </div>
              <div className="main-class-for-embeded">
                <div className="Embeded video">
                  <iframe
                    width="900"
                    height="515"
                    src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                    title="Embedded Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </section>
            <section>
              <div className="main-button-for-persontage">
                <div className="main-button-class1">
                  <div className="button-main-class2">
                    <button className="New-button">Level1</button>
                  </div>
                  <div className="button-main-class">
                    <button className="New-button">Topic</button>
                  </div>
                  <div className="button-main-class">
                    <button className="New-button">Topic</button>
                  </div>
                  <div className="button-main-class">
                    <button className="New-button">Topic</button>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="mylibrary2">
                <div className="mainheading3"></div>
              </div>
              <div className="how-to-uee-seaction6">
                <div className="Lorem-paragraph-fix8">
                  <p className="Lorem-paragraph9">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                    commodo consequat. Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla
                    facilisi
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                    commodo consequat. Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla
                    facilisi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="mylibrary">
                <div className="mainheading">
                  <div className="drop1">
                    <ul
                      className={
                        tog === 1
                          ? "unorderdlist1 unorderdnext1 "
                          : "unorderdlist1"
                      }
                    >
                      {tog === 1 && (
                        <li>
                          {" "}
                          <h6 className="library-heading">
                            <span onClick={(e) => settog(0)}>▼ </span>Read More
                          </h6>
                        </li>
                      )}
                      {tog !== 1 && (
                        <li className="library-list">
                          <span
                            className="library-list-span library-span"
                            onClick={(e) => settog(1)}
                          ></span>
                          <h6 className="library-heading"> Read More</h6>
                        </li>
                      )}
                    </ul>
                    <div
                      className={tog === 1 ? "show1" : "dropdown-menu col-12"}
                    ></div>
                  </div>
                </div>
                <div className="mylibrary1">
                  <div className="mainheading">
                    <h1
                      className="library-heading1"
                      style={{ paddingTop: "15px", fontSize: "35px" }}
                    >
                      Exercise
                    </h1>
                  </div>
                </div>
                <div className="main-container-for-card">
                  <div className="card-for">
                    <h1 className="blog-heading">Blogs</h1>
                    <div className="Icon-in-card">
                      <img
                        src="/images1 .png"
                        alt=""
                        style={{ width: "41%", height: " 78px" }}
                      />
                      <div>
                        <div className="Lorem">
                          {" "}
                          <h1 className="loerm-ipsum">Lorem ipsum</h1>
                          <div className="lorem-row">
                            <p1 className="lorem-ipsum">Loerm</p1>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                              alt=""
                              style={{ width: "6%", height: "8%" }}
                            />
                            <span className="span-0">00</span>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                              alt=""
                              style={{ width: "6%", height: "8%" }}
                            />
                            <span className="span-0">00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Icon-in-card">
                      <img
                        src="/images1 .png"
                        alt=""
                        style={{ width: "45%", height: " 78px" }}
                      />
                      <div>
                        <div className="Lorem">
                          <h1 className="loerm-ipsum">Lorem ipsum</h1>
                          <div className="lorem-row">
                            <p1 className="lorem-ipsum">Loerm</p1>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                              alt=""
                              style={{ width: "6%", height: "8%" }}
                            />
                            <span className="span-0">00</span>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                              alt=""
                              style={{ width: "6%", height: "8%" }}
                            />
                            <span className="span-0">00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Icon-in-card">
                      <img
                        src="/images1 .png"
                        alt=""
                        style={{ width: "41%", height: " 78px" }}
                      />
                      <div>
                        <div className="Lorem">
                          <h1 className="loerm-ipsum">Lorem ipsum</h1>
                          <div className="lorem-row">
                            <p1 className="lorem-ipsum">Loerm</p1>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                              alt=""
                              style={{ width: "6%", height: "8%" }}
                            />
                            <span className="span-0">00</span>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                              alt=""
                              style={{ width: "6%", height: "8%" }}
                            />
                            <span className="span-0">00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Icon-in-card">
                      <img
                        src="/images1 .png"
                        alt=""
                        style={{ width: "41%", height: " 78px" }}
                      />
                      <div>
                        <div className="Lorem">
                          <h1 className="loerm-ipsum">Lorem ipsum</h1>
                          <div className="lorem-row">
                            <p1 className="lorem-ipsum">Loerm</p1>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                              alt=""
                              style={{ width: "6%", height: "8%" }}
                            />
                            <span className="span-0">00</span>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                              alt=""
                              style={{ width: "6%", height: "8%" }}
                            />
                            <span className="span-0">00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="container-2">
            <div className="right-container">
              <h3>Update </h3>
            </div>
            <section>
              <div className="right-containers">
                <div className="right-updates">
                  <img src="/DOUBTPUCHO LOGO 1.jpg" alt="" />
                  <h2 className="ad">Ab Kaho No Doudth</h2>
                </div>
              </div>
            </section>

            <section>
              <div className="Quiz-for-update">
                <div className="Quiz-card-update">
                  <i>QUIZ OF THE DAY</i>
                </div>
                <button className="Quiz-button">
                  <i>Play Now</i>
                </button>
              </div>
            </section>

            <section>
              <div className="card-for-update">
                <div className="card-update">
                  <h1 className="getup">
                    {" "}
                    <i>Get Upto</i>
                  </h1>{" "}
                  <span className="span-for-number">
                    {" "}
                    <h1>
                      <i>100%</i>
                    </h1>
                  </span>
                  <h1 className="getup">
                    <i>Scholarship</i>
                  </h1>
                </div>

                <img
                  src="/Screenshot (68).png"
                  width={800}
                  height={700}
                  alt="Picture of the author"
                />
                {/* <img
          src="/WhatsApp Image 2024-02-12 at 11.38.02_bf5c52de.jpg"
          alt=""
          style={{
            borderRadius: "12px",
          }}
        /> */}
                <button className="scholarship-button">REGISTER NOW</button>
                <div></div>
                <p className="Application">
                  Application on only <br />
                  Full Length Course
                </p>
              </div>
            </section>

            <section>
              <div
                className="main-container-for-card"
                style={{ marginBottom: "32px" }}
              >
                <div className="card-for">
                  <h1 className="blog-heading">Blogs</h1>
                  <div className="Icon-in-card">
                    <img
                      src="/images1 .png"
                      alt=""
                      style={{ width: "41%", height: " 78px" }}
                    />
                    <div>
                      <div className="Lorem">
                        {" "}
                        <h1 className="loerm-ipsum">Lorem ipsum</h1>
                        <div className="lorem-row">
                          <p1 className="lorem-ipsum">Loerm</p1>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                            alt=""
                            style={{ width: "6%", height: "8%" }}
                          />
                          <span className="span-0">00</span>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                            alt=""
                            style={{ width: "6%", height: "8%" }}
                          />
                          <span className="span-0">00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Icon-in-card">
                    <img
                      src="/images1 .png"
                      alt=""
                      style={{ width: "45%", height: " 78px" }}
                    />
                    <div>
                      <div className="Lorem">
                        <h1 className="loerm-ipsum">Lorem ipsum</h1>
                        <div className="lorem-row">
                          <p1 className="lorem-ipsum">Loerm</p1>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                            alt=""
                            style={{ width: "6%", height: "8%" }}
                          />
                          <span className="span-0">00</span>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                            alt=""
                            style={{ width: "6%", height: "8%" }}
                          />
                          <span className="span-0">00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Icon-in-card">
                    <img
                      src="/images1 .png"
                      alt=""
                      style={{ width: "41%", height: " 78px" }}
                    />
                    <div>
                      <div className="Lorem">
                        <h1 className="loerm-ipsum">Lorem ipsum</h1>
                        <div className="lorem-row">
                          <p1 className="lorem-ipsum">Loerm</p1>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                            alt=""
                            style={{ width: "6%", height: "8%" }}
                          />
                          <span className="span-0">00</span>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                            alt=""
                            style={{ width: "6%", height: "8%" }}
                          />
                          <span className="span-0">00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Icon-in-card">
                    <img
                      src="/images1 .png"
                      alt=""
                      style={{ width: "41%", height: " 78px" }}
                    />
                    <div>
                      <div className="Lorem">
                        <h1 className="loerm-ipsum">Lorem ipsum</h1>
                        <div className="lorem-row">
                          <p1 className="lorem-ipsum">Loerm</p1>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                            alt=""
                            style={{ width: "6%", height: "8%" }}
                          />
                          <span className="span-0">00</span>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                            alt=""
                            style={{ width: "6%", height: "8%" }}
                          />
                          <span className="span-0">00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Percentage;
