
const Input = (props) => {
    return (
        <div className="manage__content-form form-group col-6">
            <label>{props.name}</label>
            <input
                onChange={(e) => props.setUseState(e.target.value)}
                type="text" className="form-control" />
        </div>

    );
}

export default Input;