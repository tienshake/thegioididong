import { AiOutlineDropbox } from "react-icons/ai";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
const Policy = () => {
    return (
        <div className="policy">
            <div className="policy__list">
                <div className="policy__top">
                    <div className="policy__item">
                        <MdOutlinePublishedWithChanges className='icon' />
                        <p>Hư gì đổi nấy <b>12 tháng</b>  tại 3079 siêu thị toàn quốc (miễn phí tháng đầu) <a></a>
                            <a >Xem chi tiết</a>
                        </p>
                    </div>
                    <div className="policy__item">
                        <BsShieldFillCheck className='icon' />
                        <p>Hư gì đổi nấy <b>12 tháng</b>  tại 3079 siêu thị toàn quốc (miễn phí tháng đầu) <a></a>
                            <a >Xem chi tiết</a>
                        </p>
                    </div>

                </div>
                <div className="policy__bottom">
                    <div className="policy__item">
                        <AiOutlineDropbox className='icon' />
                        <p>Hư gì đổi nấy <b>12 tháng</b>  tại 3079 siêu thị toàn quốc (miễn phí tháng đầu) <a></a>
                            <a >Xem chi tiết</a>
                        </p>
                    </div>
                    <div className="policy__item">

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Policy;