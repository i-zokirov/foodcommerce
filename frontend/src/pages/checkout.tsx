import React from "react";
import Main from "@/layouts/Main";
import Meta from "@/layouts/Meta";
const checkout = () => {
    return (
        <Main meta={<Meta title="" description="" />}>
            {/* hero-section */}
            <section
                className="hero-section about checkout gap"
                style={{ backgroundImage: "url(assets/img/background-3.png)" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-text pricing-table">
                                <ul
                                    className="crumbs d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                    data-aos-duration={300}
                                >
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="index.html">
                                            <i className="fa-solid fa-right-long" />
                                            Restaurants{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index.html">
                                            <i className="fa-solid fa-right-long" />
                                            Restaurant Сard
                                        </a>
                                    </li>
                                    <li className="two">
                                        <a href="index.html">
                                            <i className="fa-solid fa-right-long" />
                                            Checkout
                                        </a>
                                    </li>
                                </ul>
                                <h2
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                    data-aos-duration={400}
                                >
                                    Checkout
                                </h2>
                                <p
                                    data-aos="fade-up"
                                    data-aos-delay={400}
                                    data-aos-duration={500}
                                >
                                    Sit amet nisl purus in mollis nunc sed id
                                    semper. Condimentum id venenatis a
                                    condimentum vitae sapien pellentesque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* checkout-order */}
            <section className="gap">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-5 col-lg-12"
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="checkout-order">
                                <div className="title-checkout">
                                    <h2>Your order:</h2>
                                    <h6>3</h6>
                                </div>
                                <div className="banner-wilmington">
                                    <img
                                        alt="logo"
                                        src="https://via.placeholder.com/50x50"
                                    />
                                    <h6>Kennington Lane Cafe</h6>
                                </div>
                                <ul>
                                    <li className="price-list">
                                        <i className="closeButton fa-solid fa-xmark" />
                                        <div className="counter-container">
                                            <div className="counter-food">
                                                <img
                                                    alt="food"
                                                    src="https://via.placeholder.com/120x80"
                                                />
                                                <h4>
                                                    Pasta, kiwi and sauce chilli
                                                </h4>
                                            </div>
                                            <h3>$39</h3>
                                        </div>
                                        <div className="price">
                                            <div>
                                                <h2>$39</h2>
                                                <span>Sum</span>
                                            </div>
                                            <div>
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
                                                <span>Quantity</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="price-list">
                                        <i className="closeButton fa-solid fa-xmark" />
                                        <div className="counter-container">
                                            <div className="counter-food">
                                                <img
                                                    alt="food"
                                                    src="https://via.placeholder.com/120x80"
                                                />
                                                <h4>
                                                    Rice with shrimps and kiwi
                                                </h4>
                                            </div>
                                            <h3>$49</h3>
                                        </div>
                                        <div className="price">
                                            <div>
                                                <h2>$49</h2>
                                                <span>Sum</span>
                                            </div>
                                            <div>
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
                                                <span>Quantity</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="totel-price">
                                    <span>Total order:</span>
                                    <h5>$137</h5>
                                </div>
                                <div className="totel-price">
                                    <span>To pay:</span>
                                    <h2>$137</h2>
                                </div>
                            </div>
                        </div>
                        <div
                            className="offset-xl-1 col-xl-6 col-lg-12"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <form className="checkout-form">
                                <h4>Buyer information</h4>
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Full Name"
                                />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            name="E-mail"
                                            placeholder="E-mail"
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            name="E-mail"
                                            placeholder="Phone"
                                        />
                                    </div>
                                </div>
                                <h4 className="two">Delivery addresses</h4>
                                <select className="nice-select Advice">
                                    <option>California</option>
                                    <option>California 1</option>
                                    <option>California 2</option>
                                    <option>California 3</option>
                                    <option>California 4</option>
                                </select>
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Street"
                                />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            name="E-mail"
                                            placeholder="House number"
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            type="number"
                                            name="E-mail"
                                            placeholder="Apartment number"
                                        />
                                        <span>*dispensable</span>
                                    </div>
                                </div>
                                <h4 className="two">Payment method</h4>
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
                                        Card
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
                                        Cash
                                    </button>
                                </div>
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
                                        <label>
                                            <input
                                                type="radio"
                                                name="test"
                                                defaultValue="small"
                                            />
                                            <img
                                                alt="checkbox-img"
                                                src="assets/img/checkbox-1.png"
                                            />
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="test"
                                                defaultValue="big"
                                            />
                                            <img
                                                alt="checkbox-img"
                                                src="assets/img/checkbox-2.png"
                                            />
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="test"
                                                defaultValue="big"
                                            />
                                            <img
                                                alt="checkbox-img"
                                                src="assets/img/checkbox-3.png"
                                            />
                                        </label>
                                        <input
                                            type="number"
                                            name="Name"
                                            placeholder="Card number"
                                        />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input
                                                    type="text"
                                                    name="E-mail"
                                                    placeholder="Expiration Date"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <input
                                                    type="password"
                                                    placeholder="CVV"
                                                />
                                            </div>
                                        </div>
                                        <label className="checkbox-one">
                                            Save my payments details for future
                                            purchases
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                        </label>
                                        <div
                                            className="tab-pane fade"
                                            id="v-pills-profile"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-profile-tab"
                                        ></div>
                                    </div>
                                </div>
                                <button className="button-price">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default checkout;
