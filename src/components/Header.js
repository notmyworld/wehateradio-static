// import * from 'module';
import React from 'react';
import { Link } from "@reach/router";

export default () => {
  return (
    <header className="header">
      <nav className="navbar is-spaced">
        <div className="container is-fluid">
          <div className="branding nav-left">
            <a className="no-hover" href="/">
              <img className="nav-item logo" src="/images/logo.svg" alt="logo we hate radio" />
            </a>
          </div>
          <div className="nav-right navbar-end">
            <li>
              <Link className="nav-item  is-tab" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-item is-tab" to="/blog">Blog</Link>
            </li>
            <li>
              <Link className="nav-item is-tab" to="/radio-shows">Radio shows</Link>
            </li>
            <li>
              <Link className="nav-item is-tab" to="/get-your-fix">Get your fix</Link>
            </li>
            <li>
              <Link className="nav-item is-tab" to="/about">About</Link>
            </li>
            <li>
              <Link className="nav-item is-tab" to="/calendar">Calendar</Link>
            </li>
          </div>

        </div>
      </nav>
    </header>
  )
}

// <div id="navbarBurger nav-toggle" className="navbar-burger burger" data-target="navMenuMore">
//   <span></span>
//   <span></span>
//   <span></span>
// </div>
