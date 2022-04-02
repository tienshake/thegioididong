import React from 'react';
import { Link } from 'react-router-dom';

export default function EquipmentSoundDrawer() {
    return (
        <div className='EquipSound__category__drawer'>
            <div className='item__salien__sacCap'>
                <div className='wrap__item__category'>
                    <Link style={{ textDecoration: 'none' }} to='/accessory/category-phone'>
                        <div>
                            <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                            <p>sac du phong</p>
                        </div>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to='/cc'>
                        <div>
                            <img src='https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png' alt='' />
                            <p>sac du phong</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
