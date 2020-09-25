import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page from './Page';
import * as serviceWorker from './serviceWorker';
import NumberList from './NumberList';
import Blog from './Blog';
import NameForm from './NameForm';
import Reservation from './Reservation';
import Calculator from './Calculator';



const posts = [
  {id : 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id : 2, title: 'Installation', content: 'You can install React from npm.'}

];
const numbers = [1,2,3,4,5];
const message = ['react', 'Re:React'];
ReactDOM.render(
  <React.StrictMode>
   <App unreadMessages={message}/>
    <Page />
    <NumberList numbers={numbers}/>
    <Blog posts={posts} />
    <NameForm />
    <Reservation />
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
