import React from 'react'
import ReactDOM from 'react-dom'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function Product ({ product }) {
  return (
    <div>
      <img alt={product.name} src={product.image_url} />
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.rating}</div>
    </div>
  )
}

function ProductRow ({ products }) {
  const classes = useStyles()

  return (
    <Grid container item xs={12} spacing={3}>
      {products.map(product => (
        <Grid item xs={4} key={product.id}>
          <Paper className={classes.paper}>
            <Product product={product} />
          </Paper>
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
        <Typography component='div' style={{ height: '10vh' }} />
        <div className={classes.root}>
          <Grid container spacing={1}>
            <ProductRow products={products.slice(0, 3)} />
            <ProductRow products={products.slice(3, 6)} />
            <ProductRow products={products.slice(6, 9)} />
          </Grid>
        </div>
      </Container>
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('products')
  const products = JSON.parse(container.dataset.products)

  ReactDOM.render(<ProductListing products={products} />, container)
})
