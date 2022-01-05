const baseUrl = process.env.REACT_APP_FAKE_STORE_API
const productsUrl = `${baseUrl}/products`

const routes = {
  getAllProducts: () => productsUrl,
  getProductById: (productId) => `${productsUrl}/${productId}`,
  getAllCategories: () => `${productsUrl}/categories`,
  getProductsByCategory: (categoryName) => `${productsUrl}/category/${categoryName}`
}

export default routes