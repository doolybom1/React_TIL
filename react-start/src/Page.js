import React, { Component } from 'react';
import "./Page.css"

function WarningBanner(props){
    if(!props.warn){
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends Component {
    constructor(props){
        super(props);
        this.state ={showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState( preState => ({
            showWarning : !preState.showWarning
        }));
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'HIDE' : 'SHOW'}
                </button> 
            </div>
        );
    }
}

export default Page;