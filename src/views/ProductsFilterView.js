import React, { useState, useEffect } from "react";
import { Product } from '../components/Products/Product'
import { getProductsByCategory } from "../app/services/productServices";
import { Container, Row } from "react-bootstrap";

export const ProductsFilterView = ({ match }) => {
  const categoryName = match.params.categoryName

  const [products, setProducts] = useState([])

  useEffect(() => {

    setProducts([])

    getProductsByCategory(categoryName)
      .then(data => setProducts(data))
  }, [categoryName])

  return (
    <Container>
      <h1> {categoryName.toUpperCase()} </h1><></>
      <Row xs={4}>
        {products.length === 0 ? (
          <div>
            <p>Cargando productos... </p>
          </div>
        ) : (
          products.map( (product, index) => <Product key={index} item={product} /> )
        )}
      </Row>
    </Container>
  )
}