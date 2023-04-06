import React from "react";
import Main from "@/layouts/Main";
import Meta from "@/layouts/Meta";
const about = () => {
    return (
        <Main meta={<Meta title="" description="" />}>
            <section
                className="hero-section about gap"
                style={{
                    backgroundImage: "url(assets/img/background.png)",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6 col-md-12 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="about-text">
                                <ul className="crumbs d-flex">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="two">
                                        <a href="index.html">
                                            <i className="fa-solid fa-right-long" />{" "}
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                                <h2>Nothing to worry about with Quickeat</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-12 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="about-img">
                                <img
                                    alt="man"
                                    src="https://via.placeholder.com/499x500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our-mission-section */}
            <section className="our-mission-section gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6 col-md-12 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="our-mission-img">
                                <img
                                    alt="Illustration"
                                    src="https://via.placeholder.com/680x430"
                                />
                            </div>
                        </div>
                        <div
                            className="offset-xl-1 col-lg-5 col-md-12 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="our-mission-text">
                                <h2>Our mission is to save you time</h2>
                                <p>
                                    Viverra vitae congue eu consequat ac felis.
                                    Imperdiet massa tincidunt nunc pulvinar
                                    sapien et ligula ullamcorper. Velit ut
                                    tortor pretium viverra suspendisse potenti
                                    nullam ac tortor.
                                    <br />
                                    <br />
                                    Eget egestas purus viverra accumsan in nisl
                                    nisi scelerisque. Tincidunt augue interdum
                                    velit euismod in pellentesque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* cards-section */}
            <section className="cards-section gap no-top">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="card-text-data">
                                <img
                                    className="on"
                                    alt="icon"
                                    src="assets/img/service-icon-2.svg"
                                />
                                <img
                                    className="off"
                                    alt="icon"
                                    src="assets/img/service-icon-1.svg"
                                />
                                <h3>Free Delivery</h3>
                                <p>
                                    Cras fermentum odio eu feugiat pretium nibh
                                    ipsum. Ut faucibus pulvinar elementum
                                    integer enim neque volutpat.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="card-text-data two">
                                <img
                                    className="on"
                                    alt="icon"
                                    src="assets/img/service-icon-3.svg"
                                />
                                <img
                                    className="off"
                                    alt="icon"
                                    src="assets/img/service-icon-4.svg"
                                />
                                <h3>Save Your Time</h3>
                                <p>
                                    Vulputate dignissim suspendisse in est ante
                                    in nibh mauris. Pretium nibh ipsum consequat
                                    nisl vel pretium lectus quam id.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="card-text-data">
                                <img
                                    className="on"
                                    alt="icon"
                                    src="assets/img/service-icon-5.svg"
                                />
                                <img
                                    className="off"
                                    alt="icon"
                                    src="assets/img/service-icon-6.svg"
                                />
                                <h3>Regular Discounts</h3>
                                <p>
                                    Nec tincidunt praesent semper feugiat nibh.
                                    Feugiat in ante metus dictum. Sapien nec
                                    sagittis aliquam malesuada bibendum arcu.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={500}
                            data-aos-duration={600}
                        >
                            <div className="card-text-data two">
                                <img
                                    className="on"
                                    alt="icon"
                                    src="assets/img/service-icon-7.svg"
                                />
                                <img
                                    className="off"
                                    alt="icon"
                                    src="assets/img/service-icon-8.svg"
                                />
                                <h3>Variety Food</h3>
                                <p>
                                    Molestie a iaculis at erat pellentesque.
                                    Pulvinar neque laoreet suspendisse interdum
                                    consectetur libero id faucibus nisl.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* video-section */}
            <section className="video-section gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="wait-a-minute">
                                <h2>Wait a minute for delicious</h2>
                                <p>
                                    Amet massa vitae tortor condimentum lacinia
                                    quis. Elit at imperdiet dui accumsan sit
                                    amet nulla facilisi. Lacus laoreet non
                                    curabitur gravida arcu ac tortor dignissim.
                                </p>
                                <h6>Interdum varius sit amet mattis.</h6>
                                <ul className="paragraph">
                                    <li>
                                        <i className="fa-solid fa-circle-check" />
                                        <h5>
                                            Interdum varius sit amet mattis;
                                        </h5>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check" />
                                        <h5>
                                            Sed elementum tempus egestas sed
                                            sed;
                                        </h5>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check" />
                                        <h5>
                                            Sit amet purus gravida quis blandit;
                                        </h5>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check" />
                                        <h5>
                                            Feugiat pretium nibh ipsum consequat
                                            nisl vel pretium.
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="video-section-img">
                                <img
                                    alt="elements"
                                    src="https://via.placeholder.com/560x560"
                                />
                                <a
                                    data-fancybox=""
                                    href="https://www.youtube.com/watch?v=CKnGXZxK7zs"
                                >
                                    <i className="fa-solid fa-play" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about-counters-section */}
            <section
                className="about-counters-section gap"
                style={{
                    backgroundImage: "url(assets/img/background-1.png)",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6 col-md-12 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="about-counters-img">
                                <img
                                    alt="girl"
                                    src="https://via.placeholder.com/560x595"
                                />
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-12 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="counter-hading">
                                        <h2>Service shows good taste.</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="count-time">
                                        <h2
                                            className="timer count-title count-number"
                                            data-to={976}
                                            data-speed={2000}
                                        >
                                            976
                                        </h2>
                                        <p>
                                            Satisfied
                                            <br />
                                            Customer
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-6 col-md-6 col-sm-6"
                                    data-aos="flip-up"
                                    data-aos-delay={300}
                                    data-aos-duration={400}
                                >
                                    <div className="count-time">
                                        <h2
                                            className="timer count-title count-number"
                                            data-to={12}
                                            data-speed={2000}
                                        >
                                            12
                                        </h2>
                                        <p>
                                            Best
                                            <br />
                                            Restaurants
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="count-time sp">
                                        <h2
                                            className="timer count-title count-number"
                                            data-to={1}
                                            data-speed={2000}
                                        >
                                            1
                                        </h2>
                                        <span>k+</span>
                                        <p>
                                            Food
                                            <br />
                                            Delivered
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Team Section */}
            <section className="our-team-section gap">
                <div className="container">
                    <div
                        className="hading"
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={300}
                    >
                        <h2>Our team</h2>
                        <p>
                            Enim lobortis scelerisque fermentum dui faucibus.
                            Tempor commodo ullamcorper a lacus vestibulum sed
                            arcu non. Magna ac placerat vestibulum lectus
                            mauris.
                        </p>
                    </div>
                    <div className="row">
                        <div
                            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="our-team">
                                <img
                                    alt="team-img"
                                    src="https://via.placeholder.com/440x440"
                                />
                                <h4>
                                    <a href="#">Kevin Adamson</a>
                                </h4>
                                <p>
                                    Pellentesque adipiscing commodo elit at
                                    imperdiet dui.
                                </p>
                                <ul className="social-media">
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="our-team">
                                <img
                                    alt="team-img"
                                    src="https://via.placeholder.com/440x440"
                                />
                                <h4>
                                    <a href="#">Roxie Gilbert</a>
                                </h4>
                                <p>
                                    Velit dignissim sodales ut eu sem integer
                                    vitae. Interdum varius sit amet mattis.
                                </p>
                                <ul className="social-media">
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="our-team">
                                <img
                                    alt="team-img"
                                    src="https://via.placeholder.com/440x440"
                                />
                                <h4>
                                    <a href="#">Edgar Johnson</a>
                                </h4>
                                <p>
                                    At erat pellentesque adipiscing commodo
                                    elit.
                                </p>
                                <ul className="social-media">
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our partners Section */}
            <section
                className="our-partners-section gap"
                style={{ background: "#fcfcfc" }}
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={300}
            >
                <div className="container">
                    <div className="hading">
                        <h2>Our trusted partners</h2>
                    </div>
                    <div className="row align-items-center logodata owl-carousel owl-theme">
                        <div className="col-xl-12 item">
                            <div className="logo-img">
                                <img
                                    alt="logo-img"
                                    src="https://via.placeholder.com/140x124"
                                />
                                <h5>Kings Arms</h5>
                            </div>
                        </div>
                        <div className="col-xl-12 item">
                            <div className="logo-img">
                                <img
                                    alt="logo-img"
                                    src="https://via.placeholder.com/140x124"
                                />
                                <h5>Wilmington</h5>
                            </div>
                        </div>
                        <div className="col-xl-12 item">
                            <div className="logo-img">
                                <img
                                    alt="logo-img"
                                    src="https://via.placeholder.com/140x124"
                                />
                                <h5>Kennington</h5>
                            </div>
                        </div>
                        <div className="col-xl-12 item">
                            <div className="logo-img">
                                <img
                                    alt="logo-img"
                                    src="https://via.placeholder.com/140x124"
                                />
                                <h5>The Victoria</h5>
                            </div>
                        </div>
                        <div className="col-xl-12 item">
                            <div className="logo-img">
                                <img
                                    alt="logo-img"
                                    src="https://via.placeholder.com/140x124"
                                />
                                <h5>The Andover Arms</h5>
                            </div>
                        </div>
                        <div className="col-xl-12 item">
                            <div className="logo-img">
                                <img
                                    alt="logo-img"
                                    src="https://via.placeholder.com/140x124"
                                />
                                <h5>Kings Arms</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our partners Section */}
            <section
                className="service-shows gap"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={300}
            >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="good-taste">
                                <h2>Service shows good taste.</h2>
                                <p>
                                    Enim lobortis scelerisque fermentum dui
                                    faucibus. Tempor commodo ullamcorper a lacus
                                    vestibulum sed arcu non.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="comment-data comment-slide owl-carousel owl-theme">
                                <div className="author-text item">
                                    <p>
                                        "Tortor vitae purus faucibus ornare
                                        suspendisse. Ut porttitor leo a diam.
                                        Massa tincidunt nunc pulvinar sapien et
                                        ligula ullamcorper malesuada proin. Ut
                                        tortor pretium viverra suspendisse".
                                    </p>
                                    <div className="thomas">
                                        <img
                                            alt="girl"
                                            src="https://via.placeholder.com/70x70"
                                        />
                                        <div>
                                            <h6>Thomas Adamson</h6>
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                    </div>
                                </div>
                                <div className="author-text item">
                                    <p>
                                        "Tortor vitae purus faucibus ornare
                                        suspendisse. Ut porttitor leo a diam.
                                        Massa tincidunt nunc pulvinar sapien et
                                        ligula ullamcorper malesuada proin. Ut
                                        tortor pretium viverra suspendisse".
                                    </p>
                                    <div className="thomas">
                                        <img
                                            alt="girl"
                                            src="https://via.placeholder.com/70x70"
                                        />
                                        <div>
                                            <h6>Thomas Adamson</h6>
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* subscribe-section */}
            <section
                className="subscribe-section about gap"
                style={{
                    backgroundImage:
                        "url(https://via.placeholder.com/1920x423)",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="get-the-menu">
                                <h2
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    data-aos-duration={300}
                                >
                                    Get the menu of your favorite restaurants
                                    every day
                                </h2>
                                <form
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                    data-aos-duration={400}
                                >
                                    <i className="fa-regular fa-bell" />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Enter email address"
                                    />
                                    <button className="button button-2">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default about;
