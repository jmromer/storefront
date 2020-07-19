import React from 'react'
import Button from '@material-ui/core/Button'

import { useStyles } from '../styles'

function AddToCartButton ({ productId, inCart, setIsInCart }) {
  const styles = useStyles()

  const handleOnClick = async () => {
    const cart = inCart
      ? await window.shoppingCart.remove(productId)
      : await window.shoppingCart.add(productId)

    setIsInCart(cart.containsProduct(productId))
  }

  return (
    <Button
      variant='contained'
      color='secondary'
      className={styles.cartButton}
      onClick={handleOnClick}
    >
      {inCart ? 'Remove from cart' : 'Add to cart'}
    </Button>
  )
}

export default AddToCartButton
