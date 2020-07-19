import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import React, { Children } from 'react'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

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

function RatingIndicator ({ rating, indicatorUrl, maxRating = 5 }) {
  const style = {
    background: `url(${indicatorUrl}) no-repeat top left`,
    backgroundSize: 'contain',
    display: 'inline-block',
    height: '10px',
    margin: '5px 2px',
    width: '10px'
  }

  return (
    <div>
      {Children.toArray(
        Array(maxRating)
          .fill()
          .map((_, i) =>
            i < rating ? (
              <div style={style} />
            ) : (
              <div style={{ ...style, filter: 'invert(0.75)' }} />
            )
          )
      )}
    </div>
  )
}

function Product ({ product }) {
  const classes = useStyles()

  return (
    <Card className={classes.productRoot}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image_url}
          title={product.name}
        />
        <div className={classes.separator} />
        <CardContent className={classes.content}>
          <Typography
            className={classes.bold}
            variant='body1'
            color='textSecondary'
            component='p'
          >
            {product.name}
          </Typography>
          <Typography variant='body1' color='textSecondary' component='p'>
            {product.price}
          </Typography>
          <RatingIndicator
            rating={product.rating}
            indicatorUrl={product.star_url}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

function ProductRow ({ products }) {
  const classes = useStyles()

  return (
    <Grid container item xs={12} spacing={3} className={classes.card}>
      {products.map(product => (
        <Grid item xs={4} key={product.id}>
          <Product product={product} />
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
