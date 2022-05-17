import React from 'react';
import { mount } from "enzyme";
import '@testing-library/jest-dom'
import { LoginScreen } from '../../../components/_9.useContext/LoginScreen';
import { UserContext } from '../../../components/_9.useContext/UserContext';


describe('Pruebas en <LoginScreen />', () => {
  const setUser = jest.fn();
  
  const wrapper = mount(
    <UserContext.Provider value={ { setUser } }>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe ejectar el setUser con el argumento esperado', () => {
    wrapper.find('button').prop('onClick')();

    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'Yeison Rodriguez',
      email: 'yrrodriguezb@gmail.com',
      login_at: expect.any(Number)
    });
  })
})