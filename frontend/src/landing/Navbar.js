import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./home/HomePage";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-light border-bottom">
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="media\logo.svg" style={{ width: "25%" }} alt="Logo" />
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
          <form className="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/About">
                  About
                </Link>
              </li>
              <li class="nav-item" className="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Support">
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" >
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
