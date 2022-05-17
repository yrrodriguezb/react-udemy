import React from 'react';
import { act } from '@testing-library/react'
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/_8.useRecuder/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en <TodoApp />', () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});


  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe existir un elemento <TodoList /> y un <TodoAddForm />', () => {
    expect(wrapper.find('TodoList').exists()).toBe(true);
    expect(wrapper.find('TodoAddForm').exists()).toBe(true);
  });

  test('Debe agregar un TODO', () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      for (let index = 0; index < demoTodos.length; index++) {
        const todo = demoTodos[index];
        wrapper.find('TodoAddForm').prop('handleAddTodo')( todo );
      }
    });

    expect(wrapper.find('h1').text(`TodoApp ${demoTodos.length}`));

    // Valida que el localStorage se llame
    expect(localStorage.setItem).toHaveBeenCalledTimes(demoTodos.length);
  });

  test('Debe eliminar un TODO', () => {
    wrapper.find('TodoAddForm').prop('handleAddTodo')( demoTodos[0] );
    wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

    expect(wrapper.find('h1').text(`TodoApp 0`));
  });

});