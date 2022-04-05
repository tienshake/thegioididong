import React, { useEffect, useState } from 'react';
import './AccessoryPage.css';
import CardCategory from './reuseComponents/CardCategory';
import CategorySalienContext from '../../../store/accessory/CategorySalienContext';
import { useContext } from 'react';
import Brands from './reuseComponents/Brands';
import CardProductBody from './reuseComponents/CardProductBody';
import SliderProduct from './reuseComponents/SliderProduct';
// import axios from 'axios';
import { getAllProductHomeService } from '../../../services/userService';
// const tabsCategory = ['cardProductsOne', 'cardProductsTwo'];


export default function AccessoryPage() {
    const { handleHideCategorySalienAll } = useContext(CategorySalienContext);

    //
    const [cardProducts, setCardProducts] = useState([]);
    const [typeCategoryProduct, setTypeCategoryProduct] = useState('cardProductsOne');


    useEffect(() => {
        const fetch = async (e) => {
            const limit = 5
            const res = await getAllProductHomeService(limit, 'PL2');
            if (res && res.errCode === 0) {
                setCardProducts(res.data)
            }
        };
        fetch()
    }, [typeCategoryProduct])

    return (
        <>
            <div className='accessory__page'>
                <div className='hearder__accessory'>
                    <img style={{ height: '280px', width: "100%" }} src='//cdn.tgdd.vn/2022/03/banner/1920x380-1920x380.jpg' alt='' />
                    <CardCategory />
                </div>


                <div onMouseMove={handleHideCategorySalienAll} className='body__accessory'>
                    <p style={{ height: '15px' }} className='space'></p>
                    <div style={{ width: '91%' }} className='container-fluid'>
                        <h4>Phụ kiện nổi bậc</h4>
                        <div className='container-fluid wrap__category__salien'>
                            <div className='list__group__salien'>
                                <div className='item__salien__sacDuPhong'>
                                    <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                                    <p>Sạc dự phòng</p>
                                </div>

                                <div className='item__salien__sacCap'>
                                    <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                                    <p>Sạc, cáp</p>
                                </div>

                                <div className='item__salien__taiNge'>
                                    <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                                    <p>Tai nghe</p>
                                </div>

                                <div className='item__salien__loa'>
                                    <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                                    <p>Loa</p>
                                </div>

                                <div className='item__accessory__salien'>
                                    <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                                    <p>thiết bị nhà  thông minh</p>
                                </div>

                                <div className='item__accessory__salien'>
                                    <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                                    <p>Camera, Webcam</p>
                                </div>

                                <div className='item__accessory__salien'>
                                    <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                                    <p>Thiết bị mạng</p>
                                </div>

                                <div className='item__accessory__salien'>
                                    <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                                    <p>ốp lưng, miếng dán</p>
                                </div>

                                <div className='item__accessory__salien'>
                                    <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                                    <p>chuột máy tính</p>
                                </div>

                                <div className='item__accessory__salien'>
                                    <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                                    <p>Bàn phím</p>
                                </div>

                            </div>
                        </div>

                        <h4><b>Thương hiệu hàng đầu</b></h4>
                        <Brands />

                    </div>



                    <div className='container-fluid wrap__card__product__acce'>
                        {/* <div className='carosel'></div> */}

                        <div className='container nav-category-product'>
                            <div onClick={() => setTypeCategoryProduct('cardProductsOne')}><p>Nổi bậc</p></div>
                            <div onClick={() => setTypeCategoryProduct('cardProductsTwo')}><p>Tai Nge</p></div>
                            <div onClick={() => setTypeCategoryProduct('cardProductsThree')}><p>Adapter sạc</p></div>
                            <div onClick={() => setTypeCategoryProduct('cardProductsOne')}><p>Cáp sạc</p></div>
                            <div onClick={() => setTypeCategoryProduct('cardProductsTwo')}><p>Ốp lưng</p></div>
                            {/* <button
                                key={tabCategory}
                                style={type === tab ? {
                                    color: '#fff',
                                    backgroundColor: '#333'
                                } : {}}
                                // trong tình huống type = tab thì sẽ thêm css vào obj đầu nếu không thì sẽ truyền 1 obj rỗng
                                onClick={() => setTypeCategoryProduct(tabCategory)}
                            >
                                {tabCategory}
                            </button> */}
                        </div>

                        <div className='card-product-accessory'>
                            {cardProducts.map((data, index) => (
                                <CardProductBody
                                    key={index}
                                    nameCard={data.nameItem}
                                    price={data.price}
                                    imgCard={data.image}
                                />
                                
                            ))}

                            <div className='wrap-loadMore'>
                                <button className='btn-loadMore'>Xem thêm sản phẩm</button>
                            </div>

                        </div>

                        <div style={{ display: 'flex', marginTop: '70px', justifyContent: 'center' }}>
                            <img style={{ width: '92%' }} src='https://cdn.tgdd.vn/2022/02/banner/DESKTOPTagline2-1200x150-1.png' alt=''></img>
                        </div>


                        {/*  */}
                        <div className='container-fluid wrap__slider__product'>
                            <SliderProduct />
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}
