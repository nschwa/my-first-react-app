import React, { Component } from 'react';
import EntryList from './EntryList';
import EntryInput from './EntryInput';
import firebase from './firebase';

class Dashboard extends Component {
  // items;

  constructor(props) {
    super(props);
    this.state = {
      entryItems: []
    };

    this.addNewEntry = this.addNewEntry.bind(this);
    this.onDelete    = this.onDelete.bind(this);
    this.onUpdateEntry = this.onUpdateEntry.bind(this);
  }


  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name
        });
      }
      this.setState({
        entryItems: newState
      });
    });
  }


  onDelete(index) {
    console.log(this.state);
    let entries = this.state.entryItems;
    entries.splice(index, 1);
    this.setState({
      entryItems: entries
    })
  }

  addNewEntry(entry) {
    const itemsRef = firebase.database().ref('items');
    const item = { name: entry }
    itemsRef.push(item);
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
