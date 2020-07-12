import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    // exact를 true로 설정하여야 /about 으로 접속할때 about의 내용만 나오게 된다.
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr/>
      <Route path='/' component={Home} exact='true'/>
      <Route path='/about' component={About} />
    </div>
  );
}

export default App;
