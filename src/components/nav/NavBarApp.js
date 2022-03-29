// import library
import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaShoppingCart,
    FaNewspaper,
    FaCalendarCheck,
} from "react-icons/fa";
import {
    MdSmartphone,
    MdBuild,
} from "react-icons/md";
import { IoIosHeadset } from "react-icons/io";
import './NavBarApp.css';

export default function NavBarApp(props) {
    return (
        <>

            <header>
                <img className='img__top__nav' style={{ top: '0' }} src='https://cdn.tgdd.vn/2022/02/banner/1200-44-1200x44-12.png' alt='' />

                <div className='toolbar__top'>
                    <div style={{ width: "10%", height: '80px' }}></div>

                    {/* LOGO Nav */}
                    <div style={{ width: '100px' }}>
                        <Link to='/'>
                            <img style={{ width: '95%' }} src='https://rubee.com.vn/admin/webroot/upload/image//images/logo-the-gioi-di-dong-2.jpg' alt='' />
                        </Link>
                    </div>

                    <div style={{ width: "1%", height: '80px' }}></div>

                    <p style={{ width: '152px', fontSize: '12px', color: '#fff', fontWeight: '500' }}>
                        Xem giá, khuyễn mãi tại<br />
                        <span style={{ color: "yellow" }}>Hồ Chí Minh</span>
                    </p>
                    <a href='' className='note'>chưa responsive</a>

                    {/* search */}
                    <div className='wrap__search__nav'>
                        <input placeholder='Bạn tìm gì...' />
                    </div>

                    {/* giỏ hàng */}

                    <Link style={{ textDecoration: 'none' }} to='gio-hang'>
                        <div className='wrap__cart'>
                            <p><FaShoppingCart style={{ fontSize: '20px' }} /></p>
                            <p>Giỏ hàng</p>
                        </div>
                    </Link>

                    {/* lịch sử đơn hàng menu */}
                    <div className='service__nav'>
                        <Link style={{ textDecoration: 'none' }} to='/lich-su-bill'>
                            <p>
                                Lịch sử<br />đơn hàng
                            </p>
                        </Link>
                    </div>

                    {/* service menu */}
                    <div style={{ width: '200px', fontSize: '12px', fontWeight: '500', color: 'yellow' }}>
                        <p style={{ lineHeight: '14px', marginTop: '3px' }}>
                            Viettel trả sau đến hạn  thanh<br /> toán. Mua thẻ nạp ngay!
                        </p>
                    </div>

                    <div className='service__nav'>
                        <Link style={{ textDecoration: 'none' }} to='/24h-congnghe'>
                            <p>
                                24h <br /> Công nghệ
                            </p>
                        </Link>
                    </div>

                    <div className='service__nav'>
                        <Link style={{ textDecoration: 'none' }} to='/hoi-app'>
                            <p style={{ marginTop: '10px' }}>Hỏi Đáp</p>
                        </Link>
                    </div>

                    <div className='service__nav'>
                        <Link style={{ textDecoration: 'none' }} to='/manage'>
                            <p style={{ marginTop: '10px' }}>Manage</p>
                        </Link>
                    </div>
                    <div className='service__nav'>
                        <Link style={{ textDecoration: 'none' }} to='/login'>
                            <p style={{ marginTop: '10px' }}>Đăng nhập</p>
                        </Link>
                    </div>
                    {/* spacer */}
                    <div style={{ width: "10%", height: '80px' }}></div>
                </div>


                <div className='toolbar'>
                    <nav className="toolbar__navigation">

                        <div className="spacer"></div>


                        <div className="toolbar__navigation-items">
                            <ul>
                                <li>
                                    <Link className="item__bar" to="/phone"><MdSmartphone style={{ fontSize: '20px', margin: 'auto' }} /><p>Điện Thoại</p></Link>
                                </li>

                                <li>
                                    <Link className="item__bar" to="/accessory"><IoIosHeadset style={{ fontSize: '20px', margin: 'auto' }} /> <p> Phụ kiện</p></Link>
                                </li>

                                <li>
                                    <Link className="item__bar" to="/sua-chua"><MdBuild style={{ fontSize: '20px', margin: 'auto' }} /> <p>Sữa chữa</p></Link>
                                </li>

                                <li>
                                    <Link className="item__bar" to="/news"><FaNewspaper style={{ fontSize: '20px', margin: 'auto' }} /><p>tin tức</p></Link>
                                </li>

                                <li>
                                    <Link className="item__bar" to="/tra-cuu"><FaCalendarCheck style={{ fontSize: '20px', margin: 'auto' }} /> <p>tra cứu</p></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="spacer"></div>
                    </nav>
                </div>
            </header>
        </>
    )
}
