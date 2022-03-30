import { AiOutlineUpload } from "react-icons/ai";
import React, { useEffect, useState } from 'react';
import CommonUtils from '../../utils/CommonUtils';
import { useOutletContext } from 'react-router-dom';
import { alert } from 'react-bootstrap-confirmation';
import './productManage.scss'
import { getAllUCodeService } from "../../services/userService";
const ProductManage = (props) => {
    const outletContext = useOutletContext()
    const [nameItem, setNameItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [ram, setRam] = useState('');
    const [rom, setRom] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');
    const [imageMultiple, setMultiple] = useState([]);



    const [selectType, setSelectType] = useState([]);
    const [selectPloai, setSelectPloai] = useState([]);
    const [selectColor, setSelectColor] = useState([]);

    useEffect(() => {
        const fetch = async (e) => {
            const resType = await getAllUCodeService('TYPEPHONE');
            const resPloai = await getAllUCodeService('PLOAI');
            const resColor = await getAllUCodeService('COLOR');

            if (resType && resType.errCode === 0 &&
                resPloai && resPloai.errCode === 0 &&
                resColor && resColor.errCode === 0
            ) {
                setSelectType(resType.data)
                setSelectPloai(resPloai.data)
                setSelectColor(resColor.data)
            } else {
            }

        };
        fetch()

    }, []);


    const checkValiDateInput = () => {
        // let isValid = true
        // const object = { email, password, name, address, gender, phoneNumber, roleId, image };
        // const arrInput = ['email', 'password', 'name', 'address', 'gender', 'phoneNumber', 'roleId', 'image']
        // for (let i = 0; i < arrInput.length; i++) {
        //     if (!object[arrInput[i]]) {
        //         alert('Bạn đã nhập thiếu ' + arrInput[i]);
        //         isValid = false
        //         break;
        //     }
        // }
        // return isValid;
    }
    const handleOnClickSubmit = async (e) => {
        // const isValid = checkValiDateInput();
        const typeData = 'CREATE-PRODUCT';
        outletContext.createToAdmin({
            nameItem, price, type, manufacturer,
            ram, rom, color, quantity,
            image: image.avatar
        }, typeData, selectColor.filter(item => item.isSelected === true), imageMultiple)
        console.log(nameItem, price, type, manufacturer, ram, rom, color, quantity, image)

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
                prev[index].isSelected = false

                return [...prev]
            })
        }

    }

    return (
        <div className="product-manage">
            {console.log('imageMultiple', imageMultiple)}
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
                    <label>Giá</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        type="text" className="form-control" />
                </div>
            </div>
            <div className="row ">
                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Hãng sản xuất</label>
                    <select
                        onChange={(e) => setManufacturer(e.target.value)}
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
                        className="form-select">
                        {selectPloai && selectPloai.length > 0 && selectPloai.map((item, index) => {
                            return (
                                <option key={index} value={item.keyMap}>{item.valueVi}</option>
                            )
                        })}
                    </select>
                </div>

            </div>
            <div className="row">

                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Ram</label>
                    <select
                        onChange={(e) => setRam(e.target.value)}
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
                <div className="manage__content-form col-6">
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



            <h4>Khuyến mãi</h4>
            <hr />
            <div className="row">

            </div>
            <div className="manage__content-form form-group">
                <label>Khuyến mãi</label>
                <input
                    onChange={(e) => setQuantity(e.target.value)}
                    type="text" className="form-control" />
            </div>
            <h4>Bài đăng sản phẩm</h4>
            <hr />
            <div className="manage__content-form form-group">
                <label>Bài viết sản phẩm</label>
                <input
                    onChange={(e) => setQuantity(e.target.value)}
                    type="text" className="form-control" />
            </div>


            <div className="manage__content-form form-group">
                <label>Thông số chi tiết</label>
                <input
                    onChange={(e) => setQuantity(e.target.value)}
                    type="text" className="form-control" />
            </div>

            <button
                onClick={handleOnClickSubmit}
                className="btn btn-primary">Tạo sản phẩm</button>
        </div>
    );
}

export default ProductManage;