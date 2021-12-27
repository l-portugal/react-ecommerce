import React from 'react'
import { Col, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import db from '../../app/db/db'

import { toast } from 'react-toastify';

const iconCart = <FontAwesomeIcon icon={faShoppingCart} />

const styles = {
  fontSize: '16px',
  textAlign: 'center',
}

const stylesImg = {
  height: '100px',
  width: '30%',
  margin: '0 auto',
  marginTop: '10px'
}

export const Product = ({ item }) => {

  const { title, price, image } = item

  const addProductCart = (product) => {
    db.cart.add({
      title: product.title,
      price: product.price,
      category: product.category
    })

    notify(`AGREGADO: ${product.title}`)

  }

  const notify = (msg) => toast.success(msg);

  return (

    <Col xs={6} md={3} style={{ marginTop: '30px' }} >
      
      <Card style={{ height: '100%' }}>

        <Card.Img variant="top" src={image} style={stylesImg} />

        <Card.Body style={styles}>
          <Card.Title className="text-muted" style={styles}>{title.toUpperCase()}</Card.Title>
        </Card.Body>

        <Card.Footer>
          Precio: <strong> {price} $ </strong>
          <hr />
          <Button variant="secondary" className="btn-sm" onClick={() => addProductCart(item)}> {iconCart} Agregar </Button>

        </Card.Footer>

      </Card>

    </Col>

  )

}