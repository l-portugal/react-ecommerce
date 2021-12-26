import React from 'react'
import { Product } from './Product'
import data from '../data/products.json'
import { Row } from "react-bootstrap";

export const ListProducts = () => {
  
  const products = data.products
  
  return(
    <Row>
        { products.map( (product, index) => {
          return <Product item={product} key={index}></Product>
        } ) }  
    </Row>
  )

}