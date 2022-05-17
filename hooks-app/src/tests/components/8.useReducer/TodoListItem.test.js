import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from '../../../components/_8.useRecuder/TodoListItem'
import { demoTodos } from '../../fixtures/demoTodos'
import '@testing-library/jest-dom'


describe('Pruebas en <TodoListItem />', () => {
  const todo = demoTodos[0]

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem 
      todo={ todo }
      index={ 0 }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    />
  )
  
  test('Debe mostrarse correctamente', async () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe llamar la funcion handleDelete ', async () => {
    wrapper.find('input').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(todo.id)
  });

  test('Debe llamar la funcion handleToggle ', async () => {
    wrapper.find('span').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(todo.id)
  })

  test('Debe mostrar el texto correctamente', async () => {
    const span = wrapper.find("span");
    const text = `1. ${todo.desc}`
    expect(wrapper.text().trim()).toBe(text)
  })

  test('Debe tener la clase "text-decoration-line-through" si el todo esta en "done"', async () => {
    todo.done = true;

    const wrapper = shallow(
      <TodoListItem 
        todo={ todo }
        index={ 0 }
        handleDelete={ handleDelete }
        handleToggle={ handleToggle }
      />
    )

    expect(wrapper.find("span").hasClass('text-decoration-line-through')).toBe(true);
  });
})