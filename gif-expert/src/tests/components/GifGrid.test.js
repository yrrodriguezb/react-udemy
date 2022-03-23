import React from 'react'
import "@testing-library/jest-dom"; // para el intellisense, por defecto ya viene importada
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';

// Simula la informacion que el useFetchGifs debe devolver
jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';
  
  test('debe mostrar el componente correactamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })


    const wrapper = shallow(<GifGrid category={ category } /> )
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar items cuando se cargan imagenes con useFetchGifs', () => {
    const gifs = [
      { id: 1, title:'Test 1', url:'https://test1.com' },
      { id: 2, title:'Test 2', url:'https://test2.com' }
    ]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    
    const wrapper = shallow(<GifGrid category={ category } /> );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  })
})