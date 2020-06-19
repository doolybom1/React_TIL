import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: 0,
  };
  static propTypes = {
    name: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        제 이름은 {name} 입니다.
        <br />
        {children}
        <br />
        좋아하는 숫자는 ? {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;
/*
const MyComponent = (props) => {
  // 비구조화 할당문법(구조 분해 문법)을 사용하여 내부값을 바로 추출
  const { name, children } = props;
  return (
    <div>
      제 이름은 {name} 입니다.
      <br />
      {children}
    </div>
  );
};
*/

/*
const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      제 이름은 {name} 입니다.
      <br />
      {children}
      <br />
      좋아하는 숫자는 ? {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.number.isRequired,
};
*/
