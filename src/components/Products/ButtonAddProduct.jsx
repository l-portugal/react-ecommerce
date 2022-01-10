import React from "react";
import { Button } from "react-bootstrap";
import { addProductCart } from "../../app/services/cartService";
import { cartProducts } from "../../redux/actions/cart/cartActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";

const iconCart = <FontAwesomeIcon icon={faCartPlus} />

export const ButtonAddProduct = ({ product, className }) => {

  const dispatcher = useDispatch()

  const addProduct = (product) => {
    addProductCart(product)
    dispatcher(cartProducts())
  };

  return (
    <Button variant="secondary" className={className} onClick={ () => addProduct(product) }> {iconCart} Agregar </Button>
  )
}