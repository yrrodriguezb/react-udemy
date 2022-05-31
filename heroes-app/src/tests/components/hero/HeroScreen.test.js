import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeroScreen } from "../../../components/hero/HeroScreen"

// Es importante que la variable inicie con mock
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate // Sobreesribimos el hook
}))


describe('Pruebas en <HeroScreen />', () => {
  test('No debe mostar el <HeroScreen /> si no hay un heroe en la URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero'] }>
        <Routes>
          <Route path='/hero/' element={ <HeroScreen /> }></Route>
          <Route path='/' element={ <h1>No Hero Page</h1> }></Route>
        </Routes>
      </MemoryRouter>
    )

    expect(wrapper.find('h1').text().trim()).toBe('No Hero Page');
  })

  test('Debe mostar el <HeroScreen /> si hay un heroe en la URL válido y existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
        <Routes>
          <Route path='/hero/:heroId/' element={ <HeroScreen /> }></Route>
          <Route path='/' element={ <h1>No Hero Page</h1> }></Route>
        </Routes>
      </MemoryRouter>
    )

    expect(wrapper.find('.row').exists()).toBe(true);
  })

  test('Debe regresar a la pantalla anterior', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-spider'] }>
        <Routes>
          <Route path='/hero/:heroId/' element={ <HeroScreen /> }></Route>
          <Route path='/' element={ <h1>No Hero Page</h1> }></Route>
        </Routes>
      </MemoryRouter>
    )

    wrapper.find('button').simulate('click');
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test('Debe mostrar el No Hero Page si no tenemos un héroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ['/hero/marvel-spider123456789'] }>
        <Routes>
          <Route path='/hero/:heroId/' element={ <HeroScreen /> }></Route>
          <Route path='/' element={ <h1>No Hero Page</h1> }></Route>
        </Routes>
      </MemoryRouter>
    )

    expect(wrapper.text()).toBe('No Hero Page');
  })
})