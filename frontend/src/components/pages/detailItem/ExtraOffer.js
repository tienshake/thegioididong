import React from 'react';
import  { IoIosGift} from 'react-icons/io';
import  { BsCheckCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function ExtraOffer() {
    return (
        <>
            <div className='box__extra__offer'>
                <div className='container header__extra__offer'>
                    <div style={{ display: 'flex' }}><p style={{ margin: 'auto', marginTop: '8px' }}><b>5 ưu đãi thêm</b> Dự kiến áp dụng đến 23:00 30/04</p></div>
                </div>

                <div className='container body__extra__offer'>
                    <div className='row'>
                        <p style={{ color: 'red' }} className='col-xl-1' ><IoIosGift /></p>
                        <div className='col content__extra__offer'>
                            <p className='item'>Tặng cho khách lần đầu mua hàng online tại web BachhoaXANH.com</p>
                            <p>Mã giảm 20% tối đa 100.000đ</p>
                            <p>Mã giảm 20% tối đa 100.000đ</p>
                            <p>Áp dụng tại Tp.HCM và 1 số khu vực, 1 SĐT nhận 1 lần (Xem chi tiết)</p>
                        </div>

                        <div className='row'>
                            <p style={{ color: '#33AC41' }} className='col-xl-1'><BsCheckCircle /></p>
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
        </>
    )
}
