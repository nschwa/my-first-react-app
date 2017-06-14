import React, { Component } from 'react';
import EntryItem from './EntryItem';

class EntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createList = this.createList.bind(this);
  }

  createList() {
    return this.props.entries.map((entry, index) => {
      return (
        <EntryItem
          itemId={entry.id}
          name={entry.name}
          onDelete={this.props.onDelete}
          onUpdateEntry={this.props.onUpdateEntry}
          key={index.toString()} />)
    });
  }


  render() {
    return (
      <div>
        <ul className="demo-list-icon mdl-list">
          {this.createList()}
        </ul>
      </div>
    );
  }

}

export default EntryList;
