import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

  const { user } = useContext(UserContext);


  return (
    <div className="p-5">
      <h1>HomeScreen</h1>
      <hr />

      <pre className='container'>
        { JSON.stringify(user, null, 4) }
      </pre>
    </div>
   
  )
}
