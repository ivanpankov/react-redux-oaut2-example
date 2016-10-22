import React, { Component } from 'react';
import NavLink from './NavLink';
import { Link } from 'react-router';

const COLLAPSED_CLASS = 'in';

const Navbar = ({ userName, userPicture, isCollapsed, toggleNavbar }) => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" onClick={toggleNavbar}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand">React UI</Link>
            </div>
            <div id="navbar" className={`navbar-collapse collapse ${isCollapsed ? '' : COLLAPSED_CLASS}`}>
                <ul className="nav navbar-nav">
                    <NavLink to="/" isIndexLink={true} >Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/admin">Admin</NavLink>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a>{userName}</a></li>
                    <li><img src={userPicture} height="42" width="42" /></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
