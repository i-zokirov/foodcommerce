import React from "react";
import Main from "@/layouts/Main";
import Meta from "@/layouts/Meta";
import Link from "next/link";
import Search from "@/components/Search";
const restaurants = () => {
    return (
        <Main meta={<Meta title="" description="" />}>
            <section className="hero-section about gap">
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
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="two">
                                        <Link href="/restaurants">
                                            <i className="fa-solid fa-right-long" />
                                            Restaurants
                                        </Link>
                                    </li>
                                </ul>
                                <h2>Restaurants</h2>
                                <p>
                                    Egestas sed tempus urna et pharetra pharetra
                                    massa. Fermentum posuere urna nec tincidunt
                                    praesent semper.
                                </p>
                                <div className="restaurant">
                                    <Search />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="restaurants-girl-img food-photo-section">
                                <img
                                    alt="man"
                                    src="/assets/img/illustration-5.png"
                                />
                                <a href="#" className="one">
                                    <i className="fa-solid fa-burger" />
                                    Burgers
                                </a>
                                <a href="#" className="two">
                                    <i className="fa-solid fa-drumstick-bite" />
                                    Chicken
                                </a>
                                <a href="#" className="three">
                                    <i className="fa-solid fa-cheese" />
                                    Steaks
                                </a>
                                <a href="#" className="for">
                                    <i className="fa-solid fa-pizza-slice" />
                                    Fish
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner */}
            <section
                className="banner"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={300}
            >
                <div className="container">
                    <div
                        className="banner-img"
                        style={{
                            backgroundImage:
                                "url(https://via.placeholder.com/1400x393)",
                        }}
                    >
                        <div className="banner-logo">
                            <h4>
                                Restaurant
                                <br />
                                of the Month
                                <span className="chevron chevron--left" />
                            </h4>
                            <div className="banner-wilmington">
                                <img
                                    alt="logo"
                                    src="https://via.placeholder.com/40x40"
                                />
                                <h6>The Wilmington</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <div className="choose-lunches">
                                    <h2>Choose 2 lunches</h2>
                                    <h3>pay for one</h3>
                                    <a
                                        href="#"
                                        className="button button-contained button-outlined"
                                    >
                                        Order Now
                                        <i className="fa-solid fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* best-restaurants */}
            <section className="best-restaurants gap">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="logos-card restaurant-page ">
                                <img
                                    alt="logo"
                                    src="https://via.placeholder.com/100x100"
                                />
                                <div className="cafa">
                                    <h4>
                                        <a href="#">Kennington Lane Cafe</a>
                                    </h4>
                                    <div>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </div>
                                    <div className="cafa-button">
                                        <a href="#">american</a>
                                        <a href="#">steakhouse</a>
                                        <a className="end" href="#">
                                            seafood
                                        </a>
                                    </div>
                                    <p>
                                        Non enim praesent elementum facilisis
                                        leo vel fringilla. Lectus proin nibh
                                        nisl condimentum id. Quis varius quam
                                        quisque id diam vel.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="logos-card restaurant-page">
                                <img
                                    alt="logo"
                                    src="https://via.placeholder.com/100x100"
                                />
                                <div className="cafa">
                                    <h4>
                                        <a href="restaurant-card.html">
                                            The Wilmington
                                        </a>
                                    </h4>
                                    <div>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </div>
                                    <div className="cafa-button">
                                        <a href="#">american</a>
                                        <a href="#">steakhouse</a>
                                        <a className="end" href="#">
                                            seafood
                                        </a>
                                    </div>
                                    <p>
                                        Vulputate enim nulla aliquet porttitor
                                        lacus luctus. Suscipit adipiscing
                                        bibendum est ultricies integer. Sed
                                        adipiscing diam donec adipiscing
                                        tristique.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="logos-card restaurant-page two">
                                <img
                                    alt="logo"
                                    src="https://via.placeholder.com/100x100"
                                />
                                <div className="cafa">
                                    <h4>
                                        <a href="restaurant-card.html">
                                            Kings Arms
                                        </a>
                                    </h4>
                                    <div>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star-half-stroke" />
                                    </div>
                                    <div className="cafa-button">
                                        <a href="#">healthy</a>
                                        <a href="#">steakhouse</a>
                                        <a className="end" href="#">
                                            vegetarian
                                        </a>
                                    </div>
                                    <p>
                                        Tortor at risus viverra adipiscing at in
                                        tellus. Cras semper auctor neque vitae
                                        tempus. Dui accumsan sit amet nulla
                                        facilisi. Sed adipiscing diam .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={500}
                            data-aos-duration={600}
                        >
                            <div className="logos-card restaurant-page two">
                                <img
                                    alt="logo"
                                    src="https://via.placeholder.com/100x100"
                                />
                                <div className="cafa">
                                    <h4>
                                        <a href="restaurant-card.html">
                                            The Victoria
                                        </a>
                                    </h4>
                                    <div>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </div>
                                    <div className="cafa-button">
                                        <a href="#">american</a>
                                        <a href="#">steakhouse</a>
                                        <a className="end" href="#">
                                            seafood
                                        </a>
                                    </div>
                                    <p>
                                        Non enim praesent elementum facilisis
                                        leo vel fringilla. Lectus proin nibh
                                        nisl condimentum id. Quis varius quam
                                        quisque id diam vel.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="logos-card restaurant-page two">
                                <img
                                    alt="logo"
                                    src="https://via.placeholder.com/100x100"
                                />
                                <div className="cafa">
                                    <h4>
                                        <a href="restaurant-card.html">
                                            Lanes of London
                                        </a>
                                    </h4>
                                    <div>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </div>
                                    <div className="cafa-button">
                                        <a href="#">american</a>
                                        <a href="#">steakhouse</a>
                                        <a className="end" href="#">
                                            seafood
                                        </a>
                                    </div>
                                    <p>
                                        At erat pellentesque adipiscing commodo
                                        elit at imperdiet dui. Suspendisse
                                        faucibus interdum posuere lorem. Elit
                                        sed vulputate mi sit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="logos-card restaurant-page two">
                                <img
                                    alt="logo"
                                    src="https://via.placeholder.com/100x100"
                                />
                                <div className="cafa">
                                    <h4>
                                        <a href="restaurant-card.html">
                                            The Andover Arms
                                        </a>
                                    </h4>
                                    <div>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star-half-stroke" />
                                    </div>
                                    <div className="cafa-button">
                                        <a href="#">healthy</a>
                                        <a href="#">steakhouse</a>
                                        <a className="end" href="#">
                                            vegetarian
                                        </a>
                                    </div>
                                    <p>
                                        Lacus vestibulum sed arcu non odio
                                        euismod lacinia at. Id neque aliquam
                                        vestibulum morbi. Ante metus dictum
                                        ullamcorper a lacus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* subscribe-section */}
            <section
                className="subscribe-section gap"
                style={{ background: "#fcfcfc" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="img-subscribe">
                                <img
                                    alt="Illustration"
                                    src="/assets/img/illustration-4.png"
                                />
                            </div>
                        </div>
                        <div
                            className="col-lg-5 offset-lg-1"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="get-the-menu">
                                <h2>
                                    Get the menu of your favorite restaurants
                                    every day
                                </h2>
                                <form>
                                    <i className="fa-regular fa-bell" />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Enter email address"
                                    />
                                    <button className="button button-contained">
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

export default restaurants;
