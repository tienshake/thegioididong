import NumberFormat from "react-number-format";
import React, { useEffect, useState } from 'react';

const NumberInput = (props) => {
    const handleCovertPrice = (values) => {
        props.setPrice(values.formattedValue)
    };
    return (
        <NumberFormat
            value={props.value}
            displayType="input"
            thousandSeparator={true}
            onValueChange={(values) => handleCovertPrice(values)}
            className="form-control"
        />
    );
}

export default NumberInput;