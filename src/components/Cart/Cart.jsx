import React, { useState, useEffect } from 'react'
import { CartItem } from './CartItem'
import { getProductsCart } from '../../app/services/cartService'
import { Table } from 'react-bootstrap'

export const Cart = (props) => {

  const [ productsCart, setProductsCart] = useState(null)

  useEffect( () => {
    getProductsCart()
      .then( (productsCart) => { setProductsCart(productsCart) })
      .catch( (err) => { console.log(err)} )
  },[productsCart])

  const getTotalPrice = () => {
    const totalPrice = productsCart?.reduce((totalPrice, nextProduct) => totalPrice + nextProduct.price, 0);
    return totalPrice?.toFixed(2);
  }

  return (
    <>
      <Table hover responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {
            productsCart?.map( (product, index) =>
              <CartItem closeModal={props.closeModal} key={product.id} index={index} tableId={product.id} productId={product.productId} title={product.title} price={product.price} category={product.category} />
            )
          }

        </tbody>
        <tfoot>
          <tr>
            <td> <h4>TOTAL</h4> </td>
            <td colSpan="3"> <h4 className="float-end">$ {getTotalPrice()} </h4> </td>
          </tr>
        </tfoot>
      </Table>
    </>
  )

}