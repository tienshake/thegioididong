import { Link, useParams } from 'react-router-dom';
import './DetailItem.scss';
import {
    AiFillStar,
    AiFillLike,
    AiOutlineDropbox
} from "react-icons/ai";
import {
    IoIosAddCircleOutline
} from "react-icons/io";
import {
    MdOutlinePublishedWithChanges
} from "react-icons/md";
import {
    BsShieldFillCheck
} from "react-icons/bs";
import '../detailItem/Detailtem.css';
import PromotionIfo from './PromotionIfo';
import GroupButtonBuy from './GroupButtonBuy';
import CardDiscount from './CardDiscount';
import ExtraOffer from './ExtraOffer';

import { Carousel } from 'react-responsive-carousel';
const DetailItem = () => {
    const { id } = useParams()
    console.log(id);
    return (
        <div className="phone__detail-container">
            <div className="phone__detail-header">
                <div className="detail__header-top">
                    <div className="detail__header-link">
                        <span>Điện thoại</span>/<span>Điện thoại Samsung</span>
                    </div>
                </div>

                <div className="detail__header-bottom">
                    <div className="left">
                        <h5>Điện thoại Samsung Galaxy S22 Ultra 5G 128GB </h5>
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
                            <button className="btn active">8GB/128GB</button>
                        </div>
                        <div className="bottom">
                            <button className='active'>Đỏ</button>
                            <button>Xanh lá</button>
                            <button>Trắng</button>
                            <button>Đen</button>
                        </div>
                    </div>
                    <div className="price">
                        <p>Giá tại <p> Đà Nẵng</p></p>
                        <span><h5>16.290.000₫</h5><span>trả góp 0%</span></span>
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
                                <ExtraOffer />
                            </div>

                            {/* Cấu hình phone */}
                            <div className='wrap__configuration'>
                                <div className='title__configuration'><p><h5>Cấu hình điện thoại iPhone 13 Pro Max 128GB</h5></p></div>

                                <div className='body__configuration'>
                                    <div className='row item__configuration'>
                                        <div style={{ background: '#F5F5F5' }} className='col-xl-5'><p>Màn hình:</p></div>
                                        <div style={{ background: '#F5F5F5' }} className='col-xl-7'><p>OLED6.7"Super Retina XDR</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div className='col-xl-5'><p>Hệ điều hành:</p></div>
                                        <div className='col-xl-7'><p>iOS 15</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div style={{ background: '#F5F5F5' }} className='col-xl-5'><p>Camera sau:</p></div>
                                        <div style={{ background: '#F5F5F5' }} className='col-xl-7'><p>3 camera 12 MP</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div className='col-xl-5'><p>Camera trước:</p></div>
                                        <div className='col-xl-7'><p>2 MP</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div style={{ background: '#F5F5F5' }} className='col-xl-5'><p>Chip:</p></div>
                                        <div style={{ background: '#F5F5F5' }} className='col-xl-7'><p>Apple A15 Bionic</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div className='col-xl-5'><p>RAM:</p></div>
                                        <div className='col-xl-7'><p>6 GB</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div style={{ background: '#F5F5F5' }} className='col-xl-5'><p>Bộ nhớ trong:</p></div>
                                        <div style={{ background: '#F5F5F5' }} className='col-xl-7'><p>128 GB</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div className='col-xl-5'><p>SIM:</p></div>
                                        <div className='col-xl-7'><p>1 Nano SIM & 1 eSIMHỗ trợ 5G</p></div>
                                    </div>

                                    <div className='row item__configuration'>
                                        <div style={{ background: '#F5F5F5' }} className='col-xl-5'><p>Pin, Sạc:</p></div>
                                        <div style={{ background: '#F5F5F5' }} className='col-xl-7'><p>4352 mAh20 W</p></div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '10px' }}>Hướng dãn sử dụng tiếng anh [PDF, 0.2MB]</div>


                                <div className='container wrap-loadMore-configuration'>
                                    <div className='button-loadMore-configuration'>
                                        <p>Xem thêm cấu hình chi tiết</p>
                                    </div>
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