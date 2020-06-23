import React, { Component } from 'react';
import './css/ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
   this.input.focus()
  };


  render() {
    return (
        <div>
            <input
                 /* 
                    DOM에 직접 접근할 때 ref 사용 (아래는 가장 기본적인 사용방법인 콜백함수를 사용)
                    - 특정 input에 포커스 주기
                    - 스크롤 박스 조작하기
                    - Canvas 요소에 그림 그리기 등
                    this.input 은 input 요소의 DOM을 가리키게 된다. ref의 이름은 사용자가 알아서 지정 (ex. this.test = ref)
                 */
                ref={(ref) => {this.input=ref}} 
                type="password"
                value={this.state.password}
                onChange = {this.handleChange}
                className = {this.state.clicked ? (this.state.validated) ? 'success' : 'failure' : ''}
            />
            <button onClick={this.handleButtonClick}>검증하기</button>
        </div>
    );
  }
}

export default ValidationSample;
