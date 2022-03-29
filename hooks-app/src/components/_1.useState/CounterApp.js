import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

  const [state, setState] = useState({
    one: 10,
    two: 20,
    three: 30,
    four: 40
  })

  const { one, two } = state

  return (
    <>
      <h1>Counter 1: { one }</h1>
      <h1>Counter 2: { two }</h1>
      <hr />

      <button 
        className='btn btn-primary'
        onClick={() => {
          setState({
            ...state,
            one: one + 1
          })
        }}
      >
        +1
      </button>
    </>
  )
}


