import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <header class="container-fluid bg-dark">
            <nav class="navbar navbar-expand-md navbar-dark container">
                <Link className="navbar-brand" to="/">
                {/* <img class="img-fluid ms-5" src="https://img.icons8.com/clouds/50/r--v1.png"></img> */}
                <button className="btn btn-outline-primary ms-5 w-100 fs-5">RK</button>
                </Link>
                {/* <span className="text-warning ms-2">Ramkumar</span> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="navbar-nav ms-auto fs-5 fw-bolder me-5">
                        <li className="nav-item">
                            <Link class="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/education">Education</Link>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" hrf="#">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;