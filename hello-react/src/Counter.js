import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          onClick={() => {
            // setState를 사용하여 새로운 값을 넣을 수 있음
            //this.setState({ number: number + 1 });
            this.setState({ number: this.state.number + 1 });

            /*
            this.setState(prevState => {
              return {
                number: prevState.number + 1,
              };
            });*/

            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +2
        </button>

        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

/*
class Counter extends Component {
  // constructor을 사용하여 컴포넌트 state 작성
  constructor(props) {
    super(props);

    // state 초깃값 설정
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            // setState를 사용하여 새로운 값을 넣을 수 있음
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
*/
export default Counter;
