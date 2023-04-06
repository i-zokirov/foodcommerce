import React from "react";
import Main from "@/layouts/Main";
import Meta from "@/layouts/Meta";
const BecomePartner = () => {
    return (
        <Main meta={<Meta title="" description="" />}>
            <section
                className="hero-section about blog-page gap"
                style={{
                    backgroundImage:
                        "url(https://via.placeholder.com/1920x628)",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="about-text">
                                <ul className="crumbs d-flex">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="two">
                                        <a href="index.html">
                                            <i className="fa-solid fa-right-long" />
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                                <h2>Want to join partnership?</h2>
                                <p>
                                    Egestas sed tempus urna et pharetra pharetra
                                    massa. Fermentum posuere urna nec tincidunt
                                    praesent semper.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="join-courier">
                                <h3>Join Courier</h3>
                                <p>
                                    Egestas sed tempus urna et pharetra pharetra
                                    massa. Fermentum posuere urna nec tincidunt
                                    praesent semper.
                                </p>
                                <form className="blog-form">
                                    <div className="name-form">
                                        <i className="fa-regular fa-user" />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="name-form">
                                        <i className="fa-solid fa-phone" />
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Enter your phone"
                                        />
                                    </div>
                                    <div className="name-form">
                                        <i className="fa-regular fa-envelope" />
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Enter your message"
                                        defaultValue={""}
                                    />
                                    <button className="button-price">
                                        Submit Application
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Benefit-section gap">
                <div className="container">
                    <div className="row">
                        <div
                            className="offset-xl-1 col-lg-5"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="benefit-text">
                                <h2>Benefits you get with Quickeat</h2>
                                <p>
                                    Suspendisse in est ante in. Duis at
                                    consectetur lorem donec massa. Eget lorem
                                    dolor sed viverra ipsum. Aliquam id diam
                                    maecenas ultricies mi. Nulla facilisi morbi
                                    tempus iaculis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Benefit-team gap no-top">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="team-description">
                                <h4>
                                    <i className="fa-solid fa-people-group" />
                                    Friendly Team
                                </h4>
                                <p>
                                    Consequat semper viverra nam libero justo
                                    laoreet sit. Consequat semper viverra nam
                                    libero justo laoreet sit amet cursus. Morbi
                                    tincidunt ornare .
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="team-description">
                                <h4>
                                    <i className="fa-regular fa-calendar-days" />
                                    Flexible Schedule
                                </h4>
                                <p>
                                    Maecenas ultricies mi eget mauris pharetra.
                                    Sed ullamcorper morbi tincidunt ornare massa
                                    eget. Gravida neque convallis a cras semper.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="team-description">
                                <h4>
                                    <i className="fa-solid fa-briefcase" />
                                    Official Employment
                                </h4>
                                <p>
                                    Dignissim cras tincidunt lobortis feugiat
                                    vivamus at augue eget. Cursus risus at
                                    ultrices mi tempus imperdiet. Non diam
                                    phasellus vestibulum.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="team-description end">
                                <h4>
                                    <i className="fa-solid fa-money-bill-1-wave" />
                                    Stable Income
                                </h4>
                                <p>
                                    Dui sapien eget mi proin sed. Nibh nisl
                                    condimentum id venenatis a. Vulputate eu
                                    scelerisque felis imperdiet proin fermentum
                                    leo.{" "}
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="team-description end">
                                <h4>
                                    <i className="fa-solid fa-arrow-up-right-dots" />
                                    Career Growth
                                </h4>
                                <p>
                                    Euismod quis viverra nibh cras pulvinar
                                    mattis nunc sed blandit. Neque viverra justo
                                    nec ultrices dui sapien. Volutpat est velit
                                    egestas.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="team-description end">
                                <h4>
                                    <i className="fa-solid fa-folder-open" />
                                    Full Insurance
                                </h4>
                                <p>
                                    Cras semper auctor neque vitae tempus quam.
                                    Sed viverra tellus in hac habitasse platea.
                                    Sagittis aliquam malesuada bibendum arcu
                                    vitae.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="join-community-section gap no-top">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="join-img-blog">
                                <img
                                    alt="join"
                                    src="https://via.placeholder.com/641x453"
                                />
                            </div>
                        </div>
                        <div
                            className="offset-xl-1 col-lg-5"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="join-the">
                                <h2>Frequently asked questions</h2>
                                <p>
                                    Ultricies lacus sed turpis tincidunt id
                                    aliquet risus feugiat. Mauris augue neque
                                    gravida in fermentum et sollicitudin. Amet
                                    est placerat in egestas erat imperdiet.
                                </p>
                            </div>
                            <div className="counter-blog">
                                <div className="counter-img-data">
                                    <h2>74</h2>
                                    <span>
                                        Couriers <br />
                                        in Your city
                                    </span>
                                </div>
                                <div className="counter-img-data">
                                    <h2>12</h2>
                                    <span>
                                        Best
                                        <br />
                                        Restaurants
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news-about-us gap">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="news-posts-one blog">
                                <img
                                    alt="man"
                                    src="https://via.placeholder.com/393x261"
                                />
                                <div className="quickeat">
                                    <a href="#">news</a>
                                    <a href="#">quickeat</a>
                                </div>
                                <h3>
                                    We Have Received An Award For The Quality Of
                                    Our Work
                                </h3>
                                <p>
                                    Donec adipiscing tristique risus nec feugiat
                                    in fermentum. Sapien eget mi proin sed...
                                </p>
                                <a href="#">
                                    Read More
                                    <i className="fa-solid fa-arrow-right" />
                                </a>
                                <ul className="data">
                                    <li>
                                        <h6>
                                            <i className="fa-solid fa-user" />
                                            by Quickeat
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            <i className="fa-regular fa-calendar-days" />
                                            01.Jan. 2022
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            <i className="fa-solid fa-eye" />
                                            132
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="news-posts-one blog">
                                <img
                                    alt="man"
                                    src="https://via.placeholder.com/393x261"
                                />
                                <div className="quickeat">
                                    <a href="#">news</a>
                                    <a href="#">quickeat</a>
                                </div>
                                <h3>
                                    With Quickeat you can order food for the
                                    whole day
                                </h3>
                                <p>
                                    Nec tincidunt praesent semper feugiat nibh.
                                    Feugiat in ante metus dictum. Sapien nec
                                    sagittis aliquam malesuada bibendum arcu
                                    vitae. Non enim praesent elementum
                                    facilisis...
                                </p>
                                <a href="#">
                                    Read More
                                    <i className="fa-solid fa-arrow-right" />
                                </a>
                                <ul className="data">
                                    <li>
                                        <h6>
                                            <i className="fa-solid fa-user" />
                                            by Quickeat
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            <i className="fa-regular fa-calendar-days" />
                                            01.Jan. 2022
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            <i className="fa-solid fa-eye" />
                                            132
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="news-posts-one blog">
                                <img
                                    alt="man"
                                    src="https://via.placeholder.com/393x261"
                                />
                                <div className="quickeat">
                                    <a href="#">news</a>
                                    <a href="#">quickeat</a>
                                </div>
                                <h3>127+ Couriers On Our Team!</h3>
                                <p>
                                    Pulvinar neque laoreet suspendisse interdum
                                    consectetur libero id faucibus nisl. Aliquam
                                    ultrices sagittis orci a scelerisque purus
                                    semper eget duis. Viverra vitae congue eu
                                    consequat...
                                </p>
                                <a href="#">
                                    Read More
                                    <i className="fa-solid fa-arrow-right" />
                                </a>
                                <ul className="data">
                                    <li>
                                        <h6>
                                            <i className="fa-solid fa-user" />
                                            by Quickeat
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            <i className="fa-regular fa-calendar-days" />
                                            01.Jan. 2022
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            <i className="fa-solid fa-eye" />
                                            132
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="button-gap"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <a href="#" className="button button-2 non">
                                See All
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default BecomePartner;
