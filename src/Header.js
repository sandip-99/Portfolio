import React from 'react'
import './Header.css'
import'./Head.css'
export default function Header() {
    return (
        <section>
            <section className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                            <div className='heading'>
                                <h1>Sandip Portfolio</h1>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                            <div className='heading-icon'>
                                <ul>
                                    <li>
                                        <a href='#'>
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i class="fa-solid fa-envelope"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='intro-section'>
                <div className='intro-area'>
                    <div className='container'>
                        <div className='row d-flex'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='left-section'>
                                    <h2>
                                        Hi My Name<br />
                                        Is <span className='purple'>Sandip</span><br />
                                        And I Am<br />
                                        Passionate<br />
                                        <span className='purple'>Web Developer</span><br />

                                    </h2>
                                    <div className='buttons'>
                                        <a href='#'>
                                            <button className='btn'>Download Resume</button>
                                        </a>
                                        <a href='#'>
                                            <button className='btn'>Visit Github</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='right-section'>
                                    <img src='images/home-right.png'></img>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className='thin-line'>
                    <div className='container-fluid'>
                        <div className='box'>
                            <h4>Projects</h4>
                        </div>
                    </div>
                </div>
                <section>
                    <div className='project-section'>
                        <div className='gallery'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 '>
                                        <div className='card-body'>
                                            <img src='images/choco.png' alt='' />
                                            <div className='card-text'>
                                                <h5>Choco</h5>
                                                <p>Html, Css, Bootstrap, Javascript, Jquery, Reactjs, Redux</p>
                                                <a href='#' className='btn-pro'>Visit</a>
                                                <a href='https://github.com/sandip9925/chocolate' className='btn-pro'>Code</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 '>
                                        <div className='card-body'>
                                            <img src='images/choco.png' alt='' />
                                            <div className='card-text'>
                                                <h5>Choco</h5>
                                                <p>Html, Css, Bootstrap, Javascript, Jquery, Reactjs, Redux</p>
                                                <a href='#' className='btn-pro'>Visit</a>
                                                <a href='https://github.com/sandip9925/chocolate' className='btn-pro'>Code</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 '>
                                        <div className='card-body'>
                                            <img src='images/choco.png' alt='' />
                                            <div className='card-text'>
                                                <h5>Choco</h5>
                                                <p>Html, Css, Bootstrap, Javascript, Jquery, Reactjs, Redux</p>
                                                <a href='#' className='btn-pro'>Visit</a>
                                                <a href='https://github.com/sandip9925/chocolate' className='btn-pro'>Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section>
                <div className='about-head'>
                    <div className='container-fluid'>
                        <div className='box'>
                            <h4>About </h4>
                        </div>
                    </div>
                </div>
                <div className='about-area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-12 vvv'>
                                <div className='intro-img'>
                                    <img src='images/about-us.png'></img>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                <div className='about-text'>
                                    <h2>Let's<br></br> Introduce About<br></br> Myself</h2>
                                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Molestias Fugit Aliquid Vitae Nostrum Maiores Facilis Similique Excepturi. Nobis Sunt Consectetur Voluptatibus Dicta, Culpa, At Ad Fugiat Eaque Deserunt, Hic Ex.</p>

                                    <p> Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Expedita Necessitatibus Sit Totam Debitis. Porro Eaque Eligendi Odio Explicabo Velit,Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Ad Non Nihil Laboriosam Quibusdam Beatae, Voluptas Amet? In Eius Debitis Quasi Mollitia. Quis Ullam Atque Dignissimos Modi Exercitationem Quisquam Mollitia Minus Nihil Sit. Aperiam Doloribus Corrupti, Blanditiis, Dolor Nihil Voluptas Odit Quos Sit Magnam Ea Ipsum?</p>

                                    {/* <p>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Ad Non Nihil Laboriosam Quibusdam Beatae, Nulla Magni Nesciunt In A Autem!</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='skill-heading'>
                    <div className='container-fluid'>
                        <div className='box'>
                            <h4>Skills </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='skills-feature'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 '>
                                <div className='box1'>
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <li><i class="fa-brands fa-html5 "></i></li>
                                    </div>
                                    <div className='text-body'>
                                        <h5>HTML</h5>
                                        <p>A small river named Duden flows by their place and supplies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 '>
                                <div className='box1'>
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <li><i class="fa-brands fa-css3-alt"></i></li>
                                    </div>
                                    <div className='text-body'>
                                        <h5>CSS</h5>
                                        <p>A small river named Duden flows by their place and supplies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 '>
                                <div className='box1'>
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <li><i class="fa-brands fa-bootstrap"></i></li>
                                    </div>
                                    <div className='text-body'>
                                        <h5>BOOTSTRAP</h5>
                                        <p>A small river named Duden flows by their place and supplies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 '>
                                <div className='box1'>
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <li><i class="fa-brands fa-js"></i></li>
                                    </div>
                                    <div className='text-body'>
                                        <h5>JAVASCRIPT</h5>
                                        <p>A small river named Duden flows by their place and supplies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 '>
                                <div className='box1'>
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <li><i class="fa-solid fa-j"></i></li>
                                    </div>
                                    <div className='text-body'>
                                        <h5>JQUERY</h5>
                                        <p>A small river named Duden flows by their place and supplies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 '>
                                <div className='box1'>
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <li><i class="fa-brands fa-react"></i></li>
                                    </div>
                                    <div className='text-body'>
                                        <h5>REACT JS</h5>
                                        <p>A small river named Duden flows by their place and supplies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 '>
                                <div className='box1'>
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <li><i class="fa-sharp fa-solid fa-recycle"></i></li>
                                    </div>
                                    <div className='text-body'>
                                        <h5>REDUX</h5>
                                        <p>A small river named Duden flows by their place and supplies.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='information-box'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 ff'>
                                <div className='boxes'>
                                    <a href='#'><i class="fa-solid fa-map-location-dot rr"></i></a>
                                    <h6>Punitnagar society,rajkot</h6>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 ff'>
                                <div className='boxes'>
                                    <a href='#'><i class="fa-solid fa-phone"></i></a>
                                    <h6>9313215377</h6>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 ff'>
                                <div className='boxes'>
                                    <a href='#'> <i class="fa-brands fa-facebook"></i></a>
                                    <h6>Facebook</h6>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 ff'>
                                <div className='boxes'>
                                    <a href='#'> <i class="fa-brands fa-instagram"></i></a>
                                    <h6>Instagram</h6>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 ff'>
                                <div className='boxes'>
                                    <a href='#'> <i class="fa-brands fa-twitter"></i></a>
                                    <h6>Twitter</h6>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12 ff'>
                                <div className='boxes'>
                                    <a href='#'>  <i class="fa-solid fa-envelope"></i></a>
                                    <h6>sandip361296<br></br>@gmail.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div className='footer-area'>
                    <div className='container-fluid'>
                        <div className='row center-1'>
                            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 '>
                                <div className='box'>
                                    <h1>SANDIP<br></br> PORTFOLIO</h1>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 bbv'>
                                <div className='box'>
                                    <u1>
                                        <li>
                                            <a href='#'>About</a>
                                        </li>
                                        <li>
                                            <a href='#'>Benefit</a>
                                        </li>
                                        <li>
                                            <a href='#'>Career</a>
                                        </li>
                                        <li>
                                            <a href='#'>Support</a>
                                        </li>
                                    </u1>
                                    <h3> ©2023 All rigth reserved</h3>                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 '>
                                <div className='box'>
                                    <ul>
                                        <li>
                                            <a href='#'><i class="fa-brands fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href='#'><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href='#'><i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href='#'><i class="fa-solid fa-envelope"></i></a>
                                        </li>

                                    </ul>
                                    <h3>  sandip361296@gmail.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}
