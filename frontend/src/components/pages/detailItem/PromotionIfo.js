import React from 'react'

export default function PromotionIfo() {
    return (
        <>
            <div className='container header__promotion__info'>
                <p className='titile__promotion' style={{ height: '10px' }}><b>Khuyến mãi trị giá 1.600.000đ</b></p>
                <p className='note__promotion'>Giá và khuyến mãi dự kiến áp dụng đến 23:00 30/4</p>
            </div>

            <div className='container body__promotion__info'>
                <div style={{ marginTop: '13px' }}>
                    <div className='option__item'>
                        <div style={{ height: '20px' }}>
                            <p className='number__option'>
                                <a style={{ position: 'absolute', top: '-4px', left: '5px' }}>s</a>
                            </p>
                            <p>Chọn 1 trong các khuyến mãi:</p>
                        </div>
                    </div>
                    <div className='tick__option__item' >
                        <p>Giảm giá 1,600,000đ*</p>
                        <p>Phiếu mua hàng AVA 2,400,000đ*</p>
                        <p>Phiếu mua hàng Bách hóa XANH 2,400,000đ*</p>
                    </div>

                    <div className='option__item'>
                        <div>
                            <p className='number__option'><a style={{ position: 'absolute', top: '-4px', left: '5px' }}>s</a></p>
                            <p>Giảm giá 50% gói bảo hành mở rộng thêm 1 năm (chính hãng) Xem chi tiết</p>
                        </div>
                    </div>

                    <div className='option__item'>
                        <div>
                            <p className='number__option'><a style={{ position: 'absolute', top: '-4px', left: '5px' }}>s</a></p>
                            <p>Giảm đến 1,500,000đ khi tham gia thu cũ đổi mới (Không áp dụng kèm giảm giá qua VNPAY, Moca) Xem chi tiết</p>
                        </div>

                    </div>

                    <div className='option__item'>
                        <div>
                            <p className='number__option'><a style={{ position: 'absolute', top: '-4px', left: '5px' }}>s</a></p>
                            <p>Giảm 50% giá gói cước 1 năm (Vina350/Vina500) cho Sim VinaPhone trả sau (Trị giá đến 3 triệu) Xem chi tiết</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container footer__promotion'>
                <p>(*) Giá hoặc khuyến mãi không áp dụng trả góp lãi suất đặc biệt (0%, 0.5%, 1%)</p>
            </div>
        </>
    )
}
