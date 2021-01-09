import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav class='navbar sticky-top navbar-expand navbar-dark bg-dark'>
      <a class='navbar-brand' href='index.html'>
        PortFinder
      </a>
      <div class='navbar-nav'>
        <div class='dropdown'>
          <a
            class='nav-link dropdown-toggle'
            data-toggle='dropdown'
            href='#'
            role='button'
            aria-haspopup='true'
            aria-expanded='true'>
            Menu
          </a>
          <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <a class='dropdown-item' href='#'>
              Home
            </a>
            <a class='dropdown-item' href='#'>
              New Page
            </a>
            <a class='dropdown-item' href='#'>
              New Page
            </a>
          </div>
        </div>
      </div>
      <div class='pull-right ml-auto'>
        <ul class='nav navbar-nav navbar-right'>
          <li class='nav-item navbar-right'>
            <NavLink
              className='nav-link'
              activeClassName='nav-link-active'
              to='/signup'>
              Sign Up
            </NavLink>
          </li>
          <li class='nav-item navbar-right'>
            <a class='nav-link' href='#'>
              <span class='fas fa-sign-in-alt'></span>
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
