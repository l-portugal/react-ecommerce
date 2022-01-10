import { GET_CART_PRODUCTS } from "../../actions/cart/cartActions";

const initialState = {
  products: [],
  countCartProducts: 0
}

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_PRODUCTS:
      return { ...state, products: payload, countCartProducts: payload.length }
    default:
      return state
  }
}