import {
    Outlet
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBarApp from "../../nav/NavBarApp";
import './Home.scss';
import Footer from '../../footer/Footer';
const Home = () => {
    const [titleSearch, setTitleSearch] = useState("");
    const handleChangeTitleSearch = (text) => {
        setTitleSearch(text)
        console.log(titleSearch)
    }
    return (
        <div className="home__container">
            <img className="home__sticked home__sticked--left" src="https://cdn.tgdd.vn/2022/03/banner/Trai1-80x275-1.png" alt="" />
            <img className="home__sticked home__sticked--right" src="https://cdn.tgdd.vn/2022/03/banner/Phai-80x275-1.png" alt="" />
            <NavBarApp handleChangeTitleSearch={handleChangeTitleSearch} />
            <Outlet context={{ titleSearch }} />
            <Footer />
        </div>
    );
}

export default Home;