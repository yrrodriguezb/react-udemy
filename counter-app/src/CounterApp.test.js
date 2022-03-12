import React from "react";
import  "@testing-library/jest-dom";
import CounterApp from "./CounterApp"
import { shallow, ShallowWrapper } from "enzyme";


describe('Pruebas en <CounterApp />', () => {
    // solo se asigna para tener la ayuda del intellisense
    let wrapper = shallow(<CounterApp />); 

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test('debe mostrar <CounterApp /> coprrcetamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrar el valor por defecto de 100', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={ value }/>);
        const counter = wrapper.find('h2').text();
        expect(counter).toBe('100');
    })

    test('debe incrementar con el boton +1', () => { 
        wrapper.find('button').at(0).simulate('click');    
        const counter = wrapper.find('h2').text();
        expect(counter).toBe('11');
    })

    test('debe decrementar con el boton -1', () => { 
        wrapper.find('button').at(2).simulate('click');
        const counter = wrapper.find('h2').text();
        expect(counter).toBe('9');
    })

    test('debe asignar el valor por defecto con el boton reset', () => { 
        const wrapper = shallow(<CounterApp value={ 105 }/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const counter = wrapper.find('h2').text();

        expect(counter).toBe('105');
    })
})