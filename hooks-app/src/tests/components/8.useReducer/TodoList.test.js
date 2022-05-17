import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoList } from '../../../components/_8.useRecuder/TodoList';


describe('Pruebas en <TodoList />', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList 
      todos={ demoTodos }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    />
  )
  
  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener los <TodoListItem /> segun la variable demoTodos', () => {
    const todoListItems = wrapper.find('TodoListItem');
    const firstTodoListItem = todoListItems.at(0);

    expect(todoListItems.length).toBe(demoTodos.length);
    expect(firstTodoListItem.prop('handleDelete')).toEqual(expect.any(Function));
    expect(firstTodoListItem.prop('handleToggle')).toEqual(expect.any(Function));
  })
});