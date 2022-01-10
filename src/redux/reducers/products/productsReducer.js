import { GET_ALL_PRODUCTS, FILTER_PRODUCTS } from "../../actions/products/productActions"

const initialState = {
  products: [],
  productsFilter: []
}

export const productsReducer = (state = initialState, {type, payload} ) => {
  switch(type){
    case GET_ALL_PRODUCTS:
      return { ...state, products: payload, productsFilter: payload}
    case FILTER_PRODUCTS:
      return { ...state, productsFilter: payload}
    default:
      return state
  }
}