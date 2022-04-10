
const Select = (props) => {
    return (
        <div className="manage__content-form form-group col-6">
            <label className="manage__content-label">{props.name}</label>
            <select
                onChange={(e) => props.setUseState(e.target.value)}
                value={props.value}
                className="form-select">
                {props.selectArr && props.selectArr.length > 0 && props.selectArr.map((item, index) => {
                    return (
                        <option key={index} value={item.keyMap}>{item.valueVi}</option>
                    )
                })}
            </select>
        </div>

    );
}

export default Select;