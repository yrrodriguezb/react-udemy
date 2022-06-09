import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);

  const [ formValues, handleInputChange ] = useForm({
    name: 'Yeison Rodriguez',
    email: 'yeison.rodriguez@gmail.com',
    password: '123456',
    password2: '123456'
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) =>  {
    e.preventDefault();

    if (isFormValid()) {
       dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'))
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('Passwords do not match or are less than 5 characters'))
      return false;
    }

    dispatch(removeError());
    return true;
  }

  return (
    <div>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={ handleRegister }>
 
        { msgError && <div className="auth__alert-error">{ msgError }</div> }
        
        <input 
          type="text" 
          placeholder="Name"
          name="name" 
          className="auth__input"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />
        <input 
          type="email" 
          placeholder="Email"
          name="email" 
          className="auth__input"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
        <input 
          type="password" 
          placeholder="Password"
          name="password" 
          className="auth__input"
          value={ password }
          onChange={ handleInputChange }
        />
        <input 
          type="password" 
          placeholder="Confirm Password"
          name="confirm_password" 
          className="auth__input"
          value={ password2 }
          onChange={ handleInputChange }
        />
        <button 
          type="submit"
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>

        <Link to="/auth/login" className='link'>
          Already registered?
        </Link>
      </form>
    </div>
  )
}
