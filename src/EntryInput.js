
import React, { Component } from 'react';

class EntryInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onBtnClick    = this.onBtnClick.bind(this);
    this.checkSubmit   = this.checkSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  onBtnClick() {
    if (this.state.inputValue.trim()) {
      this.props.onSubmit(this.state.inputValue)
      this.setState({
        inputValue: ""
      });
    }
  }

  checkSubmit(e) {
    if (e.nativeEvent.key === 'Enter') {
      this.onBtnClick();
    };
  }

  render() {
    return (
      <div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            className="mdl-textfield__input"
            type="text" id="sample3"
            ref="name"
            value={this.state.inputValue}
            onChange={this.onInputChange}
            onKeyUp={this.checkSubmit} />

          <label className="mdl-textfield__label">Please type in Entry</label>
        </div>
        <button onClick={this.onBtnClick} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
        Save
        </button>
      </div>
    );
  }

}

export default EntryInput;
