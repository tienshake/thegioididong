// import library
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom';
import Cookies from "js-cookie";

// import components
import AccessoryPage from './pages/accessoryPage/AccessoryPage';
import Admin from './admin/Admin'
import Home from './pages/home/Home';
import Phone from './pages/home/Phone';
import NotFound from './not-found/NotFound'
import UserManage from './admin/UserMange';
import UserList from './admin/UserList';
import Login from './login/Login';
import ProductManage from './admin/productManage';
export default function MyApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Phone />} />
            <Route path='phone' element={<Phone />} />
            <Route path='accessory' element={<AccessoryPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='/manage' element={<Admin />} >
            <Route index element={<UserManage />} />
            <Route path='create-user' element={<UserManage />} />
            <Route path='users' element={<UserList />} />
            <Route path='create-product' element={<ProductManage />} />
          </Route>
          <Route path='/login' element={<Login />} >

          </Route>
        </Routes>
      </Router>
    </>
  )
}
