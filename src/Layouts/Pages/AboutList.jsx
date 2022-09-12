import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AboutList = () => (
  <div className="about-content">
    <ul className="about-list">
      <li>
        <Link to="/about/about-app">About App</Link>
      </li>
      <li>
        <Link to="/about/about-author">About Author</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export default AboutList;
