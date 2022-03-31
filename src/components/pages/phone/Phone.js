
import './Phone.scss';
import {
    AiFillStar
} from "react-icons/ai";
import {
    IoIosAddCircleOutline
} from "react-icons/io";
import React, { useState } from 'react';


const Phone = () => {
    const [products, setProducts] = useState([1, 2, 3, 4, 5, 6]);
    return (
        <div className="phone__container">
            <div className="phone__banner"></div>
            <div className="phone__filter"></div>

            <div className="container phone__product">
                <div className="row phone__product-list">
                    {products && products.length > 0 && products.map((item, index) => {
                        return (<div className="col-md-3 phone__item" key={index}>
                            <div className="phone__installment">Trả góp 0%</div>

                            <div className="phone__img"
                                style={{
                                    backgroundImage: `url(${'https://cdn.tgdd.vn/Products/Images/42/235838/Galaxy-S22-Ultra-Burgundy-600x600.jpg'})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '3px'
                                }}
                            ></div>
                            <div className="item__content">
                                <p class="result-label temp2">
                                    <img
                                        width="20"
                                        height="20"
                                        class=" ls-is-cached lazyloaded"
                                        alt="Ưu đãi đến 4 Triệu"
                                        data-src="https://cdn.tgdd.vn/2020/10/content/icon2-50x50.png"
                                        src="https://cdn.tgdd.vn/2020/10/content/icon2-50x50.png" />
                                    <span>Ưu đãi đến 4 Triệu</span>
                                </p>
                                <div className="phone__name">Samsung Galaxy S22 Ultra 5G</div>
                                <div className="phone__rom"><span>8GB/128GB</span></div>
                                <div className="phone__price">30.990.000₫</div>
                                <div className="phone__gif">Quà 2.000.000₫</div>
                                <div className="phone__vote">
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star disabled' />
                                    <span>10</span>
                                </div>
                                <div className="phone__compare">
                                    <span><IoIosAddCircleOutline />So sánh</span>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
                <div className="product__add-more">
                    <button className="btn__add-more">Xem thêm 30 Sản phẩm</button>
                </div>
            </div>

            <div className="phone__filter"></div>
        </div>
    );
}

export default Phone;