import React, { useState, useEffect } from 'react'
import { Cart } from './Cart'
import { getProductsCart, deleteCart } from '../../app/services/cartService'
import { Button, Modal, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const iconCart = <FontAwesomeIcon icon={faShoppingCart} />
const iconDeleteCart = <FontAwesomeIcon icon={faTrash} />
const iconPayCart = <FontAwesomeIcon icon={faCreditCard} />

const styleCart = {
  color: '#fff',
  marginTop: '7%',
  marginLeft: '15px'
}

const badgeStyle = { 
  fontSize: '10px', 
  marginTop: '0', 
  position: 'absolute'
}

export const CartModal = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [productsCart, setProductsCart] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  
  useEffect( () => {
    getProductsCart()
      .then( (productsCart) => { 
                setProductsCart(productsCart); 
                setTotalProducts(productsCart.length) 
      })
      .catch( (err) => { console.log(err)} )
  },[productsCart] )

  return (
    <>
      <a href="#" style={styleCart} onClick={handleShow}>
        {iconCart}
        <Badge bg="warning" text="dark" style={ badgeStyle }> { totalProducts } </Badge>
      </a>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>

          <div style={{ width: '100%' }}>
            <Button variant="danger" className="btn-sm float-end" onClick={deleteCart}>
              {iconDeleteCart} Vaciar
            </Button>
          </div>

        </Modal.Header>
        <Modal.Body>

          <div>
            <Cart closeModal={ () => handleClose() } />
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button variant="secondary" onClick={handleClose}>
              {iconCart} {' '}
              Seguir comprando
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="primary" onClick={handleClose}>
              {iconPayCart} {' '}
              Pagar
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )

}