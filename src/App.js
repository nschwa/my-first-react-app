import React, { Component } from 'react';
import PageHeader from './PageHeader';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <main className="mdl-layout__content">
          <div className="main-content">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
