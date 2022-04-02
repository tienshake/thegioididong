import React from 'react';
import CategorySalienContext from './CategorySalienContext';
import { useState } from 'react';

export default function CategorySalienState({ children }) {
  const [showCatetoryPhone, setshowCatetoryPhone] = useState(false);
  const [showCatetoryLapTopPC, setshowCatetoryLapTopPC] = useState(false);
  const [showCatetoryEquipmentSound, setshowCategoryEquipmentSound] = useState(false);

  // show Category Phone
  const handleShowCategorySalienPhone = () => {
    setshowCatetoryPhone((prev) => {
      return {
        ...prev,
        showCatetoryPhone: !prev.showCatetoryPhone
      }
    });
    setshowCatetoryLapTopPC(false);
    setshowCategoryEquipmentSound(false);
  }

  // show Category LapTopPC
  const handleShowCategorySalienLapTopPC = () => {
    setshowCatetoryLapTopPC((prev) => {
      return {
        ...prev,
        showCatetoryLapTopPC: !prev.showCatetoryLapTopPC
      }
    });
    setshowCatetoryPhone(false);
    setshowCategoryEquipmentSound(false);
  }

  // show Caterory EquipmentSound
  const handleShowCatetoryEquipmentSound = () => {
    setshowCategoryEquipmentSound((prev) => {
      return {
        ...prev,
        showCatetoryEquipmentSound: !prev.showCatetoryEquipmentSound
      }
    });
    setshowCatetoryLapTopPC(false);
    setshowCatetoryPhone(false)
  }


  // handle hide all
  const handleHideCategorySalienAll = () => {
    setshowCatetoryPhone(false);
    setshowCatetoryLapTopPC(false);
    setshowCategoryEquipmentSound(false);
  }




  return (
    <>
      <CategorySalienContext.Provider value={{
        handleShowCategorySalienPhone: handleShowCategorySalienPhone,
        showCatetoryPhone: showCatetoryPhone,
        handleShowCategorySalienLapTopPC,
        showCatetoryLapTopPC,
        handleShowCatetoryEquipmentSound,
        showCatetoryEquipmentSound,
        handleHideCategorySalienAll: handleHideCategorySalienAll,
      }}>
        {children}
      </CategorySalienContext.Provider>
    </>
  )
}
