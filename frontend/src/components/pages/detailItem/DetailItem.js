import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './DetailItem.scss';
import { AiFillStar, AiFillLike, AiOutlineDropbox } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
import '../detailItem/Detailtem.css';
import PromotionIfo from './PromotionIfo';
import GroupButtonBuy from './GroupButtonBuy';
<<<<<<< HEAD
import { getProductByIdService } from '../../../services/userService';
=======
import CardDiscount from './CardDiscount';

>>>>>>> abbb7ec93bc69f7d4acefa37ea64d362ab8afafd
import { Carousel } from 'react-responsive-carousel';
const DetailItem = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetch = async () => {
            const res = await getProductByIdService(id);
            if (res && res.errCode === 0) {
                setProduct(res.data)
            }
        }
        fetch()
    }, []);
    return (
        <div className="phone__detail-container">
            <div className="phone__detail-header">
                <div className="detail__header-top">
                    <div className="detail__header-link">
                        <span>{product && product.typeData && product.typeData.valueVi}</span>
                        /
                        <span>{product && product.typeData && product.typeData.valueVi} {product.nameItem}</span>
                    </div>
                </div>

                <div className="detail__header-bottom">
                    <div className="left">
                        <h5>{product && product.typeData && product.typeData.valueVi} {product.nameItem} {product.rom}</h5>
                        <span>
                            <AiFillStar className="star" />
                            <AiFillStar className="star" />
                            <AiFillStar className="star" />
                            <AiFillStar className="star" />
                            <AiFillStar className="star" />
                        </span>
                        <span className='vote'>10 Đánh giá</span>
                        <span className="ss"><IoIosAddCircleOutline />So sánh</span>
                    </div>


                    <div className="right">
                        <span><AiFillLike />Thích 1.5k</span>
                        <span>Chia sẻ</span>

                    </div>
                </div>
            </div>

            <p className='boundary__line'></p>

            <div className="phone__detail-product">
                <div className="phone__detail-product-left">
                    <div className="carousel">
                        <Carousel className="home-slide"
                            autoPlay={true}
                            showArrows={true}
                            infiniteLoop={true}
                            interval={2000}
                            stopOnHover={false}
                            showThumbs={true}
                            showStatus={false}
                            showIndicators={true}
                        >
                            <div className="item-slide">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/SamsungGalaxyS22ultraRAM8GBfixhz-1020x570.jpg" alt='' />
                            </div>
                            <div className="item-slide">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/2.ButSpen-1020x570.jpg" alt='' />
                            </div>
                            <div className="item-slide">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/3.Trainghiemthigiac-1020x570.jpg" alt='' />
                            </div>
                            <div className="item-slide">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/4.Vixulimanhme-1020x570.jpg" alt='' />
                            </div>
                            <div className="item-slide">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/5.Thietkebenbi-1020x570.jpg" alt='' />
                            </div>
                            <div className="item-slide">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/8.Matthanbongdem-1020x570.jpg" alt='' />
                            </div>

                        </Carousel>
                    </div>
                    <div className="view__more"><span>Xem tất cả điểm nổi bật</span><span>(7/9)</span></div>
                    <div className="policy">
                        <div className="policy__list">
                            <div className="policy__top">
                                <div className="policy__item">
                                    <MdOutlinePublishedWithChanges className='icon' />
                                    <p>Hư gì đổi nấy <b>12 tháng</b>  tại 3079 siêu thị toàn quốc (miễn phí tháng đầu) <a></a>
                                        <a >Xem chi tiết</a>
                                    </p>
                                </div>
                                <div className="policy__item">
                                    <BsShieldFillCheck className='icon' />
                                    <p>Hư gì đổi nấy <b>12 tháng</b>  tại 3079 siêu thị toàn quốc (miễn phí tháng đầu) <a></a>
                                        <a >Xem chi tiết</a>
                                    </p>
                                </div>

                            </div>
                            <div className="policy__bottom">
                                <div className="policy__item">
                                    <AiOutlineDropbox className='icon' />
                                    <p>Hư gì đổi nấy <b>12 tháng</b>  tại 3079 siêu thị toàn quốc (miễn phí tháng đầu) <a></a>
                                        <a >Xem chi tiết</a>
                                    </p>
                                </div>
                                <div className="policy__item">

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="phone__detail-product-right">
                    <div className="phone__detail-product-rom">
                        <div className="top">
                            <button className="btn active">{product.ram}/{product.rom}</button>
                        </div>
                        <div className="bottom">
                            {product && product.colorData && product.colorData.length > 0 && product.colorData.map((item, index) => {
                                return (
                                    <button key={index} className='btn active'>{item.color}</button>
                                )
                            })}

                        </div>
                    </div>
                    <div className="price">
                        <p>Giá tại <p> Đà Nẵng</p></p>
                        <span><h5>{product.price}₫</h5><span>trả góp 0%</span></span>
                    </div>

                    {/* promotion ifomation */}
                    <div className='wrap__promotion__info'>
                        <PromotionIfo />
                    </div>

                    <div className='container more__information'>
                        <div style={{ display: 'flex', height: '20px' }}>
                            <Link to='/ss'>
                                <p>Chọn địa chỉ gioa hàng</p>
                            </Link>
                            <p style={{ marginLeft: '8px' }}>để biết thời gian nào</p>
                        </div>

                        <div style={{ marginTop: '5px' }}>
                            <Link to='/ss'>
                                <p>Xem siêu thị có hàng</p>
                            </Link>
                        </div>


                    </div>
                    <p className='boundary__line'></p>

                    {/* payment */}

                    <div className='wrap__payment'>
                        <div className='all__box__payment'>
                            <p><b style={{ fontSize: '17px' }}>Ưu đãi khi thanh toán</b></p>

                            {/* card discount */}
                            <CardDiscount />

                            {/* buttton buy */}
                            <div className='wrap__btn__buyProduct'>
                                <GroupButtonBuy />
                            </div>

                            {/* extra offer */}
                            <div className='wrap__extra__offer'>
                                <div className='box__extra__offer'>
                                    <div className='container header__extra__offer'>
                                        <div style={{ display: 'flex' }}><p style={{ margin: 'auto', marginTop: '8px' }}>5 ưu đãi thêm Dự kiến áp dụng đến 23:00 30/04</p></div>
                                    </div>

                                    <div className='container body__extra__offer'>
                                        <div className='row'>
                                            <p className='col-xl-1'>1</p>
                                            <div className='col content__extra__offer'>
                                                <p className='item'>Tặng cho khách lần đầu mua hàng online tại web BachhoaXANH.com</p>
                                                <p>Mã giảm 20% tối đa 100.000đ</p>
                                                <p>Mã giảm 20% tối đa 100.000đ</p>
                                                <p>Áp dụng tại Tp.HCM và 1 số khu vực, 1 SĐT nhận 1 lần (Xem chi tiết)</p>
                                            </div>

                                            <div className='row'>
                                                <p className='col-xl-1'>1</p>
                                                <div className='col content__extra__offer'>
                                                    <p className='item'>
                                                        Tặng suất mua xe đạp Giảm đến 30% (không kèm KM khác) (click xem chi tiết)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

<<<<<<< HEAD
                                        <div className='load-more-offer'>
                                            <p>
                                                <Link style={{ textDecoration: 'none' }} to='load-more-offer'>
=======
                                        <div style={{ display: 'flex', marginBottom: '18px' }}>
                                            <p style={{ margin: 'auto' }}>
                                                <Link to='load-more-offer' style={{ textDecoration: 'none' }}>
>>>>>>> abbb7ec93bc69f7d4acefa37ea64d362ab8afafd
                                                    Xem thêm 3 ưu đãi khác
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cấu hình phone */}
                            <div className='wrap__configuration'>
                                <div className='title__configuration'><p><h5>Cấu hình điện thoại iPhone 13 Pro Max 128GB</h5></p></div>

                                <div className='body__configuration'>
                                    <div className='row item__configuration'>
                                        <div style={{background:'#F5F5F5'}} className='col-xl-5'><p>Màn hình:</p></div>
                                        <div style={{background:'#F5F5F5'}} className='col-xl-7'><p>OLED6.7"Super Retina XDR</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div className='col-xl-5'><p>Hệ điều hành:</p></div>
                                        <div className='col-xl-7'><p>iOS 15</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div style={{background:'#F5F5F5'}} className='col-xl-5'><p>Camera sau:</p></div>
                                        <div style={{background:'#F5F5F5'}} className='col-xl-7'><p>3 camera 12 MP</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div className='col-xl-5'><p>Camera trước:</p></div>
                                        <div className='col-xl-7'><p>2 MP</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div style={{background:'#F5F5F5'}} className='col-xl-5'><p>Chip:</p></div>
                                        <div style={{background:'#F5F5F5'}} className='col-xl-7'><p>Apple A15 Bionic</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div className='col-xl-5'><p>RAM:</p></div>
                                        <div className='col-xl-7'><p>6 GB</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div style={{background:'#F5F5F5'}} className='col-xl-5'><p>Bộ nhớ trong:</p></div>
                                        <div style={{background:'#F5F5F5'}} className='col-xl-7'><p>128 GB</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div className='col-xl-5'><p>SIM:</p></div>
                                        <div className='col-xl-7'><p>1 Nano SIM & 1 eSIMHỗ trợ 5G</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div style={{background:'#F5F5F5'}} className='col-xl-5'><p>Pin, Sạc:</p></div>
                                        <div style={{background:'#F5F5F5'}} className='col-xl-7'><p>4352 mAh20 W</p></div>
                                    </div>
                                </div>
                                
                                <div style={{marginTop:'10px'}}>Hướng dãn sử dụng tiếng anh [PDF, 0.2MB]</div>
                            </div>

                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
            <div className='spacer'></div>
        </div>
    );
}

export default DetailItem;