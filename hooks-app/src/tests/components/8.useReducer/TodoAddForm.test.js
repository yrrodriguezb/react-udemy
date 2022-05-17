import React from 'react';
import { shallow } from 'enzyme';
import { TodoAddForm } from '../../../components/_8.useRecuder/TodoAddForm';
import '@testing-library/jest-dom';

describe('Pruebas en <TodoAddForm />', () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(
    <TodoAddForm 
      handleAddTodo={ handleAddTodo }
    />
  )

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('No debe llamar el handleAddTodo', () => {
    // Otra forma de obtener una propiedad, en este caso la funcion que controla el submit del form
    const handleSubmit = wrapper.find('form').prop('onSubmit');

    handleSubmit({
      preventDefault: () => {}
    });

    // Valida que la funcion no se llame en ninguna vez
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('Debe llamar el handleAddTodo', () => {
    const value = 'Aprender React';
    
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    });

    // Otra forma de obtener una propiedad, en este caso la funcion que controla el submit del form
    const handleSubmit = wrapper.find('form').prop('onSubmit');

    handleSubmit({
      preventDefault: () => {}
    });

    // Valida que la funcion se llame una vez
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    
    // Valida que la funcion se llame una vez con un objeto como parametro
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    
    // Valida que la funcion se llame con el objeto adecuado y sus valores esperados
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    });

    // Valida que despues de agregar un todo la descripcion del formulario quede vacóo, (Funcion reset)
    // Se valida el efecto de llamar la funcion "reset", no se valida que se llame dicha funcion
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});