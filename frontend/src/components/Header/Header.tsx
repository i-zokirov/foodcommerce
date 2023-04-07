import React, { useState } from "react";
import Link from "next/link";
import NavLogo from "../logo/NavLogo";
import MobileNav from "./MobileNav";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12">
                        <div className="header-style">
                            <Link href="/">
                                <NavLogo />
                            </Link>
                            <div className="extras bag">
                                <a href="#" className="menu-btn">
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
                    <MobileNav
                        isMenuOpen={isMenuOpen}
                        handleMenuOpen={handleMenuOpen}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
