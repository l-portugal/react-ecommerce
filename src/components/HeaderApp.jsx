import React from 'react'
import logo from '../logo.svg'
import storeConfig from '../data/storeConfig.json'
import { Row, Navbar, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const iconCart = <FontAwesomeIcon icon={faShoppingCart} />

const styleCart = {
  color: '#fff'
}

export const HeaderApp = () => {
  return (
    
      <Row>
        <Navbar bg="dark" variant="dark">
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
              <a href="#" style={styleCart}> { iconCart } </a>
            </div>
            
          </Container>
        </Navbar>
      </Row>
    
  )
}