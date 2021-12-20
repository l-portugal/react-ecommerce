import React from 'react'
import logo from '../logo.svg'
import { Row, Col, Navbar, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import storeConfig from '../data/storeConfig.json'

const styles = {
  marginTop: '40px',
  background: '#e3e3e3',
  height: '100px'
}

const styleLogo = {
  margin: '0 auto',
  display: 'block'
}

const styleContact = {
  textAlign:'left', 
  marginTop:'10px'
}

const currentYear = new Date().getFullYear();

export const FooterApp = () => {
  return (
    <div>
      
      <Row style={styles}>
        <Container>
          <Col xs={ {span:11, offset: 1} } md={ {span:3, offset: 2} } style={ styleContact }>
            <FontAwesomeIcon icon={faEnvelope} /> { storeConfig.email } <br/>
            <FontAwesomeIcon icon={faPhone} /> { storeConfig.phone } <br/>
            <FontAwesomeIcon icon={faMapMarker} /> { storeConfig.address } <br/>
          </Col>
        </Container>
      </Row>
      
      <Row>
        <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#" style={styleLogo}>
                  <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className=""
                  />{' '}
                  &copy; {currentYear} - { storeConfig.name }
              </Navbar.Brand>
          </Container>
        </Navbar>
      </Row>
    
    </div>
  )
}