// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return(w * h)
}

const perimeter = (w, h) => {
  return(w + w + h + h)
}
const circleArea = r => {
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []



const createItem = (name, price) => {
  //should return JSON Object for item
  return { name: name, price: price, quantity: 1}
}

const getShoppingCart = () => {
  return(shoppingCart)
}

const addItemToCart = (item) => {
  return shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  return shoppingCart.pop(item)
}

const clearCart = () => {
  shoppingCart.length = 0
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
