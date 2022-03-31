import './UserList.scss'
import React, { useState, useEffect } from 'react';
import { getAllUserService, getAllProductService, getAllUCodeService } from '../../services/userService';
import ReactPaginate from 'react-paginate';
const UserList = (props) => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState('');
    const [page, setPage] = useState('');

    let arrCount = [];

    useEffect(() => {
        const fetch = async () => {
            const limit = 5;
            let res = ''
            if (props.type === 'users') {
                res = await getAllUserService("ALL", limit, page ? page : 1);
            }
            if (props.type === 'products') {
                res = await getAllProductService(limit, page ? page : 1);
                console.log(res)
            }
            if (res && res.errCode === 0) {
                setUsers(res.data)
                setCount(res.count)
            }
        }
        fetch()
    }, [page, props]);
    if (count > 0) {
        for (var i = 0; i < count; i++) {
            arrCount.push(i)
        }
    }
    const handlePageClick = ({ selected }) => {
        setPage(selected + 1)
    };
    const renderContent = () => {
        let content = ''
        switch (props.type) {
            case 'users':
                content = 'Danh sách người dùng'
                break;
            case 'products':
                content = 'Danh sách sản phẩm'
                break;
            default:
                break;
        }
        return content
    }
    const renderListItem = (e) => {
        let result = '';
        if (props.type === 'users') {
            if (users && users.length > 0) {
                result = users.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td><div
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                className="avatar"
                            ></div>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.roleId}</td>
                            <td>{item.address}</td>
                            <td>{item.phoneNumber}</td>
                            <td>
                                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
                            </td>
                        </tr>
                    )
                })
            }
        }
        if (props.type === 'products') {
            if (users && users.length > 0) {
                result = users.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td><div
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '3px'
                                }}
                                className="avatar"
                            ></div>{item.nameItem}</td>
                            <td>{item.price}</td>
                            <td>{item.manufacturerData && item.manufacturerData.valueVi ? item.manufacturerData.valueVi : ''}</td>
                            <td>{item.typeData && item.typeData.valueVi ? item.typeData.valueVi : ''}</td>
                            <td>{item.ram}</td>
                            <td>{item.rom}</td>
                            <td>
                                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
                            </td>
                        </tr>
                    )
                })
            }
        }
        return result
    };
    const listRowRender = () => {
        let result = '';
        if (props.type === 'users') {
            result = (
                <>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                </>
            )
        }
        if (props.type === 'products') {
            result = (
                <>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Giá</th>
                    <th>Hãng</th>
                    <th>Loại</th>
                    <th>Ram</th>
                    <th>Bộ nhớ</th>
                    <th>Số lượng</th>
                </>
            )
        }
        return result
    };
    return (
        <div className="user__list-container">
            {console.log(props)}
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h2>{renderContent()}</h2>
                                </div>

                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    {listRowRender()}
                                </tr>
                            </thead>

                            <tbody>
                                {renderListItem()}
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">
                                Hiển thị <b>{users ? users.length : 5}
                                </b> trên <b>{count}</b> {props.type === 'users' ? 'người dùng' : 'sản phẩm'}
                            </div>
                            <div className="pagination">
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="tiếp tục >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={Math.ceil(count / 5)}
                                    previousLabel="< quay lại"
                                    renderOnZeroPageCount={null}
                                    activeClassName="active"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;