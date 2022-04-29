import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList';
import { TodoAddForm } from './TodoAddForm';



const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId
    } 

    dispatch(action);
  }
  
  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    });
  } 

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action);
  }

  return (
    <div className='p-5'>
      <h1>TodoApp { todos.length } </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={ todos } 
            handleDelete={ handleDelete } 
            handleToggle={ handleToggle }
          />
        </div>
        <div className="col-5">
          <TodoAddForm 
            handleAddTodo={ handleAddTodo }
          />
        </div>
      </div>
    </div>
  )
}