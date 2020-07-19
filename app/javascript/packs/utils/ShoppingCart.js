import StorefrontApi from '../api/StorefrontApi'

class ShoppingCart {
  constructor ({ cartId, cartsUrl }) {
    this.api = new StorefrontApi({ cartId, cartsUrl })
    this.cartId = cartId
    this.items = {}
  }

  // fetch or create cart
  async load () {
    const cart = await this.api.getCart()
    this.setCartId(cart.id)
    this.updateCartItems(cart.cart_items)
    return this
  }

  containsProduct (productId) {
    return !!this.items[productId]
  }

  getCartItem (productId) {
    return this.items[productId]
  }

  async add (productId) {
    await this.api.addCartItem(productId)
    return this
  }

  async remove (productId) {
    const cartItemId = this.getCartItem(productId)
    await this.api.removeCartItem(cartItemId)
    return this
  }

  setCartId (cartId) {
    if (cartId) {
      this.cartId = cartId
      window.sessionStorage.setItem('cartId', cartId)
    }
    return this
  }

  updateCartItems (cartItems) {
    const items = {}
    for (const item of cartItems) {
      items[item.product_id] = item.id
    }
    this.items = items
    return this
  }
}

export default ShoppingCart
