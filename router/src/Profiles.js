import React from 'react';
import { Link,NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

// NavLink style 적용가능 Link는 불가
const Profiles = () => {
    const style = {
        background: 'black',
        textDecoration: 'none',
        color: 'white'
    }
   
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={style} to="/profiles/velopert" >
            velopert
          </NavLink>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:user" component={Profile} />
      
    </div>
  );
};

export default Profiles;