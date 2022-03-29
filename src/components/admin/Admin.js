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
import UserManage from './UserMange';
import React, { useState, useEffect } from 'react';
import { createUserService, getAllUCodeService, } from '../../services/userService';
import { alert } from 'react-bootstrap-confirmation';
import { confirm } from 'react-bootstrap-confirmation';

const Admin = (props) => {

    const createUser = async (data) => {
        try {
            const isValid = await confirm("Bạn có muốn tạo người dùng này không?")
            if (isValid) {
                const res = await createUserService(data);
                console.log(res);
                if (res && res.errCode === 0) {
                    console.log(res);
                    alert("Bạn đã tạo thành công")
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
                        <Outlet context={{ createUser }} />
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Admin;