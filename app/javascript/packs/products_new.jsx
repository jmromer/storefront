import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-ui/core'

function NewProductForm () {
  return <Button color='primary'>New Product</Button>
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<NewProductForm />, document.getElementById('root'))
})
