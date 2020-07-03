import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import ReducerCounter from './ReducerCounter';
import ReducerInfo from './ReducerInfo';
import Average from './Average';

function App() {
  const [visable, setVisable] = useState(false);

  return (
    <div className="App">
        <button onClick={() => {
          setVisable(!visable);
        }}>{visable ? '숨기기' : '보이기'}</button>
        <hr/>
         {visable && <Info />}
         {!visable && <Counter />}
        <p></p>
        <p></p>
        <p></p>
        <ReducerCounter/>
        <div>
          <ReducerInfo />
        </div>
        <div>
          <Average />
        </div>
    </div>

  );
}

export default App;
