import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header class="container-fluid bg-light">
      <nav class="container navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand" to="/">
          <h1 className="heading">
            Ram<span>Kumar</span>
          </h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <section class="collapse navbar-collapse" id="myNavbar">
          <ul class="navbar-nav ms-auto fs-5 fw-bolder">
            <li className="nav-item">
              <Link class="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/education">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}
export default Navbar;
