
import { AiFillDelete } from "react-icons/ai";
const ImagePreview = (props) => {
    return (
        <div className='row preview-upload'>
            <div className="manage__content-form col-12">
                <label className="manage__content-label">{props.name}</label>
                <input
                    id={props.id} hidden className="form-control-file" type='file'
                    onChange={(e) => props.setUseState(e)}
                />
                <label htmlFor={props.id} className="label-upload" >{props.icon}</label>
                <div className="preview"
                    style={{
                        backgroundImage: `url(${props.image.previewImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                {props.image.previewImg &&
                    <AiFillDelete
                        onClick={props.handleDeletePreviewImage}
                        className='deleteImage' />
                }

            </div>
        </div>

    );
}

export default ImagePreview;