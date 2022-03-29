import { AiOutlineUpload } from "react-icons/ai";
import React, { useState } from 'react';
import CommonUtils from '../../utils/CommonUtils';
import { useOutletContext } from 'react-router-dom';
import { alert } from 'react-bootstrap-confirmation';
import './productManage.scss'
const ProductManage = (props) => {
    const outletContext = useOutletContext()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('Male');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [roleId, setRoleId] = useState('ADMIN');
    const [image, setImage] = useState('');
    const checkValiDateInput = () => {
        let isValid = true
        const object = { email, password, name, address, gender, phoneNumber, roleId, image };
        const arrInput = ['email', 'password', 'name', 'address', 'gender', 'phoneNumber', 'roleId', 'image']
        for (let i = 0; i < arrInput.length; i++) {
            if (!object[arrInput[i]]) {
                alert('Bạn đã nhập thiếu ' + arrInput[i]);
                isValid = false
                break;
            }
        }
        return isValid;
    }
    const handleOnClickSubmit = (e) => {
        const isValid = checkValiDateInput();
        if (isValid) {
            outletContext.createUser({
                email,
                password,
                name,
                address,
                gender,
                phoneNumber,
                roleId,
                image: image.avatar
            })
        }

    };
    const handleOnchangeImg = async (e) => {
        const data = e.target.files;
        const file = data[0];
        if (file) {
            const b64 = await CommonUtils.getBase64(file);
            const objectUrl = URL.createObjectURL(file);
            console.log('b64', b64);
            setImage({
                previewImg: objectUrl,
                avatar: b64
            })

        }
    }
    return (
        <div className="product-manage">
            <h4 className="mt-3">Sản phẩm</h4>
            <hr />
            <div className="row">
                <div className="manage__content-form form-group col-6">
                    <label>Tên sản phẩm</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="manage__content-form form-group col-6">
                    <label>Giá</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="text" className="form-control" />
                </div>
            </div>
            <div className="row ">
                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Hãng sản xuất</label>
                    <select
                        onChange={(e) => setGender(e.target.value)}
                        className="form-select">
                        <option value="Iphone">Iphone</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Xiaomi">Xiaomi</option>
                    </select>
                </div>

                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Loại sản phẩm</label>
                    <select
                        onChange={(e) => setGender(e.target.value)}
                        className="form-select">
                        <option value="PHONE">Điện thoại </option>
                        <option value="PHUKIEN">Phụ kiện</option>
                    </select>
                </div>

            </div>
            <div className="row">
                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Ram</label>
                    <select
                        onChange={(e) => setGender(e.target.value)}
                        className="form-select">
                        <option value="PHONE">4GB</option>
                        <option value="PHUKIEN">8GB</option>
                        <option value="PHUKIEN">12GB</option>
                    </select>
                </div>
                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Bộ nhớ</label>
                    <select
                        onChange={(e) => setGender(e.target.value)}
                        className="form-select">
                        <option value="PHONE">16GB</option>
                        <option value="PHUKIEN">32GB</option>
                        <option value="PHUKIEN">64GB</option>
                        <option value="PHUKIEN">128GB</option>
                        <option value="PHUKIEN">256GB</option>
                        <option value="PHUKIEN">512GB</option>

                    </select>
                </div>
            </div>
            <div className="row">
                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Màu sắc</label>
                    <select
                        onChange={(e) => setGender(e.target.value)}
                        className="form-select">
                        <option value="PHONE">Đen</option>
                        <option value="PHUKIEN">Trắng</option>
                        <option value="PHUKIEN">Đỏ</option>
                        <option value="PHUKIEN">Xanh lá</option>

                    </select>
                </div>
            </div>
            <div className='row'>
                <div className="manage__content-form col-6">
                    <label className="manage__content-label">Ảnh sản phẩm</label>
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
                <div className="manage__content-form form-group col-6">
                    <label className="manage__content-label">Số lượng sản phẩm</label>
                    <input value="1" type="number" id="quantity" name="quantity" min="1" max="5" />
                </div>
            </div>
            <h4>Ảnh chi tiết</h4>
            <hr />
            <div className='row'>
                <div className="manage__content-form col-6">
                    <label className="manage__content-label">Ảnh chi tiết sản phẩm</label>
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



            <h4>Khuyến mãi</h4>
            <hr />
            <div className="row">

            </div>
            <div className="manage__content-form form-group">
                <label>Khuyến mãi</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text" className="form-control" />
            </div>
            <h4>Bài đăng sản phẩm</h4>
            <hr />
            <div className="manage__content-form form-group">
                <label>Bài viết sản phẩm</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text" className="form-control" />
            </div>


            <div className="manage__content-form form-group">
                <label>Thông số chi tiết</label>
                <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="text" className="form-control" />
            </div>
            <div className="manage__content-form form-group">
                <label className="manage__content-label">Role</label>
                <select
                    onChange={(e) => setRoleId(e.target.value)}
                    defaultValue="R1"
                    className="form-select">
                    <option value="ADMIN" >admin</option>
                    <option value="USER">user</option>
                </select>
            </div>




            <button
                onClick={handleOnClickSubmit}
                className="btn btn-primary">Tạo người dùng</button>
        </div>
    );
}

export default ProductManage;