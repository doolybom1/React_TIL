import {useReducer} from 'react';


// 커스텀 hook (ReducerInfo.js에서 분리)
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

export default function useInputs(initialForm){
    const [state,dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state, onChange]
};