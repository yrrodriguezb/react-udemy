import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

  const login = () => {
    setUser({
      id: 123,
      name: 'Yeison Rodriguez',
      email: 'yrrodriguezb@gmail.com',
      login_at: new Date().getTime()
    })
  }

  return (
    <div className="p-5">
      <h1>LoginScreen</h1>
      <hr />

      <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={ login }
      >
        Login
      </button>
    
    </div>
  )
}
