import React, { useState } from 'react'
import { useCounter } from "../../Hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(true)

  const showHandle = () => {
    setShow(!show);
  }

  return (
    <div className='p-5'>
      <h1>Counter: <Small value={ counter }/> </h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={ increment }
      >
        +1
      </button>

      <button
        className='btn btn-outline-primary mx-3'
        onClick={ showHandle }
      >
        Show/Hide { JSON.stringify( show ) }
      </button>
    </div>
  )
}
