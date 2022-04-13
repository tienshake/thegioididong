import React, { useState } from 'react';
import './BuyModal.scss';
import { connect } from 'react-redux';
//Import action dùng để dispatch
import { addCart } from '../../../../store/actions/index';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Quantity from '../../cart/Quantity';
const BuyModal = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');

    const handleClick = (product) => {
        props.addCart({
            id: product.id,
            quantity: quantity,
            name: product.nameItem,
            image: product.image,
            price: product.price,
            ram: product.ram,
            rom: product.rom,
            color: color
        })
    };
    const handleOnChange = (color) => {
        setColor(color)
    };
    console.log(color);

    return (
        <div className="buynow">
            <div className="buy-header">
                <div className='tile__header'>
                    <span className="name-product"
                    >{props.product.nameItem} {props.product.ram}</span
                    >
                    <span className="close"
                        onClick={props.handleBuyProduct}
                    ><AiOutlineClose /></span>
                </div>

                <span className="price-product"> {props.product.price}₫ </span>
                <strike>40.990.000₫</strike>
            </div>
            <div className="buy-main">
                <strong>Chọn màu:</strong>
                <div className="product-color" >
                    {props.product.colorData && props.product.colorData.map((item, i) => {
                        return (
                            <div className="color" key={i}>
                                <div className='color__data'
                                    style={{ backgroundColor: `${item.color}` }}
                                /><br></br>
                                <input
                                    type="radio"
                                    name="color"
                                    value={color}
                                    onChange={() => handleOnChange(item.color)}
                                /><br></br>
                                <span>{item.color}</span>
                            </div>
                        )
                    })}
                </div>
                <div className="product-quantity">
                    <span>chọn số lượng:</span>
                    <Quantity
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                </div>
            </div>
            <div className="buy-footer">
                <div className="product-detail">
                    <a href="">xem tất cả khuyến mãi</a>
                    <div className="discountpromotion">
                        <span>Giảm</span><strong> 1.000.000₫</strong>
                        <span>còn</span><strong> 35.990.000₫</strong>
                    </div>
                    <button className="ordered"
                        onClick={() => handleClick(props.product)}
                    >Thêm vào giỏ hàng</button>
                    <Link to='/cart' className="ordered-product">Xem giỏ hàng</Link>
                </div>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCart: (payload) => {
            dispatch(addCart(payload))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        productsRedux: state.productsRedux
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyModal)
