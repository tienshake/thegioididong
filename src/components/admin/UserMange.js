import { AiOutlineUpload } from "react-icons/ai";
import React, { useState } from 'react';
import CommonUtils from '../../utils/CommonUtils';
import { useOutletContext } from 'react-router-dom';
import { alert } from 'react-bootstrap-confirmation';
const UserManage = (props) => {
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
        <div className="user-manage">
            <div className="manage__content-form form-group">
                <label>Email (Required)</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text" className="form-control" />
            </div>
            <div className="manage__content-form form-group">
                <label>Mật khẩu (Required)</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="text" className="form-control" />
            </div>
            <div className="manage__content-form form-group">
                <label>Tên người dùng</label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text" className="form-control" />
            </div>
            <div className="manage__content-form form-group">
                <label>Địa chỉ</label>
                <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text" className="form-control" />
            </div>
            <div className="manage__content-form form-group">
                <label className="manage__content-label">Giới tính</label>
                <select
                    onChange={(e) => setGender(e.target.value)}
                    className="form-select">
                    <option value="Male">Nam </option>
                    <option value="Female">Nữ</option>
                </select>
            </div>
            <div className="manage__content-form form-group">
                <label>Số điện thoại</label>
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
            <div className="manage__content-form">
                <label className="manage__content-label">Ảnh đại diện</label>
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



            <button
                onClick={handleOnClickSubmit}
                className="btn btn-primary">Tạo người dùng</button>
        </div>
    );
}

export default UserManage;