import {
    Outlet
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBarApp from "../partial/nav/NavBarApp";
import './Home.scss';
import Footer from '../partial/footer/Footer';
const Home = () => {
    const [titleSearch, setTitleSearch] = useState("");
    const pathName = window.location.pathname
    const handleChangeTitleSearch = (text) => {
        setTitleSearch(text)
    }
    return (
        <div className="home__container">
            <NavBarApp handleChangeTitleSearch={handleChangeTitleSearch} />
            <Outlet context={{ titleSearch }} />
            <Footer />
        </div>
    );
}

export default Home;