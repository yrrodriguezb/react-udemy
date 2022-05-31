import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';


describe('Pruebas en <DashboardRoutes', () => {
  const contextValue = {
    user: {
      logged: true,
      name: 'Juanito'
    }
  }

  test('Debe mostrarse correctamente', () => {
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ['/'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
  })

  test('Debe mostrarse correctamente de DC', () => {
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ['/dc'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe("Hero List - DC Comics");
  })
})