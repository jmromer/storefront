import React from 'react'
import Button from '@material-ui/core/Button'

import { useStyles } from '../styles'

function AddToCartButton ({ inCart }) {
  const styles = useStyles()
  return (
    <Button variant='contained' color='secondary' className={styles.cartButton}>
      {inCart ? 'Remove from cart' : 'Add to cart'}
    </Button>
  )
}

export default AddToCartButton
