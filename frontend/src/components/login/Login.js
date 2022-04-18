import './Login.scss';
import React, { useState, useEffect } from 'react';
import { loginApi } from '../../services/userService';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState('');
    const handleLogin = async (e) => {
        try {
            const res = await loginApi('tientrancntt@gmail.com', '123');

            if (res && res.errCode !== 0) {
                setErrMessage(res.errMessage);
            }
            if (res && res.errCode === 0) {
                Cookies.set('profile', JSON.stringify(res.user));
                Cookies.set('isLogin', true);
                navigate('/');
                window.location.reload();
            }
        } catch (e) {
            if (e.response) {
                setErrMessage(e.response.data.message);
                // console.log(e.response.data);
            }
            console.log('Error login form:', e);
        }
    };
    return (

        <div className="login-page">
            <div className="form">
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button
                    onClick={handleLogin}
                >login</button>
                <p className="message">Not registered? <a href="#">Create an account</a></p>
            </div>
        </div>
    );
}

export default Login;