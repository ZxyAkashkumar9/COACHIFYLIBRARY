import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Header from "../component/Header";
import Page2 from "./Right_Sidebar";
import Footer from "../component/Footer";
import Link from "next/link";
import MobileTopSlide from "./MobileTopSlide";

const Home_Page = () => {
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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const [tog, settog] = useState(0);
  return (
    <div>
      <div className="main-container-for-card">
        <MobileTopSlide />
      </div>
      <div className="Firstmaincontainer">
        <div className="Main-Container">
          <div className="container-1">
            <section>
              <div className="mylibrary">
                <div className="mainheading">
                  <h1 className="library-heading-for-library">My Library</h1>
                  <div className="main-container-for-icon">
                    <div className="drop">
                      <ul
                        className={
                          tog === 1
                            ? "unorderdlist unorderdnext "
                            : "unorderdlist"
                        }
                      >
                        {tog === 1 && (
                          <div
                            onClick={(e) => settog(0)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">Notes Zone</h1>
                            </li>

                            <li>
                              <span>-</span>
                            </li>
                          </div>
                        )}
                        {tog !== 1 && (
                          <div
                            className="style-list-item"
                            onClick={(e) => settog(1)}
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">Notes Zone</h1>
                            </li>

                            <li>
                              <span>+</span>
                            </li>
                          </div>
                        )}
                      </ul>
                      <ul class={tog === 1 ? "show" : "dropdown-menu col-12"}>
                        <li className="button-hover-for-qa-notes">
                          <button class="dropdown-item" type="button">
                            <Link href={"/qanotes"} className="QA-notes">
                              ➤ QA Notes
                            </Link>
                          </button>
                        </li>

                        <li className="button-hover-for-qa-notes">
                          <button class="dropdown-item" type="button">
                            <Link href={"/qanotes"} className="QA-notes">
                              ➤ QA Notes
                            </Link>
                          </button>
                        </li>
                        <li className="button-hover-for-qa-notes">
                          <button class="dropdown-item" type="button">
                            <Link href={"/qanotes"} className="QA-notes">
                              ➤ QA Notes
                            </Link>
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="drop">
                      <ul
                        className={
                          tog === 2
                            ? "unorderdlist unorderdnext "
                            : "unorderdlist"
                        }
                      >
                        {tog === 2 && (
                          <div
                            className="style-list-item"
                            onClick={(e) => settog(0)}
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">English Zone</h1>
                            </li>
                            <li>
                              <span>-</span>
                            </li>
                          </div>
                        )}
                        {tog !== 2 && (
                          <div
                            className="style-list-item"
                            onClick={(e) => settog(2)}
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">English Zone</h1>
                            </li>
                            <li>
                              <span>+</span>
                            </li>
                          </div>
                        )}
                      </ul>
                      <ul class={tog === 2 ? "show" : "dropdown-menu col-12"}>
                        <li>
                          <button class="dropdown-item" type="button">
                            Action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Another action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Something else here
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="drop">
                      <ul
                        className={
                          tog === 3
                            ? "unorderdlist unorderdnext "
                            : "unorderdlist"
                        }
                      >
                        {tog === 3 && (
                          <div
                            onClick={(e) => settog(0)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">GK Zone</h1>
                            </li>
                            <li>
                              <span>-</span>
                            </li>
                          </div>
                        )}
                        {tog !== 3 && (
                          <div
                            onClick={(e) => settog(3)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">GK Zone</h1>
                            </li>
                            <li>
                              <span>+</span>
                            </li>
                          </div>
                        )}
                      </ul>
                      <ul class={tog === 3 ? "show" : "dropdown-menu col-12"}>
                        <li>
                          <button class="dropdown-item" type="button">
                            Action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Another action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Something else here
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="drop">
                      <ul
                        className={
                          tog === 4
                            ? "unorderdlist unorderdnext "
                            : "unorderdlist"
                        }
                      >
                        {tog === 4 && (
                          <div
                            onClick={(e) => settog(0)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">PYQ's Zone</h1>
                            </li>
                            <li>
                              <span onClick={(e) => settog(0)}>-</span>
                            </li>
                          </div>
                        )}
                        {tog !== 4 && (
                          <div
                            onClick={(e) => settog(4)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">PYQ's Zone</h1>
                            </li>
                            <li>
                              <span>+</span>
                            </li>
                          </div>
                        )}
                      </ul>
                      <ul class={tog === 4 ? "show" : "dropdown-menu col-12"}>
                        <li>
                          <button class="dropdown-item" type="button">
                            Action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Another action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Something else here
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="drop">
                      <ul
                        className={
                          tog === 8
                            ? "unorderdlist unorderdnext "
                            : "unorderdlist"
                        }
                      >
                        {tog === 8 && (
                          <div
                            onClick={(e) => settog(0)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">QA Zone</h1>
                            </li>
                            <li>
                              <span>-</span>
                            </li>
                          </div>
                        )}
                        {tog !== 8 && (
                          <div
                            onClick={(e) => settog(8)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">QA Zone</h1>
                            </li>
                            <li>
                              <span>+</span>
                            </li>
                          </div>
                        )}
                      </ul>
                      <ul class={tog === 8 ? "show" : "dropdown-menu col-12"}>
                        <li>
                          <button class="dropdown-item" type="button">
                            Action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Another action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Something else here
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="drop">
                      <ul
                        className={
                          tog === 5
                            ? "unorderdlist unorderdnext "
                            : "unorderdlist"
                        }
                      >
                        {tog === 5 && (
                          <div
                            onClick={(e) => settog(0)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">DI/LR Zone</h1>
                            </li>
                            <li>
                              <span>-</span>
                            </li>
                          </div>
                        )}
                        {tog !== 5 && (
                          <div
                            onClick={(e) => settog(5)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">DI/LR Zone</h1>
                            </li>
                            <li>
                              <span>+</span>
                            </li>
                          </div>
                        )}
                      </ul>
                      <ul class={tog === 5 ? "show" : "dropdown-menu col-12"}>
                        <li>
                          <button class="dropdown-item" type="button">
                            Action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Another action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Something else here
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="drop">
                      <ul
                        className={
                          tog === 6
                            ? "unorderdlist unorderdnext "
                            : "unorderdlist"
                        }
                      >
                        {tog === 6 && (
                          <div
                            onClick={(e) => settog(0)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">LA Zone</h1>
                            </li>
                            <li>
                              <span onClick={(e) => settog(0)}>-</span>
                            </li>
                          </div>
                        )}
                        {tog !== 6 && (
                          <div
                            onClick={(e) => settog(6)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">LA Zone</h1>
                            </li>

                            <li>
                              <span>+</span>
                            </li>
                          </div>
                        )}
                      </ul>
                      <ul class={tog === 6 ? "show" : "dropdown-menu col-12"}>
                        <li>
                          <button class="dropdown-item" type="button">
                            Action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Another action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Something else here
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="drop">
                      <ul
                        className={
                          tog === 7
                            ? "unorderdlist unorderdnext "
                            : "unorderdlist"
                        }
                      >
                        {tog === 7 && (
                          <div
                            onClick={(e) => settog(0)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">Short Tricks</h1>
                            </li>
                            <li>
                              <span>-</span>
                            </li>
                          </div>
                        )}
                        {tog !== 7 && (
                          <div
                            onClick={(e) => settog(7)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">Short Tricks</h1>
                            </li>

                            <li>
                              <span>+</span>
                            </li>
                          </div>
                        )}
                      </ul>
                      <ul class={tog === 7 ? "show" : "dropdown-menu col-12"}>
                        <li>
                          <button class="dropdown-item" type="button">
                            Action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Another action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Something else here
                          </button>
                        </li>
                      </ul>
                    </div>
                    {/* ***************************************** */}
                    <div className="drop">
                      <ul
                        className={
                          tog === 9
                            ? "unorderdlist unorderdnext "
                            : "unorderdlist"
                        }
                      >
                        {tog === 9 && (
                          <div
                            onClick={(e) => settog(0)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">QUIZ Zone</h1>
                            </li>
                            <li>
                              <span onClick={(e) => settog(0)}>-</span>
                            </li>
                          </div>
                        )}
                        {tog !== 9 && (
                          <div
                            onClick={(e) => settog(9)}
                            className="style-list-item"
                          >
                            <li className="listitem">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                                alt=""
                              />
                            </li>
                            <li className="notesitem">
                              <h1 className="Notes-text">QUIZ Zone</h1>
                            </li>

                            <li>
                              <span>+</span>
                            </li>
                          </div>
                        )}
                      </ul>
                      <ul class={tog === 9 ? "show" : "dropdown-menu col-12"}>
                        <li>
                          <button class="dropdown-item" type="button">
                            Action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Another action
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Something else here
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="main-section">
                <div className="w-100">
                  <h1 className="library-heading">Continue Reading</h1>
                  <div className="progress-div">
                    <div className="progress-divOne">
                      <img
                        src="/images1 .png"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="progress-divTwo">
                      <p className="Grammer-text">Grammar | 0.1.02.2024</p>
                    </div>

                    <div className="progress-divProgress">
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-divThree">
                      <p className="Grammer-text">90% Completed</p>
                    </div>
                  </div>
                  <div className="progress-div">
                    <div className="progress-divOne">
                      <img
                        src="/images1 .png"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="progress-divTwo">
                      <p className="Grammer-text">Grammar | 0.1.02.2024</p>
                    </div>

                    <div className="progress-divProgress">
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-divThree">
                      <p className="Grammer-text">90% Completed</p>
                    </div>
                  </div>
                  <div className="progress-div">
                    <div className="progress-divOne">
                      <img
                        src="/images1 .png"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="progress-divTwo">
                      <p className="Grammer-text">Grammar | 0.1.02.2024</p>
                    </div>

                    <div className="progress-divProgress">
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-divThree">
                      <p className="Grammer-text">90% Completed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn-container">
                <button className="btns">New</button>
                <button className="btns">Short Tricks</button>
                <button className="btns">CAT PYQ's</button>
                <button className="btns">CAT PYQ's</button>
                <button className="btns">Grammar</button>
              </div>
              <div className="Grammar-image">
                <div className="box">
                  <div className="card">
                    <img src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg" />
                  </div>
                  <p className="Grammer-card">Grammar | 0.1.01.2024</p>
                </div>
                <div className="box">
                  <div className="card">
                    <img src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg" />
                  </div>
                  <p className="Grammer-card">Grammar | 0.1.01.2024</p>
                </div>
                <div className="box">
                  <div className="card">
                    <img src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg" />
                  </div>
                  <p className="Grammer-card">Grammar | 0.1.01.2024</p>
                </div>
                <div className="box">
                  <div className="card">
                    <img src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg" />
                  </div>
                  <p className="Grammer-card">Grammar | 0.1.01.2024</p>
                </div>
                <div className="box">
                  <div className="card">
                    <img src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg" />
                  </div>
                  <p className="Grammer-card">Grammar | 0.1.01.2024</p>
                </div>
                <div className="box">
                  <div className="card">
                    <img src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg" />
                  </div>
                  <p className="Grammer-card">Grammar | 0.1.01.2024</p>
                </div>
              </div>
            </section>

            {/* ************************testimoniols */}
            <section>
              <div className="TestiMainCont">
                <h1 className="library-heading">Top Educators</h1>
                <Carousel responsive={responsive}>
                  <div className="TestiSubMainCont">
                    <div className="Item1">
                      <div className="itemimage2">
                        <img
                          src="/Screenshot 2024-02-10 163338.png"
                          className="image-for-library"
                          alt=""
                        />
                      </div>
                      <div className="itemimagecont">
                        <h6> Mohit Sir </h6>
                        <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimage2">
                        <img
                          src="/Screenshot 2024-02-10 163338.png"
                          className="image-for-library"
                          alt=""
                        />
                      </div>
                      <div className="itemimagecont">
                        <h6> Mohit Sir </h6>
                        <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimage2">
                        <img
                          src="/Screenshot 2024-02-10 163338.png"
                          className="image-for-library"
                          alt=""
                        />
                      </div>
                      <div className="itemimagecont">
                        <h6> Mohit Sir </h6>
                        <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimage2">
                        <img
                          src="/Screenshot 2024-02-10 163338.png"
                          className="image-for-library"
                          alt=""
                        />
                      </div>
                      <div className="itemimagecont">
                        <h6> Mohit Sir </h6>
                        <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimage2">
                        <img
                          src="/Screenshot 2024-02-10 163338.png"
                          className="image-for-library"
                          alt=""
                        />
                      </div>
                      <div className="itemimagecont">
                        <h6> Mohit Sir </h6>
                        <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimage2">
                        <img
                          src="/Screenshot 2024-02-10 163338.png"
                          className="image-for-library"
                          alt=""
                        />
                      </div>
                      <div className="itemimagecont">
                        <h6> Mohit Sir </h6>
                        <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimage2">
                        <img
                          src="/Screenshot 2024-02-10 163338.png"
                          className="image-for-library"
                          alt=""
                        />
                      </div>
                      <div className="itemimagecont">
                        <h6> Mohit Sir </h6>
                        <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimage2">
                        <img
                          src="/Screenshot 2024-02-10 163338.png"
                          className="image-for-library"
                          alt=""
                        />
                      </div>
                      <div className="itemimagecont">
                        <h6> Mohit Sir </h6>
                        <p>QA and DILR </p> <p>ALUMNI-MNIT Jaipur </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimage2">
                        <img
                          src="/Screenshot 2024-02-10 163338.png"
                          className="image-for-library"
                          alt=""
                        />
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
            </section>

            {/* **********************nextcarj */}
            <section>
              <div className="TestiMainCont">
                <h1 className="library-heading">Scholarship Awardees</h1>
                <Carousel responsive={responsive}>
                  <div className="TestiSubMainCont">
                    <div className="Item1">
                      <div className="itemimages">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimages">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimages">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimages">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimages">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimages">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimages">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimages">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="Item1">
                      <div className="itemimages">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                  <div></div>
                </Carousel>
              </div>
            </section>
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
          </div>

          <div className="container-2">
            <Page2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Page;
