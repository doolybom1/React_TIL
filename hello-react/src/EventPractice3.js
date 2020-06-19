import React, { Component } from 'react';

/*
  새 메서드를 만들때마다 constructor을 수정해야하는 불편함이 있기 때문에 좀더 간단한
  바벨의 transform-class-properties 문법의 화살표 함수 형태로 메서드 정의
*/
class EventPractice3 extends Component {
  // onChange, onClick에 전달한 함수를 따로 빼서 컴포넌트 메서드로 만들기
  state = {
    username: '',
    message: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트3</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice3;
