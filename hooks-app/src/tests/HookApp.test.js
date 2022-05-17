import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('Pruebas en <HookApp />', () => { 
  test('Deberia mostrarse correctamente', async () => {
    const wrapper = shallow(<HookApp />);
    expect( wrapper ).toMatchSnapshot();
  })
})