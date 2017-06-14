import React, { Component } from 'react';

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      number:  0
    }
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
      number: prevState.number + 1
    }));
  }

  render() {
    return(
      <div className="text-center">
        <h2>Hello, {this.props.name}!</h2>
        <p>nummer: {this.state.number}</p>
        <button className="btn btn-primary btn-lg" onClick={this.buttonClicked}>{this.state.clicked ? "off": "on"}</button>
      </div>
    )
  }
}

export default MyClass;
