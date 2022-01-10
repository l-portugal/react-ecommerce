import db from "../db/db";
import { toast } from 'react-toastify';

const notify = (msg) => toast.success(msg);

export const getProductsCart = async () => {
  return await db.cart.toArray();
}

export const addProductCart = (product) => {
  
  db.cart.add({
    productId: product.id,
    title: product.title,
    price: product.price,
    category: product.category
  })

  notify(`AGREGADO: ${product.title}`)
}

export const deleteProductCart = async (productId) => {
  db.cart.delete(productId)
}

export const deleteCart = () => {
  db.cart.clear()
}