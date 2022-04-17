import './Login.scss';
import React, { useState, useEffect } from 'react';
import { loginApi } from '../../services/userService';
const Login = () => {

    const handleLogin = (e) => {
        const res = loginApi('tientrancntt@gmail.com', '123')
        if (res && res.errCode === 0) {
            console.log(res);
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