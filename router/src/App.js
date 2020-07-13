import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import History from './History';
import Profiles from './Profiles';

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
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">history</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path='/' component={Home} exact='true'/>
        <Route path={['/about', '/about2']} component={About} />
        <Route path='/profiles' component={Profiles} />
        <Route path='/history' component={History} />
        <Route render={ ({location}) => (
          <div>
            <h2>페이지가 존재하지 않습니다</h2>
            <p>{location.pathname}</p>
          </div>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
