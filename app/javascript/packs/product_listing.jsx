import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'

import Product from './components/Product'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '20px auto'
  },
  productRoot: {
    flexGrow: 1,
    padding: 10
  },
  media: {
    height: 250
  },
  separator: {
    borderBottom: '1px solid rgba(88, 88, 88, 0.31)',
    borderBottomWidth: 0.1,
    margin: 10
  },
  content: {
    padding: 5,
    textAlign: 'center'
  },
  bold: {
    fontWeight: 500
  },
  card: {
    margin: 0.5
  }
}))

function ProductRow ({ products }) {
  const classes = useStyles()

  return (
    <Grid container item xs={12} spacing={3} className={classes.card}>
      {products.map(product => (
        <Grid item xs={4} key={product.id}>
          <Product product={product} styles={classes} />
        </Grid>
      ))}
    </Grid>
  )
}

function ProductListing ({ products }) {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Grid container spacing={1} className={classes.root}>
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
