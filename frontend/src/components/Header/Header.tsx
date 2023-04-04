import React, { useState } from "react";
import Link from "next/link";
import NavLogo from "../logo/NavLogo";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-2">
                        <div className="header-style">
                            <Link href="/">
                                <NavLogo />
                            </Link>
                            <div className="extras bag">
                                <a href="#" className="menu-btn">
                                    {/* <FaShoppingBag className="icon" /> */}
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </a>
                                <div
                                    className="bar-menu"
                                    role="button"
                                    onClick={handleMenuOpen}
                                >
                                    <i className="fa-solid fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <nav className="navbar">
                            <ul className="navbar-links">
                                <li className="navbar-dropdown active">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="navbar-dropdown">
                                    <a href="about.html">About Us</a>
                                </li>
                                <li className="navbar-dropdown">
                                    <a href="#">Restaurants</a>
                                    <div className="dropdown">
                                        <a href="restaurants.html">
                                            Restaurants
                                        </a>
                                        <a href="restaurant-card.html">
                                            Restaurant Card
                                        </a>
                                        <a href="checkout.html">Checkout</a>
                                    </div>
                                </li>
                                <li className="navbar-dropdown">
                                    <a href="#">Pages</a>
                                    <div className="dropdown">
                                        <a href="blog.html">Blog</a>
                                        <a href="single-blog.html">
                                            Single Blog
                                        </a>
                                        <a href="services.html">Services</a>
                                        <a href="faq.html">FAQ</a>
                                        <a href="pricing-table.html">
                                            Pricing Table
                                        </a>
                                        <a href="become-partner.html">
                                            Become A Partner
                                        </a>
                                        <a href="404.html">404</a>
                                    </div>
                                </li>
                                <li className="navbar-dropdown">
                                    <a href="contacts.html">Contacts</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="extras bag">
                            <a
                                href="#"
                                id="desktop-menu"
                                role="button"
                                className="menu-btn"
                            >
                                <i className="fa-solid fa-bag-shopping"></i>
                            </a>
                            <a href="#" className="button button-2">
                                Order Now
                            </a>
                        </div>
                    </div>
                    <div className="menu-wrap">
                        <div className="menu-inner ps ps--active-x ps--active-y">
                            <span className="menu-cls-btn">
                                <i className="cls-leftright"></i>
                                <i className="cls-rightleft"></i>
                            </span>
                            <div className="checkout-order">
                                <div className="title-checkout">
                                    <h2>My Orders</h2>
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
                                        <i className="closeButton fa-solid fa-xmark"></i>
                                        <div className="counter-container">
                                            <div className="counter-food">
                                                <img
                                                    alt="food"
                                                    src="https://via.placeholder.com/100x67"
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
                                                        min="0"
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
                                        <i className="closeButton fa-solid fa-xmark"></i>
                                        <div className="counter-container">
                                            <div className="counter-food">
                                                <img
                                                    alt="food"
                                                    src="https://via.placeholder.com/100x67"
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
                                                        min="0"
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
                                <button className="button-price">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`mobile-nav hmburger-menu ${
                            isMenuOpen ? "open" : ""
                        }`}
                        id="mobile-nav"
                    >
                        <div className="res-log">
                            <Link href="/">
                                <NavLogo />
                            </Link>
                        </div>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>

                            <li>
                                <a href="about.html">About Us</a>
                            </li>

                            <li className="menu-item-has-children">
                                <a href="#">Restaurants</a>

                                <ul className="sub-menu">
                                    <li>
                                        <a href="restaurants.html">
                                            Restaurants
                                        </a>
                                    </li>
                                    <li>
                                        <a href="restaurant-card.html">
                                            Restaurant Card
                                        </a>
                                    </li>
                                    <li>
                                        <a href="checkout.html">Checkout</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Pages</a>

                                <ul className="sub-menu">
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="single-blog.html">
                                            Single Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="services.html">Services</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="pricing-table.html">
                                            Pricing Table
                                        </a>
                                    </li>
                                    <li>
                                        <a href="become-partner.html">
                                            Become A Partner
                                        </a>
                                    </li>
                                    <li>
                                        <a href="404.html">404</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="contact.html">contacts</a>
                            </li>
                        </ul>

                        <a
                            href="#"
                            role="button"
                            onClick={handleMenuOpen}
                            id="res-cross"
                        ></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
