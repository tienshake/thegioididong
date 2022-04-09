import './Modal.scss';
import ModalReact from 'react-modal';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import CarouselPhoneDetail from '../CarouselPhoneDetail';
import Configuration from '../Configuration';
const Modal = (props) => {
    const navArr = [
        { label: 'Điểm nổi bật', value: 1 },
        { label: 'Thông số kỹ thuật', value: 2 },
        { label: 'Thông tin sản phẩm', value: 3 },
    ]
    const [nav, setNav] = useState(navArr);
    const [navLink, setNavLink] = useState(3);

    useEffect(() => {
        nav[2].selected = true
    }, []);
    const handleNav = (index) => {
        if (!nav[index].selected) {
            setNav(navArr)
            setNav((prev) => {
                prev[index].selected = true
                return [...prev]
            })
            setNavLink(nav[index].value)
        }
    }
    const handleNavLink = (value) => {
        let result = '';
        switch (value) {
            case 1:
                result = <>
                    <CarouselPhoneDetail
                        photoDetail={props.photoDetail}
                        className="carouselPhoneDetail"
                    />
                </>
                break;
            case 2:
                result = <>
                    <div className="post__image"
                        style={{
                            backgroundImage: `url(${props.imgAngle})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <Configuration
                        product={props.product}
                    />
                </>
                break;
            case 3:
                result = <>
                    {
                        props.markdown
                        && props.markdown.contentHTML
                        && <div className='post__markdown' dangerouslySetInnerHTML={{ __html: props.markdown.contentHTML }}></div>
                    }
                </>
                break;


            default:
                break;
        }
        return result
    };
    return (

        <div>
            <ModalReact
                isOpen={props.modalIsOpen}
                onRequestClose={props.closeModal}
                className={`modal__detail`}
                ariaHideApp={false}
            >
                <button className='close__btn' onClick={props.closeModal}><AiOutlineClose />Đóng</button>
                <div className='modal__container'>
                    <ul className='modal__nav'>
                        {nav && nav.map((item, index) => {
                            return (
                                <li
                                    key={index} className={item.selected ? 'modal__nav-item active' : 'modal__nav-item'}
                                    onClick={() => handleNav(index)}
                                >{item.label}</li>
                            )
                        })}
                    </ul>
                    <div className='modal__content'>

                        {handleNavLink(navLink)}

                    </div>
                </div>

            </ModalReact>
        </div>
    );
}

export default Modal;