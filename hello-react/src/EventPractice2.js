import React, { Component } from 'react';

class EventPractice2 extends Component {
  // onChange, onClick에 전달한 함수를 따로 빼서 컴포넌트 메서드로 만들기
  state = {
    message: '',
  };

  constructor(props) {
    super(props);
    // 함수 바인딩(html 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊김을 방지)
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트2</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice2;
