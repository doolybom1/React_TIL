import React from 'react';
import useInputs from './useInputs';

// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name] : action.value
//     }
// }

const ReducerInfo = () => {

    const [state,  onChange] = useInputs({
        name: '',
        nickname: ''
    });
    // const [ state ,dispatch] = useReducer(reducer, { name : '', nickname : ''})

    const {name, nickname} = state;
    // const onChange = e => {
    //     dispatch(e.target);
    // };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                이름 : {name}
                </div>
                <div>
                닉네임 : {nickname}
                </div>
            </div>
        </div>
    );
};

export default ReducerInfo;