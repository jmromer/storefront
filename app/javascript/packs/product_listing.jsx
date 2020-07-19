import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import ReactDOM from 'react-dom'

import Product from './components/Product'
import { useStyles } from './styles'

function ProductRow ({ products }) {
  const styles = useStyles()

  return (
    <Grid container item xs={12} spacing={3} className={styles.card}>
      {products.map(product => (
        <Grid item xs={4} key={product.id}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

function ProductListing ({ products }) {
  const styles = useStyles()

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Grid container spacing={1} className={styles.root}>
          <ProductRow products={products.slice(0, 3)} />
          <ProductRow products={products.slice(3, 6)} />
          <ProductRow products={products.slice(6, 9)} />
        </Grid>
      </Container>
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('products')
  const products = JSON.parse(container.text)

  ReactDOM.render(
    <ProductListing products={products} />,
    document.getElementById('root')
  )
})
