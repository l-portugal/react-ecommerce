import React from 'react'
import logo from '../logo.svg'
import storeConfig from '../data/storeConfig.json'
import { ListCategories } from './Categories/ListCategories'
import { CartModal } from './Cart/CartModal'
import { Row, Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { ToastContainer, Slide } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const HeaderApp = () => {
  return (
    <>
      <Row style={{ marginBottom: '100px' }}>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Navbar.Brand href="#">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                {storeConfig.name}
              </Navbar.Brand>
            </Link>

            <Nav>

              <ListCategories />

              <CartModal />
              
            </Nav>

          </Container>
        </Navbar>
      </Row>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </>
  )
}