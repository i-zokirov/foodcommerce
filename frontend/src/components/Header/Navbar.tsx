import React from "react";
import Link from "next/link";
import NavbarLink from "./NavbarLink";
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <NavbarLink href="/join-courier">
                    {/* <span> */}
                    <i className="fa-solid fa-moped"></i>
                    {/* </span> */}
                    Become a courier
                </NavbarLink>
                {/* <NavbarLink href="/about">About Us</NavbarLink>
                <NavbarLink href="/contact">Contact</NavbarLink> */}
            </ul>
        </nav>
    );
};

export default Navbar;
