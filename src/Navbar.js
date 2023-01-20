import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <header class="container-fluid bg-light">
            <nav class="navbar navbar-expand-md navbar-light">
                <Link className="navbar-brand" to="/">
                {/* <img class="img-fluid ms-5" src="https://img.icons8.com/clouds/50/r--v1.png"></img> */}
                <h1 className="ms-5 heading">Portfolio</h1>
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
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a class="nav-link" href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=1da0c324f4&attid=0.1&permmsgid=msg-a:r5805485599974745911&th=18105694a458e3ec&view=att&disp=safe&realattid=f_l3oeenaq0&saddbat=ANGjdJ9x9uxeOEVArABngIui1WxY5sRrAjKPKzR9TfwjPVnfQDOFLUo_UZX1JaW9dQyLNPtC3a8dKwKXKWmfuUa1TuhM1sMY-jY-N19aT4ZtHMB1R4PSNydiYEcaS7skeBWC32444q5ZFgTf6L_yoAfjEckaMhq3fGo8ok9QQkJw34HWTJMuf88CcWZLADCP7d_nGEwFTgL9mZPHmkgATy4ubmfo0FFyG3lO990E0nRcu7lpFrtYrPqnuUS1g2mS9cjkNz9IOmQHvHI2Bok7aKHwcm8sZaAtO_M_AxsOmquWQG39eA0u5ZuKdHrtfe09MmVZI_edJ4Yg9OtUNopMv-5NCjoT0eoWtPdM2Ni1-yAE6AwUes6zKQ7MYfKTN3uhfdEI2ne-Dn9Q_94oDIQsuRWjjj7zCrkL_xKz-Z-fq8aRglAYTkBuRwdbUQd0aeqLsoBRDbY2R1nEtHzPvVqz_heC4Z_EYXlwGkjcqi4jX_jlixuH1wpb4eXV8ObhbQaMeIQy9q2j6vkDru2CSG2RCNnpT9L6_C8lQDMcZatGwYKBs34Pd2-WjqrRR_IBGjXQrtV-qrI2IFQVbNW6pbHUkH1ozkcGpHLUKmHg4koEJ7K4lJJhf4Yy98ABcn5ZwKkKJIWmj4FJB1ozgfPgGKVpIo_7odxgyxukUNM4u2GaAl_PEcOpoNa3aj6JfE33RuNdRkluejHi8LicaGSYq_njGQR0TBNbICI1_-IcytfVF802aXPLvznWPjrXCl7JThM">Resume</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;