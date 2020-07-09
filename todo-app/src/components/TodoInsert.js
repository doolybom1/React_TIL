import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; // react 아이콘 import
import './TodoInsert.scss';


const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback( e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback( e => {
        onInsert(value);
        setValue('');
        e.preventDefault(); // 새로고침 방지
    },[onInsert, value]);

    return (
        // onSubmit enter를 눌렀을때에도 이벤트 발생
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할일 입력" value={value} onChange={onChange}/>
            <button type="submit">
                <MdAdd />                
            </button>
        </form>
    );
};

export default TodoInsert;