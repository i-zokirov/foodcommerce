import { useEffect } from "react";
import CountTo from "@/components/CountTo";
import "@/styles/Home.module.css";
import Main from "@/layouts/Main";
import Meta from "@/layouts/Meta";
import Link from "next/link";
import Search from "@/components/Search";
import Button from "@/components/Button";
import { useAppDispatch } from "@/redux/hooks";
import { setIsLoading } from "@/redux/features/pageLoaderSlice";

export default function Home() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setIsLoading(false));
    }, []);
    return (
        <Main meta={<Meta title="" description="" />}>
            <section
                className="hero-section gap"
                style={{ backgroundImage: "url(assets/img/background-1.png)" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6 "
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="restaurant">
                                <h1>Time to order food.</h1>
                                <h2>Find restaurants in your area.</h2>
                                <Search />
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="img-restaurant">
                                <img alt="man" src="/assets/img/photo-1.png" />
                                <div className="wilmington">
                                    <img
                                        alt="img"
                                        src="https://via.placeholder.com/90x90"
                                    />
                                    <div>
                                        <p>Restaurant of the Month</p>
                                        <h6>The Wilmington</h6>
                                        <div>
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-regular fa-star-half-stroke" />
                                        </div>
                                    </div>
                                </div>
                                <div className="wilmington location-restaurant">
                                    <i className="fa-solid fa-location-dot" />
                                    <div>
                                        <h6>12 Restaurant</h6>
                                        <p>In Your city</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="works-section gap no-top">
                <div className="container">
                    <div
                        className="hading"
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={300}
                    >
                        <h2>How it works</h2>
                        <p>
                            Welcome to our online food ordering system! Here's
                            how it works:
                        </p>
                    </div>
                    <div className="row ">
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="work-card">
                                <img
                                    alt="img"
                                    src="/assets/img/illustration-1.png"
                                />
                                <h4>
                                    <span>01</span> Select Restaurant
                                </h4>
                                <p>
                                    Browse through our list of partner
                                    restaurants and choose the one that
                                    satisfies your cravings. We have a wide
                                    variety of cuisines to choose from,
                                    including Italian, Chinese, Indian, and
                                    more!
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="work-card">
                                <img
                                    alt="img"
                                    src="/assets/img/illustration-2.png"
                                />
                                <h4>
                                    <span>02</span> Select menu
                                </h4>
                                <p>
                                    Once you've selected a restaurant, take a
                                    look at their menu and choose the dishes
                                    that you want to order. Our menus are
                                    updated regularly, so you can be sure that
                                    you're getting the most current options
                                    available
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="work-card">
                                <img
                                    alt="img"
                                    src="/assets/img/illustration-3.png"
                                />
                                <h4>
                                    <span>03</span> Wait for delivery
                                </h4>
                                <p>
                                    After you've placed your order, all you need
                                    to do is sit back, relax, and wait for your
                                    food to be delivered to your doorstep. We'll
                                    take care of everything else, from ensuring
                                    that your food is prepared to your liking,
                                    to ensuring that it's delivered to you
                                    promptly and with a smile.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* best-restaurants */}
            <section
                className="best-restaurants gap"
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
                            <div className="city-restaurants">
                                <h2>12 Best Restaurants in Your City</h2>
                                <p>
                                    Magna sit amet purus gravida quis blandit
                                    turpis cursus. Venenatis tellus in metus
                                    vulputate.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="logos-card">
                                <img
                                    alt="logo"
                                    src="https://via.placeholder.com/100x100"
                                />
                                <div className="cafa">
                                    <h4>
                                        <a href="restaurant-card.html">
                                            Kennington Lane Cafe
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
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="logos-card two">
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
                            data-aos-delay={500}
                            data-aos-duration={600}
                        >
                            <div className="logos-card three">
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
                                        facilisi. Sed adipiscing diam donec
                                        adipiscing tristique.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-gap">
                        <Button
                            href="/restaurants"
                            type="link"
                            variant="outlined"
                            size="medium"
                        >
                            See All
                            <i className="fa-solid fa-arrow-right" />
                        </Button>
                    </div>
                </div>
            </section>
            {/* best-restaurants */}
            {/* your-favorite-food */}
            <section
                className="your-favorite-food gap"
                style={{ backgroundImage: "url(assets/img/background-1.png)" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-5"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="food-photo-section">
                                <img alt="img" src="assets/img/photo-3.png" />
                                <a href="#" className="one">
                                    <i className="fa-solid fa-burger" />
                                    Burgers
                                </a>
                                <a href="#" className="two">
                                    <i className="fa-solid fa-cheese" />
                                    Steaks
                                </a>
                                <a href="#" className="three">
                                    <i className="fa-solid fa-pizza-slice" />
                                    Pizza
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 offset-lg-1"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="food-content-section">
                                <h2>
                                    Food from your favorite restaurants to your
                                    table
                                </h2>
                                <p>
                                    Pretium lectus quam id leo in vitae turpis
                                    massa sed. Lorem donec massa sapien faucibus
                                    et molestie. Vitae elementum curabitur vitae
                                    nunc.
                                </p>
                                <Button
                                    href="/restaurants"
                                    type="link"
                                    variant="contained"
                                    size="medium"
                                >
                                    Order Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* counters-section */}
            <section className="counters-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-3 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div>
                                <h2>Service shows good taste.</h2>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="count-time">
                                <h2 className="timer count-title count-number">
                                    <CountTo from={0} to={976} decimals={1} />
                                </h2>
                                <p>
                                    Satisfied
                                    <br />
                                    Customer
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="count-time">
                                <h2 className="timer count-title count-number">
                                    <CountTo from={0} to={12} decimals={1} />
                                </h2>
                                <p>
                                    Best
                                    <br />
                                    Restaurants
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="count-time sp">
                                <h2 className="timer count-title count-number">
                                    <CountTo from={0} to={1000} decimals={1} />
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
            </section>
            {/* reviews-sections */}
            <section className="reviews-sections gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-xl-6 col-lg-12"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="reviews-content">
                                <h2>What customers say about us</h2>
                                <div className="custome owl-carousel owl-theme">
                                    <div className="item">
                                        <h4>
                                            "Dapibus ultrices in iaculis nunc
                                            sed augue lacus viverra vitae.
                                            Mauris a diam maecenas sed enim.
                                            Egestas diam in arcu cursus euismod
                                            quis. Quam quisque id diam vel".
                                        </h4>
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
                                    <div className="item">
                                        <h4>
                                            "Dapibus ultrices in iaculis nunc
                                            sed augue lacus viverra vitae.
                                            Mauris a diam maecenas sed enim.
                                            Egestas diam in arcu cursus euismod
                                            quis. Quam quisque id diam vel".
                                        </h4>
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
                                    <div className="item">
                                        <h4>
                                            "Dapibus ultrices in iaculis nunc
                                            sed augue lacus viverra vitae.
                                            Mauris a diam maecenas sed enim.
                                            Egestas diam in arcu cursus euismod
                                            quis. Quam quisque id diam vel".
                                        </h4>
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
                        <div
                            className="col-xl-6 col-lg-12"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="reviews-img">
                                <img
                                    alt="photo"
                                    src="/assets/img/photo-4.png"
                                />
                                <i className="fa-regular fa-thumbs-up" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* join-partnership */}
            <section
                className="join-partnership gap"
                style={{ backgroundColor: "#363636" }}
            >
                <div className="container">
                    <h2>Want to Join Partnership?</h2>
                    <div className="row">
                        <div
                            className="col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="join-img">
                                <img alt="img" src="assets/img/photo-6.jpg" />
                                <div className="Join-courier">
                                    <h3>Join Courier</h3>
                                    <Button
                                        href="/join-courier"
                                        type="link"
                                        size="small"
                                    >
                                        {" "}
                                        Learn More{" "}
                                        <i className="fa-solid fa-arrow-right" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="join-img">
                                <img alt="img" src="assets/img/photo-7.jpg" />
                                <div className="Join-courier">
                                    <h3>Join Merchant</h3>
                                    <Button
                                        href="/become-partner"
                                        type="link"
                                        size="small"
                                    >
                                        {" "}
                                        Learn More{" "}
                                        <i className="fa-solid fa-arrow-right" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* news-section */}
            <section className="news-section gap">
                <div className="container">
                    <h2>Latest news and events</h2>
                    <div className="row">
                        <div
                            className="col-xl-6 col-lg-12"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="news-posts-one">
                                <img
                                    alt="man"
                                    src="https://via.placeholder.com/626x269"
                                />
                                <div className="DeliveryApp">
                                    <a href="#">news</a>
                                    <a href="#">DeliveryApp</a>
                                </div>
                                <h3>
                                    We Have Received An Award For The Quality Of
                                    Our Work
                                </h3>
                                <p>
                                    Donec adipiscing tristique risus nec feugiat
                                    in fermentum. Sapien eget mi proin sed
                                    libero. Et magnis dis parturient montes
                                    nascetur. Praesent semper feugiat nibh sed
                                    pulvinar proin gravida.
                                </p>
                                <a href="#">
                                    Read More
                                    <i className="fa-solid fa-arrow-right" />
                                </a>
                                <ul className="data">
                                    <li>
                                        <h6>
                                            <i className="fa-solid fa-user" />
                                            by DeliveryApp
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
                            className="col-xl-6 col-lg-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="news-post-two">
                                <img
                                    alt="food-img"
                                    src="https://via.placeholder.com/200x200"
                                />
                                <div className="news-post-two-data">
                                    <div className="DeliveryApp">
                                        <a href="#">restaurants</a>
                                        <a href="#">cooking</a>
                                    </div>
                                    <h6>
                                        <a href="single-blog.html">
                                            With DeliveryApp you can order food
                                            for the whole day
                                        </a>
                                    </h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod
                                        tempor...
                                    </p>
                                    <ul className="data">
                                        <li>
                                            <h6>
                                                <i className="fa-solid fa-user" />
                                                by DeliveryApp
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
                            <div className="news-post-two">
                                <img
                                    alt="food-img"
                                    src="https://via.placeholder.com/200x200"
                                />
                                <div className="news-post-two-data">
                                    <div className="DeliveryApp">
                                        <a href="#">restaurants</a>
                                        <a href="#">cooking</a>
                                    </div>
                                    <h6>
                                        <a href="single-blog.html">
                                            127+ Couriers On Our Team!
                                        </a>
                                    </h6>
                                    <p>
                                        Urna condimentum mattis pellentesque id
                                        nibh tortor id aliquet. Tellus at urna
                                        condimentum mattis...
                                    </p>
                                    <ul className="data">
                                        <li>
                                            <h6>
                                                <i className="fa-solid fa-user" />
                                                by DeliveryApp
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
                            <div className="news-post-two end">
                                <img
                                    alt="food-img"
                                    src="https://via.placeholder.com/200x200"
                                />
                                <div className="news-post-two-data">
                                    <div className="DeliveryApp">
                                        <a href="#">restaurants</a>
                                        <a href="#">cooking</a>
                                    </div>
                                    <h6>
                                        <a href="single-blog.html">
                                            Why You Should Optimize Your Menu
                                            for Delivery
                                        </a>
                                    </h6>
                                    <p>
                                        Enim lobortis scelerisque fermentum dui.
                                        Sit amet cursus sit amet dictum sit
                                        amet. Rutrum tellus...
                                    </p>
                                    <ul className="data">
                                        <li>
                                            <h6>
                                                <i className="fa-solid fa-user" />
                                                by DeliveryApp
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
                                    <Button href="#" type="button" size="small">
                                        Subscribe
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
}
