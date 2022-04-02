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
                        <img src="https://cdn.tgdd.vn/2022/03/banner/A1323-800-200-800x200.png" />
                    </div>
                    <div className="item-slide">
                        <img src="https://cdn.tgdd.vn/2022/03/banner/reno7-800-200-800x200-2.png" />
                    </div>
                    <div className="item-slide">
                        <img src="https://cdn.tgdd.vn/2022/03/banner/S22-800-200-800x200-5.png" />
                    </div>
                    <div className="item-slide">
                        <img src="https://cdn.tgdd.vn/2022/03/banner/800x200-800x200-6.png" />
                    </div>
                    <div className="item-slide">
                        <img src="https://cdn.tgdd.vn/2022/03/banner/redmi10c-800-200-800x200.png" />
                    </div>
                    <div className="item-slide">
                        <img src="https://cdn.tgdd.vn/2022/03/banner/800-200-800x200-86.png" />
                    </div>

                </Carousel>
            </div>
            <div className="banner__right">
                <div className="banner__right-top"
                    style={{
                        backgroundImage: `url(${'https://cdn.tgdd.vn/2022/02/banner/samsung-390-97-390x97.png'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div className="banner__right-bottom"
                    style={{
                        backgroundImage: `url(${'https://cdn.tgdd.vn/2022/03/banner/sticky-A15s-390x97.png'})`,
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