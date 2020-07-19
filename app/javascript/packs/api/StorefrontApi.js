class StorefrontApi {
  constructor ({ cartId, cartsUrl }) {
    this.cartId = cartId
    this.cartsUrl = cartsUrl
    this.cartUrl = cartId && `${cartsUrl}/${cartId}`
    this.updateUrl = null
    this.headers = {
      'X-CSRF-TOKEN': window.csrfToken,
      'Content-Type': 'application/json'
    }
  }

  async getCart () {
    try {
      const resp = await window.fetch(this.cartUrl)
      const cart = await resp.json()
      this.cartUrl = cart.url
      this.updateUrl = cart.update_url
      return cart
    } catch {
      console.info('Shopping cart expired or not found. Creating one...')
      return this.createCart()
    }
  }

  async createCart () {
    try {
      const resp = await window.fetch(this.cartsUrl, {
        method: 'POST',
        headers: this.headers
      })
      const cart = await resp.json()
      this.cartUrl = cart.url
      this.updateUrl = cart.update_url
      return cart
    } catch {
      console.error('Failed creating shopping cart.')
      return {}
    }
  }

  async addCartItem (productId) {
    try {
      const resp = await window.fetch(this.updateUrl, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          cart_id: this.cartId,
          product_id: productId
        })
      })
      const cart = await resp.json()
      return cart
    } catch {
      console.error(`Failed adding product to cart: ${productId}`)
      return {}
    }
  }

  async removeCartItem (itemId) {
    try {
      const url = `${this.updateUrl}/${itemId}`
      const resp = await window.fetch(url, {
        method: 'DELETE',
        headers: this.headers
      })
      const cart = await resp.json()
      return cart
    } catch (error) {
      console.error(`Failed removing cart item: ${itemId}`, error)
    }
    return {}
  }
}

export default StorefrontApi
