import { AppRouter } from "../../routers/AppRouter";
import { mount } from 'enzyme'
import { AuthContext } from "../../auth/authContext";

describe('Pruebas en <AppRouter />', () => {
  const contextValue = {
    user: {
      logged: false
    }
  };

  test('Debe mostrar el <LoginScreen /> si el usuario no está autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Login');
  });

  test('Debe mostrar el <MarvelScreen /> si el usuario está autenticado', () => {
    const contextValue = {
      user: {
        logged: true,
        name: 'Pepe'
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBeTruthy();
  })
})