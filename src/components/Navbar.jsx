import React, { useState } from "react";
import { MdClose } from 'react-icons/md'
import { NavLink, Link } from "react-router-dom";
import Logo from "../images/logo3-removebg.png";
import { GoThreeBars } from "react-icons/go";
import { Links } from "../data";

import "./Navbar.css";

const Navbar = () => {

    const [IsNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav__Logo" />
        </Link>

      <ul className={`nav__links ${IsNavShowing ? 'display__nav' : 'close__nav'}`}>
        {Links.map(({ name, path }, index) => {
          return (
            <li key={index}>
              <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : '' }>{name}</NavLink>
            </li>
          );
        })}
      </ul>
      <button className="nav-toggler" onClick={() => {
        setIsNavShowing(!IsNavShowing)
      }}>
        {
            IsNavShowing ? <MdClose /> : <GoThreeBars />
        }
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
