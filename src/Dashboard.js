import React, { Component } from 'react';
import EntryList from './EntryList';
import EntryInput from './EntryInput';

class Dashboard extends Component {
  entryItems = [
    {name: "Bryan Cranston"},
    {name: "Aaron Paul"},
    {name: "Bob Odenkirk"},
    {name: "John Doe"}
  ];

  // items;

  constructor(props) {
    super(props);
    this.state = {
      entryItems: this.entryItems
    };

    this.addNewEntry = this.addNewEntry.bind(this);
    this.onDelete    = this.onDelete.bind(this);
    this.onUpdateEntry = this.onUpdateEntry.bind(this);
  }

  componentWillMount() {

  }

  onDelete(index) {
    let entries = this.state.entryItems;
    entries.splice(index, 1);
    this.setState({
      entryItems: entries
    })
  }

  addNewEntry(entry) {
    let newEntry = {name: entry}
    let entries = this.state.entryItems;
    entries.push(newEntry);
    this.setState({
      entries: entries
    });
  }

  onUpdateEntry(index, newValue) {
    let entries = this.state.entryItems;
    entries[index] = {name: newValue};
    this.setState({
      entryItems: entries
    })
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <EntryInput onSubmit={this.addNewEntry} entries={this.state.entryItems} />
        <EntryList  entries={this.state.entryItems} onDelete={this.onDelete} onUpdateEntry={this.onUpdateEntry} />
      </div>
    );
  }

}

export default Dashboard;
