import './BuyModal.scss';
import { AiOutlineClose } from "react-icons/ai";
const BuyModal = (props) => {
    console.log(props.product);
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
                                <input type="radio" name="color" id="" /><br></br>
                                <span>{item.color}</span>
                            </div>
                        )
                    })}
                </div>
                <div className="product-quantity">
                    <span>chọn số lượng:</span>
                    <div className="select"></div>
                </div>
            </div>
            <div className="buy-footer">
                <div className="product-detail">
                    <a href="">xem tất cả khuyến mãi</a>
                    <div className="discountpromotion">
                        <span>Giảm</span><strong> 1.000.000₫</strong>
                        <span>còn</span><strong> 35.990.000₫</strong>
                    </div>
                    <button className="ordered">Thêm vào giỏ hàng</button>
                    <a href="" className="ordered-product">Xem giỏ hàng</a>
                </div>
            </div>
        </div>
    );
}

export default BuyModal;
