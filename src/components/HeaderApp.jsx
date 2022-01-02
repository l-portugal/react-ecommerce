import React from 'react'
import logo from '../logo.svg'
import storeConfig from '../data/storeConfig.json'
import { Cart } from './Cart/Cart'
import { Row, Navbar, Container } from 'react-bootstrap'

export const HeaderApp = () => {
  return (
    
      <Row style={ {marginBottom: '100px'} }>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              { storeConfig.name }
            </Navbar.Brand>

            <div className="float-right">
              <Cart/>
            </div>
            
          </Container>
        </Navbar>
      </Row>
    
  )
}