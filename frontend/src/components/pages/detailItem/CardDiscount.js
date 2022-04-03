import React from 'react'

export default function CardDiscount() {
    return (
        <>
            <div className='card__discount'>
                <div className='container' style={{ marginRight: '8px' }}>
                    <img src='https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/logo/vnpay.png' style={{ width: '40%' }} />
                    <p>Giảm 500.000đ</p>
                    <p>Sản phẩm từ 5tr</p>
                    <p>Mua ngay</p>
                </div>

                <div className='container' style={{ marginRight: '8px   ' }}>
                    <img src='https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/logo/jcb.png' style={{ width: '20%' }} />
                    <p>Giảm 500.000đ</p>
                    <p>Sản phẩm từ 5tr</p>
                    <p>Mua ngay</p>
                </div>

                <div className='container'>
                    <img src='https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/logo/vib.jpg' style={{ width: '30%' }} />
                    <p>Giảm 500.000đ</p>
                    <p>Sản phẩm từ 5tr</p>
                    <p>Mua ngay</p>
                </div>
            </div>
        </>
    )
}
