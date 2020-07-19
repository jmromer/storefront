import React, { useState } from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import RatingIndicator from './RatingIndicator'
import { useStyles } from '../styles'

import Button from '@material-ui/core/Button'

function AddToCartButton ({ inCart }) {
  const styles = useStyles()
  return (
    <Button variant='contained' color='secondary' className={styles.cartButton}>
      {inCart ? 'Remove from cart' : 'Add to cart'}
    </Button>
  )
}

function Product ({ product }) {
  const styles = useStyles()
  const [inCart, setInCart] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={styles.productRoot}>
        {inCart ? <div className={styles.inCart}>In Cart</div> : ''}
        {isHovered ? <AddToCartButton inCart={inCart} /> : ''}
        <CardActionArea className={isHovered ? styles.overlay : ''}>
          <CardMedia className={styles.media} image={product.image_url} />
          <div className={styles.separator} />
          <CardContent className={styles.content}>
            <Typography
              className={styles.bold}
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
    </div>
  )
}

export default Product
