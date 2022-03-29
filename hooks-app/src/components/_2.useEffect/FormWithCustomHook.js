import React from 'react'
import { useForm } from '../../Hooks/useForm';
import './effects.css'


export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)
  }


  return (
    <form onSubmit={ handleSubmit }>
      <h1>FormWithCustomHook</h1>
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

      <div className='form-group'>
        <input 
          type="password"
          name="password"
          className='form-control'
          value={ password }
          onChange={ handleInputChange }
        />
      </div>

      <button className='btn btn-primary'>Submit</button>
    </form>
  )
}
