import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-ui/core'

function App () {
  return <Button color='primary'>Hello World</Button>
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
