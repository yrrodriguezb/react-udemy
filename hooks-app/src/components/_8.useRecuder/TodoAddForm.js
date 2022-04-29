import React from 'react'
import { useForm } from '../../Hooks/useForm';
import PropTypes from "prop-types";

export const TodoAddForm = ({ handleAddTodo }) => {

  const [ formValues, handleInputChange, reset ] = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.description.trim().length == 0)
      return;
    
    const newTodo = {
      id: new Date().getTime(),
      desc: formValues.description ,
      done: false
    }

    handleAddTodo(newTodo);
    reset();
  }

  return (
    <React.Fragment>
      <h4 className='fs-3'>Agregar Todo</h4>
      <hr />

      <form onSubmit={ handleSubmit }>
        <div className="mb-3">
          <label 
            htmlFor="description" 
            className="form-label"
          >
            Descripción
          </label>

          <input 
            type="text" 
            name='description' 
            className="form-control" 
            id="description" 
            aria-describedby="descHelp"  
            value={ formValues.description }
            onChange={ handleInputChange }
          />

          <div 
            id="descHelp" 
            className="form-text"
          >
            Descripción de la tarea.
          </div>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary"
        >
          Guardar
        </button>
      </form>
    </React.Fragment>
  )
}

TodoAddForm.propTypes = {
  handleAddTodo: PropTypes.func
}
