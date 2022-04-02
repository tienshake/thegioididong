import React from 'react'

export default function GroupButtonBuy() {
    return (
        <>
            <div className='btn__buyNow'>
                <p>Mua ngay</p>
            </div>

            <div className='btn__buy__installment'>
                <div style={{ marginRight: '6px' }}>
                    Mua trả góp 0.5%
                    <br />
                    <p style={{ fontSize: '11px' }}>Duyệt hồ sơ trong vòng 5 phút</p>
                </div>

                <div>
                    Trả góp qua thẻ <br />
                    <p style={{ fontSize: '11px' }}>visa, Mastercard, JCB, Amex</p>
                </div>
            </div>

            {/* contact */}
            <div className='wrap__contact'>
                <div>
                    Gọi đặt mua 1800.1060 (7:30 - 22:00)
                </div>
            </div>
        </>
    )
}
