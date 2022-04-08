import { AiOutlineUpload } from "react-icons/ai";
import React, { useEffect, useState } from 'react';
import CommonUtils from '../../utils/CommonUtils';
import { useOutletContext } from 'react-router-dom';
import { alert } from 'react-bootstrap-confirmation';
import './productManage.scss'
import { getAllUCodeService } from "../../services/userService";
import NumberFormat from 'react-number-format';
const ProductManage = (props) => {
    const outletContext = useOutletContext()
    const [nameItem, setNameItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('PL1');
    const [manufacturer, setManufacturer] = useState('TP1');
    const [ram, setRam] = useState('4GB');
    const [rom, setRom] = useState('16GB');
    const [pin, setPin] = useState('PIN3');
    const [display, setDisplay] = useState('DIS5');
    const [camera, setCamera] = useState('CAM8');
    const [image, setImage] = useState('');
    const [imageMultiple, setMultiple] = useState([]);
    const [chip, setChip] = useState([]);
    const [operatingSystem, setOperatingSystem] = useState([]);

    //================================================
    const [selectType, setSelectType] = useState([]);
    const [selectPloai, setSelectPloai] = useState([]);
    const [selectColor, setSelectColor] = useState([]);
    const [selectOperatingSystem, setSelectOperatingSystem] = useState([]);
    const [selectPin, setSelectPin] = useState([]);
    const [selectDisplay, setSelectDisplay] = useState([]);
    const [selectCamera, setSelectCamera] = useState([]);
    useEffect(() => {
        const fetch = async (e) => {
            const resType = await getAllUCodeService('TYPEPHONE');
            const resPloai = await getAllUCodeService('PLOAI');
            const resColor = await getAllUCodeService('COLOR');

            const resPin = await getAllUCodeService('PIN');
            const resDisplay = await getAllUCodeService('DISPLAY');
            const resCamera = await getAllUCodeService('CAMERA');

            const resOperatingSystem = await getAllUCodeService('HDH');

            if (resType && resType.errCode === 0 &&
                resPloai && resPloai.errCode === 0 &&
                resColor && resColor.errCode === 0 &&
                resPin && resPin.errCode === 0 &&
                resDisplay && resDisplay.errCode === 0 &&
                resCamera && resCamera.errCode === 0 &&
                resOperatingSystem && resOperatingSystem.errCode === 0
            ) {
                setSelectType(resType.data)
                setSelectPloai(resPloai.data)
                setSelectColor(resColor.data)
                setSelectPin(resPin.data)
                setSelectDisplay(resDisplay.data)
                setSelectCamera(resCamera.data)
                setSelectOperatingSystem(resOperatingSystem.data)
            } else {
            }

        };
        fetch()

    }, []);


    const checkValiDateInput = () => {
        let isValid = true
        const object = {
            nameItem,
            quantity,
            price,
            type,
            manufacturer,
            ram,
            rom,
            selectColor,
            image,
            imageMultiple,
            pin,
            display,
            camera,
            chip,
            selectOperatingSystem
        };
        const arrInput = [
            'nameItem',
            'quantity',
            'price',
            'type',
            'manufacturer',
            'ram',
            'rom',
            'selectColor',
            'image',
            'imageMultiple',
            'pin',
            'display',
            'camera',
            'chip',
            'selectOperatingSystem'
        ]
        for (let i = 0; i < arrInput.length; i++) {
            if (!object[arrInput[i]] || object[arrInput[i]].length === 0) {
                alert('Bạn đã nhập thiếu ' + arrInput[i]);
                isValid = false
                break;
            }
        }
        return isValid;
    }
    const handleOnClickSubmit = async (e) => {
        const isValid = checkValiDateInput();
        if (isValid) {
            const typeData = 'CREATE-PRODUCT';
            outletContext.createToAdmin({
                nameItem, price, type, manufacturer,
                ram, rom, quantity,
                image: image.avatar,
                pin, display, camera, chip, operatingSystem
            }, typeData, selectColor.filter(item => item.isSelected === true), imageMultiple)
            console.log(pin, display, camera)
        }


    };
    const handleOnchangeImg = async (e) => {
        const data = e.target.files;
        const file = data[0];
        if (file) {
            const b64 = await CommonUtils.getBase64(file);
            const objectUrl = URL.createObjectURL(file);
            setImage({
                previewImg: objectUrl,
                avatar: b64
            })

        }
    }
    const handleOnchangeImgMultiple = async (e) => {
        console.log('muti')
        const data = e.target.files;
        const file = data[0];
        if (file) {
            let result = []
            let object = {}
            const b64 = await CommonUtils.getBase64(file);
            const objectUrl = URL.createObjectURL(file);
            object.previewImg = objectUrl
            object.avatar = b64
            result.push(object);
            if (imageMultiple.length > 0) {
                setMultiple((prev) => {
                    console.log(prev)
                    return [...prev, ...result]
                })
                console.log('lon hon 0')
            } else {
                setMultiple(result)

            }

        }
    }

    const handleActive = (index) => {
        if (!selectColor[index].isSelected) {
            setSelectColor((prev) => {
                prev[index].isSelected = true

                return [...prev]
            })
        } else {
            setSelectColor((prev) => {
                prev[index].isSelected = false;
                return [...prev]
            })
        }

    }
    const handleCovertPrice = (values) => {
        setPrice(values.formattedValue)
    };

    return (
        <div className="product-manage">
            <h4 className="mt-3">Sản phẩm</h4>
            <hr />
            <div className="row">
                <div className="manage__content-form form-group col-6">
                    <label>Tên sản phẩm</label>
                    <input
                        onChange={(e) => setNameItem(e.target.value)}
                        type="text" className="form-control" />
                </div>

                <div className="manage__content-form form-group col-6">
                    <label>Giá (VNĐ)</label>
                    <NumberFormat
                        value={price}
                        displayType="input"
                        thousandSeparator={true}
                        onValueChange={(values) => handleCovertPrice(values)}
                        className="form-control"
                    />
                </div>
            </div>
            <div className="row ">
                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Hãng sản xuất</label>
                    <select
                        onChange={(e) => setManufacturer(e.target.value)}
                        value={manufacturer}
                        className="form-select">
                        {selectType && selectType.length > 0 && selectType.map((item, index) => {
                            return (
                                <option key={index} value={item.keyMap}>{item.valueVi}</option>

                            )
                        })}
                    </select>


                </div>

                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Loại sản phẩm</label>
                    <select
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                        className="form-select">
                        {selectPloai && selectPloai.length > 0 && selectPloai.map((item, index) => {
                            return (
                                <option key={index} value={item.keyMap}>{item.valueVi}</option>
                            )
                        })}
                    </select>
                </div>

            </div>
            <div className="row ">
                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Chip xử lý</label>
                    <input
                        onChange={(e) => setChip(e.target.value)}
                        type="text" className="form-control" />
                </div>

                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Hệ điều hành</label>
                    <select
                        onChange={(e) => setOperatingSystem(e.target.value)}
                        value={operatingSystem}
                        className="form-select">
                        {selectOperatingSystem && selectOperatingSystem.length > 0 && selectOperatingSystem.map((item, index) => {
                            return (
                                <option key={index} value={item.keyMap}>{item.valueVi}</option>
                            )
                        })}
                    </select>
                </div>

            </div>
            {/* dien thoai */}
            {type === 'PL1' &&
                <>
                    <div className="row">
                        <div className="manage__content-form form-group col-6">
                            <label className="manage__content-label">Ram</label>
                            <select
                                onChange={(e) => setRam(e.target.value)}
                                value={ram}
                                className="form-select">
                                <option value="4GB">4GB</option>
                                <option value="8GB">8GB</option>
                                <option value="12GB">12GB</option>
                            </select>
                        </div>
                        <div className="manage__content-form form-group col-6">
                            <label className="manage__content-label">Bộ nhớ</label>
                            <select
                                onChange={(e) => setRom(e.target.value)}
                                value={rom}
                                className="form-select">
                                <option value="16GB">16GB</option>
                                <option value="32GB">32GB</option>
                                <option value="64GB">64GB</option>
                                <option value="128GB">128GB</option>
                                <option value="256GB">256GB</option>
                                <option value="512GB">512GB</option>

                            </select>
                        </div>
                    </div>
                    <div className='row'>

                        <div className="manage__content-form form-group col-6">
                            <label className="manage__content-label">Pin</label>
                            <select
                                onChange={(e) => setPin(e.target.value)}
                                value={pin}
                                className="form-select">
                                {selectPin && selectPin.length > 0 && selectPin.map((item, index) => {
                                    return (
                                        <option key={index} value={item.keyMap}>{item.valueVi}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="manage__content-form form-group col-6">
                            <label className="manage__content-label">Màng hình</label>
                            <select
                                onChange={(e) => setDisplay(e.target.value)}
                                value={display}
                                className="form-select">
                                {selectDisplay && selectDisplay.length > 0 && selectDisplay.map((item, index) => {
                                    return (
                                        <option key={index} value={item.keyMap}>{item.valueVi}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="manage__content-form form-group col-6">
                        <label className="manage__content-label">Camera</label>
                        <select
                            onChange={(e) => setCamera(e.target.value)}
                            value={camera}
                            className="form-select">
                            {selectCamera && selectCamera.length > 0 && selectCamera.map((item, index) => {
                                return (
                                    <option key={index} value={item.keyMap}>{item.valueVi}</option>
                                )
                            })}
                        </select>
                    </div>

                </>


            }
            {/* dien thoai */}
            <div className="row">
                <div className="manage__content-form manage__content-color form-group col-12">
                    <label className="manage__content-label">Màu sắc</label>
                    {selectColor && selectColor.length > 0 && selectColor.map((item, index) => {
                        return (
                            <button
                                onClick={() => handleActive(index, item)}
                                className={item.isSelected ? ' active' : ''}
                                key={index}
                                style={{
                                    backgroundColor: `${item.keyMap}`
                                }}
                            >{item.valueVi}</button>
                        )
                    })}


                </div>
            </div>
            <div className="manage__content-form form-group col-6">

                <label className="manage__content-label">Số lượng sản phẩm</label>
                <input
                    className="quantity form-control"
                    onChange={(e) => setQuantity(e.target.value)}
                    type="number" id="quantity" name="quantity" min="1" max="1000"
                />
            </div>
            <div className='row preview-upload'>
                <div className="manage__content-form col-12">
                    <label className="manage__content-label">Ảnh sản phẩm (Preview)</label>
                    <input
                        id="preview" hidden className="form-control-file" type='file'
                        onChange={(e) => handleOnchangeImg(e)}
                    />
                    <label className="label-upload" htmlFor="preview"><AiOutlineUpload className="form-control-icon" /></label>
                    <div className="preview"
                        style={{
                            backgroundImage: `url(${image.previewImg})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                        onClick={() => this.isOpenPreviewImage()}
                    ></div>
                </div>

            </div>
            <h4>Ảnh chi tiết</h4>
            <hr />
            <div className='row preview-upload'>
                <div className="manage__content-form col-12 multiple-upload">
                    <label className="manage__content-label">Ảnh chi tiết sản phẩm</label>
                    <input
                        id="previewMultiple" hidden className="form-control-file" type='file'
                        onChange={(e) => handleOnchangeImgMultiple(e)}

                    />
                    <label className="label-upload" htmlFor="previewMultiple"><AiOutlineUpload className="form-control-icon" /></label>
                    {imageMultiple && imageMultiple.length > 0 && imageMultiple.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="previewMultiple"
                                style={{
                                    backgroundImage: `url(${item.previewImg})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                onClick={() => this.isOpenPreviewImage()}
                            ></div>
                        )
                    })}

                </div>
            </div>
            <button
                onClick={handleOnClickSubmit}
                className="btn btn-primary">Tạo sản phẩm</button>
        </div>
    );
}

export default ProductManage;