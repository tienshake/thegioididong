import {
    Outlet
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBarApp from "../../nav/NavBarApp";
import './Home.scss';
const Home = () => {
    const [titleSearch, setTitleSearch] = useState("");
    const handleChangeTitleSearch = (text) => {
        setTitleSearch(text)
        console.log(titleSearch)
    }
    return (
        <div className="home__container">
            <NavBarApp handleChangeTitleSearch={handleChangeTitleSearch} />
            <Outlet context={{ titleSearch }} />
        </div>
    );
}

export default Home;