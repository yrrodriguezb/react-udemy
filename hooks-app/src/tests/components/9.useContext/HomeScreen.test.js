import React from 'react'
import { mount } from 'enzyme'
import '@testing-library/jest-dom'
import { HomeScreen } from '../../../components/_9.useContext/HomeScreen'
import { UserContext } from '../../../components/_9.useContext/UserContext'


describe('Pruebas en <HomeScreen />', () => {
  const user = {
    name: 'Yeison Roriguez',
    email: 'yrrodriguez@gmail.com'
  }

  const wrapper = mount(
    <UserContext.Provider value={ { user } }>
      <HomeScreen />
    </UserContext.Provider>
  );
  
  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })
})