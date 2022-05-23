import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const login = () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Yeison Rodriguez'
      }
    }

    dispatch(action);

    const lastPath = localStorage.getItem("lastPath") || "/marvel"

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={ login }
      >
        Login
      </button>
    </div>
  )
}
