import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-ui/core'

function App ({ products }) {
  console.log(products[0])

  return (
    <div>
      {products.map(product => {
        return (
          <div key={product.id}>
            <div>{product.image}</div>
            <div>{product.name}</div>
            <div>{product.price_cents}</div>
            <div>{product.rating}</div>
          </div>
        )
      })}
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('products')
  const products = JSON.parse(container.dataset.products)

  ReactDOM.render(<App products={products} />, container)
})
