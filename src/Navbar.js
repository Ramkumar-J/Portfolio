import React from "react";
function Navbar(){
    return(
        <header class="container-fluid bg-dark">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark container">
                <img class="nav-brand nav-logo" src="https://img.icons8.com/clouds/50/r--v1.png"></img><span className="text-warning ms-2">Ramkumar</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="navbar-nav ms-auto fs-5 fw-bolder primary-hover">
                        <li className="nav-item">
                            <a class="nav-link" hrf="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" hrf="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" hrf="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" hrf="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" hrf="#">Education</a>
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