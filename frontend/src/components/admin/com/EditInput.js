import NumberInput from "./NumberInput";
import React, { useEffect, useState } from 'react';
import { createProductService } from "../../../services/userService";
const EditInput = (props) => {
    const [valueInput, setValueInput] = useState(props.value);
    // const fetch = async (e) => {
    //     const res = await createProductService({ ...props.item, price: price })
    //     if (res && res.errCode === 0) {
    //         setPrice(price)
    //         props.fetch()
    //     }
    // };
    const handleSaveEdit = (e) => {
        // fetch()
    };

    return (
        <td
            onClick={(e) => props.handleClick(e, props.type, props.index)}
            style={{ cursor: 'pointer' }}
            className="inputEdit"
        >
            {props.stateInput === props.type && props.index === props.indexOf
                ?
                <>
                    {props.type === 'price' ?
                        <NumberInput
                            value={valueInput}
                            setPrice={setValueInput}
                            style={{ width: '100px' }}
                        />
                        :
                        <input type="text"
                            style={{ width: '100px' }}
                            value={valueInput}
                            className="form-control"
                        />
                    }
                    <button
                        onClick={handleSaveEdit}
                    >lưu</button>
                    <a
                        onClick={props.handleClickOutInput}
                        className="delete"
                    ><i className="material-icons">&#xE5C9;</i></a>
                </>
                :
                `${props.value}`
            }
        </td>
    );
}

export default EditInput;


// const indexOf = users.indexOf(users[index])
// console.log('indexOf', indexOf);
// console.log('index', index)
// if (index === indexOf) {
//     console.log("double click");
//     setStateInput(type)
// }


{/* <EditInput
index={index}
handleClick={handleClick}
handleClickOutInput={handleClickOutInput}
stateInput={stateInput}
item={item.price}
type={'price'}
/> */}