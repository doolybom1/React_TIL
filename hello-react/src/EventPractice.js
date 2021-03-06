import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };
  render() {
    return (
      <div>
        <h1>이벤트</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          // e : SyntheticEvent 웹브라우저의 네이티브 이벤트를 감싸는 객체
          onChange={(e) =>
            this.setState({
              message: e.target.value,
            })
          }
        ></input>
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
