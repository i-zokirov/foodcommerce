import React from "react";
import Link from "next/link";
import NavLogo from "../logo/NavLogo";
import { sidebarroutes } from "@/utils/AppConfig";
import Button from "../Button";
interface SideBarProps {
    isMenuOpen: boolean;
    handleMenuOpen: () => void;
}
const SideBar: React.FC<SideBarProps> = ({ isMenuOpen, handleMenuOpen }) => {
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
            <div className="d-flex justify-content-around">
                <Button
                    type="link"
                    href="/sign-up"
                    size="small"
                    variant="contained"
                >
                    Sign Up
                </Button>
                <Button
                    type="link"
                    href="/login"
                    size="small"
                    variant="outlined"
                >
                    Login
                </Button>
            </div>
            <ul>
                {sidebarroutes.map((route, index) => (
                    <li key={index}>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}

                {/* <li className="menu-item-has-children">
                    <Link href="#">Pages</Link>

                    <ul className="sub-menu">
                        <li>
                            <Link href="blog.html">Blog</Link>
                        </li>
                     
                    </ul>
                </li> */}
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

export default SideBar;
