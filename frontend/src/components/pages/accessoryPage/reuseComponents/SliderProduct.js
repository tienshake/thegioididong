import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="btn-arrow-slider" onClick={onClick}><IoIosArrowForward className="btn-next-slider" /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="btn-arrow-slider" onClick={onClick}>< IoIosArrowBack className="btn-prev-slider" /></div>
    );
}

export default class SliderProduct extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div style={{marginTop:'5px'}}>
                <Slider className="box__slider__product" {...settings}>
                    <div className="wrap__item__slider">
                        <h3 className="item__slider">
                        <div className="card__product card">
                            <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                            </div>
                            <img src='https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg' className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                    <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                    <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                </div>

                                <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Truong</p>
                                <p style={{ height: '10px' }}>online giá rẻ</p>
                                <p><b>1000000</b></p>
                            </div>
                        </div>
                        </h3>
                    </div>

                    <div className="wrap__item__slider">
                        <h3 className="item__slider">
                        <div className="card__product card">
                            <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                            </div>
                            <img src='https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg' className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                    <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                    <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                </div>

                                <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Truong</p>
                                <p style={{ height: '10px' }}>online giá rẻ</p>
                                <p><b>1000000</b></p>
                            </div>
                        </div>
                        </h3>
                    </div>

                    <div className="wrap__item__slider">
                        <h3 className="item__slider">
                        <div className="card__product card">
                            <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                            </div>
                            <img src='https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg' className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                    <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                    <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                </div>

                                <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Truong</p>
                                <p style={{ height: '10px' }}>online giá rẻ</p>
                                <p><b>1000000</b></p>
                            </div>
                        </div>
                        </h3>
                    </div>

                    <div className="wrap__item__slider">
                        <h3 className="item__slider">
                        <div className="card__product card">
                            <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                            </div>
                            <img src='https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg' className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                    <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                    <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                </div>

                                <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Truong</p>
                                <p style={{ height: '10px' }}>online giá rẻ</p>
                                <p><b>1000000</b></p>
                            </div>
                        </div>
                        </h3>
                    </div>

                    <div className="wrap__item__slider">
                        <h3 className="item__slider">
                        <div className="card__product card">
                            <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                            </div>
                            <img src='https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg' className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                    <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                    <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                </div>

                                <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Truong</p>
                                <p style={{ height: '10px' }}>online giá rẻ</p>
                                <p><b>1000000</b></p>
                            </div>
                        </div>
                        </h3>
                    </div>

                    <div className="wrap__item__slider">
                        <h3 className="item__slider">
                        <div className="card__product card">
                            <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                            </div>
                            <img src='https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg' className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                    <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                    <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                </div>

                                <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Truong</p>
                                <p style={{ height: '10px' }}>online giá rẻ</p>
                                <p><b>1000000</b></p>
                            </div>
                        </div>
                        </h3>
                    </div>

                    <div className="wrap__item__slider">
                        <h3 className="item__slider">
                        <div className="card__product card">
                            <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                            </div>
                            <img src='https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg' className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                    <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                    <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                </div>

                                <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Truong</p>
                                <p style={{ height: '10px' }}>online giá rẻ</p>
                                <p><b>1000000</b></p>
                            </div>
                        </div>
                        </h3>
                    </div>

                    <div className="wrap__item__slider">
                        <h3 className="item__slider">
                        <div className="card__product card">
                            <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                            </div>
                            <img src='https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg' className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                    <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                    <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                </div>

                                <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Truong</p>
                                <p style={{ height: '10px' }}>online giá rẻ</p>
                                <p><b>1000000</b></p>
                            </div>
                        </div>
                        </h3>
                    </div>
                </Slider>
            </div>
        );
    }
}