import React, { useEffect } from 'react'
import { Product } from './Product'
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../../redux/actions/products/productActions';

export const ListProducts = ( ) => {

  const productsFilter = useSelector( (state) => state.productsReducer.productsFilter);
  const dispatcher = useDispatch();

  useEffect( () => {
    dispatcher(allProducts())
  },[dispatcher])

  return (
    <Row>
      { productsFilter.length === 0 ? (
          <div>
            <p>Cargando productos... </p>
          </div>
        ) : (
          productsFilter && productsFilter.map((product, index) => {
        return <Product item={product} key={index}></Product>
      })
    )}
    </Row>
  )

}