import React, { useState } from 'react';

// 데이터 삭제
const IterationSample3 = () => {
    const [names, setNames] = useState([
        { id : 1, text: '리액트'},
        { id : 2, text: '뷰'},
        { id : 3, text: '자바'}, 
        { id : 4, text: '씨'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목 추가할때 사용하는 id
    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    const onChange = e => {
        setInputText(e.target.value)
    }

    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    return (
        <div>
            <ul>
                <input value={inputText} onChange={onChange}/>
                <button onClick={onClick}>추가</button>
                {nameList}
            </ul>
        </div>
    );
};

export default IterationSample3;