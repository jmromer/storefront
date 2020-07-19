import React from 'react'
import ReactDOM from 'react-dom'

import ProductListing from './components/ProductListing'
import ShoppingCart from './utils/ShoppingCart'

document.addEventListener('DOMContentLoaded', async () => {
  const cartsUrl = document.getElementById('cartsUrl').dataset.cartsUrl
  const cartId = window.sessionStorage.getItem('cartId')

  window.shoppingCart = await new ShoppingCart({ cartsUrl, cartId }).load()

  const container = document.getElementById('products')
  const products = JSON.parse(container.text)

  ReactDOM.render(
    <ProductListing products={products} />,
    document.getElementById('root')
  )
})
