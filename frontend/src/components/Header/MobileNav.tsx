import React from "react";
import Link from "next/link";
import NavLogo from "../logo/NavLogo";

interface MobileNavProps {
    isMenuOpen: boolean;
    handleMenuOpen: () => void;
}
const MobileNav: React.FC<MobileNavProps> = ({
    isMenuOpen,
    handleMenuOpen,
}) => {
    return (
        <div
            className={`mobile-nav hmburger-menu ${isMenuOpen ? "open" : ""}`}
            id="mobile-nav"
        >
            <div className="res-log">
                <Link href="/">
                    <NavLogo />
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/restaurants">Restaurants</Link>
                </li>
                <li>
                    <Link href="/restaurants?favourites=true">Favourites</Link>
                </li>
                <li>
                    <Link href="/gift-cards">Gift Cards</Link>
                </li>
                <li>
                    <Link href="/become-partner">Become Partner</Link>
                </li>
                <li>
                    <Link href="/join-courier">Join Courier</Link>
                </li>
                <li>
                    <Link href="/business">Delivery App For Business</Link>
                </li>
                <li>
                    <Link href="/about.html">Need Help?</Link>
                </li>

                {/* <li className="menu-item-has-children">
                    <Link href="#">Pages</Link>

                    <ul className="sub-menu">
                        <li>
                            <Link href="blog.html">Blog</Link>
                        </li>
                     
                    </ul>
                </li> */}

                <li>
                    <Link href="contact.html">Contact</Link>
                </li>
            </ul>

            <a
                href="#"
                role="button"
                onClick={handleMenuOpen}
                id="res-cross"
            ></a>
        </div>
    );
};

export default MobileNav;
