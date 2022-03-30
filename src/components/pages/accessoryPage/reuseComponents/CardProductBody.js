import React from 'react';

export default function CardProductBody(props) {
    return (
        <>
            <div className="card__product card">
                <div style={{ height: '30px', width: '38%', marginTop: '5px' }}>
                    <p style={{ background: '#F1F1F1', width: '75%', height: '18px', fontSize: '11px', margin: 'auto', marginTop: '5px', color: '#767676', textAlign: 'center' }}><b>Trả góp 0%</b></p>
                </div>
                <img src={props.imgCard} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div style={{ height: '19.97px', width: '80px', background: 'rgb(220, 26, 5)', display: 'flex', borderRadius: '50px' }}>
                        <img style={{ height: '20px', width: '20px' }} src='https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png' alt='' />
                        <p style={{ fontSize: '10px', textTransform: 'uppercase', margin: 'auto', color: '#fff', textAlign: 'center' }}><b>giảm sốc</b></p>
                    </div>

                    <p style={{ fontSize: '14.50px', height: '25px', marginTop: '10px' }} className="card-text">{props.nameCard}</p>
                    <p style={{ height: '10px' }}>online giá rẻ</p>
                    <p><b>{props.price}</b></p>
                </div>
            </div>

        </>
    )
}