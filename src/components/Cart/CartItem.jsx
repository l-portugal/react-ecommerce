import React from 'react'
import { Link } from 'react-router-dom'
import { deleteProductCart } from '../../app/services/cartService'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { cartProducts } from '../../redux/actions/cart/cartActions'

const iconDeleteCart = <FontAwesomeIcon icon={faTrash} />

export const CartItem = ({ index, tableId, productId, title, price, category, closeModal }) => {
  
  const dispatcher = useDispatch();

  const deleteProduct = () => {
    deleteProductCart(tableId)
      .then( () => dispatcher(cartProducts()) )
      .catch()
  }

  return (
    <tr style={{ textAlign: 'left' }}>
      <td>{index + 1}</td>
      <td><Link to={`/product/${productId}`} onClick={closeModal} style={{ textDecoration: 'none' }}> {title}</Link></td>
      <td>{category}</td>
      <td>$ {price}</td>
      <td> <Button variant="danger" className="btn-sm" onClick={deleteProduct}> {iconDeleteCart} </Button> </td>
    </tr>
  )
}