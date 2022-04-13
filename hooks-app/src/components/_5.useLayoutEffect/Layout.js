import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch'

import './Layout.css'

export const Layout = () => {
  const { counter, increment } =  useCounter(1);

  const state =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { data } = state;
  const { quote } = !!data && data[0];

  const p_Tag = useRef()

  const [boxSize, setBoxSize] = useState({})


  // Sirve para realizar un accion cuando algo en el layout de la pagina cambie
  useLayoutEffect(() => {
    const position = p_Tag.current.getBoundingClientRect();
    setBoxSize(position)
  }, [ quote ])

 

  return (
    <div className='m-5'>
      <h1>Layout Effect</h1>

      <blockquote className='blockquote text-right'>
        <p ref={ p_Tag } className='mb-1'>{ quote }</p>
      </blockquote>

      <pre>{ JSON.stringify( boxSize, null, 4)  }</pre>
        
      <button 
        className='btn btn-primary'
        onClick={ increment }  
      >
        Siguiente quote
      </button>
    </div>
  )
}
