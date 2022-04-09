const Post = (props) => {
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
            <div className='post__content'> </div>
        </div>
    );
}

export default Post;