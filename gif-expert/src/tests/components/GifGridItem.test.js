import React from 'react'
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {
  const title = 'Un titulo';
  const url = 'https://test.com/image.png';
  const wrapper = shallow(<GifGridItem title={ title } url={ url } /> )


  test('debe mostrar el componente correactamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('debe tener un parrafo con el titulo', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  })

  test('debe obtener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img').props();
    expect(img.src).toBe(url);
    expect(img.alt).toBe(title);
  })

  test('debe terner animated_fadeIn', () => { 
    const div = wrapper.find('div');
    const className = div.prop('className');

    expect(className.includes('animate__fadeIn')).toBe(true);
  })
})