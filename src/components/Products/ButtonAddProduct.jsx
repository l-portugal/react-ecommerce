import React from "react";
import { Button } from "react-bootstrap";
import { addProductCart } from "../../app/services/cartService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const iconCart = <FontAwesomeIcon icon={faCartPlus} />

export const ButtonAddProduct = ( { product, className } ) => (
  <Button variant="secondary" className={className} onClick={() => addProductCart(product)}> { iconCart } Agregar </Button>
)