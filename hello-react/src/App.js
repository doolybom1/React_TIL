import React from 'react';
import Counter from './Counter';
import Say from './Say';
import MyComponent from './myComponent';
import EventPracticeFuc from './EventPracticeFuc';
import ValidationSample from './ValidationSample';
import RefSample from './RefSample';
import ScrollBox from './ScrollBox';

const App = () => {
  return (
    <div>
      <MyComponent name="이의재" favoriteNumber={7} />
      <p />
      <Counter />
      <p />
      <Say />
      <p />
      <EventPracticeFuc />
      <p/>
      <ValidationSample />
      <p/>
      <RefSample/>
      <p/>
      <ScrollBox />
    </div>
  );
};

export default App;
