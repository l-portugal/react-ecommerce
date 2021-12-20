import React, { Component } from 'react'
import { Col, Card, Button } from "react-bootstrap";

const styles = {
  fontSize: '16px',
  textAlign: 'center',
}

const stylesImg = {
  height: '100px',
  width: '40%',
  margin: '0 auto',
  marginTop: '10px'
}

export const Product = ({ item }) => {

  const { title, price, image } = item

  return (

    <Col xs={6} md={3} style={ {marginTop: '30px'} } >
      
      <Card style={ { height:'100%' } }> 

        <Card.Img variant="top" src={image}  style={stylesImg} />

        <Card.Body style={styles}>
          <Card.Title className="text-muted" style={styles}>{ title.toUpperCase() }</Card.Title>
        </Card.Body>

        <Card.Footer> 
          Precio: <strong> {price} $ </strong>
          <hr/>
          <Button variant="secondary">VER MÁS </Button> 
        </Card.Footer>

      </Card>

    </Col>
    
  )

}