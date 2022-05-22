import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Cart.scss';
import { AiOutlineLeft, AiFillCaretDown } from "react-icons/ai";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart, totalProduct } from '../../../store/actions/index';
import NumberFormat from 'react-number-format';
import { useNavigate } from "react-router-dom";
import { getAllUCodeService, createOder } from '../../../services/userService';
import { alert, confirm } from 'react-bootstrap-confirmation';
const Cart = (props) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [dataOderProduct, setDataOderProduct] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [provincial, setProvincial] = useState('');
    const [district, setDistrict] = useState('');
    const [wards, setWards] = useState('');
    const [streetName, setStreetName] = useState('');
    const [note, setNote] = useState('');
    //=====================
    const [genderSelect, setGenderSelect] = useState('');

    const fetchAllCode = async (e) => {
        const resGender = await getAllUCodeService('GENDER');
        if (resGender && resGender.errCode === 0) {
            setGenderSelect(resGender.data)
        }
    };
    useEffect(() => {
        let ListCart = []
        let TotalCart = 0;
        let dataOder = []
        const fetch = async () => {
            if (props.productsRedux
                && props.productsRedux.Carts
                && props.productsRedux.Carts.length > 0) {
                const Products = await props.productsRedux.Carts;
                Object.keys(Products).forEach(function (item) {
                    const object = {}
                    TotalCart += Products[item].quantity * Products[item].price;
                    object.quantity = Products[item].quantity
                    object.productId = Products[item].id
                    object.color = Products[item].color
                    dataOder.push(object);
                    ListCart.push(Products[item]);
                });

            }
            setProducts(ListCart);
            setTotalCart(TotalCart);
            setDataOderProduct(dataOder)
        }
        fetch()
        fetchAllCode()
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
    const validateOder = (inputData) => {
        const dataOderArr = [
            'gender',
            'name',
            'email',
            'phoneNumber',
            'provincial',
            'district',
            'wards',
            'streetName',
            'quantity',
            'sumPrice',
            'state'
        ]
        let isValid = true;
        let element = '';
        for (let i = 0; i < dataOderArr.length; i++) {
            if (!inputData[dataOderArr[i]]) {
                isValid = false;
                element = dataOderArr[i];
                break;
            }
        }
        return {
            isValid,
            element
        };




    };
    const handleBuyProduct = async (e) => {
        const sum = dataOderProduct.reduce((prev, curr) => {
            return prev + curr.quantity
        }, 0)
        const dataOder = {
            gender,
            name,
            email,
            phoneNumber,
            provincial,
            district,
            wards,
            streetName,
            note,
            state: 1,
            quantity: sum,
            sumPrice: totalCart,
        }
        const checkObject = await validateOder(dataOder);
        if (checkObject.isValid === false) {
            alert(`Bạn nhật thiếu ${checkObject.element}`)

        } else {
            const isConfirm = await confirm("Bạn có muốn thực hiện thanh toán không?");
            if (isConfirm) {
                const res = await createOder(dataOder, dataOderProduct)
                if (res && res.errCode === 0) {
                    alert('thanh cong')
                    navigate(`/oder`)
                } else {
                    alert('that bai')
                }

            }
        }


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
                    let isQuantityPlus = item.quantity == item.quantityItem ? false : true;
                    let isQuantityMinus = item.quantity === 1 ? false : true;
                    let colorPlus = isQuantityPlus ? `#4691d7` : `#cccccc`
                    let colorMinus = isQuantityMinus ? `#4691d7` : `#cccccc`
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
                                                style={{ color: `${colorMinus}` }}

                                            >-</div>
                                            <span >{item.quantity}</span>
                                            <div className="plus"
                                                onClick={() => increaseQuantity(i)}
                                                style={{ color: `${colorPlus}` }}
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
                                {genderSelect && genderSelect.length > 0 && genderSelect.map((item, i) => {
                                    return (
                                        <div className="sex-customer-wrap" key={i}>
                                            <input
                                                onChange={(e) => setGender(item.keyMap)}
                                                type="radio" value={gender}
                                                name="gender" />
                                            <span>{item.valueVi}</span>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className="fillinform">
                                <div className="fillname">
                                    <label>Họ và tên</label>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        type="text"
                                        placeholder="Họ và tên" />

                                </div>
                                <div className="fillname phoneNumber">
                                    <label>Số điện thoại</label>
                                    <input
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        value={phoneNumber}
                                        type="text"
                                        placeholder="Số điện thoại" />
                                </div>
                                <div className="fillname email">
                                    <label>email</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        type="text"
                                        placeholder="email" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="deli-address">
                        <form className="active" action="">
                            <h4>Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có) </h4>
                            <div className="cntry-district">
                                <div className="btn-click country">
                                    <input
                                        onChange={(e) => setProvincial(e.target.value)}
                                        value={provincial}
                                        type="text"
                                        placeholder="Chọn Tỉnh thành" />
                                </div>
                                <div className="btn-click district">
                                    <input
                                        onChange={(e) => setDistrict(e.target.value)}
                                        value={district}
                                        type="text"
                                        placeholder="Chọn Quận / Huyện" />
                                </div>
                            </div>

                            <div className="cntry-district">
                                <div className="btn-click country">
                                    <input
                                        onChange={(e) => setWards(e.target.value)}
                                        value={wards}
                                        type="text"
                                        placeholder="Chọn Phường / Xã" />
                                </div>
                                <div className="btn-click district">
                                    <input
                                        onChange={(e) => setStreetName(e.target.value)}
                                        value={streetName}
                                        type="text"
                                        placeholder="Số nhà, tên đường" />
                                </div>
                            </div>


                        </form>
                    </div>
                    <div className="anotheroption">
                        <input
                            onChange={(e) => setNote(e.target.value)}
                            value={note}
                            className="leuleo"
                            type="text"
                            placeholder="Yêu cầu khác (không bắt buộc)" />
                    </div>
                    <div className="footer__cart">
                        <div className="footer__cart-price">
                            <h3>Tổng tiền:</h3>
                            <strong>36.990.000</strong>
                        </div>
                        <button
                            onClick={handleBuyProduct}
                        >Đặt hàng</button><br></br>
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
