import React, { useState, useEffect } from 'react';
import { loginApi, register } from '../../services/userService';
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import './Login.scss';
import { alert } from 'react-bootstrap-confirmation';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');

    const handleLogin = async () => {
        const res = await register({
            name,
            gender,
            address,
            phoneNumber,
            email,
            password,
            roleId: "R2"
        })
        if (res && res.errCode === 0) {
            alert("Bạn đã tạo tài khoản thành công ")
        } else {
            alert("Bạn đã tạo tài khoản thất bại")
        }

    };
    return (
        <div className="login-page register">
            <div className="form">
                <label>Tên người dùng</label>
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingBottom: "20px"
                    }}
                >
                    <label className="manage__content-label">Giới tính</label>
                    <select
                        style={{
                            backgroundColor: "#f2f2f2",
                            color: "rgba(65, 65, 65, 0.8)",
                            outline: "none"
                            // height: "50px"
                        }}
                        onChange={(e) => setGender(e.target.value)}
                        className="">
                        <option value="Male">Nam </option>
                        <option value="Female">Nữ</option>
                    </select>
                </div>
                <label>Email</label>
                <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Mật khẩu</label>
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Địa chỉ</label>
                <input
                    type="text"
                    placeholder="address"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label>Số điện thoại</label>
                <input
                    type="text"
                    placeholder="phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                >Register</button>
                <p className="message">Go to<Link to={"/login"} >Login</Link></p>
            </div>
        </div>
    )
}

export default Register