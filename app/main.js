import React from 'react';

import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';

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

        <Grid>
          <PageHeader>title here</PageHeader>

          <ListGroup>
            <ListGroupItem>Item 1</ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
          </ListGroup>

        </Grid>

      </div>
    );
  }
}

main();
