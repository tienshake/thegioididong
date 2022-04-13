import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './DetailItem.scss';
import { AiFillStar, AiFillLike } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import '../detailItem/Detailtem.css';
import PromotionIfo from './PromotionIfo';
import GroupButtonBuy from './GroupButtonBuy';
import { getProductByIdService, getMarkDownById } from '../../../services/userService';
import CardDiscount from './CardDiscount';
import CarouselPhoneDetail from './CarouselPhoneDetail';
import Policy from './Policy';
import Configuration from './Configuration';
import Post from './Post';
import Modal from './modal/Modal';
import BuyModal from './buyModal/BuyModal'
import Evaluate from './Evaluate';
const DetailItem = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [markdown, setMarkdown] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isBuyProduct, setIsBuyProduct] = useState(false);

    useEffect(() => {
        if (id) {
            const fetch = async () => {
                const res = await getProductByIdService(id);
                if (res && res.errCode === 0) {
                    setProduct(res.data)
                }
                const resMarkDown = await getMarkDownById(id)
                if (resMarkDown && resMarkDown.errCode === 0) {
                    setMarkdown(resMarkDown.data)
                }
            }
            fetch()
        }
    }, []);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const handleBuyProduct = () => {
        setIsBuyProduct(!isBuyProduct);
    }
    return (
        <div className="phone__detail-container">
            <Modal
                photoDetail={product && product.photoDetail ? product.photoDetail : []}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                imgAngle={product && product.imgAngle ? product.imgAngle : ''}
                markdown={markdown}
                product={product ? product : ''}
            />
            <div className="phone__detail-header">
                <div className="detail__header-top">
                    <div className="detail__header-link">
                        <span>{product && product.typeData && product.typeData.valueVi}</span>
                        /
                        <span>
                            {product &&
                                product.typeData &&
                                product.typeData.valueVi}  {product &&
                                    product.manufacturerData &&
                                    product.manufacturerData.valueVi}

                        </span>
                    </div>
                </div>

                <div className="detail__header-bottom">
                    <div className="left">
                        <h5>{product && product.typeData && product.typeData.valueVi} {product.nameItem} {product.rom}</h5>
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
                    {/* CarouselPhoneDetail */}
                    <CarouselPhoneDetail
                        photoDetail={product && product.photoDetail ? product.photoDetail : []}
                        isNb={true}
                    />
                    {/* Policy */}
                    <Policy />
                    {/* Post */}
                    <Post
                        imgAngle={product && product.imgAngle ? product.imgAngle : ''}
                        markdown={markdown}
                        openModal={openModal}
                    />


                    {/* Đánh giá SP */}
                    <Evaluate />

                </div>
                <div className="phone__detail-product-right">
                    <div className="phone__detail-product-rom">
                        <div className="top">
                            <button className="btn active">{product.ram}/{product.rom}</button>
                        </div>
                        <div className="bottom">
                            {product && product.colorData && product.colorData.length > 0 && product.colorData.map((item, index) => {
                                return (
                                    <button key={index} className='btn active'>{item.color}</button>
                                )
                            })}

                        </div>
                    </div>
                    <div className="price">
                        <p>Giá tại <span>Đà Nẵng</span></p>
                        <span><h5>{product.price}₫</h5><span>trả góp 0%</span></span>
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
                                <GroupButtonBuy
                                    handleBuyProduct={handleBuyProduct}
                                />
                            </div>
                            {isBuyProduct &&
                                <BuyModal
                                    handleBuyProduct={handleBuyProduct}
                                    product={product && product}
                                />}
                            {/* extra offer */}
                            <div className='wrap__extra__offer'>
                                <div className='box__extra__offer'>
                                    <div className='container header__extra__offer'>
                                        <div style={{ display: 'flex' }}><p style={{ margin: 'auto', marginTop: '8px' }}>5 ưu đãi thêm Dự kiến áp dụng đến 23:00 30/04</p></div>
                                    </div>

                                    <div className='container body__extra__offer'>
                                        <div className='row'>
                                            <p className='col-xl-1'>1</p>
                                            <div className='col content__extra__offer'>
                                                <p className='item'>Tặng cho khách lần đầu mua hàng online tại web BachhoaXANH.com</p>
                                                <p>Mã giảm 20% tối đa 100.000đ</p>
                                                <p>Mã giảm 20% tối đa 100.000đ</p>
                                                <p>Áp dụng tại Tp.HCM và 1 số khu vực, 1 SĐT nhận 1 lần (Xem chi tiết)</p>
                                            </div>

                                            <div className='row'>
                                                <p className='col-xl-1'>1</p>
                                                <div className='col content__extra__offer'>
                                                    <p className='item'>
                                                        Tặng suất mua xe đạp Giảm đến 30% (không kèm KM khác) (click xem chi tiết)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', marginBottom: '18px' }}>
                                            <p style={{ margin: 'auto' }}>
                                                <Link to='load-more-offer' style={{ textDecoration: 'none' }}>
                                                    Xem thêm 3 ưu đãi khác
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cấu hình phone */}
                            <Configuration
                                product={product ? product : ''}
                            />
                        </div>

                        <div className='spacer'></div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default DetailItem;