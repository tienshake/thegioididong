import {
    Link,
    Outlet,
} from 'react-router-dom';
import {
    FaRegBell,
    FaUsers
} from "react-icons/fa";
import './Admin.scss';
import { IoAppsOutline, IoPhonePortraitOutline, IoCreate } from "react-icons/io5";
import { AiFillMail, AiOutlineUser, AiOutlineFileSync, AiOutlineUpload } from "react-icons/ai";
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
                }
                if (type === "CREATE-PRODUCT") {
                    res = await createProductService(data);
                    console.log('color', colors);
                    if (res && res.errCode === 0) {
                        if (colors && colors.length > 0) {
                            let result = []
                            colors.forEach(item => {
                                let object = {};
                                object.productId = res.test
                                object.color = item.keyMap
                                result.push(object);
                            })
                            const color = await createColorProductService(result);
                            console.log('data result', result);
                        } else {
                            alert("Invalid select time!")
                        }
                        if (imageMultiple && imageMultiple.length > 0) {
                            let result = []
                            imageMultiple.forEach(item => {
                                let object = {};
                                object.productId = res.test
                                object.image = item.avatar
                                result.push(object);
                            })
                            const color = await createImgDetailProductService(result);
                            console.log('data result', result);
                        } else {
                            alert("Invalid select time!")
                        }
                    }
                }
                if (res && res.errCode === 0) {
                    alert("Bạn đã tạo thành công");
                    console.log(res);
                } else {
                    alert("Bạn đã thất bại")
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
                    <Link className="link" to="create-user"><li> <AiOutlineUser /><span>Tạo người dùng</span></li></Link>
                    <Link className="link" to="users"><li> <FaUsers /><span>Danh sách người dùng</span></li></Link>
                    <h4>Sản phẩm</h4>
                    <Link className="link" to="create-product"><li> <IoCreate /><span>Tạo sản phẩm</span></li></Link>
                    <li><IoCreate /><span>Chi tiết sản phẩm</span></li>
                    <li><IoPhonePortraitOutline /><span>Sản phẩm</span></li>
                    <li><IoPhonePortraitOutline /><span>khuyến mãi tặng kèm</span></li>
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