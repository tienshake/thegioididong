// import library
import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
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
import { Carousel } from 'react-responsive-carousel';
const NavBarApp = (props) => {
    const navigate = useNavigate();
    // const [total, setTotal] = useState();
    // useEffect(() => {
    //     if (props.productsRedux && props.productsRedux.total) {
    //         setTotal(props.productsRedux.total)
    //     }
    // }, [props]);
    const handleClickLoginLogout = async (e) => {
        const profile = Cookies.get("profile");
        if (!profile) {
            navigate('/login');
        } else {
            Cookies.remove("profile");
        }

    };
    // console.log(total);

    return (
        <>
            <header>
                {/* <img className='img__top__nav' style={{ top: '0' }} src='https://cdn.tgdd.vn/2022/02/banner/1200-44-1200x44-12.png' alt='' /> */}
                <Carousel className="img__top__nav"
                    autoPlay={true}
                    showArrows={true}
                    infiniteLoop={true}
                    interval={5000}
                    stopOnHover={false}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                >
                    <div className="item-slidee">
                        <img src="https://cdn.tgdd.vn/2022/02/banner/1200-44-1200x44-12.png" alt='' />
                    </div>
                    <div className="item-slidee">
                        <img src="https://cdn.tgdd.vn/2022/03/banner/Ca%CC%81-tha%CC%81ng-4-top-bar---1200x44-1200x44.gif" alt='' />
                    </div>
                </Carousel>
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
                    <a href='http://localhost:3001/' className='note'>chưa responsive</a>

                    {/* search */}
                    <div className='wrap__search__nav'>
                        <input
                            onChange={(e) => props.handleChangeTitleSearch(e.target.value)}
                            placeholder='Bạn tìm gì...' />
                    </div>

                    {/* giỏ hàng */}

                    <Link style={{ textDecoration: 'none' }} to='gio-hang'>
                        <div className='wrap__cart'>
                            <p><FaShoppingCart style={{ fontSize: '20px' }} /></p>
                            <p>Giỏ hàng</p>
                            <p>2</p>
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
                            <p style={{ marginTop: '10px' }}
                                onClick={handleClickLoginLogout}
                            >Đăng nhập</p>
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
                                    <NavLink className="item__bar " to="/phone"><MdSmartphone style={{ fontSize: '20px', margin: 'auto' }} /><p>Điện Thoại</p></NavLink>
                                </li>

                                <li>
                                    <NavLink className="item__bar" to="/accessory"><IoIosHeadset style={{ fontSize: '20px', margin: 'auto' }} /> <p> Phụ kiện</p></NavLink>
                                </li>

                                <li>
                                    <NavLink className="item__bar" to="/sua-chua"><MdBuild style={{ fontSize: '20px', margin: 'auto' }} /> <p>Sữa chữa</p></NavLink>
                                </li>

                                <li>
                                    <NavLink className="item__bar" to="/news"><FaNewspaper style={{ fontSize: '20px', margin: 'auto' }} /><p>tin tức</p></NavLink>
                                </li>

                                <li>
                                    <NavLink className="item__bar" to="/tra-cuu"><FaCalendarCheck style={{ fontSize: '20px', margin: 'auto' }} /> <p>tra cứu</p></NavLink>
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
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        productsRedux: state.productsRedux
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarApp)
