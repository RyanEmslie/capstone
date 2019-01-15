import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink exact to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/entryform">Check-In</NavLink>
            </li>
            <li>
                <NavLink to="/myplaces">Saved Locations</NavLink>
            </li>
        </ul>
    </nav>
);

export default NavBar;
