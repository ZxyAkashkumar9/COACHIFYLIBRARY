import { useState } from "react";

const accordian = () => {
  const [tog, settog] = useState(0);
  return (
    <div>
      <div className="mylibrary">
        <div className="mainheading">
          <div className="drop1">
            <ul
              className={
                tog === 1 ? "unorderdlist1 unorderdnext1 " : "unorderdlist1"
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
            <div className={tog === 1 ? "show1" : "dropdown-menu col-12"}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default accordian;
