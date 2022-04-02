import './Footer.scss';

import {
    BsFacebook
} from "react-icons/bs";
import {
    AiFillYoutube
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <div className="grid">
                <div className="grid__row">
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Lịch sử mua hàng</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Cộng tác bán hàng cùng TGDĐ</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Tìm hiểu về mua trả góp</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Chính sách bảo hành</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Chính sách đổi trả</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Giới thiệu công ty (MWG.vn)</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Tuyển dụng</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Gửi góp ý, khiếu nại</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Tìm siêu thị (3.080 shop)</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-item__link">Xem bản mobile</a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Tổng đài hỗ trợ (Miễn phí gọi)</h3>
                        <ul className="footer-list">
                            <li class="footer-item">
                                <p class="footer-item__call">Gọi mua: <a class="footer-item__call--quickly" href="">1800.1060</a>(7:30 - 22:00)</p>

                            </li>
                            <li class="footer-item">
                                <p class="footer-item__call">Kỹ thuật:<a class="footer-item__call--quickly" href="">1800.1763</a>(7:30 - 22:00)</p>

                            </li>
                            <li class="footer-item">
                                <p class="footer-item__call">Khiếu nại:<a class="footer-item__call--quickly" href="">1800.1763</a>(8:00 - 21:30)</p>

                            </li>
                            <li class="footer-item">
                                <p class="footer-item__call">Bảo hành: <a class="footer-item__call--quickly" href="">1800.1064</a>(8:00 - 21:00)</p>
                            </li>
                        </ul>
                    </div>
                    <div className="grid__column-2-4">
                        <div className="footer__download-app">
                            <BsFacebook className="footer__heading--icon" /><span>3736.6k Fan</span>
                            <AiFillYoutube className="footer__heading--icon-red" /><span>839k Đăng ký </span>
                        </div>
                        <div className="footer__download-app">
                            <img src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png" className="footer__download-app-img" />
                            <img src="https://tinnhiemmang.vn/handle_cert?id=thegioididong.com" className="footer__download-app-img" />
                        </div>
                        <h3 className="footer__heading">Website cùng tập đoàn</h3>
                        <div className="footer__download">
                            <img src="http://127.0.0.1:5500/img/dienmayxanh.png" className="footer__download-app-img" />
                            <img src="http://127.0.0.1:5500/img/bachhoaxanh.png" className="footer__download-app-img" />
                            <img src="http://127.0.0.1:5500/img/topzone.png" className="footer__download-app-img" />
                            <img src="http://127.0.0.1:5500/img/ava.png" className="footer__download-app-img" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer__bottom">
                <div className="grid">
                    <p className="footer__text">
                        © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.
                    </p>
                    <p className="footer__text">
                        Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt.
                        <a href="https://www.thegioididong.com/thoa-thuan-su-dung-trang-mxh  ">Xem chính sách sử dụng</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;