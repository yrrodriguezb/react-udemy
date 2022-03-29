import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setformState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState;

  // Se ejecuta al iniciar el componente solo una vez
  useEffect(() => {
    
  }, []);

  // Se ejecuta cada vez que cambie el formState
  useEffect(() => {
    
  }, [ formState ]);

  // Se ejecuta cada vez que cambie el email
  useEffect(() => {
   
  }, [ email ]);

  const handleInputChange = ({ target }) => {
    setformState({ 
      ...formState, 
      [ target.name ]: target.value
    })
  }

  return (
    <>
      <h1>UseEffect</h1>
      <hr/>

      <div className='form-group'>
        <input 
          type="text"
          name="name"
          className='form-control'
          placeholder='Nombre'
          autoComplete='off'
          value={ name }
          onChange={ handleInputChange }
        />
      </div>

      <div className='form-group'>
        <input 
          type="email"
          name="email"
          className='form-control'
          placeholder='email@gmail.com'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { name === '123' && <Message /> }
    </>
  )
}
