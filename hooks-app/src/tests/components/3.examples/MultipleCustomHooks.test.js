import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/_3.examples/MultipleCustomHooks'
import { useFetch } from '../../../Hooks/useFetch';
import { useCounter } from '../../../Hooks/useCounter';

// Usa una implementacion del useFetch para simular los datos
jest.mock('../../../Hooks/useCounter')
jest.mock('../../../Hooks/useFetch')


describe('Pruebas en <MultipleCustomHooks />', () => { 

  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {}
  });

  test('Debe mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar la información', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Yeison',
          quote: 'Hola Mundo'
        }
      ],
      loading: false,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    // console.log(wrapper.html());
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('p.mb-1').text().trim()).toBe('Hola Mundo');
    expect(wrapper.find('footer').text().trim()).toBe('Yeison');
  });
});