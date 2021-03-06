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
import NumberFormat from 'react-number-format';
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
                        <span className='vote'>10 ????nh gi??</span>
                        <span className="ss"><IoIosAddCircleOutline />So s??nh</span>
                    </div>


                    <div className="right">
                        <span><AiFillLike />Th??ch 1.5k</span>
                        <span>Chia s???</span>

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


                    {/* ????nh gi?? SP */}
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
                        <p>Gi?? t???i <span>???? N???ng</span></p>
                        <div className="price__data">
                            <div className="number"><NumberFormat
                                value={product.price}
                                displayType="text"
                                thousandSeparator={true} />???</div>
                            <span>tr??? g??p 0%</span>
                        </div>
                    </div>

                    {/* promotion ifomation */}
                    <div className='wrap__promotion__info'>
                        <PromotionIfo />
                    </div>

                    <div className='container more__information'>
                        <div style={{ display: 'flex', height: '20px' }}>
                            <Link to='/ss'>
                                <p>Ch???n ?????a ch??? gioa h??ng</p>
                            </Link>
                            <p style={{ marginLeft: '8px' }}>????? bi???t th???i gian n??o</p>
                        </div>

                        <div style={{ marginTop: '5px' }}>
                            <Link to='/ss'>
                                <p>Xem si??u th??? c?? h??ng</p>
                            </Link>
                        </div>


                    </div>
                    <p className='boundary__line'></p>

                    {/* payment */}


                    <div className='wrap__payment'>
                        <div className='all__box__payment'>
                            <p><b style={{ fontSize: '17px' }}>??u ????i khi thanh to??n</b></p>

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
                                        <div style={{ display: 'flex' }}><p style={{ margin: 'auto', marginTop: '8px' }}>5 ??u ????i th??m D??? ki???n ??p d???ng ?????n 23:00 30/04</p></div>
                                    </div>

                                    <div className='container body__extra__offer'>
                                        <div className='row'>
                                            <p className='col-xl-1'>1</p>
                                            <div className='col content__extra__offer'>
                                                <p className='item'>T???ng cho kh??ch l???n ?????u mua h??ng online t???i web BachhoaXANH.com</p>
                                                <p>M?? gi???m 20% t???i ??a 100.000??</p>
                                                <p>M?? gi???m 20% t???i ??a 100.000??</p>
                                                <p>??p d???ng t???i Tp.HCM v?? 1 s??? khu v???c, 1 S??T nh???n 1 l???n (Xem chi ti???t)</p>
                                            </div>

                                            <div className='row'>
                                                <p className='col-xl-1'>1</p>
                                                <div className='col content__extra__offer'>
                                                    <p className='item'>
                                                        T???ng su???t mua xe ?????p Gi???m ?????n 30% (kh??ng k??m KM kh??c) (click xem chi ti???t)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', marginBottom: '18px' }}>
                                            <p style={{ margin: 'auto' }}>
                                                <Link to='load-more-offer' style={{ textDecoration: 'none' }}>
                                                    Xem th??m 3 ??u ????i kh??c
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* C???u h??nh phone */}
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