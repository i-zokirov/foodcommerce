import React from "react";
import FooterLogo from "../logo/FooterLogo";
import Link from "next/link";

const Footer = () => {
    return (
        <footer
            className="gap no-bottom"
            style={{ backgroundColor: "#363636" }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="footer-description">
                            <Link href="index.html">
                                <FooterLogo />
                            </Link>
                            <h2>The Best Restaurants in Your Home</h2>
                            <p>
                                Bringing the best restaurants to your doorstep.
                                Order online now for a seamless and hassle-free
                                dining experience. Your satisfaction is our top
                                priority.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="menu">
                            <h4>Menu</h4>
                            <ul className="footer-menu">
                                <li>
                                    <Link href="/">
                                        home
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us">
                                        about us
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/restaurants">
                                        Restaurants
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Contacts
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="menu contacts">
                            <h4>Contacts</h4>
                            <div className="footer-location">
                                <i className="fa-solid fa-location-dot"></i>
                                <p>
                                    1717 Harrison St, San Francisco, CA 94103,
                                    United States
                                </p>
                            </div>
                            <a href="mailto:DeliveryApp@mail.net">
                                <i className="fa-solid fa-envelope"></i>
                                DeliveryApp@mail.net
                            </a>
                            <a href="callto:+14253261627">
                                <i className="fa-solid fa-phone"></i>+1 425 326
                                16 27
                            </a>
                        </div>
                        <ul className="social-media">
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-two gap no-bottom">
                    <p>Copyright © 2023. DeliveryApp. All rights reserved.</p>
                    <div className="privacy">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Services</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
