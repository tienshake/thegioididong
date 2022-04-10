
const EditInput = (props) => {
    return (
        <td
            onClick={(e) => props.handleClick(e, props.type, props.index)}
            style={{ cursor: 'pointer' }}
        >
            {props.stateInput === props.type && props.index === props.indexOf
                ?
                <>
                    <input
                        type="text"
                        value={props.item}
                        style={{ width: '100px' }}
                    />
                    <a
                        onClick={props.handleClickOutInput}
                        className="delete"
                    ><i className="material-icons">&#xE5C9;</i></a>
                </>
                :
                `${props.item}`
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