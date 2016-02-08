import React from 'react';
import Hello from './component.jsx';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/docs/examples/starter-template.css';

function main() {
    React.render(<App />, document.getElementById('app'));
}

const navbarInstance = (
  //<h1>Hello world4</h1>
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

class App extends React.Component {
  render() {
      return navbarInstance;
  }
}

main();
