import React from 'react'
import ReactDOM from 'react-dom'

import ProductListing from './components/ProductListing'
import ShoppingCart from './utils/ShoppingCart'

document.addEventListener('DOMContentLoaded', async () => {
  // the URL to fetch or create a shopping cart for the current visitor
  const cartsUrl = document.getElementById('cartsUrl').dataset.cartsUrl

  // the current visitor's shopping cart id
  const cartId = window.sessionStorage.getItem('cartId')

  // a client-side shopping cart model to keep minimal shopping cart state
  window.shoppingCart = await new ShoppingCart({ cartsUrl, cartId }).load()

  // bootstrapped products list
  const products = JSON.parse(document.getElementById('products').text)

  ReactDOM.render(
    <ProductListing products={products} />,
    document.getElementById('root')
  )
})
