import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Cart.scss';
import { AiOutlineLeft, AiFillCaretDown } from "react-icons/ai";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart, totalProduct } from '../../../store/actions/index';
import NumberFormat from 'react-number-format';
import { useNavigate } from "react-router-dom";
const Cart = (props) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    useEffect(() => {
        let ListCart = []
        let TotalCart = 0;
        const fetch = async () => {
            if (props.productsRedux
                && props.productsRedux.Carts
                && props.productsRedux.Carts.length > 0) {
                const Products = await props.productsRedux.Carts;
                Object.keys(Products).forEach(function (item) {
                    TotalCart += Products[item].quantity * Products[item].price;
                    ListCart.push(Products[item]);
                });

            }
            setProducts(ListCart);
            setTotalCart(TotalCart);
        }
        fetch()
    }, [props]);
    useEffect(() => {
        props.totalProduct(totalCart)
    }, [totalCart])
    const decreaseQuantity = (id) => {
        props.DecreaseQuantity(id)
    };
    const increaseQuantity = (id) => {
        props.IncreaseQuantity(id)
    };
    const DeleteCart = (id) => {
        props.DeleteCart(id)
    };
    return (
        <div className="cart-container">
            <div className='header__cart'>
                <span className="buy__add-product"
                    onClick={() => navigate('/')}
                ><AiOutlineLeft />Mua thêm sản phẩm khác</span>
                <span className="cart__title">Giỏ hàng của bạn</span>
            </div>
            <div className="middleCart">
                {products && products.length > 0 && products.map((item, i) => {
                    return (
                        <div className="product-item" key={i}>
                            <div className="image">
                                <img src={item.image} alt="" width="80" /><br></br>
                                <span
                                    onClick={() => DeleteCart(i)}
                                >Xóa</span>
                            </div>
                            <div className="heading">
                                <div className="headding_content1">
                                    <h1>{item.name} {item.rom} </h1>
                                    <span>
                                        <NumberFormat
                                            value={item.price}
                                            displayType="text"
                                            thousandSeparator={true}
                                        />₫
                                        <sup>₫</sup> </span>
                                </div>
                                <div className="cart__item-control">
                                    <label htmlFor="">5 khuyến mãi<AiFillCaretDown /></label>
                                    <div className="cart__item">
                                        <div className="cart__item-left">
                                            <label htmlFor="">màu {item.color}<AiFillCaretDown /></label>
                                        </div>
                                        <div className="cart__item-right">
                                            <div className="minus"
                                                onClick={() => decreaseQuantity(i)}
                                            >-</div>
                                            <span >{item.quantity}</span>
                                            <div className="plus"
                                                onClick={() => increaseQuantity(i)}
                                            >+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div className="price">
                    <p>Tạm tính (1 sản phẩm):</p>
                    <span> <NumberFormat
                        value={totalCart}
                        displayType="text"
                        thousandSeparator={true}
                    />₫</span>
                </div>
                <div className="info">
                    <div className="infor-customer">
                        <h4>Thông tin khách hàng</h4>
                        <form className="form-customer" action="">
                            <div className="sex-customer">
                                <input type="radio" />
                                <span>Anh</span>
                                <input type="radio" />
                                <span>Chị</span>
                            </div>
                            <div className="fillinform">
                                <div className="fillname">
                                    <input type="text" placeholder="Họ và tên" />

                                </div>
                                <div className="fillname phoneNumber">
                                    <input type="text" placeholder="Số điện thoại" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="choosegetgoods">
                        <h4>Chọn cách thức nhận hàng</h4>
                        <div className="click-choose">
                            <div className="choose-link current">
                                <div className="choose-link current">
                                    <input type="radio" />
                                    <p>Giao tận nơi</p>
                                </div>
                            </div>
                            <div className="choose-link">
                                <input type="radio" />
                                <p>Nhận tại siêu thị</p>
                            </div>
                        </div>
                    </div>
                    <div className="deli-address">
                        <form className="active" action="">
                            <h4>Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có) </h4>
                            <div className="cntry-district">
                                <div className="btn-click country">
                                    <input type="text" placeholder="Chọn Tỉnh thành" />
                                </div>
                                <div className="btn-click district">
                                    <input type="text" placeholder="Chọn Quận / Huyện" />
                                </div>
                            </div>
                            <div className="cntry-district">
                                <div className="btn-click country">
                                    <input type="text" placeholder="Chọn Phường / Xã" />
                                </div>
                                <div className="btn-click district">
                                    <input type="text" placeholder="Số nhà, tên đường" />
                                </div>
                            </div>


                        </form>
                    </div>
                    <div className="anotheroption">
                        <input className="leuleo" type="text" placeholder="Yêu cầu khác (không bắt buộc)" />
                        <div className="uline">
                            <div className="chexinfo">
                                <input type="checkbox" />
                                <p>Gọi người xác nhận khác (nếu có)</p>
                            </div>
                            <div className="chexinfo">
                                <input type="checkbox" />
                                <p>Chuyện danh bạn, dữ liệu qua máy mới</p>
                            </div>
                            <div className="chexinfo">
                                <input type="checkbox" />
                                <p>Xuất hóa đơn công ty</p>
                            </div>
                        </div>
                    </div>
                    <div className="finaltotal">
                        <div className="area-total">
                            <div className="discountcode"><span>Sử dụng mã giảm giá</span><span name="" id="">sun</span> </div>
                        </div>
                    </div>
                    <div className="footer__cart">
                        <div className="footer__cart-price">
                            <h3>Tổng tiền:</h3>
                            <strong>36.990.000</strong>
                        </div>
                        <button>Đặt hàng</button><br></br>
                        <span>Có thể chọn hình thức thanh toán sau khi đặt hàng</span>
                    </div>
                </div>
            </div>
        </div >
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        IncreaseQuantity: (payload) => {
            dispatch(IncreaseQuantity(payload))
        },
        DecreaseQuantity: (payload) => {
            dispatch(DecreaseQuantity(payload))
        },
        DeleteCart: (payload) => {
            dispatch(DeleteCart(payload))
        },
        totalProduct: (payload) => {
            dispatch(totalProduct(payload))
        },
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        productsRedux: state.productsRedux
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
