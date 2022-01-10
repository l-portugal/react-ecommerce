import React from "react";
import { Cart } from "../components/Cart/Cart";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const CartView = () => (
  <Container>
    <Row>
      <Col md={8}>
        <Cart/>
      </Col>
      <Col md={ {span: 3, offset: 1} }>
        <Card>
          <Card.Header>{'Resumen'}</Card.Header>
          <Card.Body>
            <Button variant="secondary"> Finalizar compra</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)