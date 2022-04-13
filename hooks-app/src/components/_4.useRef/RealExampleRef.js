import React, { useState } from 'react'
import { MultipleCustomHooks } from '../_3.examples/MultipleCustomHooks'


export const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div className='p-5'>
      <h1>RealExampleRef</h1>
      <hr />

      { show && <MultipleCustomHooks /> }

      <button 
        className='btn btn-primary mt-3'
        onClick={ handleClick }
      >
        Toggle Show
      </button>
    </div>
  )
}
