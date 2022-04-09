import { getMarkDownById } from "../../../services/userService";
import React, { useState, useEffect } from 'react';

const Post = (props) => {
    console.log(props);
    return (
        <div className="post__container">
            <div className="post__image"
                style={{
                    backgroundImage: `url(${props.imgAngle})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <h4>Thông tin sản phẩm</h4>
            <div className='post__content'>
                {
                    props.markdown
                    && props.markdown.contentHTML
                    && <div className='post__markdown' dangerouslySetInnerHTML={{ __html: props.markdown.contentHTML }}></div>
                }
                <div className="bg-article">
                    <button className="btn"
                        onClick={props.openModal}
                    >Xem Thêm</button>
                </div>
            </div>

        </div>
    );
}

export default Post;