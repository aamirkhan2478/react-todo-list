import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import '../Assets/css/sidebar.css';

const SideBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="navbar">
      <button onClick={handleToggle} type="button">
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li>
          <NavLink to="/" onClick={() => closeMenu()}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => closeMenu()}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
