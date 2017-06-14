import React, { Component } from 'react';

class PageHeader extends Component {

  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">My React App</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="/dashboard">Dashboard</a>
              <a className="mdl-navigation__link" href="/about">About</a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">My React App</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="/dashboard">Dashboard</a>
            <a className="mdl-navigation__link" href="/about">About</a>
          </nav>
        </div>
      </div>
    );
  }

}

export default PageHeader;
