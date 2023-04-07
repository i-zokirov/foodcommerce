import React from "react";
import Main from "@/layouts/Main";
import Meta from "@/layouts/Meta";
const restaurant = () => {
    return (
        <Main meta={<Meta title="" description="" />}>
            <section
                className="hero-section about gap"
                style={{
                    backgroundImage: "url(assets/img/background-1.png)",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="about-text">
                                <ul className="crumbs d-flex">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="index.html">
                                            <i className="fa-solid fa-right-long" />
                                            Restaurants
                                        </a>
                                    </li>
                                    <li className="two">
                                        <a href="index.html">
                                            <i className="fa-solid fa-right-long" />
                                            The Wilmington
                                        </a>
                                    </li>
                                </ul>
                                <div className="logo-detail">
                                    <img
                                        alt="logo"
                                        src="https://via.placeholder.com/80x80"
                                    />
                                    <h2>Kennington Lane Cafe</h2>
                                </div>
                                <div className="rate">
                                    <span>Rate:</span>
                                    <div className="star">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star-half-stroke" />
                                    </div>
                                    <span>CUISINES:</span>
                                    <div className="cafa-button">
                                        <a href="#">american</a>
                                        <a href="#">steakhouse</a>
                                        <a href="#">seafood</a>
                                    </div>
                                    <span>FEATURES:</span>
                                    <p>
                                        Lorem mollis aliquam ut porttitor. Nisl
                                        rhoncus mattis rhoncus urna neque.
                                        Pharetra sit amet aliquam id. Urna nec
                                        tincidunt praesent semper feugiat nibh.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="about-img">
                                <img
                                    alt="man"
                                    src="https://via.placeholder.com/499x500"
                                />
                                <div className="hours">
                                    <i className="fa-regular fa-clock" />
                                    <h4>
                                        9am – 12pm
                                        <br />
                                        <span>Hours</span>
                                    </h4>
                                </div>
                                <div className="hours two">
                                    <i className="fa-solid fa-utensils" />
                                    <h4>
                                        Breakfast, Lunch, Dinner
                                        <br />
                                        <span>Meals</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* tabs */}
            <section className="tabs gap">
                <div className="container">
                    <div className="tabs-img-back">
                        <div className="row">
                            <div className="col-lg-12">
                                <div
                                    className="Provides"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    data-aos-duration={300}
                                >
                                    <div
                                        className="nav nav-pills me-3"
                                        id="v-pills-tab"
                                        role="tablist"
                                        aria-orientation="vertical"
                                    >
                                        <button
                                            className="nav-link active"
                                            id="v-pills-home-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-home"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-home"
                                            aria-selected="true"
                                        >
                                            Breakfast
                                        </button>
                                        <button
                                            className="nav-link"
                                            id="v-pills-profile-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-profile"
                                            aria-selected="false"
                                        >
                                            Lunch
                                        </button>
                                        <button
                                            className="nav-link"
                                            id="v-pills-messages-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-messages"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-messages"
                                            aria-selected="false"
                                        >
                                            Dinner
                                        </button>
                                    </div>
                                    <div className="like-meal">
                                        <a href="#">
                                            <i className="fa-solid fa-heart" />
                                            Like Meals
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div
                                    className="tab-content"
                                    id="v-pills-tabContent"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="v-pills-home"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                    >
                                        <div className="row">
                                            <div
                                                className="col-xl-4 col-lg-6"
                                                data-aos="flip-up"
                                                data-aos-delay={200}
                                                data-aos-duration={300}
                                            >
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Egg, kiwi and sauce
                                                            chilli
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$39</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Potatoes with pork
                                                            and dried fruits
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="col-xl-4 col-lg-6"
                                                data-aos="flip-up"
                                                data-aos-delay={300}
                                                data-aos-duration={400}
                                            >
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Potatoes with pork
                                                            and dried fruits
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$46</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Potatoes with pork
                                                            and dried fruits
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="col-xl-4 col-lg-6"
                                                data-aos="flip-up"
                                                data-aos-delay={400}
                                                data-aos-duration={500}
                                            >
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Rice with shrimps
                                                            and kiwi
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$49</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Rice with shrimps
                                                            and kiwi
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="col-xl-4 col-lg-6"
                                                data-aos="flip-up"
                                                data-aos-delay={200}
                                                data-aos-duration={300}
                                            >
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Spaghetti with
                                                            mushrooms and...
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$49</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Spaghetti with
                                                            mushrooms and...
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="col-xl-4 col-lg-6"
                                                data-aos="flip-up"
                                                data-aos-delay={300}
                                                data-aos-duration={400}
                                            >
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Sliced pork, avocado
                                                            and...
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$39</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Sliced pork, avocado
                                                            and...
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="col-xl-4 col-lg-6"
                                                data-aos="flip-up"
                                                data-aos-delay={400}
                                                data-aos-duration={500}
                                            >
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Veal meat, tomatoes
                                                            and...
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$49</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Veal meat, tomatoes
                                                            and...
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-profile-tab"
                                    >
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6">
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Spaghetti with
                                                            mushrooms and...
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$49</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Spaghetti with
                                                            mushrooms and...
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6">
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Veal meat, tomatoes
                                                            and...
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$49</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Veal meat, tomatoes
                                                            and...
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6">
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Sliced pork, avocado
                                                            and...
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$39</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Sliced pork, avocado
                                                            and...
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6">
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Pasta, kiwi and
                                                            sauce chilli
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$39</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Potatoes with pork
                                                            and dried fruits
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6">
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Potatoes with pork
                                                            and dried fruits
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$46</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Potatoes with pork
                                                            and dried fruits
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-messages"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-messages-tab"
                                    >
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-6">
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Pasta, kiwi and
                                                            sauce chilli
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$39</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Potatoes with pork
                                                            and dried fruits
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6">
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Sliced pork, avocado
                                                            and...
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$39</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Sliced pork, avocado
                                                            and...
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6">
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Veal meat, tomatoes
                                                            and...
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$49</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Veal meat, tomatoes
                                                            and...
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6">
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Potatoes with pork
                                                            and dried fruits
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$46</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Potatoes with pork
                                                            and dried fruits
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6">
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Rice with shrimps
                                                            and kiwi
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$49</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Rice with shrimps
                                                            and kiwi
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6">
                                                <div className="dish">
                                                    <img
                                                        alt="food-dish"
                                                        src="https://via.placeholder.com/369x236"
                                                    />
                                                    <div className="dish-foods">
                                                        <h3>
                                                            Spaghetti with
                                                            mushrooms and...
                                                        </h3>
                                                        <div className="dish-icon">
                                                            <div className="cafa-button">
                                                                <a href="#">
                                                                    Breakfast
                                                                </a>
                                                                <a href="#">
                                                                    Brunch
                                                                </a>
                                                            </div>
                                                            <div className="dish-icon end">
                                                                <i className="info fa-solid fa-circle-info" />
                                                                <div className="star">
                                                                    <a href="#">
                                                                        <i className="fa-solid fa-heart" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price">
                                                            <h2>$49</h2>
                                                            <div className="qty-input">
                                                                <button
                                                                    className="qty-count qty-count--minus"
                                                                    data-action="minus"
                                                                    type="button"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="product-qty"
                                                                    type="number"
                                                                    name="product-qty"
                                                                    min={0}
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <button
                                                                    className="qty-count qty-count--add"
                                                                    data-action="add"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button className="button-price">
                                                            Add to Basket
                                                            <i className="fa-solid fa-bag-shopping" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="dish-info"
                                                        style={{
                                                            display: "none",
                                                        }}
                                                    >
                                                        <i className="info2 fa-solid fa-xmark" />
                                                        <h5>
                                                            Spaghetti with
                                                            mushrooms and...
                                                        </h5>
                                                        <div className="cafa-button">
                                                            <a href="#">
                                                                Breakfast
                                                            </a>
                                                            <a href="#">
                                                                Brunch
                                                            </a>
                                                        </div>
                                                        <p>
                                                            In egestas erat
                                                            imperdiet sed
                                                            euismod nisi porta.
                                                            Ultrices sagittis
                                                            orci a scelerisque.
                                                            Diam quam nulla
                                                            porttitor.
                                                        </p>
                                                        <ul className="menu-dish">
                                                            <li>
                                                                Nulla porttitor
                                                                massa id;
                                                            </li>
                                                            <li>
                                                                Aliquam
                                                                vestibulum
                                                                morbi;
                                                            </li>
                                                            <li>
                                                                Blandit donec
                                                                adipiscing;
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Lunch Section */}
            <section
                className="lunch-section gap"
                style={{ background: "#fcfcfc" }}
            >
                <div className="container">
                    <h2
                        data-aos="fade-up"
                        data-aos-delay={300}
                        data-aos-duration={400}
                    >
                        See also category Lunch
                    </h2>
                    <div className="row">
                        <div
                            className="col-xl-4 col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="dish">
                                <img
                                    alt="food-dish"
                                    src="https://via.placeholder.com/369x236"
                                />
                                <div className="dish-foods">
                                    <h3>Fruits with rice chips</h3>
                                    <div className="dish-icon">
                                        <div className="cafa-button">
                                            <a href="#">Breakfast</a>
                                            <a href="#">Brunch</a>
                                        </div>
                                        <div className="dish-icon end">
                                            <i className="info fa-solid fa-circle-info" />
                                            <div className="star">
                                                <a href="#">
                                                    <i className="fa-solid fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <h2>$39</h2>
                                        <div className="qty-input">
                                            <button
                                                className="qty-count qty-count--minus"
                                                data-action="minus"
                                                type="button"
                                            >
                                                -
                                            </button>
                                            <input
                                                className="product-qty"
                                                type="number"
                                                name="product-qty"
                                                min={0}
                                                defaultValue={1}
                                            />
                                            <button
                                                className="qty-count qty-count--add"
                                                data-action="add"
                                                type="button"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button className="button-price">
                                        Add to Basket
                                        <i className="fa-solid fa-bag-shopping" />
                                    </button>
                                </div>
                                <div
                                    className="dish-info"
                                    style={{ display: "none" }}
                                >
                                    <i className="info2 fa-solid fa-xmark" />
                                    <h5>Fruits with rice chips</h5>
                                    <div className="cafa-button">
                                        <a href="#">Breakfast</a>
                                        <a href="#">Brunch</a>
                                    </div>
                                    <p>
                                        In egestas erat imperdiet sed euismod
                                        nisi porta. Ultrices sagittis orci a
                                        scelerisque. Diam quam nulla porttitor.
                                    </p>
                                    <ul className="menu-dish">
                                        <li>Nulla porttitor massa id;</li>
                                        <li>Aliquam vestibulum morbi;</li>
                                        <li>Blandit donec adipiscing;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="dish">
                                <img
                                    alt="food-dish"
                                    src="https://via.placeholder.com/369x236"
                                />
                                <div className="dish-foods">
                                    <h3>Vegetables with rice chips</h3>
                                    <div className="dish-icon">
                                        <div className="cafa-button">
                                            <a href="#">Breakfast</a>
                                            <a href="#">Brunch</a>
                                        </div>
                                        <div className="dish-icon end">
                                            <i className="info fa-solid fa-circle-info" />
                                            <div className="star">
                                                <a href="#">
                                                    <i className="fa-solid fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <h2>$35</h2>
                                        <div className="qty-input">
                                            <button
                                                className="qty-count qty-count--minus"
                                                data-action="minus"
                                                type="button"
                                            >
                                                -
                                            </button>
                                            <input
                                                className="product-qty"
                                                type="number"
                                                name="product-qty"
                                                min={0}
                                                defaultValue={1}
                                            />
                                            <button
                                                className="qty-count qty-count--add"
                                                data-action="add"
                                                type="button"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button className="button-price">
                                        Add to Basket
                                        <i className="fa-solid fa-bag-shopping" />
                                    </button>
                                </div>
                                <div
                                    className="dish-info"
                                    style={{ display: "none" }}
                                >
                                    <i className="info2 fa-solid fa-xmark" />
                                    <h5>Vegetables with rice chips</h5>
                                    <div className="cafa-button">
                                        <a href="#">Breakfast</a>
                                        <a href="#">Brunch</a>
                                    </div>
                                    <p>
                                        In egestas erat imperdiet sed euismod
                                        nisi porta. Ultrices sagittis orci a
                                        scelerisque. Diam quam nulla porttitor.
                                    </p>
                                    <ul className="menu-dish">
                                        <li>Nulla porttitor massa id;</li>
                                        <li>Aliquam vestibulum morbi;</li>
                                        <li>Blandit donec adipiscing;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-6"
                            data-aos="flip-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            <div className="dish">
                                <img
                                    alt="food-dish"
                                    src="https://via.placeholder.com/369x236"
                                />
                                <div className="dish-foods">
                                    <h3>Pork with vegetables and...</h3>
                                    <div className="dish-icon">
                                        <div className="cafa-button">
                                            <a href="#">Breakfast</a>
                                            <a href="#">Brunch</a>
                                        </div>
                                        <div className="dish-icon end">
                                            <i className="info fa-solid fa-circle-info" />
                                            <div className="star">
                                                <a href="#">
                                                    <i className="fa-solid fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <h2>$45</h2>
                                        <div className="qty-input">
                                            <button
                                                className="qty-count qty-count--minus"
                                                data-action="minus"
                                                type="button"
                                            >
                                                -
                                            </button>
                                            <input
                                                className="product-qty"
                                                type="number"
                                                name="product-qty"
                                                min={0}
                                                defaultValue={1}
                                            />
                                            <button
                                                className="qty-count qty-count--add"
                                                data-action="add"
                                                type="button"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button className="button-price">
                                        Add to Basket
                                        <i className="fa-solid fa-bag-shopping" />
                                    </button>
                                </div>
                                <div
                                    className="dish-info"
                                    style={{ display: "none" }}
                                >
                                    <i className="info2 fa-solid fa-xmark" />
                                    <h5>Pork with vegetables and...</h5>
                                    <div className="cafa-button">
                                        <a href="#">Breakfast</a>
                                        <a href="#">Brunch</a>
                                    </div>
                                    <p>
                                        In egestas erat imperdiet sed euismod
                                        nisi porta. Ultrices sagittis orci a
                                        scelerisque. Diam quam nulla porttitor.
                                    </p>
                                    <ul className="menu-dish">
                                        <li>Nulla porttitor massa id;</li>
                                        <li>Aliquam vestibulum morbi;</li>
                                        <li>Blandit donec adipiscing;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default restaurant;
