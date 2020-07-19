import React from 'react'
import ReactDOM from 'react-dom'

function ProductListing ({ products }) {
  return (
    <div>
      {products.map(product => {
        return (
          <div key={product.id}>
            <img alt={product.name} src={product.image_url} />
            <div>{product.name}</div>
            <div>{product.price}</div>
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

  ReactDOM.render(<ProductListing products={products} />, container)
})
