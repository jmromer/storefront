import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import RatingIndicator from './RatingIndicator'
import { useStyles } from '../styles'

function Product ({ product }) {
  const cart = window.shoppingCart
  const styles = useStyles()

  // is the cursor hovering on the current product card?
  const [isHovered, setIsHovered] = useState(false)

  // is the current product present in the shopping cart?
  const [isInCart, setIsInCart] = useState(cart.containsProduct(product.id))

  // if product has been added to cart, remove it, else add it
  const handleOnClick = async () => {
    const cart = isInCart
      ? await window.shoppingCart.remove(product.id)
      : await window.shoppingCart.add(product.id)
    setIsInCart(cart.containsProduct(product.id))
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={styles.productRoot}>
        {isInCart && <div className={styles.inCart}>In Cart</div>}

        {isHovered && (
          <Button
            variant='contained'
            color='secondary'
            className={styles.cartButton}
            onClick={handleOnClick}
          >
            {isInCart ? 'Remove from cart' : 'Add to cart'}
          </Button>
        )}

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
