import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'

import AppNav from './nav.component.jsx'

import 'bootstrap/dist/css/bootstrap.css';

function main() {
  React.render(<App/>, document.getElementById('app'));
}

class App extends React.Component {
  render() {
    let navStyle = {borderRadius:"0px"} // remove rounded edges on navbar
    return (
      <div className="app">
      <Navbar inverse style={navStyle}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap test</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>

      <h1>title here</h1>
      </div>
    );
  }
}

main();
