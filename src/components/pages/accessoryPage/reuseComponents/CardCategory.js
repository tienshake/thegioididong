import React from 'react';
import { useContext } from 'react';


import CategorySalienContext from '../../../../store/accessory/CategorySalienContext';
import PhoneCategoryDrawer from './PhoneCategoryDrawer';
import LapTopPCCatetoryDrawer from './LapTopPCCatetoryDrawer';
import EquipmentSoundDrawer from './EquipmentSoundDrawer'

export default function CardCategory() {
    const {
        handleShowCategorySalienPhone,
        showCatetoryPhone,
        handleShowCategorySalienLapTopPC,
        showCatetoryLapTopPC,
        showCatetoryEquipmentSound,
        handleShowCatetoryEquipmentSound,
        handleHideCategorySalienAll,
    } = useContext(CategorySalienContext);


    return (
        <>
            <div style={{ background: '#F4F4F4F4', paddingTop: '20px'}}>
                <div className='container-fluid products__header'>
                    {showCatetoryPhone.showCatetoryPhone && (<PhoneCategoryDrawer />)}
                    <div onMouseOut={handleHideCategorySalienAll} className='wrapper__group__iphone'>
                        <img onMouseOver={handleShowCategorySalienPhone} src='https://cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/accessory/tgdd/desk-phone_2.png' alt='' />
                    </div>

                    {showCatetoryLapTopPC.showCatetoryLapTopPC && (<LapTopPCCatetoryDrawer />)}
                    <div  onMouseOut={handleHideCategorySalienAll} className='wrapper__group__laptopPc'>
                        <img onMouseOver={handleShowCategorySalienLapTopPC} src='https://cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/accessory/tgdd/desk-lap_2.png' alt='' />
                    </div>

                    {showCatetoryEquipmentSound.showCatetoryEquipmentSound && (<EquipmentSoundDrawer />)}
                    <div className='wrapper__group__iphone'>
                        <img onMouseOver={handleShowCatetoryEquipmentSound} src='https://cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/accessory/tgdd/desk-amthanh_2.png' alt='' />
                    </div>

                    <div className='wrapper__group__iphone'>
                        <img src='https://cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/accessory/tgdd/desk-congnghe_2.png' alt='' />
                    </div>

                    <div className='wrapper__group__iphone'>
                        <img src='https://cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/accessory/tgdd/desk-gaming_2.png' alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}
