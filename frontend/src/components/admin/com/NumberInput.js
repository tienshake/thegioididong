import NumberFormat from "react-number-format";


const NumberInput = (props) => {
    return (
        <NumberFormat
            value={props.value}
            displayType="input"
            thousandSeparator={true}
            onValueChange={(values) => props.handleCovertPrice(values)}
            className="form-control"
        />
    );
}

export default NumberInput;