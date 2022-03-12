import React from "react";
import  "@testing-library/jest-dom";
import PrimeraApp from "./PrimeraApp"
import { shallow } from "enzyme";


describe('Pruebas en <PrimeraApp />', () => {
    // test('debe mostrar el mnesaje Hola soy Goku', () => {
    //     const saludo = 'Hola soy Goku';

    //     const { getByText} = render(<PrimeraApp saludo={ saludo } />)

    //     expect(getByText(saludo)).toBeInTheDocument()
    // });

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola soy Goku';

        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola soy Goku';
        const subtitulo = 'Soy un subtitulo'

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={ subtitulo }/>);

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    })
});