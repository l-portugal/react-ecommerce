import React, {useState, useEffect} from 'react'
import { Product } from './Product'
import { getAllProducts } from '../../app/services/productServices';
import { Row } from "react-bootstrap";

export const ListProducts = ( ) => {

  const [products, setProducts] = useState([]);

  useEffect( () => {
       getAllProducts()
        .then( (products) => { setProducts(products) } )
        .catch( (err) => console.log(err) )
  },[])

  return (
    <Row>
      { products.length === 0 ? (
          <div>
            <p>Cargando productos... </p>
          </div>
        ) : (
          products && products.map((product, index) => {
        return <Product item={product} key={index}></Product>
      })
    )}
    </Row>
  )

}