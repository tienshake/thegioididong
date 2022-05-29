import React, { useState, useEffect } from 'react';
import { loginApi } from '../../services/userService';
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import './Login.scss';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                    placeholder="password" />
                onChange={(e) => setPassword(e.target.value)}
                <button
                // onClick={handleLogin}
                >Register</button>
                <p className="message">Go to<Link to={"/login"} >Login</Link></p>
            </div>
        </div>
    )
}

export default Register