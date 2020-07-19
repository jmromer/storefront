import React, { useState } from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import RatingIndicator from './RatingIndicator'
import { useStyles } from '../styles'

function Product ({ product }) {
  const styles = useStyles()
  const [inCart, setInCart] = useState(false)

  return (
    <Card className={styles.productRoot}>
      {inCart ? <div className={styles.inCart}>In Cart</div> : ''}
      <CardActionArea>
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
  )
}

export default Product
