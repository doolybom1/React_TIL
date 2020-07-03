import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log("평균값 계산중");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce( (a,b) => a + b );
    return sum / numbers.length;
}


const Average = () => {
    const [list ,setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEI = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEI.current.focus();
    }, [list, number]); // list or number가 바뀔때에만 함수 생성

    // list 가 업데이트 될때만 getAverage를 호출하게 된다.
    const avg = useMemo( () => getAverage(list), [list] )

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEI}/>
            <button onClick={onInsert}>등록</button>        
            <ul>
                {list.map( (value,index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 :</b> {avg}
            </div>
       </div>
    );
};

export default Average;