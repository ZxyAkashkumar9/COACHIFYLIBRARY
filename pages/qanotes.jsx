import React, { useState } from "react";

import Page2 from "../component/Right_Sidebar";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Link from "next/link";
import MobileTopSlide from "../component/MobileTopSlide";

const Qanotes = () => {
  const [tog, settog] = useState(0);
  return (
    <div>
      <div className="Firstmaincontainer">
        <Header />

        <div className="main-container-for-card">
          <MobileTopSlide />
        </div>
        <div className="Main-Container">
          <div className="container-1">
            <section>
              <div className="mylibrary1">
                <div className="mainheading">
                  <h1 className="library-heading-for-library">QA NOTES</h1>
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
              <div className="mylibrary" style={{ paddingTop: "13px" }}>
                <div className="mainheading">
                  <div className="drop1">
                    <ul
                      style={{ padding: "5px 0px" }}
                      className={
                        tog === 1
                          ? "unorderdlist1 unorderdnext1 "
                          : "unorderdlist1"
                      }
                    >
                      {tog === 1 && (
                        <li>
                          {" "}
                          <h1
                            className="library-heading New-head"
                            onClick={(e) => settog(0)}
                          >
                            <span>▼ </span>TOPIC
                          </h1>
                        </li>
                      )}
                      {tog !== 1 && (
                        <li className="library-list">
                          {" "}
                          <span
                            className="library-list-span"
                            onClick={(e) => settog(1)}
                          >
                            {" "}
                          </span>{" "}
                          <h1
                            onClick={(e) => settog(1)}
                            className="library-heading New-head"
                          >
                            {" "}
                            TOPIC
                          </h1>
                        </li>
                      )}
                    </ul>
                    <div
                      className={tog === 1 ? "show1" : "dropdown-menu col-12"}
                    >
                      <div className="main-button-class">
                        <div className="button-main-class">
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
                      <div className="persentage">
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">
                            <Link href={"/percentage"} className="QA-notes">
                              Percentage
                            </Link>
                          </h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="mylibrary">
                <div className="mainheading">
                  <div className="drop1">
                    <ul
                      className={
                        tog === 2
                          ? "unorderdlist1 unorderdnext1 "
                          : "unorderdlist1"
                      }
                    >
                      {tog === 2 && (
                        <li>
                          {" "}
                          <h1
                            className="library-heading New-head"
                            onClick={(e) => settog(0)}
                          >
                            <span>▼ </span>Arthematic
                          </h1>
                        </li>
                      )}
                      {tog !== 2 && (
                        <li className="library-list">
                          {" "}
                          <span
                            className="library-list-span"
                            onClick={(e) => settog(2)}
                          >
                            {" "}
                          </span>{" "}
                          <h1
                            className="library-heading New-head"
                            onClick={(e) => settog(2)}
                          >
                            {" "}
                            Arthematic
                          </h1>
                        </li>
                      )}
                    </ul>
                    <div
                      className={tog === 2 ? "show1" : "dropdown-menu col-12"}
                    >
                      <div className="main-button-class">
                        <div className="button-main-class">
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
                      <div className="persentage">
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Percentage</h1>
                        </div>

                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="mylibrary">
                <div className="mainheading">
                  <div className="drop1">
                    <ul
                      className={
                        tog === 3
                          ? "unorderdlist1 unorderdnext1 "
                          : "unorderdlist1"
                      }
                    >
                      {tog === 3 && (
                        <li>
                          {" "}
                          <h1
                            className="library-heading New-head"
                            onClick={(e) => settog(0)}
                          >
                            <span>▼ </span>TOPIC
                          </h1>
                        </li>
                      )}
                      {tog !== 3 && (
                        <li className="library-list">
                          {" "}
                          <span
                            className="library-list-span"
                            onClick={(e) => settog(3)}
                          >
                            {" "}
                          </span>{" "}
                          <h1
                            className="library-heading New-head"
                            onClick={(e) => settog(3)}
                          >
                            {" "}
                            TOPIC
                          </h1>
                        </li>
                      )}
                    </ul>
                    <div
                      className={tog === 3 ? "show1" : "dropdown-menu col-12"}
                    >
                      <div className="main-button-class">
                        <div className="button-main-class">
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
                      <div className="persentage">
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Percentage</h1>
                        </div>

                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="mylibrary">
                <div className="mainheading">
                  <div className="drop1">
                    <ul
                      className={
                        tog === 4
                          ? "unorderdlist1 unorderdnext1 "
                          : "unorderdlist1"
                      }
                    >
                      {tog === 4 && (
                        <li>
                          {" "}
                          <h1
                            className="library-heading New-head"
                            onClick={(e) => settog(0)}
                          >
                            <span>▼ </span>TOPIC
                          </h1>
                        </li>
                      )}
                      {tog !== 4 && (
                        <li className="library-list">
                          {" "}
                          <span
                            className="library-list-span"
                            onClick={(e) => settog(4)}
                          >
                            {" "}
                          </span>{" "}
                          <h1
                            className="library-heading New-head"
                            onClick={(e) => settog(4)}
                          >
                            {" "}
                            TOPIC
                          </h1>
                        </li>
                      )}
                    </ul>
                    <div
                      className={tog === 4 ? "show1" : "dropdown-menu col-12"}
                    >
                      <div className="main-button-class">
                        <div className="button-main-class">
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
                      <div className="persentage">
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Percentage</h1>
                        </div>

                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="mylibrary">
                <div className="mainheading">
                  <div className="drop1">
                    <ul
                      className={
                        tog === 5
                          ? "unorderdlist1 unorderdnext1 "
                          : "unorderdlist1"
                      }
                    >
                      {tog === 5 && (
                        <li>
                          {" "}
                          <h1
                            className="library-heading New-head"
                            onClick={(e) => settog(0)}
                          >
                            <span>▼ </span>TOPIC
                          </h1>
                        </li>
                      )}
                      {tog !== 5 && (
                        <li className="library-list">
                          {" "}
                          <span
                            className="library-list-span"
                            onClick={(e) => settog(5)}
                          >
                            {" "}
                          </span>{" "}
                          <h1
                            className="library-heading New-head"
                            onClick={(e) => settog(5)}
                          >
                            {" "}
                            TOPIC
                          </h1>
                        </li>
                      )}
                    </ul>
                    <div
                      className={tog === 5 ? "show1" : "dropdown-menu col-12"}
                    >
                      <div className="main-button-class">
                        <div className="button-main-class">
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
                      <div className="persentage">
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Percentage</h1>
                        </div>

                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                        <div className="new-box">
                          <div className="black-box">
                            <img
                              src="/WhatsApp Image 2024-02-16 at 15.10.26_07ce940a.jpg"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <h1 className="text-for-peresantage">Lorem ipsum</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            <div className="right-container">
              <h3>Update </h3>
            </div>
            <section>
              <div className="right-containers">
                <div className="right-updates">
                  <img src="/DOUBTPUCHO LOGO 1.jpg" alt="" />
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
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Qanotes;
