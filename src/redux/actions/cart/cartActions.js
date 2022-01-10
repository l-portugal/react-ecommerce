import { getProductsCart } from "../../../app/services/cartService";

export const GET_CART_PRODUCTS = 'GET_CART_PRODUCTS'

//Actions creator
const getCartProductsAction = (cartProducts) => ( { type: GET_CART_PRODUCTS, payload: cartProducts} )


// Actions

export const cartProducts = () => {
  return async dispatch => {
    try {
      const cartProducts = await getProductsCart()
      dispatch(getCartProductsAction(cartProducts))
    } catch(err) {
      console.log(err)
    }
  }
}