import React from 'react';
import '@testing-library/jest-dom'
import { mount } from "enzyme";
import { AppRouter } from '../../../components/_9.useContext/AppRouter';
import { UserContext } from '../../../components/_9.useContext/UserContext';

describe('Pruebas en <AppRouter />', () => {
  const user = {
    name: 'Yeison Roriguez',
    email: 'yrrodriguez@gmail.com'
  }

  const wrapper = mount(
    <UserContext.Provider value={ { user } }>
      <AppRouter />
    </UserContext.Provider>
  );

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
})