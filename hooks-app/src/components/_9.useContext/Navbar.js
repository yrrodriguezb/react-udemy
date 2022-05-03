import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">useContext</Link>
        
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className='nav-item'>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
