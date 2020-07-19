import ShoppingCartApi from '../api/ShoppingCartApi'

// Manages the client-side representation of the visitor's shopping cart
// Composes over ShoppingCartApi, which communicates with the server and parses
// its responses.
class ShoppingCart {
  constructor ({ cartId, cartsUrl }) {
    this.api = new ShoppingCartApi({ cartId, cartsUrl })
    // an index of products in the visitor's cart, mapping product ids to cart
    // item ids
    this.items = new Map()
  }

  // Fetch the current visitor's shopping cart, or create one if none exists.
  async load () {
    const cart = await this.api.getCart()
    this.updateSessionCartId(cart?.id)
    this.updateCartItems(cart?.cart_items)
    return this
  }

  async add (productId) {
    const cart = await this.api.addCartItem(productId)
    this.updateCartItems(cart?.cart_items)
    return this
  }

  async remove (productId) {
    const cartItemId = this.getCartItem(productId)
    const cart = await this.api.removeCartItem(cartItemId)
    this.updateCartItems(cart?.cart_items)
    return this
  }

  // Is the given product in the current visitor's shopping cart?
  containsProduct (productId) {
    return this.items.has(productId)
  }

  // Given a `productId`, retrieve the corresponding cart item ID
  // The latter is used to remove a product from the current visitor's cart.
  getCartItem (productId) {
    return this.items.get(productId)
  }

  // Update the session's shopping cart ID
  updateSessionCartId (cartId) {
    cartId
      ? window.sessionStorage.setItem('cartId', cartId)
      : window.sessionStorage.removeItem('cartId')
  }

  // Update the locally indexed products / cart items
  updateCartItems (cartItems) {
    const items = cartItems || []

    const newItems = new Map()
    for (const item of items) {
      newItems.set(item.product_id, item.id)
    }

    this.items = newItems
  }
}

export default ShoppingCart
