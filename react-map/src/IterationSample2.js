import React, { useState } from 'react';

const IterationSample2 = () => {
    const [names, setNames] = useState([
        { id : 1, text: '리액트'},
        { id : 2, text: '뷰'},
        { id : 3, text: '자바'}, 
        { id : 4, text: '씨'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목 추가할때 사용하는 id
    const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)
    
    return (
        <div>
            <ul>
            {nameList}
            </ul>
        </div>
    );
};

export default IterationSample2;