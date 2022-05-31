import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';
import '@testing-library/jest-dom'


// Es importante que la variable inicie con mock
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate // Sobreesribimos el hook
}))

describe('Pruebas en <SearchComponente />', () => {
  test('Debe mostrarse correctamente', () => {
    // Es necesario el MemoryRouter para evitar el siguiente error:
    //  useNavigate() may be used only in the context of a <Router> component.

    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/search'] }>
        <SearchScreen />
      </MemoryRouter>
    ) 

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un héroe');
  });

  test('Debe mostrar a batman y el input con el valor del querystring', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/search?q=batman'] }>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe('batman');
  });

  test('Debe mostrar el mensaje que indica que no se encontrarón datos con el parametro de busqueda', () => {
    const query = 'batman_123_yrr'
    const wrapper = mount(
      <MemoryRouter initialEntries={ [`/search?q=${query}`] }>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper.find("HeroCard").length).toBe(0);
    expect(wrapper.find(".alert.alert-danger").exists()).toBe(true);
    expect(wrapper.find(".alert.alert-danger").text().trim()).toBe(`No hay resultados para: ${query}`);
  });

  test('Debe llamar el navigate a la nueva URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/search'] }>
        <SearchScreen />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', { 
      target: { 
        name: 'searchText', 
        value:'batman' 
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault: () => {}
    });

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("?q=batman");
  })
})