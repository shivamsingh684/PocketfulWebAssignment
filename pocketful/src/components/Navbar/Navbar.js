import React, { useState } from "react";

import {

    FaInstagramSquare,
    FaYoutubeSquare,
    FaTwitterSquare


} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">

                {/* 2nd menu part  */}
                <div className="left">
                    <ul>
                        <li>
                            <div className="logo">D</div>
                        </li>
                        <li>
                            <NavLink className='link2' to="">LEARN</NavLink>
                        </li>
                        <li>
                            <NavLink className='link2' to="/home">BLOG</NavLink>
                        </li>
                        <li>
                            <NavLink className='link2' to="">BOOKMARKS</NavLink>
                        </li>
                        <li>
                            <NavLink className='link2' to="">UI KIT</NavLink>
                        </li>
                        <li>
                            <NavLink className='link2' to="">LAIN NYA</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <FaTwitterSquare className="twitter" />

                        </li>
                        <li>
                            <FaInstagramSquare className="instagram" />

                        </li>
                        <li>
                            <FaYoutubeSquare className="youtube" />

                        </li>
                    </ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>


            </nav>
        </>
    );
};

export default Navbar;