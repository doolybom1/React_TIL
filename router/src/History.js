import React, { Component } from 'react';

class History extends Component {

    handleGoBack = () =>{
        this.props.history.goBack();
    }

    handleGoHome = () =>{
        this.props.history.push('/');
    }

    componentDidMount(){
        this.unblock = this.props.history.block('이동 할까요?');
    }

    componentWillUnmount(){
        if(this.unblock){
            this.unblock();
        }
    }


    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈</button>
            </div>
        );
    }
}

export default History;