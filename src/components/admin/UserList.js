import './UserList.scss'
import React, { useState, useEffect } from 'react';
import { getAllUserService } from '../../services/userService';
import ReactPaginate from 'react-paginate';
const UserList = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState('');
    const [page, setPage] = useState('');

    let arrCount = [];
    const handleCountPage = (index) => {
        console.log(index)
    }
    useEffect(() => {
        const fetch = async () => {
            const limit = 5;
            const res = await getAllUserService("ALL", limit, page ? page : 1);
            console.log(res);
            if (res && res.errCode === 0) {
                setUsers(res.data)
                setCount(res.count)
            }
        }
        fetch()
    }, [page]);
    if (count > 0) {
        for (var i = 0; i < count; i++) {
            arrCount.push(i)
        }
    }
    const handlePageClick = ({ selected }) => {
        setPage(selected + 1)
    };

    return (
        <div className="user__list-container">
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h2>Danh sách người dùng</h2>
                                </div>

                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Address</th>
                                    <th>Phone Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users && users.length > 0 && users.map((item, index) => {
                                    if (item.id === 14) {

                                    }
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
                                })}


                            </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Hiển thị <b>{users ? users.length : 5}</b> trên <b>{count}</b> người dùng</div>
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