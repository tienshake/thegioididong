import {
    Outlet
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Admin from '../../admin/Admin';
import NavBarApp from "../../nav/NavBarApp";
import AccessoryPage from '../accessoryPage/AccessoryPage';
import './Home.scss';
const Home = () => {
    return (
        <div className="home__container">
            <NavBarApp />
            <Outlet />
        </div>
    );
}

export default Home;