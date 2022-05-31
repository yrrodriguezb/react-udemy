import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { PrivateRoute } from '../../routers/PrivateRoute';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <span>No está autenticado</span>
}))


describe('Pruebas en <ProvateRoute />', () => {
  // Modificar el localStorage
  Storage.prototype.setItem = jest.fn();

  test('Debe mostrar el componnete si esta autenticado y guardar en el localstorage', () => { 
    const contextValue = {
      user: {
        name: 'Yeison Rodriguez',
        logged: true
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ['/'] }>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper.text().trim()).toBe('Private Component');
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
  })

  test('Debe bloquear el componnete si no esta autenticado', () => { 
    const contextValue = {
      user: {
        logged: false
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ['/'] }>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper.text().trim()).toBe('No está autenticado');
  })
})