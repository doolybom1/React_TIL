import React, { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    const [name, setName] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <p>현재 카운터 값: {value}</p>
            <button onClick={ () => setValue(value + 1) }>플러스</button>
            <button onClick={ () => setValue(value - 1) }>마이너스</button>
            <div>
                <input value={name} onChange={onChangeName}/> : {name}
            </div>
        </div>
    );
};

export default Counter;