import './Login.scss';
import React, { useState, useEffect } from 'react';
import { loginApi } from '../../services/userService';
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (e) => {
        try {
            const res = await loginApi("tientrancntt@gmail.com", '123');
            if (res && res.errCode !== 0) {
                setErrMessage(res.errMessage);
                console.log(errMessage);

            }
            if (res && res.errCode === 0) {
                // console.log(JSON.stringify(res.user));
                delete res.user.image;
                Cookies.set('profile', JSON.stringify(res.user));
                Cookies.set('isLogin', true);
                navigate('/');
                // window.location.reload();
            }
        } catch (e) {
            if (e.response) {
                setErrMessage(e.response.data.message);
            }
            console.log('Error login form:', e);
        }
    };
    return (

        <div className="login-page">
            <div className="form">
                <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className='errMessage'>{errMessage}</p>
                <button
                    onClick={handleLogin}
                >
                    Login
                </button>
                {/* <p className="message">Not registered? <Link to={"/register"} >Create an account</Link></p> */}
            </div>
        </div>
    );
}

export default Login;