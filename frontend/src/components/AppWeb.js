// import library
import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom';
import Cookies from "js-cookie";
import React, { useState, useEffect } from 'react';

// import components
import AccessoryPage from './pages/accessoryPage/AccessoryPage';
import Admin from './admin/Admin'
import Home from './pages/home/Home';
import Phone from './pages/phone/Phone';
import NotFound from './not-found/NotFound'
import UserManage from './admin/UserMange';
import UserList from './admin/UserList';
import Login from './login/Login';
import ProductManage from './admin/productManage';
import DetailItem from './pages/detailItem/DetailItem';
import PostProduct from './admin/PostProduct';
import Cart from './pages/cart/Cart';


export default function MyApp() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const userCookie = Cookies.get("profile");
    if (userCookie) {
      setUser(JSON.parse(userCookie))
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Phone />} />
            <Route path='phone' element={<Phone />} />
            <Route path='phone/:name/:id' element={<DetailItem />} />
            <Route path='accessory' element={<AccessoryPage />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          {user &&
            <Route path='/manage' element={<Admin />} >
              <Route index element={<UserManage />} />
              <Route path='create-user' element={<UserManage />} />
              <Route path='users' element={<UserList type={'users'} />} />
              <Route path='create-product' element={<ProductManage />} />
              <Route path='products' element={<UserList type={'products'} />} />
              <Route path='creat-post-product' element={<PostProduct />} />
            </Route>
          }
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}
