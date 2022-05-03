import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    setUser({});
  }

  return (
    <div className="p-5">
      <h1>AboutScreen</h1>
      <hr />

      <pre className='container'>
        { JSON.stringify(user, null, 4) }
      </pre>

      <button 
        type="button" 
        className="btn btn-outline-danger"
        onClick={ logout }
      >
        Logout
      </button>
    </div>
  )
}
