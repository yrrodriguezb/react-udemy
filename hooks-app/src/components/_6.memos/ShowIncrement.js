import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

  console.log('Me volvi a renderizar :(');

  return (
    <div>
      <button
        onClick={ () => { increment(10) } }
        className='btn btn-primary'
      >
        +1
      </button>
    </div>
  )
})
