import { React } from "react";
import '@testing-library/jest-dom'; // solo para el intellisense
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={ setCategories } />); // solo para el intellisense

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={ setCategories } />);
  })

  test('Debe mostrarse correctamente', () => { 
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe cambiar la caja de texto', () => { 
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });
  })

  test('No debe hacer nada en el evento submit', () => { 
    wrapper.find('form').simulate('submit', {
      preventDefault(){} 
    });

    expect(setCategories).not.toHaveBeenCalled();
  })

  test('Debe llamar el setCategories y limpiar la caja de texto', () => { 
    const value = 'Hola mundo';
    const input = wrapper.find('input');

    // 1. SImular el inputChange
    input.simulate('change', {
      target: { value }
    });

    // 2. Simular el submit
    wrapper.find('form').simulate('submit', {
      preventDefault(){} 
    });

    // 3. SetCategories se debe haber llamado
    expect(setCategories).toHaveBeenCalled(); // que se llame la funcion
    expect(setCategories).toHaveBeenCalledTimes(1); // que se llame una vez
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)) // que se llame con una funcion;

    // 4. el valor del input debe estar limpio o vacio
    expect( input.prop('value') ).toBe('')
  })
})