import {
    Link,
    Outlet,
    NavLink
} from 'react-router-dom';
import {
    FaRegBell,
    FaUsers,
    FaRegListAlt
} from "react-icons/fa";
import {
    BsFillFileEarmarkPostFill,
    BsGift
} from "react-icons/bs";

import './Admin.scss';
import { IoAppsOutline, IoPhonePortraitOutline, IoCreate } from "react-icons/io5";
import { AiFillMail, AiOutlineUser, AiOutlineFileSync } from "react-icons/ai";
import React, { useState, useEffect } from 'react';
import { createUserService, createColorProductService, createProductService, createImgDetailProductService } from '../../services/userService';
import { alert } from 'react-bootstrap-confirmation';
import { confirm } from 'react-bootstrap-confirmation';

const Admin = (props) => {
    const createToAdmin = async (data, type, colors, imageMultiple) => {
        try {
            const isConfirm = await confirm("Bạn có muốn tạo không?");
            if (isConfirm) {
                let res = '';
                if (type === "CREATE-USER") {
                    res = await createUserService(data);
                    if (res && res.errCode === 0) {
                        alert("Bạn đã tạo người dùng thành công");
                    } else {
                        alert("Bạn đã tạo người dùng thất bại")
                    }
                }
                if (type === "CREATE-PRODUCT") {
                    res = await createProductService(data);
                    if (res && res.errCode === 0) {
                        if (colors && colors.length > 0) {
                            let result = []
                            colors.forEach(item => {
                                let object = {};
                                object.productId = res.test
                                object.color = item.keyMap
                                result.push(object);
                            })
                            await createColorProductService(result);
                        } else {
                            alert("Missing parameters colors!")
                        }
                        if (imageMultiple && imageMultiple.length > 0) {
                            let result = []
                            imageMultiple.forEach(item => {
                                let object = {};
                                object.productId = res.test
                                object.image = item.avatar
                                result.push(object);
                            })
                            await createImgDetailProductService(result);
                        } else {
                            alert("Missing parameters imageMultiple!")
                        }
                    }
                    if (res && res.errCode === 0) {
                        alert("Bạn đã tạo sản phẩm thành công");
                    } else {
                        alert("Bạn đã tạo sản phẩm thất bại")
                    }
                }

            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="manage__container">
            <div className="manage__nav">
                <div className="dashboard__header">Dashboard</div>
                <ul className='manage__nav-list'>
                    <h4>Người dùng</h4>
                    <NavLink className="link" to="create-user">
                        <li className="linkk"> <AiOutlineUser /><span>Tạo người dùng</span></li>
                    </NavLink>
                    <NavLink className="link" to="users">
                        <li className="linkk"> <FaUsers /><span>Danh sách người dùng</span></li>
                    </NavLink>
                    <h4>Sản phẩm</h4>
                    <NavLink className="link" to="create-product">
                        <li className="linkk"> <IoCreate /><span>Tạo sản phẩm</span></li>
                    </NavLink>
                    <NavLink className="link" to="products">
                        <li className="linkk"> <FaRegListAlt /><span>Danh sách sản phẩm</span></li>
                    </NavLink>
                    <NavLink className="link" to="creat-post-product">
                        <li className="linkk"> <BsFillFileEarmarkPostFill /><span>Tạo bài đăng sản phẩm</span></li>
                    </NavLink>
                    <li><BsGift /><span>khuyến mãi tặng kèm</span></li>
                    <li><AiOutlineFileSync /><span>Đơn hàng</span></li>
                </ul>
            </div>
            <div className="manage__body">
                <div className="manage__header">
                    <div className="manage__header-top">
                        <ul className="manage__header-top-left">
                            <li><Link className="link" to="/">Trang chủ</Link></li>
                            <li>User</li>
                            <li>Settings</li>
                        </ul>
                        <ul className="manage__header-top-right">
                            <li> <FaRegBell /></li>
                            <li><IoAppsOutline /></li>
                            <li><AiFillMail /></li>
                            <li>
                                <div className="avatar"
                                    style={{
                                        backgroundImage: "url(" + "https://anhdep123.com/wp-content/uploads/2021/02/anh-avatar-hai-huoc.jpg" + ")",
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                ></div>
                            </li>
                        </ul>
                    </div>
                    <div className="manage__header-bottom">
                    </div>

                </div>
                <div className="manage__content">
                    <div className="manage__content-center">
                        <Outlet context={{ createToAdmin }} />
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Admin;