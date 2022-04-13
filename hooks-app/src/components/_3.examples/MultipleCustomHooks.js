import React from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch'

export const MultipleCustomHooks = () => {
  const { counter, increment } =  useCounter(1);

  const state =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { loading, data } = state;
  const { author, quote } = !!data && data[0];

 

  return (
    <div className='m-5'>
      <h1>BreakingBad Quotes</h1>

      {
        loading 
        ?
          (
            <div className='alert alert-info text-center'>
              Loading...
            </div>
          )
        :
          (
            <blockquote className='blockquote text-right'>
              <p className='mb-1'>{ quote }</p>
              <footer className='blockquote-footer'>
                { author }
              </footer>
            </blockquote>
          )
      }

      <button 
        className='btn btn-primary'
        onClick={ increment }  
      >
        Siguiente quote
      </button>
    </div>
  )
}
