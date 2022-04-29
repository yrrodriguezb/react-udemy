import React from 'react'
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, index, handleToggle,  handleDelete }) => {
  return (
    <li
      key={ todo.id }
      className='d-flex justify-content-between list-group-item'
    >
      <span 
        className={ `${todo.done && 'text-decoration-line-through'}` }
        onClick={ () => { handleToggle( todo.id ) } }
      >
        { index + 1 }. { todo.desc }
      </span>
      <input  
        className="btn btn-danger btn-sm" 
        type="button" 
        value="Borrar" 
        onClick={ () => handleDelete( todo.id ) }
        />
    </li>
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  handleToggle: PropTypes.func,
  handleDelete: PropTypes.func
}
