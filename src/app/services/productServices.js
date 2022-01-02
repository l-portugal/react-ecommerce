import data from '../../data/products.json'

const productsDB = data.products

export const getAllProducts = async () => {
  return productsDB;
}

export const getProductById = async (id) => {
  const product = await productsDB.find( (p) => p.id === Number(id)  );
  return product;
}