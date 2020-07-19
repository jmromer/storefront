import React, { Children } from 'react'

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

export default RatingIndicator
