import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../App";
import brandLogo from "../../../images/brandLogo.png";

import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ background: "white" }}
    >
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          {" "}
          <img src={brandLogo} alt="" style={{ width: "150px" }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a className="nav-link ms-5" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link ms-5" href="/">
                About
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link ms-5" href="#services_section">
                Services
              </a>
            </li>

            <li class="nav-item">
              <a className="nav-link ms-5" href="#project_section">
                Project
              </a>
            </li>

            <li class="nav-item">
              <a className="nav-link ms-5" href="#review_section">
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <Link className="nav-link ms-5" to="/admin/addService">
                Admin
              </Link>
            </li>
            <li class="nav-item">
              {loggedInUser.name ? (
                <Link className="nav-link ms-5 text-danger" to="/login">
                  {loggedInUser.name}
                </Link>
              ) : (
                <Link className="nav-link ms-5" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
