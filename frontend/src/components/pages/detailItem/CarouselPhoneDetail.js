import { Carousel } from 'react-responsive-carousel';

const CarouselPhoneDetail = (props) => {
    return (
        <>
            <div className="carousel">
                <Carousel className="home-slide"
                    autoPlay={true}
                    showArrows={true}
                    infiniteLoop={true}
                    interval={2000}
                    stopOnHover={false}
                    showThumbs={true}
                    showStatus={false}
                    showIndicators={true}
                >
                    {
                        props.photoDetail && props.photoDetail.length > 0 ? props.photoDetail.map((item, index) => {
                            return (
                                <div className="item-slide" key={index}>
                                    <img src={item.image} alt='' />
                                </div>
                            )
                        })
                            :
                            <div className="item-slide">
                                <img src="https://www.idtek.com.vn/media/image-not-found.jpeg" alt='' />
                            </div>
                    }
                </Carousel>
            </div>
            <div className="view__more"><span>Xem tất cả điểm nổi bật</span><span>({props.photoDetail && props.photoDetail.length})</span></div>

        </>
    );
}

export default CarouselPhoneDetail;