import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './DetailItem.scss';
import { AiFillStar, AiFillLike, AiOutlineDropbox } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
import '../detailItem/Detailtem.css';
import PromotionIfo from './PromotionIfo';
import { Carousel } from 'react-responsive-carousel';
import { getProductByIdService } from '../../../services/userService';
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
                        <span>
                            {product && product.typeData && product.typeData.valueVi} {product && product.manufacturerData && product.manufacturerData.valueVi}
                        </span>
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
                            interval={100000000}
                            stopOnHover={false}
                            showThumbs={true}
                            showStatus={false}
                            showIndicators={true}
                        >
                            <div className="item-slide">
                                <iframe
                                    width="1102"
                                    height="420"
                                    src="https://www.youtube.com/embed/XQMh9vPKTpg"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                >

                                </iframe>
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
                        {console.log(product)}
                        <div className="bottom">
                            {product && product.colorData && product.colorData.length > 0 && product.colorData.map((item, index) => {
                                return (
                                    <button key={index} className='btn active'>{item.color}</button>
                                )
                            })}

                        </div>
                    </div>
                    <div className="price">
                        <p>Giá tại <span>Đà Nẵng</span></p>
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
                            <p>Ưu đãi khi thanh toán</p>

                            <div style={{ display: 'flex' }}>
                                <div style={{ marginRight: '10px', background: 'pink' }} className='col'>
                                    <p>s</p>
                                    <p>Giảm 500.000đ</p>
                                    <p>Sản phẩm từ 5tr</p>
                                    <p>Mua ngay</p>
                                </div>

                                <div className='col'>
                                    <p>s</p>
                                    <p>Giảm 500.000đ</p>
                                    <p>Sản phẩm từ 5tr</p>
                                    <p>Mua ngay</p>
                                </div>
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