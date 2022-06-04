import './Banner.scss';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="banner__container">
            <div className="banner__left">
                <Carousel className="home-slide"
                    autoPlay={true}
                    showArrows={true}
                    infiniteLoop={true}
                    interval={2000}
                    stopOnHover={false}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                >
                    <div className="item-slide">
                        <img src="https://cdn.tgdd.vn/2022/05/banner/xk-smart-800-200-800x200.png" />
                    </div>
                    <div className="item-slide">
                        <img src="https://cdn.tgdd.vn/2022/06/banner/xk-aseri-800-200-800x200.png" />
                    </div>
                    <div className="item-slide">
                        <img src="https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-3.png" />
                    </div>
                    <div className="item-slide">
                        <img src="https://cdn.tgdd.vn/2022/06/banner/xk-reno6-800-200-800x200.png" />
                    </div>
                    <div className="item-slide">
                        <img src="https://cdn.tgdd.vn/2022/06/banner/xk-reno6-800-200-800x200.png" />
                    </div>
                    <div className="item-slide">
                        <img src="https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-24.png" />
                    </div>

                </Carousel>
            </div>
            <div className="banner__right">
                <div className="banner__right-top"
                    style={{
                        backgroundImage: `url(${'https://cdn.tgdd.vn/2022/05/banner/sticky-sam-390-97-390x97.png'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div className="banner__right-bottom"
                    style={{
                        backgroundImage: `url(${'https://cdn.tgdd.vn/2022/05/banner/sticky-a95-390-97-390x97.png'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Banner;