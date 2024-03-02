import React from "react";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <>
      <div class="bg-div">
        <img class="logo-img" src="/coachifylogotop.png" alt="align box" />

        <nav className="nav">
          <ul className="icon-ul">
            <li className="search-icon-mobile">
              <form className="form-for-mobile">
                <button className="search-bar-class">
                  <CiSearch />
                </button>
              </form>
            </li>
            <li className="icon-input">
              <form className="form-container">
                <button>
                  <CiSearch />
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  name="search"
                  className="input-search"
                />
              </form>
            </li>
            <li className="icon-image">
              <img src="https://cdn-icons-png.flaticon.com/512/0/14.png" />
            </li>
            <li className="icon-image">
              <img src="https://cdn-icons-png.flaticon.com/512/0/14.png" />
            </li>
            <li className="icon-image">
              <img src="https://cdn-icons-png.flaticon.com/512/0/14.png" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
