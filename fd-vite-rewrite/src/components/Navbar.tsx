import "./Navbar.css";

import ashvamedhaLogo from "@images/logos/ashvamedha-logo.png";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

type MenuData = Array<{ title: string; path: string; className: string }>;

function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    const menuData: MenuData = [
        {
            title: "Home",
            path: "/",
            className: "nav-text",
        },
        {
            title: "About Us",
            path: "/#aboutus",
            className: "nav-text",
        },
        {
            title: "Events",
            path: "/events",
            className: "nav-text",
        },
        {
            title: "Team",
            path: "/team",
            className: "nav-text",
        },
        {
            title: "Gallery",
            path: "/gallery",
            className: "nav-text special",
        },
        {
            title: "Leaderboard",
            path: "/leaderboard",
            className: "nav-text",
        },
        {
            title: "Contact Us",
            path: "#contactus",
            className: "nav-text",
        },
    ];

    return (
        <nav className="main-nav">
            <Link to="/" className="logo">
                <img src={ashvamedhaLogo} alt="ASHVAMEDHA" />
            </Link>
            <div
                className={
                    showMobileMenu ? "menu-link mobile-menu-link" : "menu-link"
                }
            >
                <ul className="menu-items">
                    {menuData.map(function (item, index) {
                        return (
                            <li key={index} className={item.className}>
                                <Link
                                    to={item.path}
                                    onClick={() => setShowMobileMenu(false)}
                                >
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="social-media">
                {/* Hamburger menu start */}
                <div className="hamburger-menu">
                    <div
                        onClick={() =>
                            setShowMobileMenu(
                                (prevShowMobileMenuState) =>
                                    !prevShowMobileMenuState
                            )
                        }
                    >
                        {showMobileMenu ? (
                            <IoClose className="icon" />
                        ) : (
                            <IoMenu className="icon" />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
