const Quantity = (props) => {

    const handleOnChangeInput = (e) => {
        if (e.target.value) {
            props.setQuantity(e.target.value)

        } else {
            props.setQuantity(props.quantityItem)
        }

    };
    const handleOnClickMinus = (e) => {
        if (props.quantity > 1) {
            props.setQuantity((prev) => {
                prev--
                return prev
            })
        }
    };
    const handleOnClickPlus = (e) => {
        if (props.quantity < +props.quantityItem) {
            props.setQuantity((prev) => {
                prev++
                return prev
            })
        }
    };
    const check = (type) => {
        let color = ''
        if (props.quantity === 1 && type === 'minus') {
            color = '#cccccc'
        }
        if (props.quantity === +props.quantityItem && type === 'plus') {
            color = '#cccccc'

        }
        return color
    }
    return (
        <div className="cart__item-right">
            <div className="minus"
                style={{
                    color: `${check('minus')}`
                }}
                onClick={handleOnClickMinus}
            >-</div>
            <input type="text"
                value={props.quantity}
                onChange={(e) => handleOnChangeInput(e)}
            />
            <div className="plus"
                style={{
                    color: `${check('plus')}`
                }}
                onClick={handleOnClickPlus}
            >+</div>
        </div>
    );
}

export default Quantity;