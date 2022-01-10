import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getProductById } from "../app/services/productServices";
import { ButtonAddProduct } from "../components/Products/ButtonAddProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons'

const iconStar = <FontAwesomeIcon icon={faStar} />
const iconStarHalf = <FontAwesomeIcon icon={faStarHalfAlt} />
const iconStarEmpty = <FontAwesomeIcon icon={farStar} />

export const ProductView = (props) => {

  const [ProductDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const productId = props.match.params.id;
    getProductById(productId)
      .then((ProductDetails) => setProductDetails(ProductDetails))
      .catch((err) => { console.log(err) })
  }, [props.match.params.id])

  return (
    <Container>
      <Row>

        <Col md={{ span: 4, offset: 2 }}>
          {ProductDetails && <img src={ProductDetails.image} width={300} alt={ProductDetails.title} />}
          <hr />
          <Row style={ { textAlign: 'justify' } }>
            <h4>Descripción</h4>
            {ProductDetails && ProductDetails.description}
          </Row>
        </Col>
        <Col md={{ span: 3, offset: 1}}>

          <Card>

            <Card.Header>  
              <span style={{ color: '#ffc107', fontSize: '16px' }}>
                {iconStar} {iconStar} {iconStar} {iconStarHalf} {iconStarEmpty}
              </span>
              <span style={{ color: '#808080', fontSize: '16px' }}>
                - { ProductDetails && ProductDetails.rating.count } opiniones
              </span>
            </Card.Header>
            
            <Card.Body style={ { textAlign: 'center' } }>
              {ProductDetails && <h4> {ProductDetails.title.toUpperCase()} </h4>}

              
              {ProductDetails && <h2> {ProductDetails.price} $ </h2>}
              <ButtonAddProduct className="btn-lg" product={ProductDetails}/>
            </Card.Body>

          
          </Card>

        </Col>

      </Row>
    </Container>
  )
}