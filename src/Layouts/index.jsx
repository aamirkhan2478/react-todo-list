import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './Components/SideBar';

const Layout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);

export default Layout;
