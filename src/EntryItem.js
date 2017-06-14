import React, { Component } from 'react';

class EntryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      inputValue: this.props.name
    };
    this.onDelete = this.onDelete.bind(this);
    this.inputSwitch = this.inputSwitch.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onUpdateEntry = this.onUpdateEntry.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  }

  toggleEditMode() {
    this.setState((prevState) => {
      return {
        editMode: !prevState.editMode
      }
    })
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  onUpdateEntry() {
    this.props.onUpdateEntry(this.props.index, this.state.inputValue);
    this.toggleEditMode();
  }

  checkSubmit(e) {
    if (e.nativeEvent.key === 'Enter') {
      this.onUpdateEntry();
    };
  }

  inputSwitch() {
    if (!this.state.editMode) {
      return <span onClick={this.toggleEditMode}>{this.props.index+1}: {this.props.name}</span>
    } else {
      return (
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            onChange={this.onInputChange}
            onKeyUp={this.checkSubmit}
            onBlur={this.onUpdateEntry}
            value={this.state.inputValue}
            className="mdl-textfield__input" type="text" />
        </div>
      )
    }
  }

  onDelete() {
    this.props.onDelete(this.props.index);
  }

  render() {
    return (
      <li className="mdl-list__item">
        <span className="mdl-list__item-primary-content">
          <i className="material-icons mdl-list__item-icon">person</i>
          {this.inputSwitch()}
          <span className="mdl-list__item-secondary-action">
            <button onClick={this.onDelete} className="mdl-button mdl-js-button">
              <i className="material-icons">delete</i>
            </button>
          </span>
        </span>
      </li>
    );
  }

}

export default EntryItem;
