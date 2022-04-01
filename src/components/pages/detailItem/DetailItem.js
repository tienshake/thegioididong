import { useParams } from 'react-router-dom';
import './DetailItem.scss';
import {
    AiFillStar,
    AiFillLike
} from "react-icons/ai";
import {
    IoIosAddCircleOutline
} from "react-icons/io";
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
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/SamsungGalaxyS22ultraRAM8GBfixhz-1020x570.jpg" />
                            </div>
                            <div className="item-slide">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/2.ButSpen-1020x570.jpg" />
                            </div>
                            <div className="item-slide">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/3.Trainghiemthigiac-1020x570.jpg" />
                            </div>
                            <div className="item-slide">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/4.Vixulimanhme-1020x570.jpg" />
                            </div>
                            <div className="item-slide">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/5.Thietkebenbi-1020x570.jpg" />
                            </div>
                            <div className="item-slide">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/235838/Slider/8.Matthanbongdem-1020x570.jpg" />
                            </div>

                        </Carousel>
                    </div>
                    <div className="view__more"><span>Xem tất cả điểm nổi bật</span><span>(7/9)</span></div>
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
                </div>


            </div>
        </div>
    );
}

export default DetailItem;