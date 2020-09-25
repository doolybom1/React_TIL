import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value});
    console.log({value:event.target.value});
  }

  handleSubmit(event){
    alert('favorite is ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return(
        <form onSubmit={this.handleSubmit}>
            <lable>
            Name:<textarea value={this.state.value} onChange={this.handleChange}></textarea>
            </lable>
            <input type='submit' value='submit' />
            
            <select multiple={true} value={this.state.value} onChange={this.handleChange}>
                <option value={["grapefruit","banana"]}>Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
        </form>
    );
  }
}

export default NameForm;
