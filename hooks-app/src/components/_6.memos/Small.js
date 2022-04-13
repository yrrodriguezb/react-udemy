import React from 'react'

// Con memo, solo vuelve a renderizar si las propiedades cambian.
// Memorizar algo
export const Small = React.memo(({ value }) => {

  console.log('Me volvi a ejecutar :(')

  return (
    <small>{ value }</small>
  )
})
