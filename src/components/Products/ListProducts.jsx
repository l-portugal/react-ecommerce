import React from 'react'
import { Product } from './Product'
import data from '../../data/products.json'
import { Row } from "react-bootstrap";
import { ToastContainer, Slide } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ListProducts = () => {
  
  const products = data.products
  
  return(
    <>
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
          />

        <Row>
          { products.map( (product, index) => {
            return <Product item={product} key={index}></Product>
          } ) }  
      </Row>
    </>
  )

}