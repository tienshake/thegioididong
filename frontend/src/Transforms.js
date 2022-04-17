import { createTransform } from 'redux-persist';

const SetTransform = createTransform(

    // transform state trước khi nó được serialize và lưu 
    (inboundState, key) => {
        // convert mySet thành một mảng.
        return { ...inboundState, mySet: [...inboundState.mySet] };
    },

    // transform state đang được phục hồi
    (outboundState, key) => {
        // convert mySet trở lại thành Set.
        return { ...outboundState, mySet: new Set(outboundState.mySet) };
    },

    // định nghĩa reducer nào sẽ áp dụng transform này.
    { whitelist: ['someReducer'] }
);

export default SetTransform;