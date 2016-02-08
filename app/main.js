import React from 'react';

import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

function main() {
  React.render(<App/>, document.getElementById('app'));
}

class ProductOffer extends React.Component {
  render() {
    return (
      <ListGroupItem>
        <Grid>
          <Row>
            <Col xs={2}><strong>{this.props.itemName}</strong></Col>
            <Col>{this.props.stats}</Col>
          </Row>
        </Grid>
      </ListGroupItem>
    );
  }
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
          <Row>
            <PageHeader>
              title here
              <small> smaller text</small>
            </PageHeader>
          </Row>

          <Row>
          <ListGroup>
            <ProductOffer itemName={'item name'} stats={'misc stats'}/>
            <ProductOffer itemName={'item 2'} stats={'misc stats 2'}/>
            <ProductOffer itemName={'...'} stats={'...'}/>
          </ListGroup>
          </Row>

        </Grid>

      </div>
    );
  }
}

main();
