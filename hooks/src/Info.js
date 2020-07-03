import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickName] = useState('');

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    })

    // useEffect(() => {
    //     console.log(name);
    //     // console.log({name,nickname});
    // }, [name]); // name 값이 바뀔때만 특정 작업수행


    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickName}/>
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

export default Info;