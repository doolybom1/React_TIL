import React from 'react';
import Counter from './Counter';
import Say from './Say';
import MyComponent from './myComponent';
import EventPracticeFuc from './EventPracticeFuc';

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
    </div>
  );
};

export default App;
