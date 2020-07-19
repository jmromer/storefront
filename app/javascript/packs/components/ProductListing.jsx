import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

import Product from './Product'
import { useStyles } from '../styles'
import eachSlice from '../utils/eachSlice'

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
  const productRows = eachSlice(products, 3)

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Grid container spacing={1} className={styles.root}>
          {productRows.map(productRow => (
            <ProductRow key={Math.random(10)} products={productRow} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default ProductListing
