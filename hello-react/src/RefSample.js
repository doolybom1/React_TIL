import React, { Component } from 'react';

class RefSample extends Component {
    /*
        ref를 만드는 다른 방법은 리액트 내장함수인 createRef() 함수를 사용 v16.3 ~
    */
    input = React.createRef(); 

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.input}/>           
            </div>
        );
    }
}

export default RefSample;