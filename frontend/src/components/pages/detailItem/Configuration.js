const Configuration = (props) => {
    return (
        <div className='wrap__configuration'>
            <div className='title__configuration'><p><h5>Cấu hình điện thoại {props.product.nameItem} {props.product.rom}</h5></p></div>

            <div className='body__configuration'>
                <div className='row item__configuration'>
                    <div style={{ background: '#F5F5F5' }} className='col-xl-5'><p>Màn hình:</p></div>
                    <div style={{ background: '#F5F5F5' }} className='col-xl-7'>
                        <p>{props.product.display && props.product.displayData && props.product.displayData.valueVi}</p>
                    </div>
                </div>

                <div className='row item__configuration'>
                    <div className='col-xl-5'><p>Hệ điều hành:</p></div>
                    <div className='col-xl-7'><p>{props.product.hdh}</p></div>
                </div>

                <div className='row item__configuration'>
                    <div style={{ background: '#F5F5F5' }} className='col-xl-5'><p>Camera sau:</p></div>
                    <div style={{ background: '#F5F5F5' }} className='col-xl-7'>
                        <p>{props.product.cameraData && props.product.cameraData && props.product.cameraData.valueVi}</p>
                    </div>
                </div>

                <div className='row item__configuration'>
                    <div className='col-xl-5'><p>Camera trước:</p></div>
                    <div className='col-xl-7'><p>2 MP</p></div>
                </div>

                <div className='row item__configuration'>
                    <div style={{ background: '#F5F5F5' }} className='col-xl-5'><p>Chip:</p></div>
                    <div style={{ background: '#F5F5F5' }} className='col-xl-7'><p>{props.product.chip}</p></div>
                </div>

                <div className='row item__configuration'>
                    <div className='col-xl-5'><p>RAM:</p></div>
                    <div className='col-xl-7'><p>{props.product.ram}</p></div>
                </div>

                <div className='row item__configuration'>
                    <div style={{ background: '#F5F5F5' }} className='col-xl-5'><p>Bộ nhớ trong:</p></div>
                    <div style={{ background: '#F5F5F5' }} className='col-xl-7'><p>{props.product.rom}</p></div>
                </div>

                <div className='row item__configuration'>
                    <div className='col-xl-5'><p>SIM:</p></div>
                    <div className='col-xl-7'><p>1 Nano SIM & 1 eSIMHỗ trợ 5G</p></div>
                </div>

                <div className='row item__configuration'>
                    <div style={{ background: '#F5F5F5' }} className='col-xl-5'><p>Pin, Sạc:</p></div>
                    <div style={{ background: '#F5F5F5' }} className='col-xl-7'>
                        <p>{props.product.pinData && props.product.pinData && props.product.pinData.valueVi}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Configuration;