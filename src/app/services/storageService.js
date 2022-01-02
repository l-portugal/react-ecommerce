export const saveLastInterestProduct = (productName) => {
  //API LocalStorage / SessionStorage
  localStorage.setItem('lastProduct', productName);
}