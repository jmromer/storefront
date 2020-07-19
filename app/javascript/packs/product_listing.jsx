import React from 'react'
import ReactDOM from 'react-dom'

import ProductListing from './components/ProductListing'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('products')
  const products = JSON.parse(container.text)

  ReactDOM.render(
    <ProductListing products={products} />,
    document.getElementById('root')
  )
})
