import React, { useEffect, useState } from 'react'
import './Oder.scss';
import { getOderById, getProductByIdService } from '../../../services/userService';
import Cookies from "js-cookie";
import { map } from 'lodash';
import NumberFormat from 'react-number-format';
const Oder = () => {
    const [oders, setOders] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const profileCookie = Cookies.get("profile");
        let user = {}
        if (profileCookie) {
            user = JSON.parse(profileCookie)
        }
        if (user && user.id) {
            const fetch = async (e) => {
                const res = await getOderById(user.id)
                if (res && res.errCode === 0) {
                    setOders(res.data)
                    if (res.data.ProductOders && res.data.ProductOders.length > 0) {
                        res.data.ProductOders.map((async (item) => {
                            const res = await getProductByIdService(item.productId)
                            if (res && res.errCode === 0) {
                                setProducts(oldArray => [...oldArray, res.data]);
                            }
                        }))

                    }
                }
            };
            fetch()
        }
    }, []);
    return (
        <div className="oder-container">
            <div className="container oder__content">
                <div className="row">
                    <div className="header col-12 ">
                        <h4>
                            <b>Thông tin sản phẩm đã oder</b>
                        </h4>
                    </div>
                </div>
                <div className="row oder__list">
                    {oders &&
                        <div className='list-info col-6'>
                            <h5><b>Thông tin người dùng:</b></h5>
                            <div className='info-oder'><b>Tên:</b> {oders?.name}</div>
                            <div className='info-oder'><b>Email:</b> {oders?.email}</div>
                            <div className='info-oder'><b>Số điện thoại:</b> {oders?.phoneNumber}</div>
                            <div className='info-oder'><b>Tỉnh thành:</b> {oders?.provincial}</div>
                            <div className='info-oder'><b>Quận huyện:</b> {oders?.district}</div>
                            <div className='info-oder'><b>Phường:</b> {oders?.wards}</div>
                            <div className='info-oder'><b>Tên đường:</b> {oders?.streetName}</div>
                            <div className='info-oder'><b>Số lượng sản phẩm:</b> {oders?.quantity}</div>
                            <div className='info-oder'><b>Tổng giá sản phẩm:</b>
                                <span
                                    style={{
                                        color: "red"
                                    }}
                                >
                                    <NumberFormat
                                        value={oders?.sumPrice}
                                        displayType="text"
                                        thousandSeparator={true}
                                    />₫
                                </span>
                            </div>
                            <div className='info-oder'><b>Ghi chú:</b> {oders.note ? oders?.note : "null"}</div>
                        </div>
                    }
                    <div className='list-info col-6'>
                        <h5><b>Thông tin sản phẩm:</b></h5>
                        {products && products.length > 0 && products.map((item, i) => {
                            return (
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px"
                                }}>
                                    <div className='info-oder'><b>Tên:</b> {item?.nameItem}</div>
                                    <img src={item?.image}
                                        style={{
                                            height: "100px",
                                            width: "100px"
                                        }}
                                    />
                                    <div className='info-oder'><b>Giá:</b>
                                        <span
                                            style={{
                                                color: "red"
                                            }}
                                        >
                                            <NumberFormat
                                                value={item?.price}
                                                displayType="text"
                                                thousandSeparator={true}
                                            />₫
                                        </span>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Oder

