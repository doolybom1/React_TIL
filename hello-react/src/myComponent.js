import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      제 이름은 {props.name} 입니다.
      <br />
      {props.children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;
