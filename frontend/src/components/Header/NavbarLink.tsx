import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarLinkProps {
    href: string;
    children: React.ReactNode;
}
const NavbarLink = ({ href, children }: NavbarLinkProps) => {
    const { pathname } = useRouter();
    const isActive = pathname === href;

    return (
        <li className={`navbar-dropdown ${isActive ? "active" : ""}`}>
            <Link href={href}>{children}</Link>
        </li>
    );
};

export default NavbarLink;
