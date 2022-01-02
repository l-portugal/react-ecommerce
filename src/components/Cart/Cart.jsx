import React, { useState }  from 'react'
import { CartItem } from './CartItem'
import { Button, Modal, Badge, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import db from '../../app/db/db'
import { useLiveQuery } from 'dexie-react-hooks'

const iconCart = <FontAwesomeIcon icon={faShoppingCart} />
const iconDeleteCart = <FontAwesomeIcon icon={faTrash} />
const iconPayCart = <FontAwesomeIcon icon={faCreditCard} />

const styleCart = {
  color: '#fff'
}

export const Cart = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCart = useLiveQuery (
    () => db.cart
      .toArray()
  );

  const getTotalPrice = () => {
    const totalPrice = productsCart?.reduce( (totalPrice, nextProduct) => totalPrice + nextProduct.price , 0);
    return totalPrice?.toFixed(2);
  }

  const getTotalProducts = () => {
    return productsCart?.length;
  }

  const clearCart = () => {
    db.cart.clear()
  }  

  return(
    <>
      <a href="/#" style={styleCart} onClick={handleShow}> 
        { iconCart } 
        <Badge bg="warning" text="dark"> { getTotalProducts() } </Badge>
      </a>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>

          <div style={{width:'100%'}}>
            <Button variant="danger" className="btn-sm float-end" onClick={clearCart}>
              {iconDeleteCart} Vaciar
            </Button>
          </div>

        </Modal.Header>
        <Modal.Body>

        <div>
          <Table hover responsive="md" >
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>

              { 
                productsCart?.map((product, index) => 
                  <CartItem index={index} id={product.id} title={product.title} price={product.price} category={product.category} />
                )
              }
              
            </tbody>
            <tfoot>
            <tr>
                <td> <h4>TOTAL</h4> </td>
                <td colSpan="3"> <h4 className="float-end">$ { getTotalPrice() } </h4> </td>
              </tr>
            </tfoot>
          </Table>
        </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            { iconCart } {' '}
            Seguir comprando
          </Button>
          <Button variant="primary" onClick={handleClose}>
            { iconPayCart } {' '}
             Pagar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )

}