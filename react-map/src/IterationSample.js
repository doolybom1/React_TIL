import React from 'react';

const IterationSample = () => {
    const names = ['REACT','VUE','JAVA','C'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    return (
        <ul>
           {nameList}

        </ul>
    );
};

export default IterationSample;