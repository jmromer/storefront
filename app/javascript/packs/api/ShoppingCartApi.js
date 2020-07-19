class ShoppingCartApi {
  constructor ({ cartId, cartsUrl }) {
    // uuid for the current visitor's shopping cart
    this.cartId = cartId

    // url to query for shopping cart creation
    this.cartsUrl = cartsUrl

    // url to query to fetch specific cart
    this.cartUrl = cartId && `${cartsUrl}/${cartId}`

    // url to query to add items to the cart
    this.updateUrl = null

    this.headers = {
      'X-CSRF-TOKEN': window.csrfToken,
      'Content-Type': 'application/json'
    }
  }

  // Get the current visitor's shopping cart. if one isn't saved in the session,
  // create it.
  //
  // Return the cart object, or null if there was an unrecoverable failure.
  async getCart () {
    return this.cartId ? await this.fetchCart() : await this.createCart()
  }

  // Get the current visitor's shopping cart. If it's not found on the server,
  // create a new one.
  //
  // Return null in the event of an unrecoverable failure.
  async fetchCart () {
    try {
      const resp = await window.fetch(this.cartUrl)

      if (resp.status === 200) {
        return await this.updateCartDetails(resp)
      } else {
        return await this.createCart()
      }
    } catch {
      console.error('Network failure encountered while fetching cart')
      return null
    }
  }

  // Create a cart for the current visitor.
  //
  // Return null in the event of an unrecoverable failure.
  async createCart () {
    try {
      console.info('Shopping cart expired or not found. Creating a new one...')

      const resp = await window.fetch(this.cartsUrl, {
        method: 'POST',
        headers: this.headers
      })

      if (resp.status === 201) {
        return await this.updateCartDetails(resp)
      } else {
        console.error('Failed creating shopping cart.')
      }
    } catch {
      console.error('Network failure encountered creating cart')
    }

    return null
  }

  // Add the product associated with the given `productId` to the cart.
  //
  // Return null in the event of an unrecoverable failure.
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
      return await resp.json()
    } catch {
      console.error(`Failed adding product to cart: ${productId}`)
      return null
    }
  }

  // Remove the product associated with the given `productId` from the cart.
  //
  // Return null in the event of an unrecoverable failure.
  async removeCartItem (itemId) {
    try {
      const url = `${this.updateUrl}/${itemId}`
      const resp = await window.fetch(url, {
        method: 'DELETE',
        headers: this.headers
      })
      return await resp.json()
    } catch (error) {
      console.error(`Failed removing cart item: ${itemId}`, error)
    }
    return null
  }

  // Update the local cart details based on the contents of the given
  // `response`. No-op if the response is unsuccessfully parsed.
  //
  // Return the cart object, or null if none is available.
  async updateCartDetails (response) {
    try {
      const cart = await response.json()
      this.cartId = cart.id
      this.cartUrl = cart.url
      this.updateUrl = cart.update_url
      return cart
    } catch {
      console.error(`Unable to parse JSON`, response?.body)
      return null
    }
  }
}

export default ShoppingCartApi
