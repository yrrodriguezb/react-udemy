import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

  const { state, decrement, increment, reset } = useCounter(100)

  return (
    <>
      <h1>Counter with Hook { state }</h1>
      <hr />

      <button className='btn btn btn-outline-primary m-2' onClick={ () => { increment(1) } } >+ 1</button>
      <button className='btn btn btn-outline-primary m-2' onClick={ reset } >Reset</button>
      <button className='btn btn btn-outline-primary m-2' onClick={ () => { decrement(1) } }>- 1</button>
    </>
  )
}
