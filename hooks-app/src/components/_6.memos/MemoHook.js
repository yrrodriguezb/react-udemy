import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from "../../Hooks/useCounter";


export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true)

  const showHandle = () => {
    setShow(!show);
  }

  
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div className='p-5'>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{ counter }</small></h3>
      <hr />

      <p>
        { memoProcesoPesado }
      </p>

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
