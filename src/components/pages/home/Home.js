import {
    Outlet

} from 'react-router-dom';
import Admin from '../../admin/Admin';
import NavBarApp from "../../nav/NavBarApp";
import AccessoryPage from '../accessoryPage/AccessoryPage';
import './Home.scss';
import Phone from './Phone';

const Home = () => {
    return (
        <div className="home__container">
            <NavBarApp />
            <Outlet />
        </div>
    );
}

export default Home;