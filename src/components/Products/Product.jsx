import React from 'react'
import { ButtonAddProduct } from './ButtonAddProduct'
import { Col, Card, Button } from "react-bootstrap"

import { Link } from 'react-router-dom'

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

  const { title, price, image, id } = item

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
          <ButtonAddProduct className="btn-sm" product={item}/>
          {'  '}
          <Link to={`/product/${id}`}>
            <Button variant="secondary" className="btn-sm"> Ver detalles </Button>
          </Link>
        </Card.Footer>

      </Card>

    </Col>

  )

}