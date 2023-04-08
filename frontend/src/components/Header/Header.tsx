import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLogo from "../logo/NavLogo";
import SideBar from "./SideBar";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State to keep track of whether the header should be scrolled or not
    const [scrolled, setScrolled] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen((prev) => !prev);
    };

    function handleScroll() {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        const menuBtn = document.querySelector(".menu-btn");
        const body = document.querySelector("body")!;

        const handleMenuBtnClick = (): void => {
            body.classList.add("active");
        };
        menuBtn?.addEventListener("click", handleMenuBtnClick);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            menuBtn?.removeEventListener("click", handleMenuBtnClick);
        };
    }, []);

    const headerClasses = scrolled ? "header scrolled" : "header";

    return (
        <header className={headerClasses}>
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

                    <SideBar
                        isMenuOpen={isMenuOpen}
                        handleMenuOpen={handleMenuOpen}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
