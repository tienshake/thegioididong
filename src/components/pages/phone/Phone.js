

import React, { useState, useEffect } from 'react';
import './Phone.scss';
import {
    AiFillStar
} from "react-icons/ai";
import {
    IoIosAddCircleOutline
} from "react-icons/io";
import { getAllProductHomeService } from '../../../services/userService';


const Phone = () => {
    const [products, setProducts] = useState([1, 2, 3, 4, 5, 6]);
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        const fetch = async (e) => {
            const res = await getAllProductHomeService(limit, 'PL1');
            if (res && res.errCode === 0) {
                setProducts(res.data)
            }
        };
        fetch()
    }, [limit]);

    const renderStar = (star) => {
        const length = star
        let result = []
        for (let i = 0; i < length; i++) {
            let data = <AiFillStar className='star' key={i} />
            result.push(data)

        }
        return result
    }
    const handleSetLimit = (e) => {
        if (limit <= products.length) {
            console.log('tang')
            setLimit((prev) => {
                return prev + 10
            })
        }

    };
    return (
        <div className="phone__container">
            <div className="phone__banner"></div>
            <div className="phone__filter"></div>
            <div className="container phone__product">
                <div className="row phone__product-list">
                    {products && products.length > 0 && products.map((item, index) => {
                        const star = 5
                        return (<div className="col-md-3 phone__item" key={index}>
                            <div className="phone__installment">Trả góp 0%</div>

                            <div className="phone__img"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '3px'
                                }}
                            ></div>
                            <div className="item__content">
                                <p className="result-label temp2">
                                    <img
                                        width="20"
                                        height="20"
                                        className=" ls-is-cached lazyloaded"
                                        alt="Ưu đãi đến 4 Triệu"
                                        data-src="https://cdn.tgdd.vn/2020/10/content/icon2-50x50.png"
                                        src="https://cdn.tgdd.vn/2020/10/content/icon2-50x50.png" />
                                    <span>Ưu đãi đến 4 Triệu</span>
                                </p>
                                <div className="phone__name">{item.nameItem}</div>
                                <div className="phone__rom"><span>{item.ram}/{item.rom}</span></div>
                                <div className="phone__price">{item.price}₫</div>
                                <div className="phone__gif">Quà 2.000.000₫</div>
                                <div className="phone__vote">
                                    {item.vote ? renderStar(star) : <span>Chưa có đánh giá</span>}
                                    {/* <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star disabled' /> */}
                                    {/* <span>10</span> */}
                                </div>
                                <div className="phone__compare">
                                    <span><IoIosAddCircleOutline />So sánh</span>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
                <div className="product__add-more">
                    <button
                        onClick={handleSetLimit}
                        className="btn__add-more"
                    >{limit <= products.length ? 'Xem thêm 10 Sản phẩm' : 'Không còn sản phẩm nào nữa'}</button>
                </div>
            </div>

            <div className="phone__filter"></div>
        </div>
    );
}

export default Phone;