import React from 'react';
import './AccessoryPage.css';
import CardCategory from './reuseComponents/CardCategory';
import CategorySalienContext from '../../../store/accessory/CategorySalienContext';
import { useContext } from 'react';
import Brands from './reuseComponents/Brands';

export default function AccessoryPage() {
    const { handleHideCategorySalienAll } = useContext(CategorySalienContext);


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
                        <div className='carosel'></div>

                        <div className='container nav-category-product'>
                            <div><p>Nổi bậc</p></div>
                            <div style={{ width: '200px' }}> <p>dung lượng 10000mAh</p></div>
                            <div style={{ width: '200px' }}><p>dung lượng 20000mAh</p></div>
                            <div><p>dưới 300.000đ</p></div>
                            <div><p>Xmobile</p></div>
                        </div>

                        <div className=' card-product-accessory'>
                            <div className="card__product card">
                                <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                    <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                                </div>
                                <img src="https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                        <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                        <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                    </div>

                                    <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Tai nghe Bluetooth AirPods 3 Apple MME73</p>
                                    <p style={{ height: '10px' }}>online giá rẻ</p>
                                    <p><b>5.490.000đ</b></p>
                                </div>
                            </div>


                            <div className="card__product card">
                                <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                    <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                                </div>
                                <img src="https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                        <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                        <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                    </div>

                                    <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Tai nghe Bluetooth AirPods 3 Apple MME73</p>
                                    <p style={{ height: '10px' }}>online giá rẻ</p>
                                    <p><b>5.490.000đ</b></p>
                                </div>
                            </div>


                            <div className="card__product card">
                                <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                    <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                                </div>
                                <img src="https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                        <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                        <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                    </div>

                                    <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Tai nghe Bluetooth AirPods 3 Apple MME73</p>
                                    <p style={{ height: '10px' }}>online giá rẻ</p>
                                    <p><b>5.490.000đ</b></p>
                                </div>
                            </div>

                            <div className="card__product card">
                                <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                    <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                                </div>
                                <img src="https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                        <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                        <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                    </div>

                                    <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Tai nghe Bluetooth AirPods 3 Apple MME73</p>
                                    <p style={{ height: '10px' }}>online giá rẻ</p>
                                    <p><b>5.490.000đ</b></p>
                                </div>
                            </div>

                            <div className="card__product card">
                                <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                                    <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                                </div>
                                <img src="https://cdn.tgdd.vn/Products/Images/54/253802/bluetooth-airpods-pro-magsafe-charge-apple-mlwk3-thumb-600x600.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                                        <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                                        <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                                    </div>

                                    <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">Tai nghe Bluetooth AirPods 3 Apple MME73</p>
                                    <p style={{ height: '10px' }}>online giá rẻ</p>
                                    <p><b>5.490.000đ</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
